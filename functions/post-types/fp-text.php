<?php

// Logo
add_action( 'init', 'smamo_add_post_type_fptext' );
function smamo_add_post_type_fptext() {
	register_post_type( 'fp-text', array(

        'menu_icon' 		 => 'dashicons-format-aside',
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'fp-text' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 30,
		'supports'           => array( 'title', 'editor'),
        'labels'             => array(
            'name'               => _x( 'Forsidetekster', 'post type general name', 'smamo' ),
            'singular_name'      => _x( 'Forsidetekst', 'post type singular name', 'smamo' ),
            'menu_name'          => _x( 'Forsidetekster', 'admin menu', 'smamo' ),
            'name_admin_bar'     => _x( 'Forsidetekster', 'add new on admin bar', 'smamo' ),
            'add_new'            => _x( 'Tilføj ny ', 'tekst', 'smamo' ),
            'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
            'new_item'           => __( 'Ny tekst', 'smamo' ),
            'edit_item'          => __( 'Rediger', 'smamo' ),
            'view_item'          => __( 'Se tekst', 'smamo' ),
            'all_items'          => __( 'Se alle', 'smamo' ),
            'search_items'       => __( 'Find tekst', 'smamo' ),
            'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
            'not_found'          => __( 'Start med at oprette en ny tekst.', 'smamo' ),
            'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
            ),
	   )
    );
}
