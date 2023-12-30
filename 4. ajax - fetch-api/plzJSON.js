async function fetchData() {
    try {
        const response = await fetch("data.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error(`Could not get data: ${error}`);
    }
}

function createList(array) {
    let list = '<ol>';

    for (let i = 0; i < array.length; i++) {
        list += '<li>' + '<a href="' + array[i].url + '">' +
        array[i].ort + '</a>' + " = " + array[i].postleitzahl + '</li>';
    }

    list += '</ol>';

    return list;
}

async function renderData() {
    try {
        const jsonArray = await fetchData();
        const list = createList(jsonArray);
        document.querySelector('#output').innerHTML = list;

    } catch (error) {
        console.error(`Could not render data: ${error}`);
    }
}

renderData();