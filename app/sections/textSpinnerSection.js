// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js'),
    Flickity = require('../component-parts/flickity.js'),
    Article = require('../component-parts/textSpinnerArticle.js');

class textSpinnerSection extends React.Component {

    // Constructor
    constructor() {
        super();

        this.flktyOptions = {
            wrapAround : true,
            contain: false,
            dragThreshold: 10,
        };

        this.state = {
            jsxArticles : null,
            ready : false,
        }

    }

     handleScroll (e){

        if(this.scrollHandling) return;
        this.scrollHandling = true;

        const scrollTop = _('body').get()[0].scrollTop,
              winHeight = window.innerHeight,
              sectionStart = _('#about').offset().top;

        // Set ready on scroll
        if ( scrollTop + winHeight > sectionStart + (winHeight * .6) ) this.setState({ready : true});

        this.scrollHandling = false;

    }

    componentDidMount(){

        Global.api.get('fp_text').then((resp) => {

            let jsxArticles = [];
            for (let article of resp){
             jsxArticles.push(<Article key={'fb-text-' + article.ID} text={article.content} heading={article.title} />);
            }

            this.setState({jsxArticles : jsxArticles});
        });

        _(document).on('scroll',this.handleScroll.bind(this));
    }

    componentWIllUnmount(){
        _(document).off('scroll',this.handleScroll);
    }


    // Render
    render() {

        let className = 'text-spinner-section';
        if(this.state.ready) className += ' ready';

        return (
            <section className={className} id="about">
                {this.state.jsxArticles != null &&
                <Flickity name="text-spinner" options={this.flktyOptions} children={this.state.jsxArticles} />}
            </section>
        );
    }

} module.exports = textSpinnerSection;
