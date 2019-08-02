document.querySelector("#feed").addEventListener("submit",function(e){
    e.preventDefault()
    submitProduct()
})

var firebaseConfig = {
    apiKey: "AIzaSyCQabVa-ZbrtpMLBa0yQq32KgsZoB8LrVQ",
    authDomain: "projectpatedesable1.firebaseapp.com",
    databaseURL: "https://projectpatedesable1.firebaseio.com",
    projectId: "projectpatedesable1",
    storageBucket: "",
    messagingSenderId: "268033189633",
    appId: "1:268033189633:web:6ed6f4d9bce65f7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // 1/inport firebase labraries and apikey done ! 

  let database = firebase.database()

function submitProduct(){
  
     // 3/ set a reference
  
    let ref = database.ref("email")
    
        // 4/ prepare data 
            let data= {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value
                }
    
        //5/ upload data (push/set)
    
        ref.push(data)
  }
  