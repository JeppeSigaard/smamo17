// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js');

class LogoSection extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            jsxLogo : null,
            header : null,
            ub_header : null,
        }
    }

    componentDidMount(){

        Global.api.get('logo').then((resp) => {
            let jsxLogo = [];
            for (let logo of resp.logos ){
                jsxLogo.push(<div key={'logo-' + logo.ID } className="logo" style={{backgroundImage : 'url(' + logo.image + ')',}}></div>);

            }
            this.setState({
                jsxLogo : jsxLogo,
                header : resp.header,
                sub_header : resp.sub_header,
            });
        });

    }

    // Render
    render() {
        return (
            <section className="logo-section" id="social-proof">
                <div className="section-wrapper">
                   <header className="logo-section-header">
                       {this.state.header != null && <h3 className="logo-header" dangerouslySetInnerHTML={{__html: this.state.header}}></h3>}
                       {this.state.sub_header != null && <span className="logo-sub-header" dangerouslySetInnerHTML={{__html: this.state.sub_header}}></span>}
                   </header>
                    {this.state.jsxLogo != null && <div className="logo-section-box">
                        {this.state.jsxLogo}
                    </div>}
                </div>
            </section>
        );
    }

} module.exports = LogoSection;
