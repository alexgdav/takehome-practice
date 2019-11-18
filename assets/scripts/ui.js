const gotABeer = function (response) {
  console.log('beer is ', response)
  let beerName
  let beerTag
  response.forEach(beer => {
    beerName = beer.name
    return beerName
  })
  response.forEach(beer => {
    beerTag = beer.tagline
    return beerTag
  })

  console.log(beerName, beerTag)
  $('.card-title').html(beerName)
  $('.card-text').html(beerTag)
}

module.exports = {
  gotABeer
}
