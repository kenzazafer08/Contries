
function refresh(){
    let contry = document.getElementById('contry');
    let h = document.getElementById('result');
    let contryname = contry.value;
    let url = `https://restcountries.com/v3.1/name/${contryname}?fullText=true`;
    fetch(url)
    .then(data => data.json())
    .then(result => h.innerHTML = item(result[0].capital,result[0].name.official,result[0].population,result[0].flags.svg,result[0].continents) );
}
function item(capital,name,population,flag,continents){
    item = `<img src="${flag}" style="width:50%;"/>
    <br>Name : ${name}
    <br>population : ${population}
    <br>Continents : ${continents}
    <br>Capital : ${capital}`;
    return item;
}