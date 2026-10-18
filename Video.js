var videoUrl = localStorage.getItem("VideoURL");

// Создаем iframe вместо обычной видео-переменной для стабильной работы с Google Диском
var iframeElement = document.createElement("iframe");
var VideoConteiner = document.getElementById("VideoConteiner");
var back_btn = document.getElementById("btn");

console.log("Воспроизводимое видео:", videoUrl);

back_btn.addEventListener("click", function () {
    window.location.href = "index.html";
});

// Передаем ссылку на видео (в конце ссылки обязательно должен быть /preview)
iframeElement.src = videoUrl;
iframeElement.allow = "autoplay";
iframeElement.style.position = "absolute";
iframeElement.style.top = "0";
iframeElement.style.left = "0";
iframeElement.style.width = "100%";
iframeElement.style.height = "100%";
iframeElement.style.border = "none";
iframeElement.style.backgroundColor = "black";

VideoConteiner.appendChild(iframeElement);