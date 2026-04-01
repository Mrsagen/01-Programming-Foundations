
function formatName(name, formatter) {
    return formatter(name);
}

const titleCase = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
const shout = (name) => name.toUpperCase();
const whisper = (name) => name.toLowerCase();

console.log(formatName("kari", titleCase)); // Kari
console.log(formatName("kari", shout));     // KARI
console.log(formatName("KARI", whisper));   // kari