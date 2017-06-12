<?php


add_action( "customize_register", "smamo_theme_customize_register" );
function smamo_theme_customize_register( $wp_customize ) {

    if (class_exists('Kirki')){
        $wp_customize->remove_section('themes');
        $wp_customize->remove_section('static_front_page');


        Kirki::add_field( 'siteinfo', array(
            'type'        => 'textarea',
            'settings'    => 'info_long_description',
            'label'       => esc_attr__( 'Lang beskrivelse', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 20,
        ) );


        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_name',
            'label'       => esc_attr__( 'Firmanavn', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_address',
            'label'       => esc_attr__( 'Adresse', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_post',
            'label'       => esc_attr__( 'Postnummer', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_by',
            'label'       => esc_attr__( 'By', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_email',
            'label'       => esc_attr__( 'Email', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_telefon',
            'label'       => esc_attr__( 'Telefonnummer', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_telefax',
            'label'       => esc_attr__( 'Telefax', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );

        Kirki::add_field( 'siteinfo', array(
            'type'        => 'text',
            'settings'    => 'info_cvr',
            'label'       => esc_attr__( 'CVR', 'smamo' ),
            'section'     => 'title_tagline',
            'default'     => '',
            'priority'    => 100,
        ) );
    }
}
