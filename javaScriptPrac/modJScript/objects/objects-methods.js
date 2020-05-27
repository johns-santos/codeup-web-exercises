// Add a METHOD property to a object

// Can a party of a specified size be seated.
let restaurant = {
    name : 'Mexcian Manhattan',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
       let seatsLeft = this.guestCapacity - this.guestCount;
      return partySize <= seatsLeft;
    },
    seatParty: function (partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCount - partySize

    }
};
restaurant.seatParty(75);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(5));

restaurant.removeParty(20);
console.log(restaurant.checkAvailability(19));
restaurant.seatParty(19);
console.log(restaurant.guestCount);
