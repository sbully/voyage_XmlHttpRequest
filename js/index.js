let xmlrequest = new XMLHttpRequest();
let tab = document.getElementById("table");
let container = document.getElementById("container")

xmlrequest.addEventListener("progress", updateProgress, false);
xmlrequest.addEventListener("load", transferComplete, false);
xmlrequest.addEventListener("error", transferFailed, false);
xmlrequest.addEventListener("abort", transferCancel, false);


xmlrequest.responseType = "json";
xmlrequest.open("GET", "https://arfp.eu/dataset/voyages.json");
xmlrequest.send();

function updateProgress(event) {
    if (event.lengthComputabe) {
        let percent = event.loaded / event.total;
    }
}

function transferComplete(event) {

    let json = xmlrequest.response;
    json.forEach(function(desti) {

        CreateVoyage(desti);
    });
}

function transferFailed(event) {
    alert("transfert échoué");
}

function transferCancel(event) {
    alert("transfert annulé");
}



function CreateVoyage(desti) {
    let article = document.createElement('article');
    article.id = "cardvoyage";
    container.appendChild(article);

    let titreArt = document.createElement('h2');
    titreArt.id = "titreart";
    titreArt.innerHTML = desti['titre'];
    article.appendChild(titreArt);

    let divcorp = document.createElement('div')
    divcorp.id = "divcorp";
    article.appendChild(divcorp);

    let img = document.createElement('img')
    let path = "./img/enfer" + desti['id'] + ".jpg";
    img.id = "imgvoyage";
    img.src = path;
    divcorp.appendChild(img);

    let divsdecript = document.createElement('div')
    divcorp.id = "divsdecript";
    divcorp.appendChild(divsdecript);

    let descrip = document.createElement('p');
    descrip.id = "descrip";
    descrip.innerHTML = desti['description'];
    divsdecript.appendChild(descrip);

    let button = document.createElement('button');
    button.id = "butRead"
    button.innerHTML = "Lire la suite";
    divsdecript.appendChild(button);


}