const heading = document.querySelector("#heading");
const subtitle = document.querySelector("#subheading");
const replyButton = document.querySelector("#reply-button");
const replyMesg = document.querySelector("#reply-message"); 
const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");
const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMesg = document.querySelector("#inbox-message");
const markBtn = document.querySelector("#mark-button");
const closeX = document.querySelector("#close");
const bodyBG= document.querySelector("body");
const nav = document.querySelector(".navbar");
const checkBox = document.querySelector("#checkbox");
const actionBtns = document.querySelector("#action-buttons");
const deleteBtn = document.querySelector("#deleteBtn");
const readBtn = document.querySelector("#readBtn");
const darkModebutton = document.querySelector("#dark-Mode")

const changeFontColor = (e) => { 
    e.target.classList.toggle("blue-text");
}
const subTitle = (e) => {
    bodyBG.classList.toggle("bg-color");
    nav.classList.toggle("bg-color");
    changeFontColor(e);
}

const openMesg = () =>{
    replyMesg.classList.remove("hidden");
}
const closeMesg = () =>{
    replyMesg.classList.add("hidden");
}

const openButton = () =>{
    inbox.classList.add("is-read");
    inboxMesg.classList.remove("hidden");
    markBtn.classList.remove("hidden");
}
const closeBtn = () =>{
    inboxMesg.classList.add("hidden");
}
const markButton = () =>{
    inboxMesg.classList.add("hidden");
    inbox.classList.remove("is-read");
    markBtn.classList.add("hidden");
}

const checkBtn = () =>{
    checkBox.classList.toggle("is-selected");
    actionBtns.classList.toggle("hidden");
}
const deleteMesg = () =>{
    if (deleteBtn.classList.contains("is-selected")){
        checkBox.classList.remove("is-selected");
        deleteBtn.innerHTML = "Delete Message(s)";
        inbox.classList.remove("hidden");
        deleteBtn.classList.remove("is-selected");
    }
    else{
        inbox.classList.add("hidden");
        deleteBtn.innerHTML = "Undo Deletion"
        deleteBtn.classList.add("is-selected");    
    }
}
const readButton = () =>{
    inbox.classList.add("is-read");
    markBtn.classList.remove("hidden");
}
const darkModeBtn = () =>{
    bodyBG.classList.toggle("dmBG");
    nav.classList.toggle("dmBG");
    heading.classList.toggle("dmBG");
    subheading.classList.toggle("dmBG");
    inbox.classList.toggle("ibxDM")
}


heading.addEventListener("click", changeFontColor);
subheading.addEventListener("click", subTitle);
replyButton.addEventListener("click", openMesg);
sendButton.addEventListener("click", closeMesg);
cancelButton.addEventListener("click", closeMesg);
openBtn.addEventListener("click",openButton);
closeX.addEventListener("click", closeBtn);
markBtn.addEventListener("click",markButton);
checkBox.addEventListener("click",checkBtn);
deleteBtn.addEventListener("click", deleteMesg);
readBtn.addEventListener("click", readButton);
darkModebutton.addEventListener("click", darkModeBtn);