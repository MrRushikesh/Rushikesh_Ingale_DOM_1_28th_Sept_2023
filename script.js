let images = document.querySelectorAll('.image');
let result = document.getElementById('result');


let sum = 0;
let attempts = 0;
let couponGenerated = false;

function registerForm(){
    let loadForm = document.getElementById('loadForm');
    loadForm.style.opacity='1.0';
    loadForm.innerHTML = `
    <div class="formContainer_1">    
        <div>  
            <button onclick="closeForm()" id="closeBtn">&times;</button>
            <form action="#" method="GET" id="registrationForm">
                <div class="inputText_2">
                    <p>User Registration Form</p>   
                </div>
                <div class="inputText_1">
                    <label for="fname">Enter Your Name- <span id="fnameError" class=""></span></label>
                    <input type="text" id="fname" name="fname" placeholder="Enter Your Name"/>
                </div>

                <div class="inputText_1">
                    <label for="email">Email - <span id="emailError" class=""></span></label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email"/>
                </div>

                <div class="inputText_1">
                    <label for="uname">Username - <span id="unameError" class=""></span></label>
                    <input type="text" id="uname"  name="uname" placeholder="Enter Username"/>
                </div>

                <div class="submitBtn_1">
                    <input onclick="validation()" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    </div>          
    
    `  
 }


function validation(){
 document.getElementById('registrationForm').addEventListener('submit',function (event){
    
    let isValid = true;

    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let uname = document.getElementById('uname').value;

    sessionStorage.setItem('fname',fname);
    sessionStorage.setItem('uname',uname);


    let fnameError = document.getElementById('fnameError');
    let emailError = document.getElementById('emailError');
    let unameError = document.getElementById('unameError');

    fnameError.innerHTML = '';
    emailError.innerHTML = '';
    unameError.innerHTML = '';

    if(fname.trim() == ''){
        fnameError.innerHTML = "Required";
        fnameError.classList.add('redAlert');
        isValid = false;
    }else{
        fnameError.innerHTML = "Success";
        fnameError.classList.remove('redAlert');
        fnameError.classList.add('greenAlert');
        isValid = true;
    }

    if(!/\S+@\S+\.\S+/.test(email)){
        emailError.innerHTML = "Required"
        emailError.classList.add('redAlert');
        isValid = false;
    }else{
        emailError.innerHTML = "Success";
        emailError.classList.remove('redAlert');
        emailError.classList.add('greenAlert');
        isValid = true;
        
    }

    if(uname.trim() == ''){
        unameError.innerHTML = "Required";
        unameError.classList.add('redAlert');
        isValid = false;
    }else{
        unameError.innerHTML = "Success";
        unameError.classList.remove('redAlert');
        unameError.classList.add('greenAlert');
    }


    if(!(isValid)){
        event.preventDefault()
    }else{
        images[1].style.pointerEvents = 'auto';
        alert(`Congratulations! ${fname} You're Successfully Registered.🤗`)
    }

 })

}


function displayForm(){
    let loadForm = document.getElementById('loadForm');
    loadForm.style.opacity='1.0';
    loadForm.innerHTML = `
    <div class="formContainer_3">    
        <div>  
            <button id="closeBtn" onclick="closeForm()">&times;</button>
            <form action="#" method="GET" id="displayForm">
                <div class="inputText_3">
                    <p>User Registration Form</p>   
                </div>
                <div class="container-data">
                    <span class="container-data-span1">Your Name  :</span><span class="container-data-span2" id="first-name">${sessionStorage.getItem('fname')}</span>
                </div>

                <div class="container-data">
                    <span class="container-data-span1">Your User Name :</span><span class="container-data-span2" id="user-name">${sessionStorage.getItem('uname')}</span>
                </div>
            </form>
        </div>
    </div>

    `
}



 function closeForm(){
    let loadForm = document.getElementById('loadForm');
    loadForm.style.opacity='0.0';
 }



images[2].addEventListener('click', () => {
    if (attempts < 3) {
        const randomValue = Math.floor(Math.random() * 6) + 6;
        sum += randomValue;
        attempts++;

        if (attempts === 3 && sum <= 10) {
            alert('Try again after scoring more than 10.');
        } else if (attempts === 3 && sum > 6) {
            images[3].style.pointerEvents = 'auto';
        }
    } else {
        alert('You can only click this image three times.');
    }
});

images[3].addEventListener('click', () => {
    if (!couponGenerated) {
        const coupon = generateCoupon();
        result.innerHTML = `Congratulation you'r coupon is Here: ${coupon}`;
        couponGenerated = true;
        images[3].style.pointerEvents = 'none';
        images[2].style.pointerEvents = 'none';
        images[1].style.pointerEvents = 'none';
    } else {
        alert('You already generated a coupon.');
    }
});


function generateCoupon() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        coupon += characters.charAt(randomIndex);
    }
    return coupon;
}



