<?php

add_filter('piklist_admin_pages', 'piklist_theme_setting_pages');
function piklist_theme_setting_pages($pages){
    $pages[] = array(
        'page_title' => __('Indstillinger for Forside'),
        'menu_title' => __('Forside', 'piklist'),
        'sub_menu' => 'themes.php',
        'capability' => 'manage_options',
        'menu_slug' => 'front_page_settings',
        'setting' => 'front_page_settings',
        'menu_icon' => plugins_url('piklist/parts/img/piklist-icon.png'),
        'page_icon' => plugins_url('piklist/parts/img/piklist-page-icon-32.png'),
        'single_line' => true,
        'default_tab' => 'Main',
        'save_text' => 'Gem ændringer',
    );

    return $pages;
}

