// const response  = require("express")

console.log('Client side javascript file is loaded!')

const locationData = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message1')
let messageTwo = document.querySelector('#message2')

locationData.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(search.value)

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch('/weather?address=' + search.value).then((response) => {
        // console.log(response)
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                // return console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.longitude
            }

        })
    })
})