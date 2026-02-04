const main = document.getElementById("main")

let leaves = 0
let race = 0
let land = 0
let rocks = 0

function bildFild() {
    let img
    for (let i = 1; i <= 80 * 36; i++) {
        img = document.createElement("img")
        img.classList.add("img")
        img.setAttribute("alt", "")
        if (i > 16 * 80 && i <= 17 * 80) {

            img.setAttribute("src", "pictures/download4.png")
            img.classList.add("font")
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)
            img.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img2") {
                    div.innerHTML = ""
                    land += 1
                    const collection = document.getElementsByClassName("land")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/soil.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(land))
                    div1.appendChild(number)
                    div1.classList.add("land")
                    console.log(div1);
                    main.appendChild(div1)
                }
            })

        }
        else if (i > 17 * 80 && i <= 21 * 80) {

            img.setAttribute("src", "pictures/soil.png")
            img.classList.add("font")
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)
            img.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img2") {
                    div.innerHTML = ""
                    land += 1
                    const collection = document.getElementsByClassName("land")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/soil.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(land))
                    div1.appendChild(number)
                    div1.classList.add("land")
                    console.log(div1);
                    main.appendChild(div1)
                }
            })
        }
        else if (i > 21 * 80 && i <= 34 * 80) {

            img.setAttribute("src", "pictures/img.png")
            img.classList.add("font")
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)
            img.addEventListener("click", () => {
                if (localStorage.getItem("click") === "img3") {
                    div.innerHTML = ""
                    rocks += 1
                    const collection = document.getElementsByClassName("rocs")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img.png"
                    let div1 = document.createElement("div")
                    div1.appendChild(img)
                    let number = document.createTextNode(String(rocks))
                    div1.appendChild(number)
                    div1.classList.add("rocs")
                    console.log(div1);
                    main.appendChild(div1)
                }
            })
        }
        else if (i > 34 * 80) {

            img.setAttribute("src", "pictures/download5.png")
            img.classList.add("font")
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)
        } else {
            let div = document.createElement("div")
            div.appendChild(img)
            div.classList.add("divimg")
            main.appendChild(div)

        }
    }

}

function bildtriers() {
    const images = document.getElementsByClassName("divimg")
    const header = []
    for (let i = 0; i <= 16 * 80 - 1; i++) {
        header.push(images[i])
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
                race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(race))
                div1.appendChild(number)
                div1.classList.add("race")
                console.log(div1);
                main.appendChild(div1)
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
                race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(race))
                div1.appendChild(number)
                div1.classList.add("race")
                console.log(div1);
                main.appendChild(div1)
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
                race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(race))
                div1.appendChild(number)
                div1.classList.add("race")
                console.log(div1);
                main.appendChild(div1)
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
                race += 1
                const collection = document.getElementsByClassName("race")
                if (collection[0]) {

                    collection[collection.length - 1].innerHTML = ""
                }
                let img = document.createElement("img")
                img.src = "pictures/img2.jpeg"
                let div1 = document.createElement("div")
                div1.appendChild(img)
                let number = document.createTextNode(String(race))
                div1.appendChild(number)
                div1.classList.add("race")
                console.log(div1);
                main.appendChild(div1)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)
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
                    leaves += 1
                    const collection = document.getElementsByClassName("leavse")
                    if (collection[0]) {

                        collection[collection.length - 1].innerHTML = ""
                    }
                    let img = document.createElement("img")
                    img.src = "pictures/img3.jpeg"
                    let div = document.createElement("div")
                    div.appendChild(img)
                    let number = document.createTextNode(String(leaves))
                    div.appendChild(number)
                    div.classList.add("leavse")
                    console.log(div);
                    main.appendChild(div)

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

bildFild()
bildtriers()
onClic()
count()


