
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
                    document.getElementById('la1').value = 'Please Enter text';
                    //alert("enter value");
                }
                if(b=="")
                {
                    document.getElementById('la2').value = 'Please Enter text';
                   // alert("enter value");
                }
                 if(n=="")
                {
                    document.getElementById('la3').value = 'Please Enter text';
                  //  alert("enter value");
                }
                 if(c=="")
                {
                    document.getElementById('la4').value = 'Please Enter text';
                   // alert("enter value");
                }
                
                if(value=="Team Members"){
                    document.getElementById("showbar").style.visibility = "hidden"; 
                }
                // document.getElementById('nb').onclick = '../html/login.html'; 
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

                                    
                                       // document.getElementById("demo").innerHTML = responcestring;                                  
                            //cFunction(this);
                            
                    }
                                                        
                        else
                        {
                             //alert("ERR OR: AJAX request status = " + xmlhttp.status);
                               // console.log("ERR OR: AJAX request status = " + xmlhttp.status);
                        }
                        // xmlhttp.open("GET", url, true);
                        // xmlhttp.send();
                        
                }
                 document.getElementById('n').href = "../html/login.html";  
                //  document.getElementById('n').href = "../html/login.html"; 
            }
            // function myFunction(xmlhttp) {
            //                             var responcestring = xmlhttp.responseText;
            //                             document.getElementById("demo").innerHTML =(responcestring);
            //                             }

            else{
                document.getElementById('la3').value = 'Password Is Not Match';
               // alert("password and confirm password are not match");
            }
                }
                else{
                   document.getElementById('la5').value = 'Please Fill The Form';
                }
                document.getElementById('textbox1').value="";
               document.getElementById('password1').value="";
                document.getElementById('password').value="";
                   document.getElementById('username').value="";
             
            }
            function navg(){
               
            }
            function drop(){
                 var e = document.getElementById("elementId");
                var value = e.options[e.selectedIndex].value;
                var text = e.options[e.selectedIndex].text;

                if(value=="Team Members"){
                    document.getElementById("showbar").style.display = "none"; 
                }
            }