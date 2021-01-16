function changeColorTheme(selectBox){
    let colorTheme = selectBox.querySelectorAll("option")[selectBox.selectedIndex].getAttribute("data-bgcolor-type")
    if(colorTheme === "custom"){
        let colorPicker = selectBox.parentElement.querySelector(".color-picker")
        colorPicker.style.display = "inline"
        colorPicker.onchange = function(){
            updateColor(this, selectBox)
        }
    }
    else{
        if(selectBox.parentElement.querySelector(".color-picker").style.display === "inline"){
            selectBox.parentElement.querySelector(".color-picker").style.display = "none"
        }
        document.querySelector(".list").style.backgroundColor = colorTheme
        let allSelectBoxes = document.querySelectorAll("select")
        for(let x=0; x<allSelectBoxes.length; x++){
            allSelectBoxes[x].style.backgroundColor = colorTheme
        }
    }
}

function changeFontColor(selectBox){
    let fontColor = selectBox.querySelectorAll("option")[selectBox.selectedIndex].getAttribute("data-fontcolor-type")
    if(fontColor === "custom"){
        let colorPicker = selectBox.parentElement.querySelector(".color-picker")
        colorPicker.style.display = "inline"
        colorPicker.onchange = function(){
            updateColor(this, selectBox)
        }
    }
    else{
        if(selectBox.parentElement.querySelector(".color-picker").style.display === "inline"){
            selectBox.parentElement.querySelector(".color-picker").style.display = "none"
        }
        document.querySelector(".list").style.color = fontColor
        // document.querySelector(".lines").style.borderLeft = `1px solid ${fontColor}`
        // document.querySelector(".lines").style.borderRight = `1px solid ${fontColor}`
        let allSelectBoxes = document.querySelectorAll("select")
        for(let x=0; x<allSelectBoxes.length; x++){
            allSelectBoxes[x].style.color = fontColor
        }
    }
}

function changeFont(selectBox){
    let font = selectBox.querySelectorAll("option")[selectBox.selectedIndex].getAttribute("data-font-type")
    document.querySelector(".list").style.fontFamily = font
    let allSelectBoxes = document.querySelectorAll("select")
    for(let x=0; x<allSelectBoxes.length; x++){
        allSelectBoxes[x].style.fontFamily = font
    }
}

function changeSideColor(selectBox){
    let sideColor = selectBox.querySelectorAll("option")[selectBox.selectedIndex].getAttribute("data-sidecolor-type")
    if(sideColor === "custom"){
        let colorPicker = selectBox.parentElement.querySelector(".color-picker")
        colorPicker.style.display = "inline"
        colorPicker.onchange = function(){
            updateColor(this, selectBox)
        }
    }
    else{
        if(selectBox.parentElement.querySelector(".color-picker").style.display === "inline"){
            selectBox.parentElement.querySelector(".color-picker").style.display = "none"
        }
        document.querySelector(".lines").style.borderLeft = `1px solid ${sideColor}`
        document.querySelector(".lines").style.borderRight = `1px solid ${sideColor}`
    }
}

function updateColor(colorPicker, selectBox){
    console.log(selectBox.querySelector("option").getAttribute("data-fontcolor-type"))
    if(selectBox.querySelector("option").getAttribute("data-bgcolor-type") !== null){
        document.querySelector(".list").style.backgroundColor = colorPicker.value
        let allSelectBoxes = document.querySelectorAll("select")
        for(let x=0; x<allSelectBoxes.length; x++){
            allSelectBoxes[x].style.backgroundColor = colorPicker.value
        }
    }
    else if(selectBox.querySelector("option").getAttribute("data-fontcolor-type") !== null){
        document.querySelector(".list").style.color = colorPicker.value
        let allSelectBoxes = document.querySelectorAll("select")
        for(let x=0; x<allSelectBoxes.length; x++){
            allSelectBoxes[x].style.color = colorPicker.value
        }
    }
    else if(selectBox.querySelector("option").getAttribute("data-sidecolor-type") !== null){
        document.querySelector(".lines").style.borderLeft = `1px solid ${colorPicker.value}`
        document.querySelector(".lines").style.borderRight = `1px solid ${colorPicker.value}`
    }
}