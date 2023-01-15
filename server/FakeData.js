const UserList = [
    {
        id: 1,
        name: 'John',
        username: 'joseph',
        age: 20,
        nationality: 'CANADA',
        friends:[
            {
                id: 2,
                name: 'Pepe', 
                username: 'pepethefrog',
                age: 20,
                nationality: 'BRAZIL',
            },
            {
                id: 3,
                name: 'Mata',
                username: 'matahari',
                age: 20,
                nationality: 'NETHERLANDS',
            },

        ]
    },
    {
        id: 2,
        name: 'Pepe', 
        username: 'pepethefrog',
        age: 20,
        nationality: 'BRAZIL',
        friends:[
            {
                id: 4,
                name: 'Monkey',
                username: 'monkeypox',
                age: 50,
                nationality: 'AFRIKA',
            },
        ]
    },
    {
        id: 3,
        name: 'Mata',
        username: 'matahari',
        age: 20,
        nationality: 'NETHERLANDS',
    },
    {
        id: 4,
        name: 'Monkey',
        username: 'monkeypox',
        age: 50,
        nationality: 'AFRIKA',
    },
    {
        id: 5,
        name: 'Molly',
        username: 'mollybloom',
        age: 37,
        nationality: 'UNITEDSTATES',
    },
];

const MovieList = [
    {
        id: 1,
        name:'Batman',
        yearOfPublication: 1984,
        isInTheaters:false
    },
    {
        id: 2,
        name:'Joker',
        yearOfPublication: 2020,
        isInTheaters:true
    }
];

module.exports = {UserList,MovieList};
