<?php
    $output["error"] = true;

    if(isset($_GET["n"])){
        include_once("dbkoneksi2.php");
        $nim = $_GET["n"];
        $sql = "SELECT NIM, NAMA, JURUSAN, JK, TGLLAHIR, PASSCODE FROM mhs WHERE NIM='".$nim."';";
        $hsl = mysqli_query($cnn, $sql);
        $output["isi"] = mysqli_fetch_all($hsl);
        $output["error"] = false;
    }
    echo json_encode($output);