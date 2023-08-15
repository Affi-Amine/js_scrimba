const player = {
    essm : 'maynewi jemla',
    club : 'reak madrid sahby',
    address : {
        city : 'madrid',
    }
};

// we can do the log this way 
console.log(player.address.city)
// or we can do it the easier way
const {name, club, address: {city}} = player;

console.log(city)

document.querySelector("#mathalan").innerHTML = city