class dataHandler{

    get(endpoint, options){
        return new Promise(( resolve, reject ) => {
            let request = new XMLHttpRequest(),
                parsedOptions = '';

            if(options != null){
                let i = 0;
                for (let option in options){
                    parsedOptions += (i === 0) ? '?' : '&';

                    parsedOptions += option + '=' + options[option];

                    i++;
                }

            }

            request.onload = (( response ) => {
                let json = JSON.parse( response.target.response );
                resolve( json );
            });

            request.open( 'GET', settings.api_url + 'wp/v2/' + endpoint + parsedOptions);
            request.send();
        });
    }


    get_option(options){
        return new Promise(( resolve, reject ) => {

            if(options == null) return null;

            let request = new XMLHttpRequest(),
                parsedOptions = '?fields=',
                i = 0;

            for (let option in options){
                if(options.hasOwnProperty(option)){
                    parsedOptions += (i === 0) ? '' + options[option] : ',' + options[option];
                    i++;
                }
            }

            request.onload = (( response ) => {
                let json = JSON.parse( response.target.response );
                resolve( json );
            });

            request.open( 'GET', settings.api_url + 'wp/v2/options' + parsedOptions);
            request.send();
        });

    }

    get_info(){
        return new Promise(( resolve, reject ) => {

            let request = new XMLHttpRequest();

            request.onload = (( response ) => {
                let json = JSON.parse( response.target.response );
                resolve( json );
            });

            request.open( 'GET', settings.api_url + 'wp/v2/site_info');
            request.send();
        });

    }

    get_theme_mod(options){
        return new Promise(( resolve, reject ) => {

            if(options == null) return null;

            let request = new XMLHttpRequest(),
                parsedOptions = '?fields=',
                i = 0;

            for (let option in options){
                if(options.hasOwnProperty(option)){
                    parsedOptions += (i === 0) ? '' + options[option] : ',' + options[option];
                    i++;
                }
            }

            request.onload = (( response ) => {
                let json = JSON.parse( response.target.response );
                resolve( json );
            });

            request.open( 'GET', settings.api_url + 'wp/v2/theme_mod' + parsedOptions);
            request.send();
        });

    }

} module.exports = dataHandler;
