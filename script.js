const digimonIMG = document.getElementById("digimonImgShow")
const digimonName = document.getElementById("chosenNameDigimon")
const digimonLevel = document.getElementById("chosenLevelDigimon")
const digimonType = document.getElementById("chosenTypeDigimon")

const fetchDigimon = async (digimon) => {
    const APIResponse = await fetch('http://www.digi-api.com/api/v1/digimon/'+digimon);
    const data = await APIResponse.json();
    const dataDigimon = JSON.stringify(data);
    const digimonData = JSON.parse(dataDigimon)
    return digimonData;
}

const renderDigimon = async(digimon) => {
    const digiData = await fetchDigimon(digimon);
    console.log(digiData)
    digimonName.innerHTML = digiData.name;
    digimonType.innerHTML = digiData.levels['0'].level;
}

renderDigimon('agumon')