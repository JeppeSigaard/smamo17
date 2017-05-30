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

    }

    componentDidMount(){

    }

    // Render
    render() {
        return (
            <section className="text-spinner-section">
                <Flickity name="text-spinner" options={this.flktyOptions}>
                   <Article></Article>
                   <Article></Article>
                   <Article></Article>
                   <Article></Article>
                </Flickity>
            </section>
        );
    }

} module.exports = textSpinnerSection;
