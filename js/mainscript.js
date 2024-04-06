function confirmLogout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "login.html"; // Redirect to login page
    }
}

function loadContent (url) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('maincontent').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET',url);
    xhttp.send();
}
function quick_entry() {
    loadContent('quick_entry.html');
}
function transactions() {
    loadContent('transaction.html');
}
function dashboard() {
    loadContent('dashboard.html');
}
function settings() {
    loadContent('setting.html');
}
function notification() {
    loadContent('notification.html');
}
function contact() {
    loadContent('contact.html');
}
function about() {
    loadContent('about.html');
}
