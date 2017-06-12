<?php

function smamo_rest_info($data){
    $r = array();

    $r['title'] = get_bloginfo('title');
    $r['tagline'] = get_bloginfo('description');

    $r['description'] = get_theme_mod('info_long_description');
    $r['description_rendered'] = apply_filters('the_content', get_theme_mod('info_long_description'));
    $r['name'] = get_theme_mod('info_name');
    $r['address'] = get_theme_mod('info_address');
    $r['post'] = get_theme_mod('info_post');
    $r['by'] = get_theme_mod('info_by');
    $r['phone'] = get_theme_mod('info_telefon');
    $r['email'] = get_theme_mod('info_email');


    return $r;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'site_info', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_info',
	) );

} );
