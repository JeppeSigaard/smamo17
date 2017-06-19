// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js'),


    Typeout = require('../component-parts/typeout.js');

class BoxImageSection extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            signature : '',
            boxText : '',
            boxImage : '',
            ready : false,
        }

        this.scrollHandling = false;
        this.elems = {}
    }

    handleScroll (e){

        if(this.scrollHandling) return;
        this.scrollHandling = true;

        const scrollTop = _('body').get()[0].scrollTop,
              winHeight = window.innerHeight,
              sectionStart = _('#breaker').offset().top,
              imageStart = sectionStart + _('#breaker .image-container').offset().top - winHeight,
              imageHeight = _('#breaker .image-container').height(),
              minor = scrollTop - imageStart;

        // Set ready on scroll
        if ( scrollTop + winHeight > sectionStart + (winHeight * .6) ) this.setState({ready : true});

        // abort if outside
        if (minor < -20 || minor > imageHeight + 20){this.scrollHandling = false; return;}

        let percent = Math.floor(1000 * minor / imageHeight) / 10;
        if(percent < 0) percent = 0;
        if(percent > 100) percent = 100;

        _('#breaker .image-cursor').css({width : percent + '%'});

        this.scrollHandling = false;

    }

    componentDidMount(){

        Global.api.get_theme_mod(['box_text_image','box_text_description','description']).then((resp) => {
            this.setState({
                boxImage : resp.box_text_image,
                signature : resp.description,
                boxText : resp.box_text_description,
            });
        });

        _(document).on('scroll',this.handleScroll.bind(this));
    }

    componentWIllUnmount(){
        _(document).off('scroll',this.handleScroll);
    }

    // Render
    render() {

        let image_class = 'image-container',
            text = (this.state.ready) ? this.state.boxText : '' ;
        if(this.state.boxImage == ''){ image_class += ' loading';}

        return (
            <section className="box-image-section" id="breaker">
                <div className="box">
                    <div className="box-inner">
                        <div className="box-text">
                        <Typeout speed="50" cursor text={text}/>
                        </div>
                        <div className="box-signature">{this.state.signature}</div>
                    </div>
                </div>
                <div className={image_class} >
                    <img className="image" src={this.state.boxImage}/>
                </div>
                <div className="image-border">
                    <div className="image-cursor"></div>
                </div>
            </section>
        );
    }

} module.exports = BoxImageSection;
