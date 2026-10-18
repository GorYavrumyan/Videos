var Cart_conteiner = document.getElementById("Cart_conteiner")
var search = document.getElementById("search")

var Videos = [
    { name: "RPM 1", img: "img/Video/RPM.webp", id: "1CxFiqp3h7idt_CloiYrZsOaJfSZIOvwd" },
    { name: "RPM 2", img: "img/Video/RPM.webp", id: "12f6Qn9jbT5B3M30AgnyQqS6UBT_JcLE3" },
    { name: "RPM 3", img: "img/Video/RPM.webp", id: "1JdREK30hj1X8HTAOMdIwZokp9pisttmx" },
    { name: "RPM 4", img: "img/Video/RPM.webp", id: "1S7ohnjHWp-_Cr-RVplKGZoAijie0xwRl" },
    { name: "RPM 5", img: "img/Video/RPM.webp", id: "1nPVYC5CbesvrrNdJyfnrYEZ0oYLi8TFh" },
    { name: "RPM 6", img: "img/Video/RPM.webp", id: "1elDRjU8cRGY1ShLCm5Odx8MT1Nt5NF-p" },
    { name: "RPM 7", img: "img/Video/RPM.webp", id: "1_YbiFI1hS12YSjFpcJUJ-n2lsGh7iHbW" },
    { name: "RPM 8", img: "img/Video/RPM.webp", id: "17b3lNZQos1lQl-qBeaAO5B3whe6yvYpG" },
    { name: "RPM 9", img: "img/Video/RPM.webp", id: "1cdutRXwDT9C9B8pVf6I4AJN08lNtI-2k" },
    { name: "RPM 10", img: "img/Video/RPM.webp", id: "1sXSkFMD2rGc6k9Q3zeR6SI1APRRhw2Bc" },
    { name: "RPM 11", img: "img/Video/RPM.webp", id: "1bJY1nTHPqRm2ovg9ahwSw_Vv9Vn_Zc5U" },
    { name: "RPM 12", img: "img/Video/RPM.webp", id: "1mOzWe2iw_6cwHFXYbMmdhk-zQUW56_bV" },
    { name: "RPM 13", img: "img/Video/RPM.webp", id: "155txJfwgnw9GINwOgwnKs6OhiOuFxCuJ" },
    { name: "RPM 14", img: "img/Video/RPM.webp", id: "1gPldoJyld3HFJBuf_HN4BW3v40IiGlS2" },
    { name: "RPM 15", img: "img/Video/RPM.webp", id: "1DYRgXr5CcO5PJjocvXm44ILjQxmDl4ij" },
    { name: "RPM 16", img: "img/Video/RPM.webp", id: "1mWpFsrnKEqANnzpn2DZ_2uXl1z9_UhXR" },
    { name: "RPM 17", img: "img/Video/RPM.webp", id: "1Tk_4ZOjcrZ1dZ2ILCnVEvU4voXKnUpV7" },
    { name: "RPM 18", img: "img/Video/RPM.webp", id: "18GOgbrHvc0zs0csrCl9n07dhuLLIsMG7" },
    { name: "RPM 19", img: "img/Video/RPM.webp", id: "16Q0him1nza7c31RXItVXHNSBiyU6_cIn" },
    { name: "RPM 20", img: "img/Video/RPM.webp", id: "1zj01pODGw9KbijU2Off-ay2sgBKWO08I" },
    { name: "RPM 21", img: "img/Video/RPM.webp", id: "1XY9QNhw2of2GRWvEmdUuY4FiAHOupGAA" },
    { name: "RPM 22", img: "img/Video/RPM.webp", id: "1hupXr5JlCeTVCGSaLOY29ipX8pwqW1lU" },
    { name: "RPM 23", img: "img/Video/RPM.webp", id: "1YvBbv1g-NGByhaaE4UbtjPO9GLtJ7D5K" },
    { name: "RPM 24", img: "img/Video/RPM.webp", id: "13k2hwXTpH9mM_Uc8njos2xNZ0kxLI4f-" },
    { name: "RPM 25", img: "img/Video/RPM.webp", id: "1hEZLezIyCobCJDlsaw9ifuC1eFHVWWD-" },
    { name: "RPM 26", img: "img/Video/RPM.webp", id: "10uLf-0teB20YO5U6qvVoEwBnxvaUteK1" },
    { name: "RPM 27", img: "img/Video/RPM.webp", id: "16WI2_D2haj3Ia4e6Y9t9xi7rqy6bSXtX" },
    { name: "RPM 28", img: "img/Video/RPM.webp", id: "1y5ICBHbzpCkPJgRg7Di84O-sgvesdJCg" },
    { name: "RPM 29", img: "img/Video/RPM.webp", id: "1mMBpTUcZII7d4eeN4Nafcgi5Z7jRRmfz" },
    { name: "RPM 30", img: "img/Video/RPM.webp", id: "1234uzw2iVsNRwuWMRVO9Rp_L9TPgF2x0" },
    { name: "RPM 31", img: "img/Video/RPM.webp", id: "1CBBt7HIhSj4Uyr9eFK_5BktO2RwFzd-1" },
    { name: "RPM 32", img: "img/Video/RPM.webp", id: "11uQSdDX4cuLCWoJgDn7D0NNXatnVKypJ" }
];

function CreateCart(item, i) {
    var card = document.createElement("button")
    card.classList.add("cart")

    Cart_conteiner.appendChild(card)

    card.addEventListener("click", function () {
        // Собираем правильную ссылку превью для Google Диска из ID
        var fullVideoUrl = "https://drive.google.com/file/d/" + item[i].id + "/preview";
        localStorage.setItem("VideoURL", fullVideoUrl);
        window.location.href = "Video.html"
    })

    var img = document.createElement("img")
    img.src = item[i].img
    img.classList.add("img")
    card.appendChild(img)

    var title = document.createElement("h1")
    title.style.color = "rgb(0, 0, 78)"
    title.innerText = item[i].name
    card.appendChild(title)
}

// Первоначальная отрисовка всех карточек
if (search.value == "") {
    Cart_conteiner.innerHTML = ""
    for (let i = 0; i <= Videos.length - 1; i++) {
        CreateCart(Videos, i)
    }
}

// Обработчик поиска с твоим алгоритмом
search.addEventListener("input", function () {
    Cart_conteiner.innerHTML = ""
    if (search.value == "") {
        for (let i = 0; i <= Videos.length - 1; i++) {
            CreateCart(Videos, i)
        }
    }
    else {
        for (let i = 0; i < Videos.length; i++) {
            let X = true
            for (let j = 0; j < search.value.length; j++) {
                // Защита от выхода за границы строки имени видео
                if (j >= Videos[i].name.length || search.value[j].toLowerCase() != Videos[i].name[j].toLowerCase()) {
                    X = false
                }
            }
            if (X === true) {
                CreateCart(Videos, i)
            }
        }
    }
})