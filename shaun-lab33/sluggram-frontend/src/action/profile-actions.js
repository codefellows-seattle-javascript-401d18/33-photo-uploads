import React from 'react';

export const profileSet = profile => ({
    type: 'PROFILE_SET',
    payload: profile,
});

export const profileCreate = profile => ({
    type: 'PROFILE_CREATE',
    payload: profile,
});

export const profileFetchRequest = () => (dispatch, getState) => {
    let {auth} = getState()
    return superagent.get(`${__API_URL__}/profile/${localstorage.userId}`)
    .set('Authorization', `Bearer ${auth}`)
    .then( res =>{
        dispatch(profileSet(res.body))
        return res
    })
}

export const profileCreateRequest = profile => (dispatch, getState) => {
    let {auth} = getState()
    return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${auth}`)
    .field()
}