let change = document.getElementById('Change');
change.addEventListener('submit', Password);

function Password(e) {
    e.preventDefault();
    let NewPassword = document.getElementById('new-password').value;
    let ConfirmPassword = document.getElementById('confirm-password').value;

    if(NewPassword == ConfirmPassword){
            const xhr = new XMLHttpRequest();
            xhr.open('POST','',true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
        xhr.onload = function(){
            console.log(this.response);
        }
            let data = {
                "newpassword" : NewPassword
            };
            xhr.send(data);
    }
    else{
        alert('Enter same Password in New Password and Confirm Password');
    }

}