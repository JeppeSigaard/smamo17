// Requires
let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
    Global = require('../modules/global/global.js'),

    // Tools
    TextPreprocessor = require('../tools/text.js'),

    // Components
    Header = require('../components/header.js'),

    // Sections
    BigTextSection = require('../sections/bigTextSection.js'),
    TextSpinnerSection = require('../sections/textSpinnerSection.js'),
    BoxImageSection = require('../sections/boxImageSection.js'),
    Logosection = require('../sections/logoSection.js'),
    TeamSpinnerSection = require('../sections/teamSpinnerSection.js');

class HomePage extends React.Component {

    // Constructor
    constructor() {
        super();

        // Set main state
        Global.setMainState = this.parsedSetState.bind(this);
        Global.text = TextPreprocessor;
    }

    // ParsedSetState
    parsedSetState( key, value ) {
        if ( typeof key !== 'object' ) {
            this.state[ key ] = value;
            this.forceUpdate();
        } else {
            this.setState(key);
        }
    }

    componentDidMount(){



    }

    // Render
    render() {
        return (
            <div id="page-content">
                <Header setMainState={ this.parsedSetState.bind(this) }/>
                <BigTextSection setMainState={ this.parsedSetState.bind(this) }/>
                <TextSpinnerSection setMainState={ this.parsedSetState.bind(this) }/>
                <BoxImageSection setMainState={ this.parsedSetState.bind(this) }/>
                <TeamSpinnerSection setMainState={ this.parsedSetState.bind(this) }/>
                <Logosection/>
            </div>
        );
    }

} module.exports = HomePage;
