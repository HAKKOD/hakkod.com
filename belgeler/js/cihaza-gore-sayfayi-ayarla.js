function cihazaGoreSayfayiAyarla() {
    let url = '';
    if (window.screen.width < 992 && document.getElementById('mobil') == null) {
        console.log("MOBİL");
        url = `/mobil${window.location.pathname}`;
    } else if (window.screen.width > 992 && document.getElementById('pc') == null) {
        console.log("PC");
        url = `/pc${window.location.pathname}`;
    }
    if (url == '') return;
    fetch(`${url}?x=${new Date().getTime()}`)
        .then((yanit) => yanit.text())
        .then((veriler) => {
            document.open("text/html", "replace");
            document.write(veriler);
            document.close();
        })
        .catch((hata) => {
            console.error('Hata: ', hata);
        });
}
window.addEventListener('resize', function (event) {
    cihazaGoreSayfayiAyarla();
}, true);
cihazaGoreSayfayiAyarla();