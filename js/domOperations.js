function showResultInDomKvadrat() {
    const dlinaStoroniKvadrata = document.getElementById('dlinaStoroniKvadrata').value;
    document.getElementById('ploschadKvadrata').innerHTML = ploschadKvadrata(dlinaStoroniKvadrata);
}
function showResultInDomPriamougolnika() {
    const pervayaStoronaPriamougolnika = document.getElementById('pervayaStoronaPriamougolnika').value;
    const drugayaStoronaPriamougolnika = document.getElementById('drugayaStoronaPriamougolnika').value;
    document.getElementById('ploschadPriamougolnika').innerHTML = ploschadPriamougolnika(pervayaStoronaPriamougolnika, drugayaStoronaPriamougolnika);
}
function showResultInDomParalelograma() {
    const dlinaStoronyParalelograma = document.getElementById('dlinaStoronyParalelograma').value;
    const dlinaVisotyParalelograma = document.getElementById('dlinaVisotyParalelograma').value;
    document.getElementById('ploschadParalelograma').innerHTML = ploschadParalelograma(dlinaStoronyParalelograma, dlinaVisotyParalelograma);
}
function showResultInDomRomba() {
    const dlinaStoronyRomba = document.getElementById('dlinaStoronyRomba').value;
    const dlinaVisotyRomba = document.getElementById('dlinaVisotyRomba').value;
    document.getElementById('ploschadRomba').innerHTML = ploschadRomba(dlinaStoronyRomba, dlinaVisotyRomba);
}