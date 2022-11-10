if (window.location.pathname.substring(0, 4) == "/pc/") {
    window.location.replace(window.location.pathname.substring(3));
}
else if (window.location.pathname.substring(0, 7) == "/mobil/") {
    window.location.replace(window.location.pathname.substring(6));
}