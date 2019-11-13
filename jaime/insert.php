<?php
include "inc/database.inc";
$conn = mysqli_connect($Servidor, $Usuario, $Senha); 
mysqli_select_db($conn, $banco) or die ('Não foi possível conectar ao banco MySQL');
if (!$conn) {echo 'Não foi possível conectar ao banco MySQL.'; exit;}
else {
    $name = $_POST['inputNome'];
    $age = $_POST['inputAge'];
    $tel  = $_POST['inputTelefone'];
    $city = $_POST['inputCity'];
    $mail = $_POST['inputEmail'];
    $course = $_POST['inputCurso'];
    // $difMat = 0;
    // $difFis = 0;
    // $difQui = 0;
    // $difPor = 0;
    // $difLit = 0;
    // $difRed = 0;
    // $difGeo = 0;
    // $difHis = 0;
    // $difIng = 0;
    // $amount_dif = 0;
    // $hoursMon = 0;
    // $hoursTue = 0;
    // $hoursWed = 0;
    // $hoursThu = 0;
    // $hoursFri = 0;
    // $hoursSat = 0;
    // $hoursSun = 0;
    // $hours_week = 0;
    // $factor = 0;
    // $hoursMat = 0;
    // $hoursFis = 0;
    // $hoursQui = 0;
    // $hoursPor = 0;
    // $hoursLit = 0;
    // $hoursRed = 0;
    // $hoursGeo = 0;
    // $hoursHis = 0;
    // $hoursIng = 0;
    
    $sql = "INSERT INTO students VALUES ";
    $sql .= "(DEFAULT, '$name', '$age', '$tel', '$city', '$mail', '$course')";
    
    mysqli_query($conn,$sql) or die("Erro ao cadastrar");
    echo "Salvo com sucesso";
    mysqli_close($conn);
}
?>