let tuning = ['D','A','G','D','A','D']
let capo = 0
let totalNotes = 12
const NOTES=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
const parentDiv = document.getElementById('strings')
function newCapo(note){
    let noteIndex = NOTES.indexOf(note)
    let i = noteIndex
    for(let x of Array(capo+1).keys()){
        withCapo=NOTES[i]
        i++;if(i>11)i=0;
    }
    return withCapo
}
const makeTable=()=>{
    const table = document.createElement('table');table.cellSpacing='0';table.id='table'
    const tbody = document.createElement('tbody');
    table.appendChild(tbody)
    const colgroup = document.createElement('colgroup')
    const toptr = document.createElement('tr')
    table.appendChild(colgroup)
    let stringsArray=[]
    for(let string of tuning){
    let i = 0
    let a = []
    i = NOTES.indexOf(newCapo(string))
    for(let x of Array(totalNotes+1).keys()){
        a.push(NOTES[i])
        i++;if(i>11)i=0;
    }
    stringsArray.push(a)
    }
    for(let x of Array(totalNotes+1).keys()){
        colgroup.appendChild(document.createElement('col'))
        const td = document.createElement('td')
        td.innerText=x
        toptr.appendChild(td)
    }
    tbody.appendChild(toptr)

    for(let arr of stringsArray){
    const tr = document.createElement('tr')
    for(let note of arr){
        const td = document.createElement('td')
        td.innerText=note
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
    parentDiv.appendChild(table)
    }

}

makeTable()
const update=()=>{
    let tbl=document.getElementById('table')
    parentDiv.removeChild(tbl)
    makeTable()
}
document.getElementById('string1').addEventListener('change',()=>{
    tuning[5]= document.getElementById('string1').value
    update()
})
document.getElementById('string2').addEventListener('change',()=>{
    tuning[4]= document.getElementById('string2').value
    update()
})
document.getElementById('string3').addEventListener('change',()=>{
    tuning[3]= document.getElementById('string3').value
    update()
})
document.getElementById('string4').addEventListener('change',()=>{
    tuning[2]= document.getElementById('string4').value
    update()
})
document.getElementById('string5').addEventListener('change',()=>{
    tuning[1]= document.getElementById('string5').value
    update()
})
document.getElementById('string6').addEventListener('change',()=>{
    tuning[0]= document.getElementById('string6').value
    update()
})
document.getElementById('capo').addEventListener('change',()=>{
    capo=parseInt(document.getElementById('capo').value)
    update()
})
