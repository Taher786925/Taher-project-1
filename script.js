const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
input.addEventListener("input", updatePreview);
});

function updatePreview(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let summary = document.getElementById("summary").value;
let skills = document.getElementById("skills").value;
let experience = document.getElementById("experience").value;

document.getElementById("pname").innerText = name || "Your Name";
document.getElementById("pemail").innerText = email;
document.getElementById("pphone").innerText = phone;
document.getElementById("psummary").innerText = summary;
document.getElementById("pexperience").innerText = experience;

let skillList = document.getElementById("pskills");
skillList.innerHTML = "";

skills.split(",").forEach(skill => {
if(skill.trim() !== ""){
let li = document.createElement("li");
li.innerText = skill.trim();
skillList.appendChild(li);
}
});

}

function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let error = "";

if(name.length < 3){
error = "Name must be at least 3 characters";
}

else if(!email.includes("@")){
error = "Invalid email";
}

else if(phone.length < 10){
error = "Invalid phone number";
}

document.getElementById("error").innerText = error;

return error === "";
}

function saveData(){

if(!validateForm()) return;

let data = {
name: name.value,
email: email.value,
phone: phone.value,
summary: summary.value,
skills: skills.value,
experience: experience.value
};

localStorage.setItem("resumeData", JSON.stringify(data));

alert("Saved locally!");
}

function loadData(){

let data = JSON.parse(localStorage.getItem("resumeData"));

if(!data) return;

name.value = data.name;
email.value = data.email;
phone.value = data.phone;
summary.value = data.summary;
skills.value = data.skills;
experience.value = data.experience;

updatePreview();

}