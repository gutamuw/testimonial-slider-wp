<?php
// This file is generated. Do not modify it manually.
return array(
	'testimonial-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/testimonial-slider',
		'version' => '0.1.0',
		'title' => 'Testimonial Slider',
		'category' => 'widgets',
		'icon' => 'slides',
		'description' => 'Testimonial slider block for gutenberg editor.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'testimonial-slider',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'testimonials' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => 'false'
			),
			'interval' => array(
				'type' => 'number',
				'default' => 5000
			)
		)
	)
);
