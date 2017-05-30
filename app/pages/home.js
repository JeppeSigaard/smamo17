// Requires
let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),

    // Components
    Header = require('../components/header.js'),

    // Sections
    BigTextSection = require('../sections/bigTextSection.js'),
    TextSpinnerSection = require('../sections/textSpinnerSection.js'),
    BoxImageSection = require('../sections/boxImageSection.js'),
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
            </div>
        );
    }

} module.exports = HomePage;
