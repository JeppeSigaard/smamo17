<?php

add_filter('piklist_admin_pages', 'smamo_logo_page');
function smamo_logo_page($pages){
    $pages[] = array(
        'page_title' => __('Indstillinger for Logoer'),
        'menu_title' => __('Indstillinger', 'piklist'),
        'sub_menu' => 'edit.php?post_type=logo',
        'capability' => 'manage_options',
        'menu_slug' => 'logo_settings',
        'setting' => 'logo_settings',
        'single_line' => true,
        'default_tab' => 'Main',
        'save_text' => 'Gem ændringer',
    );

    return $pages;
}

