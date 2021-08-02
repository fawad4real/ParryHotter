const searchbar = document.getElementById("searchbar");

let data = [];

searchbar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  const filteredChar = data.filter((char) => {
    return (
      char.name.includes(searchString) ||
      char.species.includes(searchString) ||
      char.gender.includes(searchString)
    );
  });
  console.log(filteredChar);
  displayData(filteredChar);
});

const getData = async () => {
  try {
    // const res = await fetch("http://hp-api.herokuapp.com/api/characters");
    const res = await fetch("data-exp.json");
    data = await res.json();
    displayData(data);
  } catch (err) {
    console.log(err);
  }
};

const TPL_Results = (item) => `        
<div class="displaybox">
<div class="img"><img src="${item.image}" alt="" class="image" /></div>
<div class="info"><p class="name">${item.name}</p>
<hr>
<p class="species">Species: ${item.species}</p>
<p class="gender">Gender: ${item.gender}</p>
<p class="house">House: ${item.house}</p>
<p class="dateofbirth">DOB: ${item.dateOfBirth}</p>
<p class="ancestry">Ancestry: ${item.ancestry}</p>
<p class="alive">Alive:${item.alive}</p>
<div class="wand">
  
  <p class="wand">wand</p>
  <p class="wood">Wood: ${item.wand.wood}</p>
  <p class="core">Core: ${item.wand.core}</p>
  <p class="length">Length:${item.wand.length}</p></div>

</div>
</div>`;

const displayData = (data) => {
  document.querySelector("#lisitng").innerHTML = data
    .map((item) => TPL_Results(item))
    .join("");
};

getData();
