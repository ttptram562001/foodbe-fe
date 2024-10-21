const trueTypeOf = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
const isNumeric = (str: string) => /^\d+$/.test(str);

export {
    trueTypeOf,
    isNumeric
}
