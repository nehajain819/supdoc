function newss(){
var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                       

 var data = JSON.parse(this.responseText);
 alert(this.responseText);
 }
 }
  xhttp.open("GET", "http://10.1.7.113:4000/api/users", true);
                    xhttp.send();

xhttp.onreadystatechange = function() { 

                    console.log("this.readyState :: ", this.readyState +"this.status :: ", this.status);
                    
                    if (this.readyState == 4 && this.status == 200) {
                                    console.log('ok');  
                                    var responcestring = this.responseText;
                                    console.log(responcestring);

                        //             xmlhttp.open("GET", url, true);
                        // xmlhttp.send();

                                    alert(responcestring);
                                        document.getElementById("demo").innerHTML = responcestring;                                  
                            //cFunction(this);
                    }
                                                        
                        else
                        {
                             alert("ERR OR: AJAX request status = " + xhttp.status);
                               // console.log("ERR OR: AJAX request status = " + xmlhttp.status);
                        }
                        // xmlhttp.open("GET", url, true);
                        // xmlhttp.send();
                }
}