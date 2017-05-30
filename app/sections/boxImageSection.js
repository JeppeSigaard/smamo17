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
        }
    }

    handleScroll (e){

        const scrollTop = _('#page-content').get()[0].scrollTop
        height = _('.box-image-section').get(0).height();
    }

    componentDidMount(){

        Global.api.get_option(['front_page_settings']).then((resp) => {
            Global.api.get('media/' + resp.front_page_settings.box_image_image[0]).then((image) => {

                this.setState({
                    boxImage : image.source_url,
                    signature : resp.front_page_settings.slogan,
                    boxText : resp.front_page_settings.box_image_text,
                });
            });

        });

        _('#page-content').on('scroll',this.handleScroll.bind(this));
    }

    componentWIllUnmount(){
         _('#page-content').off('scroll',this.handleScroll);
    }

    // Render
    render() {

        let image_class = 'image';
        if(this.state.boxImage == ''){ image_class += ' loading';}

        return (
            <section className="box-image-section">
                <div className="box">
                    <div className="box-text">
                        <Typeout speed="30" cursor text={this.state.boxText}/>
                    </div>
                    <div className="box-signature">{this.state.signature}</div>
                </div>
                <div className={image_class} style={{backgroundImage : 'url('+ this.state.boxImage +')'}}>
                    <div className="image-border">
                        <div className="image-cursor"></div>
                    </div>
                </div>
            </section>
        );
    }

} module.exports = BoxImageSection;
