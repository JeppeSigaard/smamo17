// Requires
let React = require( 'react' ),
    Global = require('../modules/global/global.js'),
    _ = require('../modules/underscore/underscore_main.js');

class PageHeader extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            email : null,
            phone : null,
        }
    }

    handleScroll( e ){
        if (this.debounceScroll) return;
        this.debounceScroll = true;

        let scrollTop = _('body').get()[0].scrollTop,
            winHeight = window.innerHeight,
            headerHeight =  _('#site-header .header-inner').height(),
            logo = _('.header-logo'),
            ratio = Math.floor(100 * (scrollTop / (winHeight - headerHeight))) / 100;

        if(ratio >= 1) ratio = 1;

        let scale = Math.floor(100 * ((this.logoTransform.scale - 1) * (1 - ratio) + 1)) / 100,
            translateY = Math.floor(((this.logoTransform.translateY) * (1 - ratio)));

        _('.header-logo').css({
            'transform' : 'translateY('+translateY+'px) scale('+scale+')',
        });


        this.debounceScroll = false;
    }

    setLogoTransform(){
        if(window.innerWidth > 768 ) this.logoTransform = { scale : 4, translateY : -100,};
        else if(window.innerWidth > 640 ) this.logoTransform = { scale : 3.5, translateY : -100,};
        else this.logoTransform = { scale : 3, translateY : -100,};

        this.handleScroll();
    }

    componentDidMount(){
        _(document).on('scroll', this.handleScroll.bind(this));
        _(document).on('resize', this.setLogoTransform);

        this.debounceScroll = false;
        this.fixed = false;



        this.setLogoTransform();


        _('.header-logo').css({
            'transform' : 'translate3d(0,'+this.logoTransform.translateY+'px,0) scale('+this.logoTransform.scale+')'
        });

        Global.api.get_theme_mod(['info_email','info_telefon']).then((resp) => {

            this.setState({
                email : resp.info_email,
                phone : resp.info_telefon,
            });

        });
    }

    componentWillUnmount(){
        _(document).off('scroll', this.handleScroll);
        _(document).off('resize', this.setLogoTransform);
    }

    // Render
    render() {

        return (
            <header className='page-header' id="site-header">
                <div className="header-inner">
                    <div className="header-wrap">
                        <div className="header-logo">
                            <svg className="header-logo-monkey" viewBox="145.621 13.906 202.034 250.467"><use xlinkHref="#icon-monkey"></use></svg>
                            <span className="header-logo-text">SMAMO</span>
                        </div>
                        <nav className="page-header-nav">
                            <a href={"tel:" + this.state.phone }>
                                <svg className="icon-phone" viewBox="0 0 32 32">
                                    <use xlinkHref="#icon-phone"></use>
                                </svg>
                                <span>{this.state.phone}
                            </span></a>
                            <a href={"mailto:" + this.state.email }>
                                <svg className="icon-mail" viewBox="0 0 32 32">
                                    <use xlinkHref="#icon-mail"></use>
                                </svg>
                                <span>{this.state.email}</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }

} module.exports = PageHeader;
