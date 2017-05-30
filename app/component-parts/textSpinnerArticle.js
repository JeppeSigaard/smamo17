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
                    <h2 className="article-heading">Lorem ipsum <strong>dolor sit</strong> amet, consectetu? </h2>
                    <div className="article-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid, voluptates consectetur ab incidunt, sed numquam doloribus hic aperiam nisi repellat quod quidem sapiente porro ipsum quae rerum a magnam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid, voluptates consectetur ab incidunt, sed numquam doloribus hic aperiam nisi repellat quod quidem sapiente porro ipsum quae rerum a magnam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid, voluptates consectetur ab incidunt, sed numquam doloribus hic aperiam nisi repellat quod quidem sapiente porro ipsum quae rerum a magnam.</p>
                    </div>
                </article>
            </div>
        );
    }

} module.exports = article;
