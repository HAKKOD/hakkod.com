document.write(`
<button id="fotograf-goruntuleme-modelini-acan-buton" hidden data-bs-toggle="modal"
    data-bs-target="#fotograf-goruntuleme-modeli"></button>
<div class="modal fade" id="fotograf-goruntuleme-modeli" tabindex="-1"
    aria-labelledby="fotograf-goruntuleme-modeli-basligi" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <span class="hakkod-font">HAKKOD</span>
                <div hidden>
                    <a id="tam-ekrana-gec" onclick="fotografModeliniBuyut();" href="javascript:void(0)"
                        class="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-zoom-in" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            <path
                                d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                            <path fill-rule="evenodd"
                                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        Tam Ekran
                    </a>
                    <a id="tam-ekrandan-cikma" hidden onclick="fotografModeliniKucult();" href="javascript:void(0)"
                        class="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-zoom-out" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            <path
                                d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                            <path fill-rule="evenodd"
                                d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Tam Ekrandan Çık
                    </a>
                    <span class="ms-2 me-2">|</span>
                    <a id="fotografi-indir" download href="javascript:void(0);" class="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-download" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        İndir
                    </a>
                </div>
                <button id="fotograf-goruntuleme-modelini-kapatan-buton" hidden type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                <button onclick="fotografGoruntulemeModeliniKapat();" type="button" class="btn-close"></button>
            </div>
            <img style="width:100%;" id="fotograf-goruntuleme-modelindeki-fotograf" src="" class="img-fluid"
                alt="...">
        </div>
    </div>
</div>`);
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