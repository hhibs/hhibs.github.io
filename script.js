fetch('https://data.cityofnewyork.us/resource/t29m-gskq.json')
  .then((response) => response.json())
  .then((data) => {
    //retrieve keys so we can make a header
    let header_keys = Object.keys(data[0]);
    header_keys.forEach(item => {
     $('#data-head-row').append(`<th>${item}</th>`); 
    });
    
    let dataTable = document.getElementById("data-table");
    
    data.forEach(row => {
        let tableRow = dataTable.insertRow();
        header_keys.forEach(hKey => {
          let cell = tableRow.insertCell();
          cell.innerHTML = row[hKey];
        })
      })
    })
  .catch((err) => console.log(err));