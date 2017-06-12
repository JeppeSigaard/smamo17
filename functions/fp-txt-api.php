<?php

function smamo_rest_fp_text($data){
    $team = get_posts(array(
        'post_type' => 'fp-text',
        'posts_per_page' => -1,
    ));

    $r = array();
    foreach($team as $mb){

        $r[] = array(
            'ID' => $mb->ID,
            'title' => do_shortcode($mb->post_title),
            'content' => apply_filters('the_content',$mb->post_content),
        );
    }

    return $r;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'fp_text', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_fp_text',
	) );

} );
