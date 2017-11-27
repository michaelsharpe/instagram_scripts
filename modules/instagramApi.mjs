export const BASEURL = 'https://www.instagram.com'
export const QUERYURL = `${BASEURL}/graphql/query`

export const userPageUrl = (username) => `${BASEURL}/${username}/?__a=1`
export const mediaDetailUrl = (mediaId) => `${BASEURL}/p/${mediaId}/?__a=1`
export const accountPostsUrl = (username, maxId = 100) => `${BASEURL}/${username}/?__a=1&max_id=${max_id}`

export const commentsPage = (shortcode, first, endCursor) => buildQuery('17852405266163336', shortcode, first, endCursor)
export const userPostsPage = (userId, first, endCursor) => `${QUERYURL}/?query_id=17888483320059182&id=${user_id}&first=${first}&after=${endCursor}`

const buildQuery = (queryId, shortcode, first, endCursor) => `${QUERYURL}/?query_id=${queryId}&shortcode=${shortcode}&first=${count}&after=${end_cursor}`
