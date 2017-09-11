            
            function validatefun(url){
                var a= document.getElementById('username').value;
                var b= document.getElementById('password').value
                if(a=="")
                {
                    // document.getElementById('l3').value = 'Please Enter text';
                    alert("Please Enter text");
                }
                if(b=="")
                {
                    // document.getElementById('l4').value = 'Please Enter Number';
                    alert("Please Enter Password");
                }
                
                if(a!=""&& b!=""){
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("PUT", url, true);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                //console.log({"ProjectName":"a", "NoOfMembers":"b"});
                //console.log({"ProjectName":a, "NoOfMembers": 10});
                xmlhttp.send(JSON.stringify(
                    {
                        name:a, 
                        members:b
                    }));
$("html,body").css("cursor", "progress");
                xmlhttp.onreadystatechange = function() { 

                    console.log("this.readyState :: ", this.readyState +"this.status :: ", this.status);
                    
                    if (this.readyState == 4 && this.status == 200) {
                                    console.log('ok');  
                                    var responcestring = xmlhttp.responseText;
                                    console.log(responcestring);
                                    if(responcestring=="false")
                                    {
                                        alert("User is not valid");
                                    }
                                    else{
                                        var t = document.getElementById('sub1').href = "file:///C:/Users/IT-admin/Desktop/neha/main.html#";
                                    }
                                    $("html,body").css("cursor", "default");
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
                else{
                    alert("no");
                }
            }
            // function myFunction(xmlhttp) {
            //                             var responcestring = xmlhttp.responseText;
            //                             document.getElementById("demo").innerHTML =(responcestring);
            //                             }
            