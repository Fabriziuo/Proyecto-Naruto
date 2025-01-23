function traerAkatsuki(akatsuki) {
  fetch(`https://narutodb.xyz/api/akatsuki/search?name=${akatsuki}`)
  .then((res )=> res.json())
  .then((data) => {
    crearAkatsuki(data)
  });
}

module.exports = { traerAkatsuki };