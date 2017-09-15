function validatefun(url) {
    var a = document.getElementById('textboxsub').value;
    var b = document.getElementById('textboxsub2').value
    if (a == "") {
        document.getElementById('l3').innerHTML = 'Please Enter text';
    }
    if (b == "") {
        document.getElementById('l4').innerHTML = 'Please Enter Number';
    }
    else {
        if (isNaN(b)) {
            document.getElementById('l4').innerHTML = 'It is not number Please Enter The Number';
        }
    }
    if (a != "" && b != "") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(
            {
                name: a,
                members: b
            }));
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               
                var responcestring = xmlhttp.responseText;
               
            }
        }
        document.getElementById('l5').style.display.fixed = 'block';
        document.getElementById('l5').innerHTML = 'Register SucessFully'
    }
    else {
        document.getElementById('l5').innerHTML = 'Please Fill The All Fields';
         document.getElementById('textboxsub').value = "";
    document.getElementById('textboxsub2').value = "";
    }
   
}
function hideele() {
    document.getElementById('l3').style.display.fixed= '';
}
function hideele1() {
    document.getElementById('l4').style.display.fixed = '';
    document.getElementById('l5').style.display.fixed = '';
}

