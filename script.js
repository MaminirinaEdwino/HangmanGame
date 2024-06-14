var clavier = document.getElementById('clavier')
var indiceDiv = document.getElementById('indice') 
var tete = document.getElementById('tete')
var corps = document.getElementById('corps')
var maind = document.getElementById('maind')
var maing = document.getElementById('maing')
var piedd = document.getElementById('piedd')
var piedg = document.getElementById('piedg')
let cla = []
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

for (let index = 0; index < alphabet.length; index++) {
    //cla.push(`<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] +`</button>`)
    clavier.innerHTML += `<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] + `</button>`
}
console.log(cla)

function GenererNombreAleatoire(maximum, minimum) {
    let nombre = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

    return nombre
}
let indice = [
    'teste',
    'Famarana vary fotsy',
    'le boka mitaingina seza',
    'Afaka hitondrana rano',
    'mangidy',
    'mavo mavo',
    'mofo sira',
    'marikivy',
    'Joe la ...',
    'pop corn',
    'tsy masaka',
    'ile ',
    'gouanomad'
]
let dictionnaire = [
    'TESTE',
    'KAPOKA',
    'MANANASY',
    'TAVOANGY',
    'ANGIVY',
    'VOTAVO',
    'RAMANONAKA',
    'VOSARY',
    'AKONDRO',
    'KATSAKA',
    'MANTA',
    'MAURICE',
    'ZEZIKA'
]
let faute = 0
let nbrFaute = document.getElementById('nbrFaute')
let mot = document.getElementById('motRechercher')
let numMot;
let point = 0
const ecrire = (valeur) => {

    //alert(mot.textContent[1])
    let solution = dictionnaire[numMot]
    //alert(solution)
    let vrai = true
    let tableau = [];
    for (let index = 0; index < solution.length; index++) {
        tableau.push(mot.textContent[index])
    }
    for (let index = 0; index < solution.length; index++) {
        if (mot.textContent[index] == '_' && solution[index] == valeur) {
            //alert('marina')
            //alert(tableau)
            tableau[index] = solution[index]
            vrai = true
            break
        } else {
            vrai=false
        }
    }
    if (!vrai) {
        faute++
        nbrFaute.textContent = point
    }
    mot.textContent = ''
    for (let index = 0; index < tableau.length; index++) {
        mot.textContent += tableau[index]
    }
    if (faute == 0) {
        tete.style.display = 'none'
        corps.style.display = 'none'
        piedd.style.display = 'none'
        piedg.style.display = 'none'
        maing.style.display = 'none'
        maind.style.display = 'none'
    }
    if (faute == 1) {
        tete.style.display = 'block'
    }
    if (faute == 2) {
        corps.style.display = 'block'
    }
    if (faute == 3) {
        maind.style.display = 'block'
    }
    if (faute == 4) {
        maing.style.display = 'block'
    }
    if (faute == 5) {
        piedd.style.display = 'block'
    }
    if (faute == 6) {
        clavier.innerHTML = 'GAME OVER'
        mot.textContent = solution
        piedg.style.display = 'block'
        
    }
    if (mot.textContent == solution) {
        point++
        nbrFaute.textContent = point
        setTimeout(() => {
            mot.textContent = 'Mot suivant'
            indiceDiv.textContent = ''
        }, 2000);
        setTimeout(() => {
            //alert('point '+point)
            lancer2()
        }, 3000);

    }
}

const lancer = () => {
    tete.style.display = 'none'
    corps.style.display = 'none'
    piedd.style.display = 'none'
    piedg.style.display = 'none'
    maing.style.display = 'none'
    maind.style.display = 'none'
    clavier.innerHTML = ''
    faute = 0
    point = 0
    for (let index = 0; index < alphabet.length; index++) {
        //cla.push(`<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] +`</button>`)
        clavier.innerHTML += `<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] + `</button>`
    }
    numMot = GenererNombreAleatoire(dictionnaire.length - 1, 0)
    var mots = dictionnaire[numMot]

    //console.log(mots)
    mot.textContent = mots
    indiceDiv.textContent = indice[numMot]
    if (mots.length <=5) {
        mot.textContent = mot.textContent.replace(/[^A]/g, '_')
    }
    if (mots.length >=5 || mots.length <=7) {
        mot.textContent = mot.textContent.replace(/[^AE]/g, '_')
    }
    if (mots.length >=8) {
        mot.textContent = mot.textContent.replace(/[^AE0]/g, '_')
        mot.textContent = mot.textContent.replace('A', '_')
    }
    //mot.textContent = mot.textContent.replace(mot.textContent[0], 't')
    //alert(numMot)
}
const lancer2 = () => {
    tete.style.display = 'none'
    corps.style.display = 'none'
    piedd.style.display = 'none'
    piedg.style.display = 'none'
    maing.style.display = 'none'
    maind.style.display = 'none'
    clavier.innerHTML = ''
    faute = 0
    for (let index = 0; index < alphabet.length; index++) {
        //cla.push(`<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] +`</button>`)
        clavier.innerHTML += `<button class="lettre" onclick="ecrire('` + alphabet[index] + `')">` + alphabet[index] + `</button>`
    }
    numMot = GenererNombreAleatoire(dictionnaire.length - 1, 0)
    var mots = dictionnaire[numMot]

    //console.log(mots)
    mot.textContent = mots
    indiceDiv.textContent = indice[numMot]
    if (mots.length <= 5) {
        mot.textContent = mot.textContent.replace(/[^A]/g, '_')
    }
    if (mots.length >= 5 || mots.length <= 7) {
        mot.textContent = mot.textContent.replace(/[^AE]/g, '_')
    }
    if (mots.length >= 8) {
        mot.textContent = mot.textContent.replace(/[^AE0]/g, '_')
        mot.textContent = mot.textContent.replace('A', '_')
    }
    //mot.textContent = mot.textContent.replace(mot.textContent[0], 't')
    //alert(numMot)
}