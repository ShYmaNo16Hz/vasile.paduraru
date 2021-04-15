function onSendButtonClick() {
    let grade = document.getElementById("grade");
    if (isNaN(grade.value) || grade.value < 1 || grade.value > 10) {
        grade.style.color = "red";
        //alert("Grade out of range");
        var gradeMessage = document.getElementById("grade-validator-message");
        gradeMessage.innerText = 'Grade value should be between 1 and 10.';
    }
    else {
        grade.style.color = "green";
        alert("The grade is " + grade.value);
    }

    let name = document.getElementById("name");
    if (name.value.length < 3 || name.value.length > 50) {
        //const msjgrade = document.getElementById("message-grade");
        var nameMessage = document.getElementById("name-validator-message");
        nameMessage.innerText = 'Name length should be between 3 and 50 letters.';
    }
}

function onResetButtonClick() {
    let gradeMessage = document.getElementById("grade-validator-message");
    let nameMessage = document.getElementById("name-validator-message");
    gradeMessage.innerText = "";
    nameMessage.innerText = "";
}

//google search
function onSendKeyword() {
    let keyword = document.getElementById("google-search");
    console.log(keyword.value);

}
