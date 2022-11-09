// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAM2tGYsu3gdetTytP-gmZTcSfAvVAkM38",
    authDomain: "classtest-937e4.firebaseapp.com",
    databaseURL: "https://classtest-937e4-default-rtdb.firebaseio.com",
    projectId: "classtest-937e4",
    storageBucket: "classtest-937e4.appspot.com",
    messagingSenderId: "876744311197",
    appId: "1:876744311197:web:5ecc2e23d70b9fbc826f74",
    measurementId: "G-MCHPRSQF5Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



