
var firebaseConfig = {
      apiKey: "AIzaSyDUJT1aDpVBH6TNDNGKTYb_6zvXYgee4jQ",
      authDomain: "kwitter-35ef7.firebaseapp.com",
      databaseURL: "https://kwitter-35ef7-default-rtdb.firebaseio.com",
      projectId: "kwitter-35ef7",
      storageBucket: "kwitter-35ef7.appspot.com",
      messagingSenderId: "926480693445",
      appId: "1:926480693445:web:82e9ff75e7e11be7a398ac"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

     function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose: "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "kwitter_room.js";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row; 

      //End code
      });});}
getData();
