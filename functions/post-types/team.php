<?php

// Team
add_action( 'init', 'smamo_add_post_type_team' );
function smamo_add_post_type_team() {
	register_post_type( 'team', array(

        'menu_icon' 		 => 'dashicons-businessman',
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'team' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 21,
		'supports'           => array( 'title'),
        'labels'             => array(
            'name'               => _x( 'Team', 'post type general name', 'smamo' ),
            'singular_name'      => _x( 'Medarbejder', 'post type singular name', 'smamo' ),
            'menu_name'          => _x( 'Team', 'admin menu', 'smamo' ),
            'name_admin_bar'     => _x( 'Team', 'add new on admin bar', 'smamo' ),
            'add_new'            => _x( 'Tilføj ny ', 'medarbejder', 'smamo' ),
            'add_new_item'       => __( 'Tilføj ny', 'smamo' ),
            'new_item'           => __( 'Ny medarbejder', 'smamo' ),
            'edit_item'          => __( 'Rediger', 'smamo' ),
            'view_item'          => __( 'Se medarbejder', 'smamo' ),
            'all_items'          => __( 'Se alle', 'smamo' ),
            'search_items'       => __( 'Find medabejder', 'smamo' ),
            'parent_item_colon'  => __( 'Forældre:', 'smamo' ),
            'not_found'          => __( 'Start med at oprette en ny medarbejder.', 'smamo' ),
            'not_found_in_trash' => __( 'Papirkurven er tom.', 'smamo' ),
            ),
	   )
    );
}
