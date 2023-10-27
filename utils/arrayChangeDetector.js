function arrayChangeDetector(arr1, arr2) {
    let checked = {}

    for (const item of Object.keys(arr1)) {
        if (arr1[item] != arr2[item]) {
            checked[item] = arr1[item]
        }
    }

    return checked
}

export default arrayChangeDetector