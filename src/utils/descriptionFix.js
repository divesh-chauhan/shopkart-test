const bigDescription = (text) => {
    return text.length > 150 ? text.slice(0, 150) + '...' : text
}


const smallDescription = (text) => {
    return text.length > 65 ? text.slice(0, 65) + '...' : text
}


export {
    bigDescription,
    smallDescription
}