"use strict"

const url = "./hero.json"

fetch(url).then(handleFetch)

function handleFetch(response) {
    if (response.ok) {
        response.json().then((data) => {
            console.log(data);
            addHeroesName(data.members)
        })
    }
}

function addHeroesName(membersArray){
    const select = document.querySelector("#heroes")
    membersArray.forEach((member, index) => {
        const opt = document.createElement("option")
        opt.value = index
        opt.text = member.name
        select.add(opt)
        opt.addEventListener("click", showHeroes(membersArray) )
    });
}

function showHeroes(memberStats) {
    const body = document.querySelector("body")
    body.add()
}