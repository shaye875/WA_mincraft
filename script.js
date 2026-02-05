const main = document.getElementById("main")
main.style.cursor = "auto"

const obj = { leaves: 0, race: 0, land: 0, rocks: 0 }

function inStr(text, str) {
    for (let j = 0; j < str.length; j++) {
        let count = j
        let count2 = 0
        if (text[0] === str[j] && (str.length - j) >= text.length) {
            for (let t of text) {
                if (t === str[count]) {
                    count2++
                }
                count++
            }
            if (count2 === text.length) {
                return true
            }
        }
    }
    return false
}

function corsur() {
    const collection = document.getElementsByClassName("sucur")
    console.log(collection);
    for (let div of collection) {

        div.addEventListener("click", () => {
            console.log(inStr("race", div.className));
            if (inStr("race", div.className)) {
                localStorage.setItem("bild", "race")
                main.style.cursor = "url('pictures/img2.jpeg'),auto"
            }
            else if (inStr("land", div.className)) {
                localStorage.setItem("bild", "land")
                main.style.cursor = "url('pictures/soil.png'),auto"
            }
            else if (inStr("leavse", div.className)) {
                localStorage.setItem("bild", "leavse")
                main.style.cursor = "url('pictures/img3.jpeg'),auto"
            }
            else if (inStr("rocs", div.className)) {
                localStorage.setItem("bild", "rocs")
                main.style.cursor = "url('pictures/img4.png'),auto"
            }
            localStorage.setItem("click", "")
        })

    }
}

function bildFild(obj) {
    let img
    for (let i = 1; i <= 80 * 36; i++) {
        img = document.createElement("img")
        img.classList.add("img")
        img.setAttribute("alt", "")
        let div = document.createElement("div")
        div.classList.add("divimg")
        if (i > 16 * 80 && i <= 17 * 80) {
            img.setAttribute("src", "pictures/download4.png")
            img.classList.add("font")
            div.appendChild(img)
            div.addEventListener("click", () => {
                if (div.childNodes.length < 1) {
                    const classs = localStorage.getItem("bild")
                    if (classs && classs === "land" && obj.land > 0) {
                        div.innerHTML = ""
                        let img = document.createElement("img")
                        img.src = "pictures/soil.png"
                        img.classList.add("font")
                        obj.land -= 1
                        div.appendChild(img)
                    }
                }
            })
            main.appendChild(div)
            div.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img2") {
                    div.innerHTML = ""
                    obj.land += 1
                    const collection = document.getElementsByClassName("land")
                    if (collection[0]) {
                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/soil.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(obj.land))
                    div1.appendChild(number)
                    div1.classList.add("land")
                    div1.classList.add("sucur")
                    main.appendChild(div1)
                    corsur()
                }
            })

        }
        else if (i > 17 * 80 && i <= 21 * 80) {
            img.setAttribute("src", "pictures/soil.png")
            img.classList.add("font")
            div.appendChild(img)
            div.addEventListener("click", () => {
                if (div.childNodes.length < 1) {
                    const classs = localStorage.getItem("bild")
                    if (classs && classs === "land" && obj.land) {
                        div.innerHTML = ""
                        let img = document.createElement("img")
                        img.src = "pictures/soil.png"
                        img.classList.add("font")
                        obj.land -= 1
                        div.appendChild(img)
                    }

                }
            })
            main.appendChild(div)
            div.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img2") {
                    div.innerHTML = ""
                    obj.land += 1
                    const collection = document.getElementsByClassName("land")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/soil.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(obj.land))
                    div1.appendChild(number)
                    div1.classList.add("land")
                    div1.classList.add("sucur")
                    main.appendChild(div1)
                    corsur()
                }
            })
        }
        else if (i > 21 * 80 && i <= 34 * 80) {
            img.setAttribute("src", "pictures/img.png")
            img.classList.add("font")
            div.appendChild(img)
            div.addEventListener("click", () => {
                if (div.childNodes.length < 1) {
                    const classs = localStorage.getItem("bild")
                    if (classs && classs === "rocs") {
                        div.innerHTML = ""
                        let img = document.createElement("img")
                        img.src = "pictures/img.png"
                        img.classList.add("font")
                        obj.rocks -= 1
                        div.appendChild(img)
                    }

                }
            })
            main.appendChild(div)
            div.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img3") {
                    div.innerHTML = ""
                    obj.rocks += 1
                    const collection = document.getElementsByClassName("rocs")
                    if (collection[0]) {
                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(obj.rocks))
                    div1.appendChild(number)
                    div1.classList.add("rocs")
                    div1.classList.add("sucur")
                    main.appendChild(div1)
                    corsur()
                }
            })
        }
        else if (i > 34 * 80) {
            img.setAttribute("src", "pictures/download5.png")
            img.classList.add("font")
            div.appendChild(img)
            main.appendChild(div)
        } else {
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)

        }

    }

}

function bildtriers(obj) {
    const images = document.getElementsByClassName("divimg")
    const header = []
    for (let i = 0; i <= 16 * 80 - 1; i++) {
        images[i].innerHTML = ""
        header.push(images[i])
        images[i].addEventListener("click", () => {
            if (images[i].childNodes.length < 1) {
                console.log("ll");
                const classs = localStorage.getItem("bild")
                if (classs && classs === "leavse" && obj.leaves > 0) {
                    images[i].innerHTML = ""
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    img.classList.add("font")
                    obj.leaves -= 1
                    images[i].appendChild(img)
                } else if (classs && classs === "race" && obj.race > 0) {
                    images[i].innerHTML = ""
                    let img = document.createElement("img")
                    img.src = "pictures/img2.jpeg"
                    img.classList.add("font")
                    obj.race -= 1
                    images[i].appendChild(img)
                }

            }
        })
    }
    for (let i = 1; i <= 8; i++) {
        const index = Math.floor(Math.random() * 80) + 1 + 80 * 15
        let img = document.createElement("img")
        img.classList.add("img")
        img.setAttribute("alt", "")
        img.src = "pictures/img2.jpeg"
        img.classList.add("font")

        header[index].innerHTML = ""
        header[index].appendChild(img)
        img.addEventListener("click", () => {
            if (localStorage.getItem("click") === "img1") {
                header[index].innerHTML = ""
                obj.race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(obj.race))
                div1.appendChild(number)
                div1.classList.add("race")
                div1.classList.add("sucur")
                main.appendChild(div1)
                corsur()

            }
        })
        let img2 = document.createElement("img")
        img2.classList.add("img")
        img2.setAttribute("alt", "")
        img2.src = "pictures/img2.jpeg"
        img2.classList.add("font")
        header[index - 80].innerHTML = ""
        header[index - 80].appendChild(img2)
        img2.addEventListener("click", () => {
            if (localStorage.getItem("click") === "img1") {
                header[index - 80].innerHTML = ""
                obj.race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(obj.race))
                div1.appendChild(number)
                div1.classList.add("race")
                div1.classList.add("sucur")
                main.appendChild(div1)
                corsur()
            }
        })
        let img3 = document.createElement("img")
        img3.classList.add("img")
        img3.setAttribute("alt", "")
        img3.src = "pictures/img2.jpeg"
        img3.classList.add("font")
        header[index - 80 - 80].innerHTML = ""
        header[index - 80 - 80].appendChild(img3)
        img3.addEventListener("click", () => {
            if (localStorage.getItem("click") === "img1") {
                header[index - 80 - 80].innerHTML = ""
                obj.race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(obj.race))
                div1.appendChild(number)
                div1.classList.add("race")
                div1.classList.add("sucur")
                main.appendChild(div1)
                corsur()
            }
        })
        let img4 = document.createElement("img")
        img4.classList.add("img")
        img4.setAttribute("alt", "")
        img4.src = "pictures/img2.jpeg"
        img4.classList.add("font")
        let index2 = index - 80 - 80 - 80
        header[index2].innerHTML = ""
        header[index2].appendChild(img4)
        img4.addEventListener("click", () => {
            if (localStorage.getItem("click") === "img1") {
                header[index2].innerHTML = ""
                obj.race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(obj.race))
                div1.appendChild(number)
                div1.classList.add("race")
                div1.classList.add("sucur")
                main.appendChild(div1)
                corsur()
            }
        })
        for (let j = index2 - 80 - 3; j <= index2 - 80 + 3; j++) {
            let img5 = document.createElement("img")
            img5.classList.add("img")
            img5.setAttribute("alt", "")
            img5.src = "pictures/img3.jpeg"
            img5.classList.add("font")
            header[j].innerHTML = ""
            header[j].appendChild(img5)
            img5.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[j].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()
                }
            })
        }
        for (let k = index2 - 80 - 80 - 3; k <= index2 - 80 - 80 + 3; k++) {
            let img6 = document.createElement("img")
            img6.classList.add("img")
            img6.setAttribute("alt", "")
            img6.src = "pictures/img3.jpeg"
            img6.classList.add("font")
            header[k].innerHTML = ""
            header[k].appendChild(img6)
            img6.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[k].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()
                }
            })
        }
        for (let l = index2 - 80 - 80 - 80 - 2; l <= index2 - 80 - 80 - 80 + 2; l++) {
            let img7 = document.createElement("img")
            img7.classList.add("img")
            img7.setAttribute("alt", "")
            img7.src = "pictures/img3.jpeg"
            img7.classList.add("font")
            header[l].innerHTML = ""
            header[l].appendChild(img7)
            img7.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[l].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()
                }
            })
        }
        for (let p = index2 - 80 - 80 - 80 - 80 - 2; p <= index2 - 80 - 80 - 80 - 80 + 2; p++) {
            let img8 = document.createElement("img")
            img8.classList.add("img")
            img8.setAttribute("alt", "")
            img8.src = "pictures/img3.jpeg"
            img8.classList.add("font")
            header[p].innerHTML = ""
            header[p].appendChild(img8)
            img8.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[p].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()
                }
            })
        }
        for (let u = index2 - 80 - 80 - 80 - 80 - 80 - 1; u <= index2 - 80 - 80 - 80 - 80 - 80 + 1; u++) {
            let img9 = document.createElement("img")
            img9.classList.add("img")
            img9.setAttribute("alt", "")
            img9.src = "pictures/img3.jpeg"
            img9.classList.add("font")
            header[u].innerHTML = ""
            header[u].appendChild(img9)
            img9.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[u].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()
                }
            })
        }
        for (let r = index2 - 80 - 80 - 80 - 80 - 80 - 80 - 1; r <= index2 - 80 - 80 - 80 - 80 - 80 - 80 + 1; r++) {
            let img0 = document.createElement("img")
            img0.classList.add("img")
            img0.setAttribute("alt", "")
            img0.src = "pictures/img3.jpeg"
            img0.classList.add("font")
            header[r].innerHTML = ""
            header[r].appendChild(img0)
            img0.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img4") {
                    header[r].innerHTML = ""
                    obj.leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(obj.leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    div.classList.add("sucur")
                    main.appendChild(div)
                    corsur()

                }
            })
        }
    }
}

function onClic() {
    const garzen = document.getElementsByClassName("wapn")
    for (let wapn of garzen) {
        wapn.addEventListener("click", () => {
            localStorage.setItem("click", wapn.id)
            if (wapn.id === "img1") {
                main.style.cursor = "url('pictures/ax.ico'),auto"
            }
            else if (wapn.id === "img2") {
                main.style.cursor = "url('pictures/shovel.ico'),auto"
            }
            else if (wapn.id === "img3") {
                main.style.cursor = "url('pictures/pickaxe.ico'),auto"
            }
            else if (wapn.id === "img4") {
                main.style.cursor = "url('pictures/sword (1).ico'),auto"
            }
            localStorage.setItem("bild", "")
        })
    }
}

function count() {
    console.log(leaves);

    if (leaves > 0) {
        let img = document.createElement("img")
        img.src = "pictures/img3.jpeg"
        img.classList.add("font")
        let div = document.createElement("div")
        div.appendChild(img)
        div.classList.add("leavse")
    }
}



bildFild(obj)
bildtriers(obj)
onClic()
count()



