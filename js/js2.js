
            function validatefun(url){
                    


                var a= document.getElementById('textbox1').value;
                 var b= document.getElementById('password1').value;
                 var n = document.getElementById('password').value;
                  var c= document.getElementById('username').value;

                var e = document.getElementById("elementId");
                var value = e.options[e.selectedIndex].value;
                var text = e.options[e.selectedIndex].text;


                if(a=="")
                {
                    document.getElementById('l3').value = 'Please Enter text';
                    alert("enter value");
                }
                if(b=="")
                {
                    document.getElementById('l3').value = 'Please Enter text';
                    alert("enter value");
                }
                 if(n=="")
                {
                    document.getElementById('l3').value = 'Please Enter text';
                    alert("enter value");
                }
                 if(c=="")
                {
                    document.getElementById('l3').value = 'Please Enter text';
                    alert("enter value");
                }
                
                if(value=="Team Members"){
                    document.getElementById("showbar").style.visibility = "hidden"; 
                }
                if(a!=""&& b!=""&& n!="" && c!=""){
                if(b==n)
                {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", url, true);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                //console.log({"ProjectName":"a", "NoOfMembers":"b"});
                //console.log({"ProjectName":a, "NoOfMembers": 10});
                xmlhttp.send(JSON.stringify(
                    {
                        name:a, 
                        email:c,
                        password:b,
                        role:value
                    }));

                xmlhttp.onreadystatechange = function() { 

                    console.log("this.readyState :: ", this.readyState +"this.status :: ", this.status);
                    
                    if (this.readyState == 4 && this.status == 200) {
                                    console.log('ok');  
                                    var responcestring = xmlhttp.responseText;
                                    console.log(responcestring);

                        //             xmlhttp.open("GET", url, true);
                        // xmlhttp.send();

                                    
                                        document.getElementById("demo").innerHTML = responcestring;                                  
                            //cFunction(this);
                    }
                                                        
                        else
                        {
                             alert("ERR OR: AJAX request status = " + xmlhttp.status);
                               // console.log("ERR OR: AJAX request status = " + xmlhttp.status);
                        }
                        // xmlhttp.open("GET", url, true);
                        // xmlhttp.send();
                }
            }
            // function myFunction(xmlhttp) {
            //                             var responcestring = xmlhttp.responseText;
            //                             document.getElementById("demo").innerHTML =(responcestring);
            //                             }

            else{
                document.getElementById('error').value = 'Please Enter text';
                alert("password and confirm password are not match");
            }
                }
                else{
                    alert("please fill full form");
                }
            }
            function drop(){
                 var e = document.getElementById("elementId");
                var value = e.options[e.selectedIndex].value;
                var text = e.options[e.selectedIndex].text;

                if(value=="Team Members"){
                    document.getElementById("showbar").style.display = "none"; 
                }
            }