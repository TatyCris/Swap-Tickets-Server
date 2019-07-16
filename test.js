const moment = require('moment-business-time');


let risk = 0

// -----1
//get all tickets with userId = x
//userTickets = []
// if (userTickets.length === 1) {
//     return risk += 10
// }


// -----2
//get all tickets with eventId = x
// eventTickets = [{}, {}, {}]
// map over the tickets to get the prices
//eventTickets.map(event => event.price)
// const ticketsPrice = [10, 20, 10, 20]
// const ticketPrice = 30

// const priceAverage = (prices) => {
//     return prices.reduce((total, curr) => {
//         return total + curr
//     }, 0) / prices.length
// }
// console.log('priceAverage:', priceAverage(ticketsPrice))

// if (ticketPrice < priceAverage(ticketsPrice)) {
//     risk += (priceAverage(ticketsPrice) - ticketPrice)
//     console.log('risk:', risk);  
// } 
// if (ticketPrice > priceAverage(ticketsPrice)) {
//     risk -= Math.min((ticketPrice - priceAverage(ticketsPrice)), 10)
//     console.log('risk:', risk); 
// }

// console.log('risk', risk);

// -----3
//get ticket = {}
//get ticket.createdAt

// moment.updateLocale('en', {
//     workinghours: {
//         0: ['09:00:00', '17:00:00'],
//         1: ['09:00:00', '17:00:00'],
//         2: ['09:00:00', '17:00:00'],
//         3: ['09:00:00', '17:00:00'],
//         4: ['09:00:00', '17:00:00'],
//         5: ['09:00:00', '17:00:00'],
//         6: ['09:00:00', '17:00:00']
//     }
// })

// const date = '2019-07-13T17:00:00.000Z'
// const now = moment(date).format()


// console.log('now', now)
// console.log('here2', moment(now).isWorkingTime())

// const ticketDateCreated = date
// if (moment(now).isWorkingTime()) {
//     risk -= 10
// } else {
//     risk += 10
// }

// console.log('risk', risk);

// -----4
//get all comments with ticketId = x
// const ticketComments = [{}, {}, {}, {}]
// if (ticketComments.length > 3) {
//     risk += 5
// }

// console.log('risk', risk);

// -----5
// risk = Math.min(risk, 95) || Math.max(risk, 5)
// console.log('risk', risk);








