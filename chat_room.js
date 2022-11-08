
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC2PKxQ_kb5NTOLtDWLNVoYYb364-rwuKY",
  authDomain: "kwitter-c08fc.firebaseapp.com",
  databaseURL: "https://kwitter-c08fc-default-rtdb.firebaseio.com",
  projectId: "kwitter-c08fc",
  storageBucket: "kwitter-c08fc.appspot.com",
  messagingSenderId: "460851232000",
  appId: "1:460851232000:web:f6845aa42c646c380747e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location="chat_room.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room_name - "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });
});
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("chat_login.html");
}