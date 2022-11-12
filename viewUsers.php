<!doctype html>
<html>
<head>
<title>All SCU ACM-W Members</title>
<style type="text/css">
   table { margin: 15px auto 15px auto;}
   </style>
</head>
<body>
<h1>Update Users</h1>
Create new record:<br>
<form method="get" action="create-user-record.php">
<tr>
<th>User Number</th>
<td valign="top"><input type="text" name="usernumber"></td>
</tr>
<tr>
<th>First Name</th>
<td valign="top"><input type="text" name="firstname"></td>
</tr>
<tr>
<th>Last Name</th>
<td valign="top"><input type="text" name="lastname"></td>
</tr>
<tr>
<th>Username</th>
<td valign="top"><input type="text" name="username"></td>
</tr>
<th>Password</th>
<td valign="top"><input type="text" name="password"></td>
</tr>
<th>Email</th>
<td valign="top"><input type="text" name="email"></td>
</tr>
<input type="submit" name="Create New User!">
</form>
<hr>
   Delete record:<br>
<form method="get" action="delete-user-record.php">
<tr>
<th>User Number</th>
<td valign="top"><input type="text" name="usernumber"></td>
</tr>
<input type="submit" name="Delete User!">
</form>
<hr>
<?php
   $host = "localhost";
   $user = "root";
   $pass = "root";
   $databasename = "SCUACMWusersDB";
//create connection to database
   $connection = new mysqli($host, $user, $pass, $databasename);
//check connection to database
   if (!$connection) { die("Connection failed! Here is what is wrong: " . mysqli_connect_error()); }
$sql = "SELECT * FROM `Users`";
$dosql= mysqli_query($connection, $sql) or die('Query failed: ' . mysqli_error());
?>
<?php
   // for each row in the database, grab the episode, title, director, and year
   // and create a new form to edit the data. When you click "Edit", you'll update the database!

   while($row = mysqli_fetch_array( $dosql )) {
   echo "<table border='1'>";
   echo "<form method='get' action='editUsers.php'>";
   echo '<tr><th>User Number</th><td valign="top"><input type="text" name="usernumber" value="' . $row['UserNumber'] . '"></td><td><input type="submit" value="Edit"></tr>';

   echo '<tr><th>First Name</th><td valign="top"><input type="text" name="title" value="' . $row['FirstName'] . '"></td><td><input type="submit" value="Edit"></tr>';
 echo '<tr><th>Last Name</th><td valign="top"><input type="text" name="director" value="' . $row['LastName'] . '"></td><td><input type="submit" value="Edit"></tr>';
 echo '<tr><th>Username</th><td valign="top"><input type="text" name="year_released" value="' . $row['Username'] . '"></td><td><input type="submit" value="Edit"></tr>';
 echo '<tr><th>Password</th><td valign="top"><input type="text" name="year_released" value="' . $row['Password'] . '"></td><td><input type="submit" value="Edit"></tr>';
 echo '<tr><th>Email</th><td valign="top"><input type="text" name="year_released" value="' . $row['Email'] . '"></td><td><input type="submit" value="Edit"></tr>';

 echo "</form>";
   echo "</table>";
}
   ?>
</body>
</html>
<?php
//close the connection to the database
mysqli_close($connection);
?>
