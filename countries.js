const countries =()=>{


    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))



}
const displayCountries=countries=> {
    console.log(countries);
    // daata zodi array hoy tahole amader map korte hobe 
    const AllcountrieHTML = countries.map(country=>GetCountriesHTML(country))
    // console.log(AllcountrieHTML[0]);
    const container=document.getElementById('countries');
    container.innerHTML=AllcountrieHTML.join(' ');
}

const GetCountriesHTML=country=>{
    console.log(country);

// Object distructure
    const {name,flags}=country

    return `
    <div class="style">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
    </div>
    
    `
}


countries()