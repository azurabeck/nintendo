
const axios = require('axios');

export const getToken = () => (dispatch) => {    
    try {
        const clientID = 'gpkejle7ires8akrw6579mrcn9c33d'
        const clientSecret = '96lpr5pckln0qqeogpc2wjmlj83o4m' 

        axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`)
        .then(response => {
            dispatch({ type: 'GET_TOKEN_SUCCESS', payload: response.data })
        }).catch(error => {
             dispatch({ type: 'GET_TOKEN_ERROR', payload: { msg: error } });
        })
    } catch (error) {
        dispatch({ type: 'GET_TOKEN_ERROR', payload: { msg: error } });
        throw error
    }
}

export const getGameList = (access_token) => async (dispatch) => {  

    const Authorization = access_token ? `Bearer ${access_token}` : null

    const url = 'https://api.igdb.com/v4/games'
    const options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
            'client-id': 'gpkejle7ires8akrw6579mrcn9c33d' , 
            'authorization': Authorization
        })
    };


    try {        
        await axios(url, options)
        .then(response => {
            console.log('to aqui: ' , response)
            dispatch({ type: 'GET_GAME_AZ_SUCCESS', payload: response.data })
        }).catch(error => {
             console.log(error )
             dispatch({ type: 'GET_GAME_AZ_ERROR', payload: { msg: error } });
        })
    } catch (error) {
        dispatch({ type: 'GET_GAME_AZ_ERROR', payload: { msg: error } });
        throw error
    }
}
