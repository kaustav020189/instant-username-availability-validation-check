<?php

if(isset ($_GET['value']) && $_GET['value']!='')
{
    
// Connect to MySQL
// Change the username, password and hostname in the function mysql_connect as per your configuration
include_once 'dbcon.php';

connect();

    
    $value=$_GET['value'];
    
        $query2="SELECT username FROM usernames WHERE username = '$value'";

        $results2 = mysql_query($query2)
        or die(mysql_error());
          
        if(mysql_num_rows($results2)>0)
        {
            
            echo json_encode( array( "flag"=>"1" ) );
        }
        else
        {
            echo json_encode( array( "flag"=>"0" ) );
        }       
        
}
?>
