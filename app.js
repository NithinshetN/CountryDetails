const countries = document.querySelector(".countries");
const search = document.querySelector(".search");
async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  res.forEach((dat) => {
    showCountry(dat);
  });
}

const showCountry = (data) => {
  const img = data.flags.svg;
  const name = data.name.common;
  const population = data.population;

  const region = data.region;
  const capital = data.capital;
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = `<div class="country-img" id="countryImage">
    <img src="${img}" alt="">
  </div>
  <div class="country-info">
    <h5 class="cName">${name}</h5>
    <p><strong>Population:</strong>${population}</p>
    <p><strong>Region:</strong>${region}</p>
    <p><strong>Capital:</strong>${capital}</p>
  </div>`;
  countries.append(country);
  country.addEventListener("click", () => {
    showCountryDetails(data);
  });
};

getCountry();
const cname = document.getElementsByClassName("cName");
console.log(cname);
search.addEventListener("input", () => {
  Array.from(cname).forEach((ele) => {
    if (ele.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      ele.parentElement.parentElement.style.display = "grid";
    } else {
      ele.parentElement.parentElement.style.display = "none";
    }
  });
});

const countryModal = document.querySelector(".countryModal");

function showCountryDetails(data){
  countryModal.classList.toggle("show");
  const img = data.flags.svg;
  const name = data.name.common;
  const population = data.population;

  const region = data.region;
  const capital = data.capital;

  countryModal.innerHTML = `<button class="back">&#8592; back</button>
  <h1>${name}</h1>
  <div class="modal">
    <div class="leftModal">
      <img src="${img}" alt="">
    </div>
    <div class="rightModal">
      <div class="inner">

        
          <p><strong>Native Name:</strong></p>
          <p><strong>Population:</strong>${population}</p>
          <p><strong>Region:</strong>${region}</p>
          <p><strong>Sub Region:</strong>${data.subregion}</p>
          <p><strong>Capital:</strong>${capital}</p>
          <p><strong>Top Level Domain:</strong></p>
          <p><strong>Currencies:</strong></p>
          <p><strong>Lanuages:</strong>dutch</p>
          <p><strong>Border Countries:</strong></p>
      </div>
    </div>
  </div>`;
  
  const back = countryModal.querySelector(".back");

  back.addEventListener("click", () => {
    countryModal.classList.toggle("show");
  });
};
