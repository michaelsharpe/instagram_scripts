import request from 'request-promise-native'

import { userPageUrl } from './instagramApi'

export const getUser = (username) => {
    return request(userPageUrl(username))
    .then((response) => {
        const user = JSON.parse(response).user

        // Return object that is only what we are looking for.
        return {
            username: user.username,
            id: user.id,
            followed_by: user.followed_by.count,
            follows: user.follows.count,
            media_count: user.media.count,
            is_private: user.is_private,
            media: user.media
        }
    })
}
