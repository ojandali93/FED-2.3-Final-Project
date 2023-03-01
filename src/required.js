const options = {
  method: 'GET',
  url: 'https://zillow56.p.rapidapi.com/search',
  params: {location: 'houston, tx'},
  headers: {
    'X-RapidAPI-Key': '7212486d97mshfab3d9cbd16bae2p1ce0ebjsn37807b3d476b',
    'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
  }
};

const property = {
  method: 'GET',
  url: 'https://zillow56.p.rapidapi.com/property',
  params: {zpid: '7594920'},
  headers: {
    'X-RapidAPI-Key': '7212486d97mshfab3d9cbd16bae2p1ce0ebjsn37807b3d476b',
    'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
  }
};

module.exports = {options, property}