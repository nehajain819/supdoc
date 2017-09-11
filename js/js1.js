            
            function validatefun(url){
                var a= document.getElementById('textboxsub').value;
                var b= document.getElementById('textboxsub2').value
                if(a=="")
                {
                    document.getElementById('l3').value = 'Please Enter text';
                }
                if(b=="")
                {
                    document.getElementById('l4').value = 'Please Enter Number';
                }
                else{
                    if(isNaN(b)){
	                    document.getElementById('l4').value = 'It is not number Please Enter The Number';
                                }
                }
                if(a!=""&& b!=""){
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", url, true);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                //console.log({"ProjectName":"a", "NoOfMembers":"b"});
                //console.log({"ProjectName":a, "NoOfMembers": 10});
                xmlhttp.send(JSON.stringify(
                    {
                        name:a, 
                        members:b
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
                else{
                    alert("Please feel form")
                }
            }
            // function myFunction(xmlhttp) {
            //                             var responcestring = xmlhttp.responseText;
            //                             document.getElementById("demo").innerHTML =(responcestring);
            //                             }
        