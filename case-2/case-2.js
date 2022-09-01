import { getCommentData } from "./commentData.js";

const data = getCommentData()

let counter = 0

const commentCounter = (element) => {
    for (const prop in element ) {
        if (element[prop]?.hasOwnProperty('commentContent')) counter++
        
        if (element[prop]?.hasOwnProperty('replies')){
            commentCounter(element[prop]['replies'])
        }
    }

    return counter
}

console.log(commentCounter(data))