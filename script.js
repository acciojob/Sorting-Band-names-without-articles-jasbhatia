//your code here
const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)
document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('');