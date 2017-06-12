<?php

// Logo
add_action( 'init', 'smamo_add_post_type_logo' );
function smamo_add_post_type_logo() {
	register_post_type( 'logo', array(

        'menu_icon' 		 => 'dashicons-images-alt',
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'logo' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 22,
		'supports'           => array( 'title'),
        'labels'             => array(
            'name'               => _x( 'Logoer', 'post type general name', 'smamo' ),
            'singular_name'      => _x( 'Logo', 'post type singular name', 'smamo' ),
            'menu_name'          => _x( 'Logoer', 'admin menu', 'smamo' ),
            'name_admin_bar'     => _x( 'Logoer', 'add new on admin bar', 'smamo' ),
            'add_new'            => _x( 'Tilføj ny ', 'logo', 'smamo' ),
            'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
            'new_item'           => __( 'Ny logo', 'smamo' ),
            'edit_item'          => __( 'Rediger', 'smamo' ),
            'view_item'          => __( 'Se logo', 'smamo' ),
            'all_items'          => __( 'Se alle', 'smamo' ),
            'search_items'       => __( 'Find logo', 'smamo' ),
            'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
            'not_found'          => __( 'Start med at oprette et nyt logo.', 'smamo' ),
            'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
            ),
	   )
    );
}
