var peopleList = [
    // "https://lh3.googleusercontent.com/UJf1KT0z88IDSSkyeSL_XmSOQUxMuA8rQdChFBKwyNXAQEUj2kD4vKAaFbmv3w5tMYGuHn4_mnD5itD2s2pSAV9VpkCK8_2Jxl_NHA5gWq44MYptEpvyBXAz5Yt_GC1d4c8C7BZgbo7tjqWRwmNVZYmytwLKng7kW9vAEb8kp5QYNmGsJKtt7GiykmavbdzZkWO-sy62v8oqX3dPDfOBURsx3gevmso10Y2_xYOnprLPudGdeIc5aykjXqU4e0cGJUQL0OUqbEXsxQKqzfnKsYKnNGfZYyk9_O-F3RCkxF6b9BMXq1-QMtG4ZArtI7bk15w44Z9XarzN-krjSWefXDkAwO5RRh2MnBmtoWl5CIQqKfiJtBK0X019zWFdq4fqOnU20mw7Nrx23qHP0gx0MM4D9KJcfgHpskf0uHxDabsFGRDT-vrIvSgBSCnFDgt4eZ1-_AuVqm5uQpNThx4z0beLjG2JM3D9RNgqjssd2p0yu2OfdFzZJaeIdx88MRrUPT30deFP1N4zUiaj3bSUUfq1WpwOBefITHLS6Th2ui8rL9WM9LlhlwgJKhbVj7cDiC1rPRln1YWiTk-_v4s7h7Mf8P_CsvsC29cEg5wqsLaThdr0fuUUNghpSuSKrdx2dd5cs3eT077PMPMa-HL6g6F2yy2fOh4=w1022-h1006-no",
    "images/akarsh.jpg",
    "images/konark.jpg",
    "images/pratik.jpg",
    "images/omar.jpg",
    // "https://goj2.com/wp-content/uploads/2019/01/troySlider.png",

]
var indexLength = peopleList.length;
var currIndex = 0;
document.getElementById("person").addEventListener("animationiteration", function () {
    document.getElementById("imgModule").src = peopleList[currIndex];
    if (currIndex < indexLength - 1) {
        currIndex++;
    } else {
        currIndex = 0;
    }
}, false);