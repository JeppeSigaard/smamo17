// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js');

class PageHeader extends React.Component {

    // Constructor
    constructor() {
        super();
    }

    handleScroll( e ){
        if (this.debounceScroll) return;
        this.debounceScroll = true;

        let scrollTop = _('#page-content').get()[0].scrollTop,
            winHeight = _(window).height(),
            headerHeight =  _('#site-header').height(),
            logo = _('.header-logo'),
            ratio = Math.floor(100 * (scrollTop / (winHeight - headerHeight))) / 100;

        if(ratio >= 1) {_('#site-header').addClass('fixed'); ratio = 1;}
        else {_('#site-header').removeClass('fixed');}

        let scale = Math.floor(100 * ((this.logoTransform.scale - 1) * (1 - ratio) + 1)) / 100,
            translateY = Math.floor(((this.logoTransform.translateY) * (1 - ratio)));

        _('.header-logo').css({
            'transform' : 'translateY('+translateY+'px) scale('+scale+')',
        });


        this.debounceScroll = false;
    }

    componentDidMount(){
        _('#page-content').on('scroll', this.handleScroll.bind(this));

        this.debounceScroll = false;
        this.fixed = false;
        this.logoTransform = {
            scale : 4,
            translateY : -100,
        }

        _('.header-logo').css({
            'transform' : 'translate3d(0,'+this.logoTransform.translateY+'px,0) scale('+this.logoTransform.scale+')'
        });
    }

    componentWillUnmount(){
        _('#page-content').off('scroll', this.handleScroll);
    }

    // Render
    render() {

        return (
            <header className='page-header' id="site-header">
                <div className="header-wrap">
                    <div className="header-logo">
                        <svg className="header-logo-monkey" viewBox="145.621 13.906 202.034 250.467"><use xlinkHref="#icon-monkey"></use></svg>
                        <span className="header-logo-text">SMAMO</span>
                    </div>
                    <nav className="page-header-nav">
                    <ul>
                        <li>
                            <a href="tel:40 40 91 97">40 40 91 97</a>
                            <a href="mailto:hej@smartmonkey.dk">hej@smartmonkey.dk</a>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
        );
    }

} module.exports = PageHeader;
