let website = document.getElementById('website');
let siteSections = $("#section-container").children();
let panelSections = $("#accordion").children();
let textElems = document.getElementsByClassName("text-elem");
let linkElems = document.getElementsByClassName("link-elem");

/* Testing */
$( document ).ready(function() {
    //console.log(document.getElementById("header-title"));
});

/***********************************************************************************************************************************************/
// add title
/*let makeHeader = document.getElementById('add-header')
makeHeader.addEventListener("click", evt => {
    // creating title element
    var title = document.createElement("h3");
    title.id = "titleee";
    title.appendChild(document.createTextNode("New title"));

    // creating desc element
    var desc = document.createElement("p");
    desc.id = "desc";
    desc.appendChild(document.createTextNode("New description"));

    // creating button element
    var button = document.createElement("button");
    button.id = "btn";
    button.appendChild(document.createTextNode("New button"));

    // adding new elemements to DOM
    website.appendChild(title);
    website.appendChild(desc);
    website.appendChild(button);
},{once:true});*/

// add text
/*let makeText = document.getElementById('add-text')
makeText.addEventListener("click", evt => {
    // creating text element
    var text = document.createElement("p");
    text.id = "texttt";
    text.appendChild(document.createTextNode("New text"));
    website.appendChild(text);
},{once:true});*/


/***********************************************************************************************************************************************/
/* Section editor controls */

function getIndexOfThis(item,array) {
    var index;
    for (var i = 0; i < array.length; i++) {
        if(array[i] == item){
            index = i;
        }
    }
    return index;
}

/* Content */
let textValues = document.getElementsByClassName("text-value");
let textChange = document.getElementsByClassName("text-change");
$(".text-change").click(function() {
    var index = getIndexOfThis(this,textChange);
    textElems[index].textContent = textValues[index].value;
});

let linkValues = document.getElementsByClassName("link-value");
let linkChange = document.getElementsByClassName("link-change");
$(".link-change").click(function() {
    var index = getIndexOfThis(this,linkChange);
    var url = linkValues[index].value;
    var pattern = /^((http|https|ftp):\/\/)/;
    if(!pattern.test(url)) {
        url = "https://" + url;
    }
    linkElems[index].href = url;
});

/* Styling */
$(".bold-btn").click(function(){
    var boldButtons = Array.prototype.slice.call(document.getElementsByClassName("bold-btn"));
    var index = boldButtons.indexOf(this);
    textElems[index].classList.toggle('bold-text');
});

$(".italic-btn").click(function(){
    var italicButtons = Array.prototype.slice.call(document.getElementsByClassName("italic-btn"));
    var index = italicButtons.indexOf(this);
    textElems[index].classList.toggle('italics-text');
});

$(".underline-btn").click(function(){
    var underlineButtons = Array.prototype.slice.call(document.getElementsByClassName("underline-btn"));
    var index = underlineButtons.indexOf(this);
    textElems[index].classList.toggle('underline-text');
});

var colorPickers = document.getElementsByClassName('color-picker');
for(var i = 0; i<colorPickers.length; i++){
    colorPickers[i].addEventListener("input", watchColorPicker);
}

function watchColorPicker() {
    this.parentNode.style.backgroundColor = this.value;
    var index = getIndexOfThis(this,colorPickers);
    textElems[index].style.color = this.value;
}

var backColorPickers = document.getElementsByClassName('back-color-picker');
for(var i = 0; i<backColorPickers.length; i++){
    backColorPickers[i].addEventListener("input", watchBackColorPicker);
}

function watchBackColorPicker() {
    this.parentNode.style.backgroundColor = this.value;
    var index = getIndexOfThis(this,backColorPickers);
    textElems[index].style.backgroundColor = this.value;
}

var cancelBtns = document.getElementsByClassName('cancel-btn');
for(var i = 0; i<cancelBtns.length; i++){
    cancelBtns[i].addEventListener("click", removeBackground);
}

function removeBackground() {
    var index = getIndexOfThis(this,cancelBtns);
    backColorPickers[index].parentNode.style.backgroundColor = "transparent";
    textElems[index].style.backgroundColor = "transparent";
}

var rangeSliders = document.getElementsByClassName("myslider");
var fonts = document.getElementsByClassName("font-size");
for(var i = 0; i<rangeSliders.length; i++){
    rangeSliders[i].addEventListener("input", changeFont);
}

function changeFont() {
    var index = getIndexOfThis(this,rangeSliders);
    fonts[index].innerHTML = this.value;
    textElems[index].style.fontSize = ""+this.value+"px";
}

/************************************** IMAGE PANELS ***************************************/

/* Initialize labels used to change image and its index (tbd when clicked) */
var uploadBtns = document.getElementsByClassName("upload-icon");
var uploadIndex;

/* When image upload label is clicked, its index is determined */
for(var i = 0; i<uploadBtns.length; i++){
    uploadBtns[i].addEventListener("click", updateUploadIndex);
}

function updateUploadIndex() {
    uploadIndex = getIndexOfThis(this, uploadBtns);
}

/* Intialize images on webpage and panels */
var uploadImages = document.getElementsByClassName("upload-img");
var pageImages = document.getElementsByClassName("page-img");

/* Assigning event listener to "Save Changes" button on image upload modal */
var changeImageBtn = document.getElementById("change-image");
changeImageBtn.addEventListener("click", changeImage);

/* Image input field */
var imageInput = document.getElementById("image-input");

/* Gets called to change image once "Save Changes" is clicked using label index */
function changeImage() {
    var url = imageInput.value;
    var pattern = /^((http|https|ftp):\/\/)/;
    if(!pattern.test(url)) {
        url = "https://" + url;
    }
    uploadImages[uploadIndex].src = url;
    pageImages[uploadIndex].src = url;
}

/* Add event listeners to image number input elements */
var imgNums = document.getElementsByClassName("img-num");
for(var i = 0; i<imgNums.length; i++){
    imgNums[i].addEventListener("input", updateImageNum);
}

/* Update number of images shown on page and upload panels */
var imageRows = document.getElementsByClassName("product-images");
var uploadRows = document.getElementsByClassName("upload-row");

var secondImage = [];
var secondUploadImage = [];
var thirdImage = [];
var thirdUploadImage = [];
thirdImage[1] = imageRows[1].removeChild(imageRows[1].lastElementChild);
thirdUploadImage[1] = uploadRows[1].removeChild(uploadRows[1].lastElementChild);

function updateImageNum() {
    var index = getIndexOfThis(this,imgNums);
    console.log(imageRows[index].childNodes);
    if(this.value < imageRows[index].childElementCount) {
        if(this.value == 2) {
            console.log(imageRows[index].childElementCount);
            thirdImage[index] = imageRows[index].removeChild(imageRows[index].lastElementChild);
            thirdUploadImage[index] = uploadRows[index].removeChild(uploadRows[index].lastElementChild);
            imageRows[index].lastElementChild.classList.remove("col-md-4");
            imageRows[index].lastElementChild.classList.add("col-md-5");
            imageRows[index].childNodes[1].classList.remove("col-md-4");
            imageRows[index].childNodes[1].classList.add("col-md-5");
        }
        else if(this.value == 1) {
            secondImage[index] = imageRows[index].removeChild(imageRows[index].lastElementChild);
            secondUploadImage[index] = uploadRows[index].removeChild(uploadRows[index].lastElementChild);
            imageRows[index].childNodes[1].classList.remove("col-md-5");
            imageRows[index].childNodes[1].classList.add("col-md-6");
        }
    }
    else if (this.value > imageRows[index].childElementCount){
        if(this.value == 2) { 
            imageRows[index].childNodes[1].classList.remove("col-md-6");
            imageRows[index].childNodes[1].classList.add("col-md-5");
            imageRows[index].appendChild(secondImage[index]);
            uploadRows[index].appendChild(secondUploadImage[index]);
        }
        else if(this.value == 3) {
            imageRows[index].childNodes[1].classList.remove("col-md-5");
            imageRows[index].childNodes[1].classList.add("col-md-4");
            console.log(imageRows[index].childNodes);
            imageRows[index].lastElementChild.classList.add("col-md-4");
            imageRows[index].lastElementChild.classList.remove("col-md-5");
            imageRows[index].appendChild(thirdImage[index]);
            uploadRows[index].appendChild(thirdUploadImage[index]);
        }
    }
}
  

/***********************************************************************************************************************************************/
function swap(array,index,newIndex){
    var temp = array[index];
    array[index] = array[newIndex];
    array[newIndex] = temp;
}

/* Move sections up/down */
$(".move-down").click(function() {
    var index;
    for (var i = 0; i < siteSections.length-1; i++) {
        if(siteSections[i].id == this.name){
            index = i;
        }
    }
    swap(siteSections,index,index+1);
    for (let item of siteSections) {
        document.getElementById("section-container").appendChild(item);
    }
    swap(panelSections,index,index+1);
    for (let item of panelSections) {
        document.getElementById("accordion").appendChild(item);
    }
});

$(".move-up").click(function() {
    var index;
    for (var i = 1; i < siteSections.length; i++) {
        if(siteSections[i].id == this.name){
            index = i;
        }
    } 
    swap(siteSections,index,index-1);
    for (let item of siteSections) {
        document.getElementById("section-container").appendChild(item);
    }
    swap(panelSections,index,index-1);
    for (let item of panelSections) {
        document.getElementById("accordion").appendChild(item);
    }
});


/************************************** Section Settings ***************************************/
/* Updating header background image */
$('#update-header-image').click(function() {
    var imageUrl = document.getElementById("update-header-image-input").value;
    var pattern = /^((http|https|ftp):\/\/)/;
    if(!pattern.test(imageUrl)) {
        imageUrl = "https://" + imageUrl;
    }
    $('#header').css("background-image", "url(" + imageUrl + ")");   
});

/* Updating section background colour */
var sectionColor = document.getElementById('section-background-color-picker');
sectionColor.addEventListener("input", watchSectionColorPicker);

var sectionId;
var settingIcons = document.getElementsByClassName("section-settings");
for(var i = 1; i < 4; i++) {
    settingIcons[i].addEventListener("click", setSectionId);
}

function setSectionId() {
    sectionId = this.name;
}

function watchSectionColorPicker() {
    this.parentNode.style.backgroundColor = this.value;
}

$("#update-section-color").click(function() {
    console.log(sectionId);
    $('#' + sectionId).css("background-color", sectionColor.value);
});


/************************************** Page Preview and Export ***************************************/
/* Site code export */
$('#export-btn').click(function () { 
    var html = $('#section-container').html();
    var head = "<head>\n<title>Website</title>\n<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous'>\n<link rel='stylesheet' type='text/css' href='https://emilyanas2323.github.io/site.css'>\n</head>\n";
    $('#html-code').val("<html>\n" + head + "<body>" + html + "</body>\n</html>");
});

/* Copy to Clipboard */
function copy() {
    if(this.id == "copy-html") {
        document.querySelector("#html-code").select();
    }
    document.execCommand("copy");
    document.getElementById("copy-message").textContent = "The code has been copied!"
}

document.querySelector("#copy-html").addEventListener("click", copy);
document.getElementById("dismiss-export").addEventListener("click", function() {
    document.getElementById("copy-message").textContent = "";
});


/* Site preview in new tab */
function newWindow_method_1() {
    var html = $('#section-container').html();
    var wi = window.open();
    /*var headHTML = $('head').html();
    $(wi.document.head).html(headHTML);*/
    $(wi.document.head).append("<title>Website Preview</title>");
    $(wi.document.head).append("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossorigin='anonymous'>");
    $(wi.document.head).append("<link rel='stylesheet' type='text/css' href='https://emilyanas2323.github.io/assets/css/editor-site.css'>");
    $(wi.document.body).html(html);
  }
  $('#preview-btn').on('click', function () { 
    newWindow_method_1();
});