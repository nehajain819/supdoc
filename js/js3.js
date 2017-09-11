
            
            function dropdownfun(){
                            
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                       

 var data = JSON.parse(this.responseText);
                        
                        for(var i=0; i<= data.length-2; i++)
                        {
                          var n = data[i].name;
                           var n1 = data[i]._id;
                            console.log(n1);
                           if(n!=""){
                           

                            var dd=document.getElementById("elementId1")
                            var aryOptions=dd.getElementsByTagName('option');
                            var opt=document.createElement('option');
                            opt.appendChild(document.createTextNode(n));
                            opt.value=n1;
                            dd.appendChild(opt);
                            dd.selectedIndex=opt.value


                            var dropdownlistbox = document.getElementById("elementId1");
                           }
 
                        }
                        }
                    }
                    xhttp.open("GET", "http://10.1.7.113:4000/api/users", true);
                    xhttp.send();
                                    
                                
            var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                       

 var data = JSON.parse(this.responseText);
                       //alert(data[1].name);
                        for(var i=1; i<= data.length-1; i++)
                        {
                           n = data[i].name; 
                           var n0 = data[i]._id;
                           //alert(n0);
                           if(n!=""){
                           

                            var dd=document.getElementById("elementId2")
                            var aryOptions=dd.getElementsByTagName('option');
                            var opt=document.createElement('option');
                            opt.appendChild(document.createTextNode(n));
                            opt.value=n0;
                            //alert(opt.value);
                            dd.appendChild(opt);
                            dd.selectedIndex=opt.value


                        var dropdownlistbox = document.getElementById("elementId2");
                           }
 
                        }
                        }
                    }
                    xhttp.open("GET", "http://10.1.7.113:4000/api/projects", true);
                    xhttp.send();


            }

function validatefun(){
                var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  
  xhttp.open("POST", "http://10.1.7.113:4000/api/supdocs", true);
  xhttp.setRequestHeader("Content-type", "application/json");
var obj=document.getElementById("elementId1").options[document.getElementById("elementId1").selectedIndex];
//alert(obj.value);
var ans1 = obj.value;

var obj0=document.getElementById("elementId2").options[document.getElementById("elementId2").selectedIndex];
//alert(obj.value);
var ans0 = obj0.value;
alert(ans0);
var ans2 = obj.name;
//alert(ans2);
g = new Date();

var current1 = {
    _date : new Date()
};



// var current = {
//              _date= g
//             //   task = {
//             //         //
                    
//             //     }
// }


var nam8 = document.getElementById("txt2").value;
var nam9 = document.getElementById("txt1").value;
   xhttp.send(JSON.stringify(
                    {
                       userid:ans1,
                      timestamp: Date(),
                      modifiedBy:ans1,
                      Current: {
                          _date: new Date(),
                          task: {
                              name: nam8,
                              projecid: ans0
                          }
                      },
                      History: {
                          _date: new Date(),
                          task: {
                              name: nam9, 
                              projecid:ans0
                          }
                      }
                    }));

                    
             //var h = Date();
             //alert(h);

xhttp.onreadystatechange = function() { 

                    console.log("this.readyState :: ", this.readyState +"this.status :: ", this.status);
                    
                    if (this.readyState == 4 && this.status == 200) {
                                    console.log('ok');  
                                    var responcestring = this.responseText;
                                    console.log(responcestring);

                        //             xmlhttp.open("GET", url, true);
                        // xmlhttp.send();

                                    
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



       