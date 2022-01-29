<?php

$db = new SQLite3('../db/Measurements.db');

$par1 = json_decode($_REQUEST["param1"]);
$par2 = json_decode($_REQUEST["param2"]);
switch ($par1) {
   case "OKR_MEAS": 
      $sql = "SELECT DISTINCT OKR_Name FROM Measurements ORDER BY OKR_Name";
      break;

   case "OKR_ATTEST": 
      $sql = "SELECT DISTINCT OKR_Name FROM Attestations ORDER BY OKR_Name";
      break;

   case "OKR_ETT": 
      $sql = "SELECT DISTINCT OKR_Name FROM ETT ORDER BY OKR_Name";
      break;

   case "MEAS":
      $sql = "SELECT * FROM Measurements WHERE OKR_Name = '".$par2."' ORDER BY Date";
      break;

   case "ATTEST":
      $sql = "SELECT * FROM Attestations WHERE OKR_Name = '".$par2."' ORDER BY Date";
      break;

   case "ETT":
      $sql = "SELECT * FROM ETT WHERE OKR_Name = '".$par2."' ORDER BY DeviceName";
      break;   

   default:
      ; 
}

$res = $db->query($sql);
// print_r($res);
while ($row = $res->fetchArray()) {
   $arr[] = $row;
}

$db->close();

// if ($par1 == "MEAS" || $par1 == "ATTEST" || $par1 == "ETT") {
//    for ($i = 0; $i < count($arr); $i++) { 
//       for ($j = 0; $j < count($arr[$i]); $j++) { 
//          if ($arr[$j][$i] == "") { $arr[$j][$i] = " "; }
//       }
//    }
// }  

//echo json_decode($_REQUEST);
echo json_encode($arr);

?>