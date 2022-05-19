function insertdata(){
    let nim = document.getElementById("txNIM").value
    if(!(nim=="")){
        let nama = document.getElementById("txNAMA").value
        let talag =document.getElementById("txTALAG").value
        let jk =document.getElementById("txJK").value
        let jur =document.getElementById("txJUR").value
        let pass =document.getElementById("txPASSS").value

        let dta = "txNIM="+nim+"&txNAMA="+nama+"&txTALAG="+talag+"&txJK="+jk+"&txJUR="+jur+"&txPASSS="+pass
        console.log(dta)
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "jsonserver04.php");
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dta); 
        

        xmlhttp.onload = function(){
            const myObj = JSON.parse(this.responseText);
            console.log(myObj)
            if(!(myObj["error"]))
                document.getElementById("hasil").innerHTML = "Insert Data Sukses"
            else    
                document.getElementById("hasil").innerHTML = "Insert Data Gagal"
        }
    }else{
        document.getElementById("error").innerHTML = "NIM tidak boleh kosong"
    }
}