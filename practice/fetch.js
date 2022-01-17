var getData;

const button = document.getElementById("btn");

button.addEventListener("click", RemoveCountry());

fetch("https://restcountries.eu/rest/v2")
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((err) => {
    console.error(err);
  });

function showData(fetchedData) {
  var table = `<table style= "border:1px">
  <tr>
    <th>Country Name</th>
    <th>Languages</th>
    <th>Flag</th>
    <th>Population</th>
    </tr>

    ${fetchedData
      .map((row) => {
        return `<tr><td>${row.name}</td>
        <td>${row.languages[0].name}</td>
        <td> <img src = ${row.flag} height = 100px></td>
        <td>${(row.population / 1000000).toFixed(2)} M. </td></tr>`;
      })
      .join(" ")}
    </table>`;

  console.log(fetchedData);
  console.log(table);

  document.getElementById("demo").innerHTML = table;
}

function RemoveCountry(deleteme) {
  for (var i = 0; i < fetchedData.length; i++) {
    var obj = fetchedData[i];
    if (obj.id === deleteme.id) {
      arrayOfObjects.splice(i, 1);
      i--;
    }
  }
}
