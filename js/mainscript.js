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
function transactions() {
    loadContent('transaction.html');
}
function dashboard() {
    loadContent('dashboard.html');
}
function settings() {
    loadContent('setting.html');
}