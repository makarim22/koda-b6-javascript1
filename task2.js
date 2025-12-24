
// 1
const we = {
    are : {
        the : {
            best : "Koda"
        }
    }
};

console.log(we.are.the.best);

// 2


const hello = {
    world : "Hello World"
}
console.log(hello.world);

// 3

const obj = {
    str : [
        [],
        [],
        [],
        [
            [],
            [
                [],
                [],
                {
                    man : [
                        {
                            tech : {
                                    academy : "Tech Academy"
                            }
                        }
                    ]
                }
            ],
            []
        ]
    ]
}

console.log(obj.str[3][1][2].man[0].tech.academy);


// 4
const my =[
    {
        favourite : [
            { fruit: { name : "fruit" , is : "apple"}},
            { fruit: { name : "fruit" , is : "orange"}},
            { fruit: { name : "fruit" , is : "avocado"}},
            { fruit: { name : "fruit" , is : "banana"}}
        ]
    }
]

console.log(my[0].favourite[3].fruit.is);

// 5

const num = {
    first : [15, 16, 17],
    second : [8, 12, 16]
}

console.log(num.first[1] + num.second[2]);




