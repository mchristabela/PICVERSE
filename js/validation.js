const registerForm = document.getElementById("registrationForm");

registerForm.addEventListener("submit", function(event){
    event.preventDefault();

    document.getElementById('emailError').textContent = '';
    document.getElementById('titleError').textContent = '';
    document.getElementById('descriptionError').textContent = '';
    document.getElementById('tagsError').textContent = '';
    document.getElementById('uploadError').textContent = '';
    document.getElementById('AIGeneratedError').textContent = '';

    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const tags = document.getElementById("tags").value.trim(); 
    const fileInput = document.getElementById("fileInput");
    const radioYes = document.getElementById("AIGeneratedYes").checked;
    const radioNo = document.getElementById("AIGeneratedNo").checked;

    let isValid = true;

    if(email == ''){
        isValid = false;
        document.getElementById('emailError').textContent = "Email is required";
    }
    else if(!email.includes("@") || !email.includes(".")){
        isValid = false;
        document.getElementById('emailError').textContent = "Please enter a valid email address";
    }

    if(title == ''){
        isValid = false;
        document.getElementById('titleError').textContent = "Title is required";
    }

    if(description == ''){
        isValid = false;
        document.getElementById('descriptionError').textContent = "Description is required";
    }

    if(tags == ''){
        isValid = false;
        document.getElementById('tagsError').textContent = "Tags are required";
    }

    if(!fileInput.files || fileInput.files.length === 0){
        isValid = false;
        document.getElementById('uploadError').textContent = "Please upload an artwork file";
    }

    if(!radioYes && !radioNo){
        isValid = false;
        document.getElementById('AIGeneratedError').textContent = "Please select whether your art is AI generated";
    }

    if(isValid){
        alert("Form submitted successfully!");
    }
});

const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const previewImage = document.getElementById('previewImage');
const removeFileBtn = document.getElementById('removeFile');
const uploadError = document.getElementById('uploadError');

fileInput.addEventListener('change', showFilePreview);

removeFileBtn.addEventListener('click', clearFilePreview);

function showFilePreview(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        displayFile(selectedFile);
    }
}

function displayFile(file) {
    uploadError.textContent = '';

    fileName.textContent = file.name;

    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        previewImage.src = event.target.result;
        filePreview.classList.add('show');
    };
    fileReader.readAsDataURL(file);
}

function clearFilePreview() {
    fileInput.value = '';
    filePreview.classList.remove('show');
    previewImage.src = '';
    fileName.textContent = '';
    uploadError.textContent = '';
}