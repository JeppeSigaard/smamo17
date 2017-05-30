// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js'),


    Typeout = require('../component-parts/typeout.js');

class BigTextSection extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            bigText : '',
        }
    }

    componentDidMount(){

        Global.api.get_theme_mod(['description']).then((resp) => {

            this.setState({bigText : resp.description});

        });

    }

    // Render
    render() {
        return (
            <section className="big-text-section full-screen">
                <div className="section-wrap">
                    <div className="slogan">
                        <Typeout key="slogan" text={this.state.bigText} speed="80" cursor/>
                    </div>
                </div>
            </section>
        );
    }

} module.exports = BigTextSection;
