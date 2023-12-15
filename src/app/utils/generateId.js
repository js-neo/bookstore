export function generateId() {
    const characters = "abcdefghijklmnopqrstuvwxyz",
        numbers = "0123456789";
    let id = "";

    for (let i = 0; i < 24; i++) {
        if (i % 2 === 0) {
            id += numbers.charAt(Math.floor(Math.random() * numbers.length));
        } else {
            id += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
    }

    return `_id: "${id}"`;
}

console.log("GENERATE");
