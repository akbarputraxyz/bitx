<?php
add_action( 'send_headers', 'saotn_add_hsts_header' );
function saotn_add_hsts_header() {
  header( 'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload' );
}