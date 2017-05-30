<?php

function smamo_rest_options($data){
    if(!isset($data['fields'])){
        return new WP_Error( 'smamo_no_fields', 'No fields specified', array( 'status' => 100 ) );
    }

    $r = array();
    $field_array = explode(',', $data['fields']);
    foreach($field_array as $field){
        $term = esc_attr($field);
        if(get_option($term)){$r[$term] = get_option($term);}
    }

    return $r;
}

function smamo_rest_theme_mod($data){
    if(!isset($data['fields'])){
        return new WP_Error( 'smamo_no_fields', 'No fields specified', array( 'status' => 100 ) );
    }

    $r = array();
    $field_array = explode(',', $data['fields']);
    foreach($field_array as $field){

        $term = esc_attr($field);

        if('description' == $term){$r['description'] = get_bloginfo('description');}

        elseif(get_theme_mod($term)){$r[$term] = get_theme_mod($term);}
    }

    return $r;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'options', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_options',
	) );

} );


add_action( 'rest_api_init', function () {

    register_rest_route( 'wp/v2', 'theme_mod', array(
		'methods' => 'GET',
		'callback' => 'smamo_rest_theme_mod',
	) );

} );
