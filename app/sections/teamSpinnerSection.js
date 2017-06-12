// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js'),
    Flickity = require('../component-parts/flickity.js'),
    Typeout = require('../component-parts/typeout.js');

class TeamSpinnerSection extends React.Component {

    // Constructor
    constructor() {
        super();

        this.flkt_top = {
            prevNextButtons : true,
            pageDots : false,
            wrapAround : true,
            initialIndex : 0,
        };

        this.flkt_middle = {
            prevNextButtons : true,
            pageDots : false,
            wrapAround : true,
            initialIndex : 1,
        };

        this.flkt_bottom = {
            prevNextButtons : true,
            pageDots : false,
            wrapAround : true,
            initialIndex : 2,
        };

        this.state = {
            heading : 'Default heading',
            content : 'default content default content',
            email : 'mail@mail.com',
            phone : '21 21 21 21',
            jsxFaces : null,
            spinnerIndex : {
                top : 0,
                middle : 1,
                bottom : 2,
            }
        };
    }

    componentDidMount(){

        Global.api.get('team').then((resp) => {
            let team = [];
            for (let member of resp){
                team.push(<div key={'face-' + member.ID} className="face-container">
                    <div className="face" style={{'backgroundImage' : 'url('+member.image+')'}}></div>
                </div>);
            }

            this.setState({jsxFaces : team, team : resp});

        });

        Global.api.get_info().then((resp) => {
            this.info = resp;

            this.setState({
                heading : this.info.title,
                content : this.info.description,
                email : this.info.email,
                phone : this.info.phone,
            });

        });

    }

    nextIndex(component, event){
        const row = component.props.row;

        console.log(_('#team .team-spinner-' + row));
    }

    unescapeHTML(html) {
        var escapeEl = document.createElement('textarea');
        escapeEl.innerHTML = html;
        return escapeEl.textContent;
    }

    removeMatch(){
        _('#team').removeClass('match');
    }

    handleSelect(c){
        let top = (c.props.name == 'team-spinner-top') ? c.state.selectedIndex : this.state.spinnerIndex.top,
            middle = (c.props.name == 'team-spinner-middle') ? c.state.selectedIndex : this.state.spinnerIndex.middle,
            bottom = (c.props.name == 'team-spinner-bottom') ? c.state.selectedIndex : this.state.spinnerIndex.bottom;

        if(top === middle && middle === bottom){
            const curElem = this.state.team[top];

            this.setState({
                spinnerIndex : { top : top, middle : middle, bottom : bottom, },
                heading : curElem.name,
                content : curElem.description,
                email : curElem.email,
                phone : curElem.phone,
            });

            setTimeout(function(){
                 _('#team').addClass('match');
            },500);
        }

        else this.setState( {
            spinnerIndex : { top : top, middle : middle, bottom : bottom, },
            heading : this.info.title,
            content : this.info.description,
            email : this.info.email,
            phone : this.info.phone,
        });
    }

    // Render
    render() {
        return (
            <section className="team-spinner-section" id="team">
                <div className="section-wrapper">
                    <div className="team-spinner-text">
                        <article>
                            <h3 className="team-spinner-text-heading"><Typeout text={this.state.heading} speed="40" /></h3>
                            <div className="team-spinner-text-content">
                                <Typeout text={this.state.content} speed="10" cursor/>
                            </div>
                            <footer>
                                {this.state.email != null && this.state.email !== '' &&
                                <a href={'mailto:'+this.state.email} className="team-spinner-email">
                                    <strong>Email:</strong>
                                    <span><Typeout text={this.state.email} speed="20"/></span>
                                </a>}
                                {this.state.phone != null && this.state.phone !== '' &&
                                <a href={'tel:'+this.state.phone} className="team-spinner-phone">
                                    <strong>Tlf:</strong>
                                    <span><Typeout text={this.state.phone} speed="20"/></span>
                                </a>}
                            </footer>
                        </article>
                        <div className="team-spinner-text-close" onClick={this.removeMatch.bind(this)}>&times;</div>
                    </div>

                    {this.state.jsxFaces != null &&
                    <div className="team-spinner">
                        <Flickity options={this.flkt_top} name="team-spinner-top" select={this.handleSelect.bind(this)}>
                            {this.state.jsxFaces}
                        </Flickity>
                        <Flickity options={this.flkt_middle} name="team-spinner-middle" select={this.handleSelect.bind(this)}>
                             {this.state.jsxFaces}
                        </Flickity>
                        <Flickity options={this.flkt_bottom} name="team-spinner-bottom" select={this.handleSelect.bind(this)}>
                             {this.state.jsxFaces}
                        </Flickity>
                    </div>}
                </div>
                {this.info != null &&
                <footer className="team-spinner-footer">
                    <div className="footer-inner">
                        <div className="footer-logo">
                            <svg className="footer-logo-monkey" viewBox="145.621 13.906 202.034 250.467"><use xlinkHref="#icon-monkey"></use></svg>
                            <span className="footer-logo-text">SMAMO</span>
                        </div>
                        <p>
                            {this.info.name}<br/>
                            {this.info.address} <br/>
                            {this.info.post + ' ' + this.info.by} <br/>
                        </p>
                        <p>
                            <a href={"mailto:" + this.info.email}>{this.info.email}</a><br/>
                            <a href={"tel:" + this.info.phone} >{this.info.phone}</a>
                        </p>
                    </div>
                </footer>}
            </section>
        );
    }

} module.exports = TeamSpinnerSection;
