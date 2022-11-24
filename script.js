const digimonIMG = document.getElementById("digimonImgShow")
const digimonName = document.getElementById("chosenNameDigimon")
const digimonLevel = document.getElementById("chosenLevelDigimon")
const digimonType = document.getElementById("chosenTypeDigimon")
const digimonSkill1 = document.getElementById('skillDigimon1')
const digimonSkill2 = document.getElementById('skillDigimon2')
const digimonSkill3 = document.getElementById('skillDigimon3')
const digimonEvolution1 = document.getElementById('nextEvolution1')
const digimonEvolution1Name = document.getElementById('nextEvolution1Name')
const digimonEvolution2 = document.getElementById('nextEvolution2')
const digimonEvolution2Name = document.getElementById('nextEvolution2Name')
const digimonPriorEvolution1Name = document.getElementById('priorEvolution1Name')
const digimonPriorEvolution1 = document.getElementById('priorEvolution1')
const digimonPriorEvolution2Name = document.getElementById('priorEvolution2Name')
const digimonPriorEvolution2 = document.getElementById('priorEvolution2')

const fetchDigimon = async (digimon) => {
    const APIResponse = await fetch('http://www.digi-api.com/api/v1/digimon/'+digimon);
    const digimonData = await APIResponse.json();
    return digimonData;
}

const renderDigimon = async(digimon) => {
    const digiData = await fetchDigimon(digimon);
    console.log(digiData)
    digimonName.innerHTML = digiData.name;
    digimonType.innerHTML = digiData.levels['0'].level;
    digimonIMG.src = digiData.images['0'].href
    digimonSkill1.innerHTML = digiData.skills['0'].skill;
    digimonSkill2.innerHTML = digiData.skills['1'].skill;
    digimonSkill3.innerHTML = digiData.skills['2'].skill;
    // digimonEvolution1.src = digiData.nextEvolutions;
    digimonEvolution1Name.innerHTML = digiData.nextEvolutions['0'].digimon;
    digimonEvolution2Name.innerHTML = digiData.nextEvolutions['1'].digimon;
    digimonPriorEvolution1Name.innerHTML = digiData.priorEvolutions['0'].digimon;
    digimonPriorEvolution2Name.innerHTML = digiData.priorEvolutions['1'].digimon;
    ;
}

renderDigimon('Seraphimon')