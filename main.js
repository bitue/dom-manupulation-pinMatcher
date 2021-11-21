function randomfour() {
    let num = Math.round(Math.random() * 10000)

    let numStr = num + ""
    if (numStr.length == 4) {
        return num
    }
    else {
        return randomfour()
    }
}

let str = ''

document.getElementById("btn-gen-pin").addEventListener("click", function () {
    let pin = randomfour()
    document.getElementById("show-pin").value = pin
    document.getElementById("count").innerText = 3
    document.getElementById("submit").removeAttribute("disabled")
    document.getElementById("show-value").value=""
    str = str.substr(0, -1)



})


let btn = document.querySelectorAll(".button")


for (let key of btn) {

    key.addEventListener("click", function (event) {
        let value = event.target.innerText

        if (isNaN(value)) {
            if (value == "C") {
                str = str.substr(0, -1)
                document.getElementById("show-value").value = str
            }
            if (value == "<") {
                str = str.substr(0, str.length - 1)
                document.getElementById("show-value").value = str

            }
        }
        else {
            str = str + value
            document.getElementById("show-value").value = str

        }





    })
}



document.getElementById("submit").addEventListener("click", function () {

    let count = document.getElementById("count").innerText
    count = parseInt(count)
    if (count > 0) {
        let genValue = document.getElementById("show-pin").value
        let inValue = document.getElementById("show-value").value
        document.getElementById("submit").removeAttribute("disabled")
        if (inValue == "") {
            return alert("please enter your pin")
        }

        if (genValue == inValue) {
            document.getElementById("green-box").style.display = "block"
            document.getElementById("red-box").style.display = "none"
            document.getElementById("submit").setAttribute("disabled", true)
        }
        else {
            document.getElementById("red-box").style.display = "block"

        }
        count--;




    }

    else if (count == 0) {
        document.getElementById("submit").setAttribute("disabled", true)
        document.getElementById("show-pin").value = ""
        document.getElementById("show-value").value = ""
        str = str.substr(0, -1)
        return alert("thank you for trying here ")

    }


    document.getElementById("count").innerText = count

    document.getElementById("show-value").value = ""
    str = str.substr(0, -1)







})
