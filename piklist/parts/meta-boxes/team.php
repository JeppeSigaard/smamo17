<?php
/*
Title: Medarbejder info
Post type: team
Order: 2
*/

piklist('field', array(
    'type' => 'textarea',
    'label' => 'Beskrivelse',
    'field' => 'description',
    'attributes' => array(
      'rows' => 10,
      'cols' => 40,
      'class' => 'large-text'
    )
));

piklist('field', array(
    'type' => 'email',
    'label' => 'E-mail',
    'field' => 'email',
));

piklist('field', array(
    'type' => 'text',
    'label' => 'Telefon',
    'field' => 'phone',
));
