<?php

function smamo_rest_team($data){
    $team = get_posts(array(
        'post_type' => 'team',
        'posts_per_page' => -1,
    ));

    $r = array();
    foreach($team as $mb){
        $r[] = array(
            'ID' => $mb->ID,
            'name' => $mb->post_title, //get_post_meta($mb->ID,'name', true),
            'email' => get_post_meta($mb->ID,'email', true),
            'phone' => get_post_meta($mb->ID,'phone', true),
            'description' => get_post_meta($mb->ID,'description', true),
            'image' =>  wp_get_attachment_url(get_post_meta($mb->ID,'image', true)),
        );
    }

    return $r;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'team', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_team',
	) );

} );
