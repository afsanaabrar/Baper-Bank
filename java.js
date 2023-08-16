// button
const submit=document.getElementById('submit').addEventListener('click',function(){
    // email input
 const emails=document.getElementById('login-input');
 const email=emails.value;
//  password input
const pass=document.getElementById('login-pas')
const password=pass.value;
if(email==='afrojajebu@gmail.com' && password==='secret'){
    window.location.href='index1.html';
}
else{
    alert('you are a invalide password')
}

})
