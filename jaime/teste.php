<?php
include "inc/database.inc";
$conn = mysqli_connect($Servidor, $Usuario, $Senha); mysqli_select_db($conn, $banco) or die ('Não foi possível conectar ao banco MySQL');
if (!$conn) {echo 'Não foi possível conectar ao banco MySQL.'; exit;}
else {echo 'Parabéns!! A conexão ao banco de dados ocorreu normalmente!.';}
mysqli_close($conn);
?>