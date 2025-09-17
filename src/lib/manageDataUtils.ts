export function getOnlyDate(date: Date) {
    if(date === null) return "";
    return new Date(date).toLocaleDateString("it-IT", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        }).replace(/\b\w/g, c => c.toUpperCase())
}


export function getOnlyTime(date: Date) {
    if(date === null) return "";
    return new Date(date).toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
    }).replace(/\b\w/g, c => c.toUpperCase())
}