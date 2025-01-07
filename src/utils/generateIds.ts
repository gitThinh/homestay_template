const idRecord: Record<string, number> = {}

export const generateIds = (prefix = "ids_") => {
    if(!idRecord[prefix]) {
        idRecord[prefix] = 0
    }

    const id = ++idRecord[prefix];
    if(prefix === "number") {
        return `${id}`
    }

    return `${prefix}${id}`
}
