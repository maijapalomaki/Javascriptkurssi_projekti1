
var myFunc = function() {
    
    var hours = [];
    var newHours = [];
    try {
        newHours = JSON.parse(window.localStorage.getItem('Hours'));
        if( newHours == null)
            newHours = hours;
    } catch(ex) {
        console.log("something wrong");
        newHours = hours; 
    }
    var workHour = document.getElementById('textInput').value;
    newHours.push(workHour);           
    window.localStorage.setItem('Hours', JSON.stringify(newHours));
    localStorage.getItem('Hours');
     }

     var Date = function() { 
         var dates = [];
         var newdates= [];
      try {
         newdates = JSON.parse(window.localStorage.getItem('datekey'));
         if(newdates == null)
         newdates = dates;
     } catch(ex) {
         console.log("Yep");
     }
     var workdate = document.getElementById('newDate').value;
     newdates.push(workdate);
     window.localStorage.setItem('datekey', JSON.stringify(newdates));
     output.innerHTmL = window.localStorage.getItem('datekey');
     }  
     
    
      
  


var Comments = function() {

      var com = [];
         var comments= [];
      try {
         comments = JSON.parse(window.localStorage.getItem('comments'));
         if(comments == null)
         comments = com;
     } catch(ex) {
         console.log("Yep");
     }
  
       var message = document.getElementById('comments').value;
       comments.push(message);

       window.localStorage.setItem('comments', JSON.stringify(comments));
       output.innerHTml = window.localStorage.getItem('comments');
   }    
   
   
     
var object = function()
{
var workingDay = [];

time =JSON.parse(localStorage.getItem("Hours"));
dates = JSON.parse(localStorage.getItem("datekey"));
message =JSON.parse(localStorage.getItem("comments"));


workingDay ="The three last stored dates are:  "+"<br>"+"1."+ time[0]+" hours"+"/"+dates[0]+"/"+message[0]+"<br>"+"     2."+time[1]+" hours"+"/"+dates[1]+"/"+message[1]+"<br>"+   "3."+time[2]+" hours"+"/"+dates[2]+"/"+message[2]+""; 

localStorage.setItem("workingDay", JSON.stringify(workingDay));

var newWork = JSON.parse(localStorage.getItem(workingDay));
  
}


function pallo() {
  var x = JSON.parse(localStorage.getItem("workingDay"));
  demo = document.getElementById("demo").innerHTML = x;
  

 demo.innerHTML = ":"+x;
}



 var Month = function() {
      var data = JSON.parse(localStorage.getItem("Hours"));
      var total = 0;
      var i;
      for (i =0; i<data.length; i++) {
          total+= parseInt(data[i]);

          total_Hour = document.getElementById("this");
          total_Hour.innerHTML = "The total amount of hours given:"+total;
      }
          
}  

var count = function(total) {
	var counter = [];
    var countSal = [];
    try {
      countSal = JSON.parse(window.localStorage.getItem('count'));
        if( countSal == null)
            countSal = counter;
		
    } catch(ex) {
        console.log("something wrong");
        countSal = counter;
    }
    var c_work = document.getElementById('count').value;
    countSal.push(c_work);        
    window.localStorage.setItem('count', JSON.stringify(countSal));
    localStorage.getItem('count');
	
	}





var dude = function() {
	

var data = JSON.parse(localStorage.getItem("Hours"));
      var newtotal = 0;
      var i;
      for (i =0; i<data.length; i++) {
          newtotal+= parseInt(data[i]);


var money = JSON.parse(localStorage.getItem("count"));
      var euro = 0;
      var j;
      for (j =0; j<money.length; j++) {
		 euro+= parseInt(money[j]);
	salary_ = newtotal*euro;	  

 count_mon = document.getElementById("sala");
 count_mon.innerHTML = "the total salary is:" +euro*newtotal;



	  }

	  }


}



















































