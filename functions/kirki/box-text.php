<?php

 if (class_exists('Kirki')){
    Kirki::add_section( 'box_text', array(
        'title'          => __( 'Billedebreaker' ),
        'description'    => __( 'Tilføj billledebreaker' ),
        'panel'          => '', // Not typically needed.
        'priority'       => 160,
        'capability'     => 'edit_theme_options',
        'theme_supports' => '', // Rarely needed.
    ) );


    Kirki::add_field( 'box_text', array(
        'type'        => 'textarea',
        'settings'    => 'box_text_description',
        'label'       => esc_attr__( 'Header', 'smamo' ),
        'section'     => 'box_text',
        'default'     => '',
        'priority'    => 100,
    ) );

    Kirki::add_field( 'box_text', array(
        'type'        => 'image',
        'label'       => esc_attr__( 'Logoer', 'smamo' ),
        'section'     => 'box_text',
        'settings'    => 'box_text_image',
        'priority'    => 100,
    ) );

 }
