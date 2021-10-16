// console.log(firebase)



function gsignin(){
    var img = document.getElementById('userimg')
    var email = document.getElementById('useremail')
    var name = document.getElementById('username')

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((res)=>{
        console.log(res)
        // console.log(res)
        var user = res.user
        img.src= user.photoUrl

        email.innerText = user.email

    })
    .catch((err)=>{
        console.log(err)
    })
    
       console.log(provider)

}