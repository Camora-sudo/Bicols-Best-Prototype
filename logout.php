<?php

// basta delete all cookies
unset($_COOKIE['role']);


$URL = '/Bicols-Best-Prototype';
header("Location: $URL/index.html");
?>