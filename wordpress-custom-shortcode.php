<?php
/**
 * Plugin Name: Custom Banner Shortcode
 * Description: A custom plugin for embedding a banner with dynamic content.
 * Version: 1.2
 * Author: Farras Pratama
 */

function custom_banner_shortcode($atts) {
    // Default values
    $atts = shortcode_atts(
        array(
            'banner_copy' => 'Default Banner Copy',
            'button_url' => '#',
            'button_label' => 'Default Button Label',
        ),
        $atts,
        'custom_banner'
    );

    // Generate the HTML for the iframe with dynamic content
    $iframe_html = '<iframe src="https://icn-dev.github.io/coinvestasi-button-shortcode/banner.html" width="100%" height="auto" frameborder="0"></iframe>';

    // Generate the JavaScript to update the iframe content
    $script = '<script>
                  var iframe = document.querySelector("iframe");
                  iframe.onload = function() {
                      iframe.contentWindow.postMessage({
                          bannerCopy: "' . esc_js($atts['banner_copy']) . '",
                          buttonURL: "' . esc_js($atts['button_url']) . '",
                          buttonLabel: "' . esc_js($atts['button_label']) . '"
                      }, "*");
                  };
              </script>';

    return $iframe_html . $script;
}
add_shortcode('custom_banner', 'custom_banner_shortcode');
