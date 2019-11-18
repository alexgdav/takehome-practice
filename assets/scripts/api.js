'use strict'

const getBeerById = function (formDataId) {
  return $.ajax({
    url: 'https://api.punkapi.com/v2/beers/' + formDataId,
    method: 'GET'
  })
}

module.exports = {
  getBeerById
}
