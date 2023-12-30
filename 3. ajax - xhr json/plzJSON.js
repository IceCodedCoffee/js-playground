let xmlhttp = new XMLHttpRequest();
let url = "data.json";

xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let jsonArray = JSON.parse(xmlhttp.responseText);

        let list = createList(jsonArray);

        document.querySelector('#output').innerHTML = list;
    }
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function createList(array) {
    let list = '<ol>';

    for (let i = 0; i < array.length; i++) {
        list += '<li>' + '<a href="' + array[i].url + '">' +
        array[i].ort + '</a>' + " = " + array[i].postleitzahl + '</li>';
    }

    list += '</ol>';

    return list;
}