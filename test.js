   import chai, { expect } from 'chai';
   import words from './app/wordocurrence.js';
   const should = chai.should();
	
describe("words()",()=> {
 
  it("counts one word", ()=> {
    
    expect(words("word")).to.deep.equal({ word: 1 });
  });

  it("counts one of each", function() {
    let value = { one: 1, of: 1, each: 1 };
    expect(words("one of each")).to.deep.equal(value);
  });

  it("counts multiple occurrences", function() {
    let value = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(words("one fish two fish red fish blue fish")).to.deep.equal(value);
  });

  it("includes punctuation", function() {
    let value = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
    expect(words("car : carpet as java : javascript!!&@$%^&")).to.deep.equal(value);
  });

  it("includes numbers", function() {
    let value = { testing: 2, 1: 1, 2: 1 };
    expect(words("testing 1 2 testing")).to.deep.equal(value);
  });

  it("respects case", function() {
    let value = { go: 1, Go:1, GO:1 };
    expect(words("go Go GO")).to.deep.equal(value);
  });

  it("counts properly international characters", function() {
    let value = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
    expect(words("¡Hola! ¿Qué tal? Привет!")).to.deep.equal(value);
  });

  it("counts multiple spaces as one", function() {
    let value = { hello: 1, world: 1 };
    expect(words("hello  world")).to.deep.equal(value);
  });

});



