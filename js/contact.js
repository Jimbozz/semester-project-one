const form = document.querySelector('#form');
const nameErr = document.querySelector('#nameError');
const subjectErr = document.querySelector('#subjectError');
const emailErr = document.querySelector('#emailError');
const messageErr = document.querySelector('#messageError');

function formVal(event) {

  event.preventDefault();

  const name = document.querySelector("#your-name");
  const subject = document.querySelector("#your-subject");
  const email = document.querySelector("#your-email");
  const message = document.querySelector("#your-message");

  if(checkLength(name.value, 3) === true) {
    nameErr.style.display = "none";
    email.style.border = "";
    email.style.background = "";
  }
  else {
    nameErr.style.display = "block";
    name.style.border = "1px solid red";
    name.style.background = "#ff000030";
  }
  if(emailVal(email.value) === true) {
    emailErr.style.display = "none";
    email.style.border = "";
    email.style.background = "";
  }
  else {
    emailErr.style.display = "block";
    email.style.border = "1px solid red";
    email.style.background = "#ff000030";
  }
  if(checkLength(subject.value, 4) === true) {
    subjectErr.style.display = "none";
    subject.style.border = "";
    subject.style.background = "";
  }
  else {
    subjectErr.style.display = "block";
    subject.style.border = "1px solid red";
    subject.style.background = "#ff000030";
  }
  if(checkLength(message.value, 20) === true) {
    messageErr.style.display = "none";
    message.style.border = "";
    message.style.background = "";
  }
  else {
    messageErr.style.display = "block";
    message.style.border = "1px solid red";
    message.style.background = "#ff000030";
  }
  if(checkLength(name.value, 0) && checkLength(subject.value, 0) && emailVal(email.value) && checkLength(message.value, 20) === true) {
    
    form.onsubmit = function formSuccess() {
      form.innerHTML = `
                      <div class="success"> Your form was submitted successfully.
                      </div>
                        `
    };
  }
  else {
    return false;
  }
}

form.addEventListener("submit", formVal);




//Check length


function checkLength(value, length) {
  if(value.trim().length >= length) {
    return true
  }
  else {
    return false
  }
}


//Email val

function emailVal(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matches = regEx.test(email);
  return matches;
}


async function onSubmit(event) {
  event.preventDefault(); 
  
  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: new FormData(form)
         
    });
    const data = await response.json();
    console.log(data);

    

  } catch(error) {
    
    console.log(error);
  }
}

form.onsubmit = onSubmit;