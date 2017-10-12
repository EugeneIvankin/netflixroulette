import { GET_MOVIES_BY_NAME_REQUEST, GET_MOVIES_BY_DIRECTOR_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERR } from '../constants/SearchMovies'


export function getMoviesByName(name) {
    return function (dispatch) {
        dispatch({
            type: GET_MOVIES_BY_NAME_REQUEST,
            payload: name
        });
        getMovies(name,dispatch)
    }
}

function getMovies(name, dispath) {

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    function json(response) {
        return response.json()
    }

    fetch(`https://netflixroulette.net/api/api.php?director=${name}`)
        .then(status)
        .then(json)
        .then(function(data) {
            dispath({
                type: GET_MOVIES_SUCCESS,
                payload: data
            });
        }).catch(function() {
            dispath({
                type: GET_MOVIES_ERR,
            });
    });

    /**fetch(`https://netflixroulette.net/api/api.php?title=${name}`)
        if (response.status>= 200 && response.status < 300){

        .then(function(response) {
                return response.json()
            })
                .then(function (json) {
                    dispath({
                        type: GET_MOVIES_SUCCESS,
                        payload: json
                    })
                })
        }

        .catch(function (err) {
            console.log('err '+err);
            dispath({
                type: GET_MOVIES_ERR,
            })
        })*/
}



