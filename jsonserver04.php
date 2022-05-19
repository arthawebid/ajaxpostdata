<?php
$ps["error"] = true;
if(isset($_POST["txNIM"])){
     include_once("dbkoneksi2.php");

     $nim = $_POST["txNIM"];
     $nama = $_POST["txNAMA"];
     $talag = $_POST["txTALAG"];
     $jk = $_POST["txJK"];
     $jur = $_POST["txJUR"];
     $passs = $_POST["txPASSS"];

     $sqlINSERT = "INSERT INTO mhs(NIM, NAMA, JURUSAN, JK, TGLLAHIR, PASSCODE) VALUES
     ('".$nim."','".$nama."','".$jur."','".$jk."','".$talag."','".$passs."');";


     $hsl = mysqli_query($cnn, $sqlINSERT);
     
     $ps["error"] = !($hsl);
     
     mysqli_close($cnn);
}
echo json_encode($ps);