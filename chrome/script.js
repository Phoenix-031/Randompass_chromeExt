const generate = document.getElementById('random')
const copy = document.querySelector('.copy-clipboard')
const passLength = document.getElementById('passsize')
const regenerate = document.querySelector('.refresh-btn')
const passSize = document.getElementById('passsize')

const uppercheck = document.getElementById('uppercase')
const lowercheck = document.getElementById('lowercase')
const numbercheck = document.getElementById('numbers')


const getrandomcharfromString = (str)=>{
    return str.charAt(Math.floor(Math.random() * str.length))
}

const genRandomPassword = (len,want_upper,want_lower,want_numbers,want_special)=>{

    const upper = "ABCDEFGHIJKMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const specialchars = "!@#$%^&*"

    let genpass = ""


    for(let i =0;i<len;i++){

        let choice = ""

        if(want_upper === 'true'){
            choice += getrandomcharfromString(upper)
        } 

        if(want_lower === 'true') {
            choice += getrandomcharfromString(lower)
        }

        if(want_numbers === 'true') {
            choice += getrandomcharfromString(numbers)
        }

        if(want_special) {
            choice += getrandomcharfromString(specialchars)
        }
    
        genpass += getrandomcharfromString(choice)

    }
    
    return genpass
}

const getstates = ()=>{
    const want_upper = document.getElementById('uppercase').checked
    const want_lower = document.getElementById('lowercase').checked
    const want_numbers = document.getElementById('numbers').checked
    // document.getElementById('special').checked

    const states = {
        want_upper: `${want_upper}`,
        want_lower: `${want_lower}`,
        want_numbers: `${want_numbers}`,
        want_special:true
    }

    return states
}

const getprintpass = ()=>{
    let passLength = document.getElementById('passsize').value

    passLength = Number(passLength) > 8 ? passLength : 8

    const states = getstates()
    console.log(states)

    let want_upper =  states.want_upper
    let want_lower = states.want_lower
    let want_numbers = states.want_numbers
    let want_special = states.want_special
    
    const getpass = genRandomPassword(Number(passLength),want_upper,want_lower,want_numbers,want_special)

    document.querySelector('.generatedpass').value = getpass
}


const checkboxes = ()=>{
    document.getElementById('uppercase').checked = true
    document.getElementById('lowercase').checked = true
    document.getElementById('numbers').checked = true
}

window.onload = checkboxes

passSize.addEventListener('onChange', ()=>{
    getprintpass()
})

regenerate.addEventListener('click',()=>{
    getprintpass()
})

generate.addEventListener('click',()=>{

    getprintpass()

})

uppercheck.addEventListener('change',(e)=>{

    getprintpass()
})

lowercheck.addEventListener('change',(e)=>{

    getprintpass()
})

numbercheck.addEventListener('change',(e)=>{

    getprintpass()
})

copy.addEventListener('click', ()=>{
    const pass = document.querySelector('.generatedpass')
    navigator.clipboard.writeText(pass.value)
    pass.value = ""
})

