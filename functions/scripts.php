<?php

add_filter( 'rest_url_prefix', 'buddydev_api_slug');
function buddydev_api_slug( $slug ) {
    return 'api';
}


add_action('wp_enqueue_scripts',function(){
    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/script-min.js', null, '1.0', true );
    wp_localize_script('main', 'settings', array(
        'api_url' => get_rest_url(),
    ));
});
