import { GET_MOVIES_BY_NAME, GET_MOVIES_BY_DIRECTOR } from '../constants/SearchMovies'


export function getMoviesByName(name) {

    console.log(name);

    return {
        type: GET_MOVIES_BY_NAME,
        payload: name
    }

    fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
        .then(response=>{

        })


       /* netflixroulette.createRequest(name, function (resp) {

            console.log("Breaking Bad's Summary = " + resp.summary);


        });*/

}



/*
export function getMoviesByDirector(director) {
    return {
        type: GET_MOVIES_BY_DIRECTOR,
        payload: director
    }
}*/