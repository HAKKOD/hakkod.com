function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let uygulamaBase64 = '';
async function uygulamayiIndir(etiket, uygulamaID, uygulamaAdi, parcaSayisi = 100) {
    if (etiket.disabled == true) return;
    etiket.classList.remove("btn-danger");
    etiket.classList.remove("btn-primary");
    etiket.classList.add("btn-secondary");
    etiket.disabled = true;
    etiket.childNodes[3].innerText = "İndiriliyor...";
    let hataOlustumu = false;
    for (let x1 = 0; x1 < parcaSayisi; x1++) {
        let parcaNumarasi = '';
        if (x1.toString().length == 1) parcaNumarasi = `00${x1}`;
        else if (x1.toString().length == 2) parcaNumarasi = `0${x1}`;
        else parcaNumarasi = x1;    
        let url = `/uygulamalarimiz/${uygulamaID}/win-arm64/${parcaNumarasi}.base64`;
        await fetch(url)
            .then((yanit) => {
                if(yanit.status == 200) {
                    return yanit.text()
                } else {
                    x1 = parcaSayisi;
                    return "bitti";
                }
            })
            .then((veriler) => {
                if(veriler != "bitti") {
                    // console.log(veriler)
                    uygulamaBase64 += veriler;
                    console.log(`${url} indirildi.`);
                }
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
        await bekle(100);
    }
    if (hataOlustumu) return;
    console.log("BİTTİ")
    etiket.classList.remove("btn-secondary");
    etiket.classList.add("btn-primary");
    etiket.disabled = false;
    etiket.childNodes[3].innerText = "Ücretsiz İndir";
    const a = document.createElement('a')
    a.id = `dosya123`;
    a.href = `data:;base64,${uygulamaBase64}`;
    a.download = uygulamaAdi;
    document.body.appendChild(a)
    a.click()
    // document.body.removeChild(a)
}