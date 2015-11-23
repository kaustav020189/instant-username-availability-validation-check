<?php

function connect()

{
$connect = mysql_connect(<hostname>, <username>, <password>) or

die ("No connection");



//make sure our recently created database is the active one

mysql_select_db (<database_name>);

}

?>

