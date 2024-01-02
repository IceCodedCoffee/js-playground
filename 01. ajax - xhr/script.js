function changeContent() {
    let xmlhttp = null;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }

    if (xmlhttp === null) {
        console.log("Fehler beim Erzeugen eines XMLHttpRequest-Objekts");
    }

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.querySelector('#refreshtime').innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", "server-time.php", true);
    xmlhttp.send();
}

function timestamp() {
    let heute = new Date();
    document.querySelector('#timestamp').innerHTML = heute;
}