function sayfaDuzeniniAyarla(parca) {
    let cihaz = "";
    if (window.screen.width < 992) {
        console.log("MOBİL");
        cihaz = `mobil`;
    } else if (window.screen.width > 992) {
        console.log("PC");
        cihaz = `pc`;
    }
    fetch(`/sayfa-parcalari/${cihaz}/${parca}.html`)
        .then((yanit) => yanit.text())
        .then((veriler) => {
            // console.log('Sayfa Yüklendi');
            // document.open("text/html", "replace");
            document.getElementById(`sayfa-duzeni-${parca}`).innerHTML = veriler;
            // document.close();
        })
        .catch((hata) => {
            console.error('Hata: ', hata);
        });
}
window.onload = function () {
    const yuklenecekParcalar = ['nav', 'footer'];
    for (let x1 = 0; x1 < yuklenecekParcalar.length; x1++) {
        sayfaDuzeniniAyarla(yuklenecekParcalar[x1]);
    }
}