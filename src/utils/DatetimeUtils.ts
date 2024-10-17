const getVNDateStr = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1
    return `${day < 10 ? '0' + day : day} tháng ${month < 10 ? '0' + month : month}, ${date.getFullYear()}`
}

export {
    getVNDateStr
}