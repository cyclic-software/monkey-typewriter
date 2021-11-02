const prefixes = [
    'wa','de', 're', 'ex', 'in', 'po', 'pro', 'con','auto','ex','extra','hyper','anti','co','in',
    'mono','non','intra','un','post','tele','trans','up'
]
const suffixes = [
    'ion', 'ity', 'ic', 'ical', 'ian', 'ial', 'ious', 'ing', 'ed', 's', 'es', 'acy', 'ate', 'en', 'al', 'fy', 'ify', 'esque', 'able', 'ible', 'ness','ship',
    'sion','ment','ist','ism','ful','y'
]
const voiceless = [
    ['ch',10], ['f',10], ['k',10], ['p',10], ['s',10], ['sh',10], ['t',10]
]
const voiced = [
    ['b', 10], ['d',10], ['g',10], ['j',2], ['l',10], ['m',10], ['n',10], ['ng',2], ['r',10],  ['th',8] , ['v',10], ['w',3], ['y',4], ['z',2]
]
const syls = [
    ['pho',10],['lo', 10], ['di',10], ['ta',10], ['bo',10]
]

const vowels = ['a','e','i','o','u']

const syls_lengths = [
    [1,25],
    [2,10],
    [3,8],
    [4,2],
]

const short_syls_lengths= [
    [1,10],
    [2,20],
]

function weightedRandom(data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
        total += data[i][1];
    }

    const threshold = Math.random() * total;
    total = 0;
    for (let i = 0; i < data.length - 1; ++i) {
        total += data[i][1];
    if (total >= threshold) {
        return data[i][0];
    }
    }

    return data[data.length - 1][0];
}


const sample = (items)=>{
    return items[Math.floor(Math.random()*items.length)];
}
const syl = ()=>{
    let c = weightedRandom(voiced)
    if(Math.random() > 0.6){
        c = weightedRandom(voiceless)
        if(Math.random() > 0.6){
            c = c+sample(vowels)
        }
    }    
    let s = c+ sample(vowels)
    if(Math.random()>0.9){
        s = weightedRandom(syls)
    }
    return s
}

class Monkey {

    static slug(length=1){
        let s = Array.apply(null, Array(length)).map(l=>{
            return this.word()
        })
        return s.join('-')
    }
    static word(){
        let w = [
        ]
        if(Math.random() > 0.2){
            w.push(sample(prefixes))
        }
        

        let syls =  Array.apply(null, Array(weightedRandom(syls_lengths ))).map(l=>{
            return syl()
        })

        w = w.concat(syls)
        if(!w.length){
            w.push(syl())
        }

        let ww  = w.join('')
        
        if(vowels.includes(ww[ww.length-1]) && Math.random() > 0.15 && ww[ww.length-1] !='e'){
            if(Math.random() > 0.8){
                w.push(weightedRandom(voiced))
            }else{
                w.push(weightedRandom(voiceless))
            }
        }

        if(Math.random() > 0.3){
            if(Math.random() > 0.5){
                w.push(weightedRandom(voiced))
            }
            w.push(sample(suffixes))
        }

        let fake_word = w.join('')
        if(fake_word.length < 3){
            fake_word = this.word()
        }
        return fake_word
    }
}

module.exports = Monkey