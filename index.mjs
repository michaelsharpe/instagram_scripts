import Post from './modules/post'
import {getUser} from './modules/user'

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});

getUser('goddessprovisions')
    .then((user) => {
        console.log(user)
    })






// Post.analyze("Bb7iuLDAoym")
//     .then((result) => {
//         console.log(result)
//         console.log("done")
//     })

// const Nightmare = require('nightmare')

// Nightmare()
// .goto('https://www.instagram.com/goddessprovisions')
// .evaluate(() => {
//     return document.title;
// })
// .end()
// .then((title) => {
//     console.log(title);
// })