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
        };

        this.state = {
            jsxArticles : null,
        }

    }

    componentDidMount(){

        Global.api.get('fp_text').then((resp) => {

            let jsxArticles = [];
            for (let article of resp){
             jsxArticles.push(<Article key={'fb-text-' + article.ID} text={article.content} heading={article.title} />);
            }

            this.setState({jsxArticles : jsxArticles});
        });

    }

    // Render
    render() {
        return (
            <section className="text-spinner-section" id="about">
                {this.state.jsxArticles != null &&
                <Flickity name="text-spinner" options={this.flktyOptions} children={this.state.jsxArticles} />}
            </section>
        );
    }

} module.exports = textSpinnerSection;
