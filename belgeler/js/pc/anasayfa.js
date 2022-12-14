function bekle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function indir(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


function slaytiIlerlet(slayt) {
    let slaytNumarasi = parseInt(document.getElementById(`${slayt}-1`).src.split(`${slayt}/`)[1].split(".jpg")[0]);
    slaytNumarasi++;
    slaytNumarasi > 8 ? slaytNumarasi = 1 : null
    document.getElementById(`${slayt}-1`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi++;
    slaytNumarasi > 8 ? slaytNumarasi = 1 : null
    document.getElementById(`${slayt}-2`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi++;
    slaytNumarasi > 8 ? slaytNumarasi = 1 : null
    document.getElementById(`${slayt}-3`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi++;
    slaytNumarasi > 8 ? slaytNumarasi = 1 : null
    document.getElementById(`${slayt}-4`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
}


function slaytiGerilet(slayt) {
    let slaytNumarasi = parseInt(document.getElementById(`${slayt}-1`).src.split(`${slayt}/`)[1].split(".jpg")[0]);
    slaytNumarasi--;
    slaytNumarasi < 1 ? slaytNumarasi = 8 : null
    document.getElementById(`${slayt}-1`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi = parseInt(document.getElementById(`${slayt}-2`).src.split(`${slayt}/`)[1].split(".jpg")[0]);
    slaytNumarasi--;
    slaytNumarasi < 1 ? slaytNumarasi = 8 : null
    document.getElementById(`${slayt}-2`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi = parseInt(document.getElementById(`${slayt}-3`).src.split(`${slayt}/`)[1].split(".jpg")[0]);
    slaytNumarasi--;
    slaytNumarasi < 1 ? slaytNumarasi = 8 : null
    document.getElementById(`${slayt}-3`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
    slaytNumarasi = parseInt(document.getElementById(`${slayt}-4`).src.split(`${slayt}/`)[1].split(".jpg")[0]);
    slaytNumarasi--;
    slaytNumarasi < 1 ? slaytNumarasi = 8 : null
    document.getElementById(`${slayt}-4`).src = `/gorseller/${slayt}/${slaytNumarasi}.jpg`;
}


function fotografModeliniKucult() {
    document.getElementById("fotograf-goruntuleme-modeli").firstElementChild.classList = "modal-dialog modal-dialog-centered modal-xl";
    document.getElementById("tam-ekrana-gec").hidden = false;
    document.getElementById("tam-ekrandan-cikma").hidden = true;
}


function fotografModeliniBuyut() {
    document.getElementById("fotograf-goruntuleme-modeli").firstElementChild.classList = "modal-dialog modal-dialog-centered modal-fullscreen";
    document.getElementById("tam-ekrana-gec").hidden = true;
    document.getElementById("tam-ekrandan-cikma").hidden = false;
}


function fotografGoruntulemeModeliniAc(gorselinTamYolu) {
    document.getElementById("tam-ekrana-gec").hidden = false;
    document.getElementById("tam-ekrandan-cikma").hidden = true;
    document.getElementById("fotograf-goruntuleme-modeli").firstElementChild.classList = "modal-dialog modal-dialog-centered modal-xl";
    document.getElementById("fotografi-indir").href = gorselinTamYolu;
    document.getElementById("fotograf-goruntuleme-modelindeki-fotograf").src = gorselinTamYolu;
    document.getElementById("fotograf-goruntuleme-modelini-acan-buton").click();
}


function fotografGoruntulemeModeliniKapat() {
    document.getElementById("fotograf-goruntuleme-modelini-kapatan-buton").click();
}




fetch(`/belgeler/json/uygulamalarimiz.json`)
    .then((yanit) => yanit.json())
    .then((veriler) => {
        (async () => {
            console.log('Sayfa Y??klendi');
            console.log(veriler)
            for (let x1 = 0; x1 < veriler.length; x1++) {
                const uygulama = veriler[x1];
                let uygulamaHTML = `
            <div id="${uygulama.id}" class="row p-5">
                <div class="col-1"></div>
                <div class="col-10">
                    <img onclick="fotografGoruntulemeModeliniAc(this.src)" src="${uygulama.buyukGorsel}"
                        style="cursor: pointer;width:100%" class="img-fluid rounded shadow" alt="...">
                    <div class="mt-5 fs-4 ">
                        <h2>${uygulama.ad}</h2>
                        <p>
                            ${uygulama.aciklama}
                        </p>
                        <div class="mt-4 mb-4"></div>
                        <div class="row">
                            <div class="col-1 mx-auto d-flex justify-content-center align-items-center">
                                <span onclick="slaytiGerilet('${uygulama.id}');"
                                    class="bg-secondary bg-opacity-10 p-3 rounded-circle border border-secondary"
                                    style="cursor: pointer;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3">
                                        <img id="${uygulama.id}-1" src="/gorseller/${uygulama.id}/1.jpg"
                                            onclick="fotografGoruntulemeModeliniAc(this.src)" class="img-fluid rounded shadow"
                                            style="cursor: pointer;" alt="...">
                                    </div>
                                    <div class="col-3">
                                        <img id="${uygulama.id}-2" src="/gorseller/${uygulama.id}/2.jpg"
                                            onclick="fotografGoruntulemeModeliniAc(this.src)" class="img-fluid rounded shadow"
                                            style="cursor: pointer;" alt="...">
                                    </div>
                                    <div class="col-3">
                                        <img id="${uygulama.id}-3" src="/gorseller/${uygulama.id}/3.jpg"
                                            onclick="fotografGoruntulemeModeliniAc(this.src)" class="img-fluid rounded shadow"
                                            style="cursor: pointer;" alt="...">
                                    </div>
                                    <div class="col-3">
                                        <img id="${uygulama.id}-4" src="/gorseller/${uygulama.id}/4.jpg"
                                            onclick="fotografGoruntulemeModeliniAc(this.src)" class="img-fluid rounded shadow"
                                            style="cursor: pointer;" alt="...">
                                    </div>
                                </div>
                            </div>
                            <div class="col-1 mx-auto d-flex justify-content-center align-items-center">
                                <span onclick="slaytiIlerlet('${uygulama.id}');"
                                    class="bg-secondary bg-opacity-10 p-3 rounded-circle border border-secondary"
                                    style="cursor: pointer;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="row text-center bg-light shadow-sm mt-5">
                            <div class="col-3 border-end border-bottom">
                                <div class="row p-5">
                                    <div class="col-3"></div>
                                    <img class="img-fluid col-6" src="/gorseller/svg/google-play.svg" alt="">
                                    <div class="col-3"></div>
                                </div>
                            </div>
                            <div class="col-3 border-end">
                                <div class="row p-5">
                                    <div class="col-3"></div>
                                    <img class="img-fluid col-6" src="/gorseller/svg/google-chrome.svg" alt="">
                                    <div class="col-3"></div>
                                </div>
                            </div>
                            <div class="col-3 border-end">
                                <div class="row p-5">
                                    <div class="col-3"></div>
                                    <img class="img-fluid col-6" src="/gorseller/svg/linux.svg" alt="">
                                    <div class="col-3"></div>
                                </div>
                            </div>
                            <div class="col-3 border-end">
                                <div class="row p-5">
                                    <div class="col-3"></div>
                                    <img class="img-fluid col-6" src="/gorseller/svg/windows.svg" alt="">
                                    <div class="col-3"></div>
                                </div>
                            </div>
                            <div class="col-3 border-end border-bottom pt-5 pb-5 bg-secondary bg-opacity-10">
                                Google Play
                                <p class="fs-6">( Android 13, Android 12, Android 11, Android 10, Android 9, Android 8.1,
                                    Android 8, Android 7.1, Android 7, Android 6.0, Android 5.1, Android 5 )</p>
                            </div>
                            <div class="col-3 border-end border-bottom pt-5 pb-5 bg-secondary bg-opacity-10">
                                Web Site
                                <p class="fs-6">( Bilgisayar, Tablet, Telefon, Televizyon ... )</p>
                            </div>
                            <div class="col-3 border-end border-bottom pt-5 pb-5 bg-secondary bg-opacity-10">
                                T??m Linux Da????t??mlar??
                                <p class="fs-6">( Pardus, Kali Linux, Debian, Ubuntu, Linux Mint, elementary OS, MX Linux,
                                    Zorin OS, Pop!_OS, Kubuntu, Fedora Linux, Solus, KDE Neon, Manjaro ... )</p>
                            </div>
                            <div class="col-3 border-end border-bottom pt-5 pb-5 bg-secondary bg-opacity-10">
                                T??m Windows S??r??mleri
                                <p class="fs-6">( Windows 11, Windows 10, Windows 8.1, Windows 8, Windows 7 ... )</p>
                            </div>
                            <div class="col-3 border-end border-bottom p-3">
                                <div>
                                    <a class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="${uygulama.playStore}"
                                        target="_blank">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                        ??cretsiz ??ndir
                                    </a>
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-success bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="/uygulamalarimiz/kurulum-kilavuzu/google-play/">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/wrench-adjustable.svg" alt="">
                                        Kurulum K??lavuzu
                                    </a>
                                </div>
                            </div>
                            <div class="col-3 border-end border-bottom p-3">
                                <div>
                                    <a class="btn btn-dark bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="${uygulama.site}" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                            class="bi bi-globe2" viewBox="0 0 16 16">
                                            <path
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                        </svg>
                                        Siteyi A??
                                    </a>
                                </div>
                                <div class="mt-3">
                                    <a onclick="indir('${uygulama.kisayol}')"
                                        class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="/uygulamalarimiz/kurulum-kilavuzu/site-kisayolu/" target="_blank">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                        ??cretsiz ??ndir
                                    </a>
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-success bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="/uygulamalarimiz/kurulum-kilavuzu/site-kisayolu/">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/wrench-adjustable.svg" alt="">
                                        Kurulum K??lavuzu
                                    </a>
                                </div>
                            </div>
                            <div class="col-3 border-end border-bottom p-3">
                                <a onclick="indir('${uygulama.linux}')"
                                    class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                    href="/uygulamalarimiz/kurulum-kilavuzu/linux/" target="_blank">
                                    <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                    ??cretsiz ??ndir
                                </a>
                                <div class="mt-3">
                                    <a class="btn btn-success bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="/uygulamalarimiz/kurulum-kilavuzu/linux/">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/wrench-adjustable.svg" alt="">
                                        Kurulum K??lavuzu
                                    </a>
                                </div>
                                <div class="mt-3">
                                    <p>Sadece a??a????daki komutla da uygulamam??z?? kurabilirsiniz.</p>
                                    <code>
                                        curl -s https://hakkod.com${uygulama.linux} | bash
                                    </code>
                                </div>
                            </div>
                            <div class="col-3 border-end border-bottom p-3">
                                <div>
                                    <button onclick="uygulamayiIndir(this,'${uygulama.id}', '${uygulama.kurulumAdi}.exe');"
                                        class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow position-relative">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                        <span>??cretsiz ??ndir</span>
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded bg-white text-dark border border-dark">
                                            win-64
                                        </span>
                                    </button>
                                </div>
                                <div class="mt-3">
                                    <button onclick="uygulamayiIndir(this,'${uygulama.id}', '${uygulama.kurulumAdi}.exe');"
                                        class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow position-relative">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                        <span>??cretsiz ??ndir</span>
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded bg-white text-dark border border-dark">
                                            win-86
                                        </span>
                                    </button>
                                </div>
                                <div class="mt-3">
                                    <button onclick="uygulamayiIndir(this,'${uygulama.id}', '${uygulama.kurulumAdi}.exe');"
                                        class="btn btn-primary bg-gradient fs-4 pt-3 pb-3 col-12 shadow position-relative">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/download.svg" alt="">
                                        <span>??cretsiz ??ndir</span>
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded bg-white text-dark border border-dark">
                                            arm-64
                                        </span>
                                    </button>
                                </div>
                                <div class="mt-3">
                                    <a class="btn btn-success bg-gradient fs-4 pt-3 pb-3 col-12 shadow"
                                        href="/uygulamalarimiz/kurulum-kilavuzu/windows/">
                                        <img class="img-fluid" src="/gorseller/svg/bootstrap/wrench-adjustable.svg" alt="">
                                        Kurulum K??lavuzu
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 border-end border-bottom pt-5 pb-5 bg-secondary bg-opacity-10">
                                Mevcut S??r??m 1.0
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            `;
                document.getElementById("uygulamalarimiz").innerHTML += uygulamaHTML;
                await bekle(50);
            }
            if (window.location.hash != "") {
                window.location.hash = window.location.hash;
            } else {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
            setInterval(() => {
                try {
                    slaytiIlerlet('qr-code-generator');
                    slaytiIlerlet('my-shopping-list');
                    slaytiIlerlet('what-is-my-ip');
                    slaytiIlerlet('url-shortener');
                    slaytiIlerlet('esmaul-husna-zikirmatik');
                    slaytiIlerlet('esmaul-husna-bilgi-testi');
                    slaytiIlerlet('kuduz-asisi-takvimi');
                } catch (hata) {
                    console.log(hata);
                }
            }, 2500);
        })();
    })
    .catch((hata) => {
        console.error('Hata: ', hata);
    });


document.write(`<script src="/belgeler/js/uygulamayi-indir.js"><\/script>`);
window.scrollTo(0, 0);