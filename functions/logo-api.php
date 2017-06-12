<?php

function smamo_rest_logo($data){
    $team = get_posts(array(
        'post_type' => 'logo',
        'posts_per_page' => -1,
    ));

    $r = array();
    foreach($team as $mb){

        $r['logos'][] = array(
            'ID' => $mb->ID,
            'image' => wp_get_attachment_url(get_post_meta($mb->ID,'image', true)),
        );
    }

    $options = get_option('logo_settings');
    $r['header'] = (isset($options['logo_header'])) ? do_shortcode($options['logo_header']) : '';
    $r['sub_header'] = (isset($options['logo_sub_header'])) ? do_shortcode($options['logo_sub_header']) : '';

    return $r;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'logo', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_logo',
	) );

} );
