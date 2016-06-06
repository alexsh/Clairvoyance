import {
    checkStatus,
    parseJSON
} from './helper.js'

export default function checkAccessToken({
    accessToken
}) {
    const url = `https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${accessToken}`
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(response => {
            return response.data.is_valid
        })

}