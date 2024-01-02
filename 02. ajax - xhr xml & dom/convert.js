let xmlhttp = null;

function recalculate(str) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }

    if (xmlhttp === null) {
        console.log("Fehler beim Erzeugen eines XMLHttpRequest-Objekts");
    }

    xmlhttp.open("GET", "calculate.php?meter=" + str, true);
    xmlhttp.onreadystatechange = parseRecalculate;
    xmlhttp.send();
}

function parseRecalculate() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let xml = xmlhttp.responseXML;

        let meilen_response = xml.querySelector('meilen');
        let yard_response = xml.querySelector('yard');

        document.querySelector('#meilen').value = meilen_response.firstChild.nodeValue;
        document.querySelector('#yard').value = yard_response.firstChild.nodeValue;
    }

    else {
        document.querySelector('#meilen').value = 0;
        document.querySelector('#yard').value = 0;
    }
}