const titleFix = (title='') => {
 return title.length > 15 ? title.slice(0, 15) + '...' : title;
}

export default titleFix