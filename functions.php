<?php

get_functions_part(array(
    'scripts',
    'piklist',
    'options-api',
    'team-api',
    'info-api',
    'logo-api',
    'fp-txt-api',
    'strong-shortcode'
));

get_functions_part(array(
    'team',
    'fp-text',
    'logo',
),'post-types');

get_functions_part(array(
    'siteinfo',
    'box-text',
),'kirki');

// get_functions_part([$filnavn],[$undermappe]);
function smamo_include_functions_part_if_exists($fetch, $in = false){
    if ($in){$fetch = $in . '/' . $fetch;}
    $fetch = get_template_directory() . '/functions/' . $fetch . '.php';
    if(file_exists($fetch)){include_once $fetch;}
}

function get_functions_part($fetch, $in = false){
    if(is_array($fetch)){foreach($fetch as $p){smamo_include_functions_part_if_exists($p,$in);}}
    else{smamo_include_functions_part_if_exists($fetch,$in);}
}
