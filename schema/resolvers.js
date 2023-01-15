const {UserList,MovieList} = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query:{
        users: ()=>{
            return UserList;
        },
        user:(parent,args)=>{
            const id = args.id
            const user = _.find(UserList,{id:Number(id)})
            return user;
        },
        movies: ()=>{
            return MovieList;
        },
        movie: (parent,args)=>{
            const yearOfPublication= args.yearOfPublication;
            const movie = _.find(MovieList,{yearOfPublication:Number(yearOfPublication)})
            return movie;
        }
    },
    User: {
        favoriteMovie: ()=>{
            return _.filter(
                MovieList,
                (movie)=>
                movie.name='Batman'
            );
        }
    }
}

module.exports = {resolvers};