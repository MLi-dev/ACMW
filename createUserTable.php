<?php
$host = "localhost";
$user = "root";
$pass = "root";
$database = "SCUACMWusersDB";

//create connection to database
$connection = new mysqli($host, $user, $pass, $database);

//check connection to database
if (!$connection) { die("Connection failed! Here is what is wrong: " . mysqli_connect_error()); }

//do the SQL
$sql = "CREATE TABLE `SCUACMWusersDB`.`Users` (`UserNumber` TINYINT NOT NULL , `FirstName` TINYTEXT NOT NULL , `LastName` TINYTEXT NOT NULL , `Username` varchar(255) NOT NULL , `Password` varchar(255) NOT NULL , `Email` varchar(319) NOT NULL , PRIMARY KEY (`UserNumber`)) ENGINE = InnoDB;";
$dosql = mysqli_query($connection, $sql);

//check if error
if ($dosql) { echo "SQL command executed successfully!"; }
 else { die("Something went wrong! Here is what is wrong: " . mysqli_error($connection)); }

//close the connection to the database
mysqli_close($connection);
?>
