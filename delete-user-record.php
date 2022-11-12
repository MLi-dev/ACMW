<h1>Updating...</h1>
<?php
  $usernumber = $_REQUEST['usernumber'];
  $firstname = $_REQUEST['firstname'];
  $lastname = $_REQUEST['lastname'];
  $username = $_REQUEST['username'];
  $password = $_REQUEST['password'];
  $email = $_REQUEST['email'];
$host = "localhost";
   $user = "root";
   $pass = "root";
   $databasename = "SCUACMWusersDB";
//create connection to database
   $connection = new mysqli($host, $user, $pass, $databasename);
//check connection to database
   if (!$connection) { die("Connection failed! Here is what is wrong: " . mysqli_connect_error()); }
$sql = "DELETE FROM `$databasename`.`Users` WHERE `Users`.`UserNumber` = $usernumber";
$dosql= mysqli_query($connection, $sql) or die('Query failed: ' . mysqli_error());
?>
<h1>Done!</h1>
<a href="viewharrypotter.php">Return</a>
<?php
   //close the connection to the database
   mysqli_close($connection);
   ?>
