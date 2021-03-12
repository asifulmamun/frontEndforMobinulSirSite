// selecting
const reg_submit = document.getElementById('submit');
const reg_username = document.register.username;
const reg_password = document.register.password;
const reg_password_2 = document.register.password_2;
const reg_email = document.register.email;
const reg_phone = document.register.phone;
const reg_address = document.register.address;

// notice
const reg_notice = document.getElementById('reg_from_notice');
var reg_notice_ul = document.createElement('ul');
var reg_notice_ul_li = document.createElement('li');
reg_notice.appendChild(reg_notice_ul);



// submit button event
reg_submit.addEventListener('click', (e) => {

    if (checkEmpty() == false) {
        e.preventDefault();
    }
});

// Checking Empty Value
function checkEmpty(){
    
    if (reg_username.value == "") {

        reg_form_notice('username');

        return false;
    }

    if (reg_password.value == "") {

        reg_form_notice('password');

        return false;
    }
}

// Notice
function reg_form_notice(event){

    // username
    if (event == "username") {

        reg_notice_ul.appendChild(reg_notice_ul_li);
        reg_notice_ul.append(reg_notice_ul_li);
              
    }

    // password
    if (event == "password") {
        reg_notice_ul.appendChild(reg_notice_ul_li);
        let reg_icon_cross = '<span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></span>';
        reg_notice_ul_li.innerHTML = `Password is required.&nbsp;&nbsp;${reg_icon_cross}`;
    }
}









// // changing value in input form
// reg_username.addEventListener('change', function(){
//     if (reg_username == "" || reg_username.value == "") {
//         // reg_form_notice();

//     }
// });


