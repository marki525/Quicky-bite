const jollibeeMenu=document.getElementById("jollibeeMenu")
const jollibeeListing=document.getElementById("jollibeeListing")

const macdoMenu=document.getElementById("macdoMenu")
const macdo=document.getElementById("macdo")

const mangInasalMenu=document.getElementById("mangInasalMenu")
const mangInasal=document.getElementById("mangInasal")

const kfcMenu=document.getElementById("kfcMenu")
const kfc =document.getElementById("kfc")

const kuyaJMenu=document.getElementById("kuyaJMenu")
const kuyaJ=document.getElementById("kuyaJ")

const greenWichMenu=document.getElementById("greenWichMenu")
const greenWich=document.getElementById("greenWich")

const starbucksMenu=document.getElementById("starbucksMenu")
const starbucks=document.getElementById("starbucks")

const banner=document.getElementById("banner")
const shops=document.getElementById("shops")
const header=document.getElementById("header")
const mainMenu=document.getElementById("menu1")

function openShopMenu(menu){
   console.log("clicked")
   menu.style.display="block";
   mainMenu.style.display="none";
   
}

jollibeeListing.addEventListener("click", () => openShopMenu(jollibeeMenu))
