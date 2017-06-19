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
    }

    // Render
    render() {
        return (
            <div id="page-content">
                <Header/>
                <BigTextSection/>
                <TextSpinnerSection/>
                <BoxImageSection/>
                <TeamSpinnerSection/>
                <Logosection/>
            </div>
        );
    }

} module.exports = HomePage;
