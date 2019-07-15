let risk = 0

// -----1
//get all tickets with userId = x
//userTickets = []
// if (userTickets.length === 1) {
//     return risk += 10
// }


// -----2
//get all tickets with eventId = x
eventTickets = [{}, {}, {}]
// map over the tickets to get the prices
//eventTickets.map(event => event.price)
const ticketsPrice = [10, 20, 10, 20]
const ticketPrice = 30

const priceAverage = (prices) => {
    return prices.reduce((total, curr) => {
        return total + curr
    }, 0) / prices.length
}
console.log('priceAverage:', priceAverage(ticketsPrice))

if (ticketPrice < priceAverage(ticketsPrice)) {
    risk += (priceAverage(ticketsPrice) - ticketPrice)
    console.log('risk:', risk);  
} 
if (ticketPrice > priceAverage(ticketsPrice)) {
    risk -= Math.min((ticketPrice - priceAverage(ticketsPrice)), 10)
    console.log('risk:', risk); 
}

console.log('risk', risk);

// -----3
//get ticket = {}
//ticket.createdAt
