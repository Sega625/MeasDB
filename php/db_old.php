<?php
 $sql = "SELECT DISTINCT OKR_Name FROM Measurements ORDER BY OKR_Name";
 $db = new SQLite3('../db/Measurements.db');

// if (file_exists("../db/Measurements.db")){
//     echo ("OK");
// }
// else{
//     echo ("not OK");
// }
$res = $db->query($sql);
// print_r($res);
while ($row = $res->fetchArray()) {
    echo "{$row[0]} <br />";
}




// var_dump (SQLite3::version());

// foreach($result as $myarr)
// {
//   echo $myarr."<br />";
// }

$db->close();
?>