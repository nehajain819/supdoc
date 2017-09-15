function validatefun(url) {
    var a = document.getElementById('textbox1').value;
    var b = document.getElementById('password1').value;
    var n = document.getElementById('password').value;
    var c = document.getElementById('username').value;
    var e = document.getElementById("elementId");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    if (a == "") {
        document.getElementById('la1').innerHTML = 'Please Enter text';
    }
    if (b == "") {
        document.getElementById('la2').innerHTML = 'Please Enter text';
    }
    if (n == "") {
        document.getElementById('la3').innerHTML = 'Please Enter text';
    }
    if (c == "") {
        document.getElementById('la4').innerHTML = 'Please Enter text';
    }
    if (value == "Team Members") {
        document.getElementById("showbar").style.visibility = "hidden";
    }
    if (a != "" && b != "" && n != "" && c != "") {
        if (b == n) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", url, true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(JSON.stringify(
                {
                    name: a,
                    email: c,
                    password: b,
                    role: value
                }));
            xmlhttp.onreadystatechange = function () {
                console.log("this.readyState :: ", this.readyState + "this.status :: ", this.status);
                if (this.readyState == 4 && this.status == 200) {
                    console.log('ok');
                    var responcestring = xmlhttp.responseText;
                    console.log(responcestring);
                }
            }
            document.getElementById('n').href = "../html/login.html";
        }
        else {
            document.getElementById('la3').innerHTML = 'Password Is Not Match';
            document.getElementById('password1').value = "";
            document.getElementById('password').value = "";
        }
    }
    else {
        document.getElementById('la5').innerHTML = 'Please Fill The Form';
        document.getElementById('textbox1').value = "";
        document.getElementById('password1').value = "";
        document.getElementById('password').value = "";
        document.getElementById('username').value = "";
    }
}