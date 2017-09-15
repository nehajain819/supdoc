function validatefun(url) {
    var a = document.getElementById('username').value;
    var b = document.getElementById('password').value
    if (a == "") {
        document.getElementById('l3').innerHTML = 'Please Enter text';
    }
    if (b == "") {
        document.getElementById('l4').innerHTML = 'Please Enter text';
    }
    if (a != "" && b != "") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(
            {
                email: a,
                password: b
            }));
        $("html,body").css("cursor", "progress");
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                 var responcestring = xmlhttp.responseText;
                var json = JSON.parse(responcestring);
                localStorage.setItem("role", json.role);
                $("html,body").css("cursor", "default");
                console.log(json);
    
                if (json == false) {
                    document.getElementById('l5').style.display.fixed = 'block';
                   document.getElementById('l5').innerHTML='Invalid User';
                }
                else {
                    window.location = "../html/supdoc.html";
                }
            }
        }
    }
    else {
        document.getElementById('l5').innerHTML = 'Please Fill The All Fields';
    }
}
function hideele() {
    document.getElementById('l3').style.display.fixed = 'none';
}
function hideele1() {
    document.getElementById('l4').style.display.fixed = 'none';
    document.getElementById('l5').style.display.fixed = 'none';
}

