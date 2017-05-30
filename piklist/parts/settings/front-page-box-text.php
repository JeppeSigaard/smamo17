<?php


/*
Title: Box Image
Setting: front_page_settings
Tab: Main
Order: 2
*/


piklist('field',array(
    'type' => 'textarea',
    'field' => 'box_image_text',
    'label' => 'Box Image tekst',
    'columns' => 8
));

piklist('field',array(
    'type' => 'file',
    'preview_size' => 'medium',
    'field' => 'box_image_image',
    'label' => 'Box Image Billede',
    'columns' => 8,
));
