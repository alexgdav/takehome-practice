const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGet = function (event) {
  event.preventDefault()
  // console.log('event target is ', event.target)
  const form = event.target
  const formData = getFormFields(form)
  const formDataId = formData.beer.id
  console.log('formData is ', formData.beer.id)
  api.getBeerById(formDataId)
    .then(ui.gotABeer)
}

module.exports = {
  onGet
}
