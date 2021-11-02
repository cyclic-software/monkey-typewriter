var assert = require('assert');
var Monkey = require('../index.js');

describe('monkey-typewriter', function () {
    it('types a word', function () {
        for (let i=0; i<20;i++){
            console.log(Monkey.word())
        }
        let word = Monkey.word()
        console.log(word)
        assert.ok(word.length, 'word is not empty');
    });
    it('types a sentense', function () {
        let words =  Array.apply(null, Array(Math.floor(Math.random() * 6)+1)).map(l=>{
            return Monkey.word() 
        })

        
        let sentence = words.join(' ')
        console.log(sentence)
        assert.ok(sentence.length, 'sentence is not empty');
    });

})