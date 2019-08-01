<?php

function url_get_contents($Url) {
  if (!function_exists('curl_init')){ 
    die('CURL is not installed!');
  }
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $Url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $output = curl_exec($ch);
  curl_close($ch);
  return $output;
}
//print_r();
if($_SERVER['REQUEST_URI'] === '/api')
  echo url_get_contents('https://www.sknt.ru/job/frontend/data.json');
else
  include 'index.html';