<?php
/**
 * Plugin Name: Custom Banner Shortcode
 * Description: A custom plugin for embedding a banner with dynamic content.
 * Version: 1.8.3
 * Author: Farras Pratama
 */

 function custom_banner_shortcode($atts) {
     // Extract shortcode attributes
     $atts = shortcode_atts(
         array(
             'banner_copy' => 'Default Banner Copy',
             'button_url' => 'https://coinvestasi.com/',
             'button_label' => 'Default Button Label',
         ),
         $atts,
         'custom_banner'
     );
 
     // Encode attribute values for URL
     $banner_copy = rawurlencode($atts['banner_copy']);
     $button_url = rawurlencode($atts['button_url']);
     $button_label = rawurlencode($atts['button_label']);
 
     // Build the dynamic URL
     $dynamic_url = "https://icn-dev.github.io/coinvestasi-button-shortcode/banner.html?banner_copy=$banner_copy&button_url=$button_url&button_label=$button_label";
 
     // Output the HTML with the dynamic URL
     $output = "<iframe src='$dynamic_url' style='width: 100%; height: 200px; border: none;'></iframe>";
 
     return $output;
 }
 
 // Register the shortcode
 add_shortcode('custom_banner', 'custom_banner_shortcode');
 ?>