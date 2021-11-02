# monkey-typewriter
Randomly generated words and slugs that look and sound like english words
## Infinite monkey theorem
<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chimpanzee_seated_at_typewriter.jpg/440px-Chimpanzee_seated_at_typewriter.jpg" alt="monkey" width="200"/>

The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, such as the complete works of William Shakespeare.

^^ [Totally a real thing!](https://en.wikipedia.org/wiki/Infinite_monkey_theorem)


## The `Monkey`  
Using some basic rules and probabilities in english vocabulary the `Monkey`
comes up with words that look and sound like english words:


```
telebo
kuokesque
taity
nonfees
intave
exlission
unnoful
dengothal
```

## Installation
```
npm i monkey-typewriter
```

Include as:
```
const Monkey = require('monkey-typewriter')
```
or
```
import * as Monkey from 'monkey-typewriter'
```
## Demo
### Check out the live backend express example [deployed on cyclic](https://app.cyclic.sh)

## Usage
The `Monkey` has two methods right now, `word` and `slug`. Both produce unique strings from millions of possible combinations for a low collision probability. 

- `word()` - generates an english sounding word
- `slug(num)` - generates kabob-slugs of length `num` 
  
```js
console.log(Monkey.word())
// > telepop
```
```js
console.log(Monkey.slug())
// > chush
console.log(Monkey.slug(2))
// > memion-exlifacy
console.log(Monkey.slug(3))
// > confuedible-chored-repup
```



----------
### Contributing:
This package is written vanilla javascript and has no dependencies. We suggest to keep the complexity low to eliminate possible security issues

