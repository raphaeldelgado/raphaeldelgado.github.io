<?php
    $Servidor = "localhost";
    $Usuario = "root";
    $Senha = "root";
    $banco = "sirius";
    $connection = mysqli_connect ($Servidor, $Usuario, $Senha); 
    mysqli_select_db ($connection, $banco);
    mysqli_close($connection);
?>