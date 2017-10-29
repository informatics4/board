var five = require("johnny-five");
const firebase = require('firebase')

var board = new five.Board();

var config = {
  apiKey: "AIzaSyBHHXfc9-TGQqGBoHYzT5pVe1lT13bBCLg",
  authDomain: "fourthyear-d5634.firebaseapp.com",
  databaseURL: "https://fourthyear-d5634.firebaseio.com",
  projectId: "fourthyear-d5634",
  storageBucket: "fourthyear-d5634.appspot.com",
  messagingSenderId: "127657070211"
};

var app = firebase.initializeApp(config)

var database  = firebase.database();

var ref = database.ref('lock/');
board.on("ready", function() {
  ref.on('value', function(snapshot) {
    snapshot.forEach(function(childshot){
      swithLock(childshot.val().room,childshot.val().action)
    })
  });
});

function swithLock(room,action){
  // console.log('Room : '+room+" Action : "+action)
    var led = new five.Led(room);
    if(action != 'lock'){
      led.on()
    }else{
      led.off()
    }

}