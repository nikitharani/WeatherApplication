<?php
// $file=file('worldcities.csv');

$csv = array_map("str_getcsv", file("worldcities.csv")); 
$header = array_shift($csv); 
// Seperate the header from data

$col = array_search("city", $header); 
 foreach ($csv as $row) {      
 $a[] = $row[$col]; 
}


// get the q parameter from URL
if (!empty($_REQUEST['q']))
{
$q = $_REQUEST["q"];

$hint = "";
$count = 0;

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
      $count = $count + 1;
      if ($count == 10)
      {break;}
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
}


?>