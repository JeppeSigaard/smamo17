// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js');

class article extends React.Component {

    // Constructor
    constructor() {
        super();
    }

    // Render
    render() {
        return (
            <div className="text-spinner-item">
                <article className="text-spinner-article">
                    {this.props.heading != null && <h2 className="article-heading" dangerouslySetInnerHTML={{__html: this.props.heading}}></h2>}
                    {this.props.text != null && <div className="article-body" dangerouslySetInnerHTML={{__html: this.props.text}}></div>}
                </article>
            </div>
        );
    }

} module.exports = article;
