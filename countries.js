const countries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))

}
const displayCountries=countries=> {
    console.log(countries);
    // daata zodi array hoy tahole amader map korte hobe 
    const AllcountrieHTML = countries.map(country=>GetCountriesHTML(country))
    console.log(AllcountrieHTML[0]);
    const container=document.getElementById('countries');
    container.innerHTML=AllcountrieHTML.join(' ');
}

// option 03 (paraneter use)

const GetCountriesHTML=({name,flags,area})=>{
    return `
    <div class="style">
    <h2>${name.common}</h2>
    <p>Area:${area}</p>
      <img src="${flags.png}">
     </div>
    `;

}

// option 01 orginal

/* // return `
    // <div class="style">
    // <h2>${country.name.common}</h2>
    // <img src="${country.flags.png}">
    // </div>
    //
    `;
    // option distructure 02
    // const GetCountriesHTML=country=>{
    //     const {name,flags}=country;
    //     return `
    //     <div class="style">
    //     <h2>${name.common}</h2>
    //     <img src="${flags.png}">
    //     </div>
    //     `; */




countries()