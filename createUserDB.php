<?php
$host = "localhost";
$user = "root";
$pass = "root";

//create connection to database
$connection = new mysqli($host, $user, $pass);

//check connection to database
if (!$connection) { die("Connection failed! Here is what is wrong: " . mysqli_connect_error()); }
echo "<h1>connected successfully!</h1>";

//do the SQL
$sql = "CREATE DATABASE SCUACMWusersDB";
$dosql= mysqli_query($connection, $sql);

//check if error
if ($dosql) { echo "SQL command executed successfully!"; }
  else { die("Something went wrong! Here is what is wrong: " . mysqli_error($connection)); }

//close the connection to the database
mysqli_close($connection);
?>
