// Need to dry out code! Will would not approve //
function showProfile() {
    document.getElementById('WorkHistory').style.display = "none";
    document.getElementById('Profile').style.display = "block";
    document.getElementById('prof').classList.add('active');
    document.getElementById('wh').classList.remove('active');
}

function showWorkHistory() {
    document.getElementById('Profile').style.display = "none";
    document.getElementById('WorkHistory').style.display = "block";
    document.getElementById('wh').classList.add('active');
    document.getElementById('prof').classList.remove('active');
}