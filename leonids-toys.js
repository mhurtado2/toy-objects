
const toys = [
    {
        id: 1,
        name: "Barbie Teacher Doll",
        maker: "Mattel",
        price: 9.39,
        weight: .54
    },
    {
        id: 2,
        name: "Nerf-Strike Elite Disruptor",
        maker: "Hasbro",
        price: 13.52,
        weight: .33 
    },
    {
        id: 3,
        name: "Kids Hero 16-Mile Range Walkie-Talkies",
        maker: "Cobra",
        price: 39.96,
        weight: .4 
    }
]

const bike = {
        id: 4,
        name: "woom 3 Kids' Bike",
        maker: "woom",
        price: 399.99,
        weight: 13.1 
    }

const jumpingCastle = {
        id: 5,
        name: "Jump 'n Slide Dry Bouncer",
        maker: "Little Tikes",
        price: 187.99,
        weight: 37.5 
    }

toys.push(bike)
toys.push(jumpingCastle)


for (const toy of toys) {
    toy.price = toy.price + (toy.price * .05)
    toy.price = Math.round(toy.price * 100) / 100
}


for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars and weighs ${toy.weight} pounds`)
    }



//extra stuff


const toyToFind = 2

for (const toy of toys) {
    // Only one phone will cause the condition below to evaluate to true
    if (toy.id === toyToFind) {
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars and weighs ${toy.weight} pounds`)
    }
}

/*
for (const toy of toys) {
    console.log(`The price is $${toy.price} dollars!`)
}

//console.log(toys)

*/