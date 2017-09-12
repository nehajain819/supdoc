
function validatefun(url) {
    var a = document.getElementById('username').value;
    var b = document.getElementById('password').value
    if (a == "") {
        // document.getElementById('l3').value = 'Please Enter text';
                    document.getElementById('l3').value = 'Please Enter text';
               
    }
    if (b == "") {
        // document.getElementById('l4').value = 'Please Enter Number';
         document.getElementById('l4').value = 'Please Enter text';
    }

    if (a != "" && b != "") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        //console.log({"ProjectName":"a", "NoOfMembers":"b"});
        //console.log({"ProjectName":a, "NoOfMembers": 10});
        xmlhttp.send(JSON.stringify(
            {
                email: a,
                password: b
            }));
        $("html,body").css("cursor", "progress");
        xmlhttp.onreadystatechange = function () {

            console.log("this.readyState :: ", this.readyState + "this.status :: ", this.status);

            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                var responcestring = xmlhttp.responseText;
                console.log(responcestring);
                //alert(responcestring);
                
                $("html,body").css("cursor", "default");
                //             xmlhttp.open("GET", url, true);
                // xmlhttp.send();


                //document.getElementById("demo").innerHTML = responcestring;
                //cFunction(this);
               
                if (responcestring == "false") {
                   // alert("User is not valid");
                    function msg(){
                        document.getElementById('l5').style.display = 'block';
                 document.getElementById('l5').value = 'User is invalid';
                    }
                    msg();
                }
                else {
                      document.getElementById('l5').style.display = 'block';
                 document.getElementById('l5').value = 'Register SucessFully';
                   
                    }
                    
            }

            else {
               // alert("ERR OR: AJAX request status = " + xmlhttp.status);
                console.log("ERR OR: AJAX request status = " + xmlhttp.status);
            }
            // xmlhttp.open("GET", url, true);
            // xmlhttp.send();
           
        }
document.getElementById('sub1').href = "../html/main.html#";
       
    }
    else {
         document.getElementById('l5').value = 'Please Fill The All Fields';
    }
   document.getElementById('username').value="";
     document.getElementById('password').value="";
}

 function hideele(){
                 document.getElementById('l3').style.display = 'none';
            }
            function hideele1(){
                 document.getElementById('l4').style.display = 'none';
                  document.getElementById('l5').style.display = 'none';
            }
            // function myFunction(xmlhttp) {
            //                             var responcestring = xmlhttp.responseText;
            //                             document.getElementById("demo").innerHTML =(responcestring);
            //                             }
