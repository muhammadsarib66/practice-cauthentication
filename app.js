// console.log(firebase)



function gsignin(){
    var img = document.getElementById('userimg')
    var email = document.getElementById('useremail')
    var name = document.getElementById('username')

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((res)=>{
        console.log(res.user)
        console.log(res.user.email)
        console.log(res.user.displayName)
        console.log(res.user.photoURL)
        // console.log(res)
        var user = res.user
        img.src= user.photoURL
        name.innerText = user.displayName
        email.innerText = user.email

    })
    .catch((err)=>{
        console.log(err)
    })
    
       console.log(provider)

}
