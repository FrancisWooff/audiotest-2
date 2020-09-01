<!doctype html>
<html lang="en">
<head>
<title>Audio test processing</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="audtest.css">
</head>
<body>
<main>

<?php
$name=$_POST[("name")];
$lvla=$_POST[("ares")];
$lvlb=$_POST[("bres")];
$lvlc=$_POST[("cres")];
$mail="you@edu.salford.ac.uk";

echo "<p>Thanks ".$name."</p><p>Your results have been sent to name</p><p>Slider A ".$lvla."</p><p>Slider B ".$lvlb."</p><p>Slider C ".$lvlc."</p>";

mail($mail,"Audio Test Results P2 ".$name,"Slider A ".$lvla." Slider B ".$lvlb." Slider C".$lvlc);
?>

<a href="index.html">Return to start of test</a>

</main>
</body>
</html>