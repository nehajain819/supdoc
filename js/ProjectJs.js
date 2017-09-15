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
            console.log("this.readyState :: ", this.readyState + "this.status :: ", this.status);
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                var responcestring = xmlhttp.responseText;
                console.log(responcestring);
            }
        }
        document.getElementById('l5').style.display = 'block';
        document.getElementById('l5').innerHTML = 'Register SucessFully'
    }
    else {
        document.getElementById('l5').innerHTML = 'Please Fill The All Fields';
    }
    document.getElementById('textboxsub').value = "";
    document.getElementById('textboxsub2').value = "";
}
function hideele() {
    document.getElementById('l3').style.display = 'none';
}
function hideele1() {
    document.getElementById('l4').style.display = 'none';
    document.getElementById('l5').style.display = 'none';
}

