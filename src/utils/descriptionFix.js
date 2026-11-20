const bigDescription = (text) => {
    return text.length > 85 ? text.slice(0, 85) + '...' : text
}


const smallDescription = (text) => {
    return text.length > 65 ? text.slice(0, 65) + '...' : text
}


export {
    bigDescription,
    smallDescription
}