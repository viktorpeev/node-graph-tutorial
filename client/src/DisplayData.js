import React, { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const QUERY_MOVIES_BY_NAME = gql`
 query getMovieByName($name: String!){
  movie(name: $name) {
    name
    yearOfPublication
    isInTheaters
  }
}
`;
const QUERY_ALL_MOVIES = gql`
 query getMovies{
  movies {
    name
    yearOfPublication
    isInTheaters
  }
}
`;

export const DisplayData = () => {
    const { data, loading } = useQuery(QUERY_ALL_MOVIES);
    const [movieSearched, setMoiveSearched] = useState();
    const [fetchMovie,{data:movieSearchedData,error:movieError}] = useLazyQuery(QUERY_MOVIES_BY_NAME);

    if (loading) {
        return <h1>Loading data..</h1>
    }
    return (
        <div>
            {data && data.movies.map((user) => {
                return (
                    <div key={user.name}>
                        <h1>user id: {user.id}</h1>
                        <h1>user name: {user.name}</h1>
                    </div>
                );
            })}

            <input type='text' placeholder='Enter movie...' onChange={(event) => {
                setMoiveSearched(event.target.value);
            }} />
            <button onClick={()=>{
                fetchMovie({
                    variables:{
                        name:movieSearched
                    }
                });
            }}>Search</button>

            <div>{movieSearchedData &&<h1>{movieSearchedData.movie.name}</h1> }</div>
        </div>
    );
}