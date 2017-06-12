// Requires
let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js');

class typeout extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            typed : null,
            remainder : null,
            cursor : null,
        };
    }

    animateText(t){
        if(this.animating) return;
        if(this.interv != null) clearInterval(this.interv);
        this.animating = true;

        let c = 0,
            speed = (this.props.speed != null) ? this.props.speed : 100;

        this.interv = setInterval(function(i){

            c += 1;
            if(c > t.length){
                clearInterval(this.interv);
                this.animating = false;

                this.setState({
                    typed : t,
                    remainder : null,
                    cursor : this.props.cursor
                });

                return;
            }

            this.setState({
                typed : t.substr(0,c),
                remainder : t.substr(c,t.length),
            });
        }.bind(this), speed);
    }

    componentDidMount(){
        if(this.props.text == null) return;

        this.animating = false;

        this.setState({
            typed : null,
            remainder : null,
            cursor : null,
        }, this.animateText(this.props.text));

    }

    componentWillReceiveProps(props){
        if(props.text == null) return;
        if(props.text === this.props.text) return;

        this.animating = false;

        this.setState({
            typed : null,
            remainder : null,
            cursor : null,
        }, this.animateText(props.text));

    }

    // Render
    render() {
        return (
            <span className="typeout-span">
                {this.state.typed != null &&
                <span className="typeout-typed">
                    {this.state.typed}
                </span>}
                {this.state.remainder != null &&
                <span className="typeout-remainder">
                   {this.state.remainder}
                </span>}
                {this.props.cursor != null && this.state.cursor != null &&
                <span className="typeout-cursor">_</span>}
                {this.props.cursor != null && this.state.cursor == null &&
                <span className="typeout-cursor hidden">_</span>}
            </span>
        );
    }

} module.exports = typeout;
