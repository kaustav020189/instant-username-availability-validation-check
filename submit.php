<?php

if(isset ($_POST['value']) && $_POST['value']!='')
{
    
// Connect to MySQL
// Change the username, password and hostname in the function mysql_connect as per your configuration
include_once 'dbcon.php';

connect();

    
    $value=  array();
    parse_str($_POST['value'], $value);
    
    $username = $value['username'];
    $name = $value['name'];
    $address = $value['address'];
    $email = $value['email'];
    
    $query="INSERT INTO usernames(username,name,address,email) 
            VALUES('".$username."','".$name."','".$address."','".$email."')";

        $results = mysql_query($query)
        or die(mysql_error());
          
        if(mysql_affected_rows()>0)
        {            
            echo "Successfully updated";
        }
        else
        {
            echo '<span style='.'"color:red"'.'>Please try again...</span>';
        }
       
}
?>
