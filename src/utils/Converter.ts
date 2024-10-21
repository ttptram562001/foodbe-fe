const jsonToFormData = (json: {
    [key: string]: string | Blob | null | undefined
}): FormData => Object.keys(json).reduce((formData, key) => {
    const value = json[key]
    formData.append(key, value ?? "");
    return formData;
}, new FormData());

export {
    jsonToFormData
}