let uygulamBase64 = '';
async function uygulamayiIndir(etiket, uygulamaID, uygulamaAdi, parcaSayisi = 3) {
    if (etiket.disabled == true) return;
    etiket.classList.remove("btn-danger");
    etiket.classList.remove("btn-primary");
    etiket.classList.add("btn-secondary");
    etiket.disabled = true;
    etiket.childNodes[3].innerText = "İndiriliyor...";
    let hataOlustumu = false;
    for (let x1 = 0; x1 < parcaSayisi; x1++) {
        let url = `/uygulamalarimiz/${uygulamaID}/win-arm64/${x1}.base64`;
        await fetch(url)
            .then((yanit) => yanit.text())
            .then((veriler) => {
                uygulamBase64 += veriler;
                console.log(`${url} indirildi.`);
            })
            .catch((hata) => {
                console.error('Hata: ', hata);
                etiket.classList.remove("btn-secondary");
                etiket.classList.add("btn-danger");
                etiket.disabled = false;
                etiket.childNodes[3].innerText = "Ağ Hatası Oluştu. Tekrar denemek için tıklayınız.";
                x = parcaSayisi;
                hataOlustumu = true;
            });
    }
    if (hataOlustumu) return;
    etiket.classList.remove("btn-secondary");
    etiket.classList.add("btn-primary");
    etiket.disabled = false;
    etiket.childNodes[3].innerText = "Ücretsiz İndir";
    const a = document.createElement('a')
    a.href = `data:;base64,${uygulamBase64}`;
    a.download = uygulamaAdi;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}