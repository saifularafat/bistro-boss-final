/***
 * 01. install stripe and react stripe js
 * 02. create a checkOut form with card element ( card element contains: card number, expiration date, CVS,  zip code )
 * 03. create account on stripe and get the publishable key pk
 * 04. get card information
 * 05. create a payment method
 * 06. user test card to test payment
 * 07. on the server site : install stripe and server rout create
 * npm install --save stripe
 * 08. create a payment intent api with payment method types: 
 * ['card'] make sure you provide amount to cents
 * (multiply price with 100)
 * 09. call payment intent api to  get client secret and store it *     in a state
 * 10. use confirmCardPayment api with client secret cart info.
 * 11. display confirm card error.
 * 12. display confirm card success.
 * 13. do things after payment =====>
*/