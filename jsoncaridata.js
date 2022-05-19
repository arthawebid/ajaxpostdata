    function caridata() {
        let nim = document.getElementById("txNIM").value
        let urltarget = new URL("http://localhost/webprog/jsonserver05.php")
        urltarget.searchParams.set('n', nim);
        console.log(urltarget)

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", urltarget);
        xmlhttp.send(); 

        xmlhttp.onload = function(){
            let tx = "Data dengan NIM "+nim+" tidak ditemukan"
            const myObj = JSON.parse(this.responseText);
            console.log(myObj["isi"].length )
            if((!myObj["error"]) && (myObj["isi"].length>0)){
                let jk = "Laki-Laki"
                if(myObj["isi"][0][3]=="P")
                    jk = "Perempuan"

                tx = "Hasil Pencarian dengan NIM "+ nim + "<br>"
                tx += " Nama : "+ myObj["isi"][0][1] + "<br>"
                tx += " Jurusan : "+ myObj["isi"][0][2] + "<br>"
                tx += " Jenis Kelamin : "+ jk + "<br>"
                tx += " Tgl Lahir : "+ myObj["isi"][0][4] + "<br>"
                tx += " Passcode : "+ myObj["isi"][0][5] + "<br>"
            }
            document.getElementById("hasil").innerHTML = tx
        }
    }