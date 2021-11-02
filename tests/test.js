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
    it('types a slug', function () {
        let slug = Monkey.slug(2)
        console.log(slug)
        assert.ok(slug.length, 'slug is not empty');
    });

})