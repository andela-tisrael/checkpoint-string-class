const expect = require('chai').expect;
require('../public/src/string-class');

describe('String Class', () => {

  describe('hasVowels', () => {
    it('should return true for strings that have vowels in them', () => {
      expect('word'.hasVowels()).to.be.true;
    });
    it('should return true for strings that have vowels no matter the case of the word', () => {
      expect('AndEla'.hasVowels()).to.be.true;
    });
    it('should return false for strings with consonants only', () => {
      expect('cyst'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it('should convert strings in lowercase to uppercase', () => {
      expect('cyst'.toUpper()).to.equal('CYST');
    });
    it('should convert strings with title case to uppercase', () => {
      expect('Cyst'.toUpper()).to.equal('CYST');
    });
    it('should convert strings that are mixed with both lowercase and uppercase to uppercase', () => {
      expect('cYsT'.toUpper()).to.equal('CYST');
    });
    it('uppercase strings should remain in uppercase', () => {
      expect('ANDELA'.toUpper()).to.equal('ANDELA');
    });
  });

  describe('toLower', () => {
    it('should convert strings in uppercase to lowercase', () => {
      expect('ANDELA'.toLower()).to.equal('andela');
    });
    it('should convert strings with title case to lowercase', () => {
      expect('Andela'.toLower()).to.equal('andela');
    });
    it('should convert strings that are mixed with both lowercase and uppercase to lowercase', () => {
      expect('cYsT'.toLower()).to.equal('cyst');
    });
    it('lowercase strings should remain in lowercase', () => {
      expect('andela'.toLower()).to.equal('andela');
    });
  });

  describe('ucFirst', () => {
    it('should return the string with the first letter in upper case', () => {
      expect('tomilayo'.ucFirst()).to.equal('Tomilayo');
    });
    it('should return an unchanged string if first letter is uppercase', () => {
      expect('Andela'.ucFirst()).to.equal('Andela');
    });
  });

  describe('isQuestion', () => {
    it('should return "true" if the entire string is a question', () => {
      expect('How are you?'.isQuestion()).to.be.true;
    });
    it('should return "false" if the entire string is not a question', () => {
      expect('How? are you'.isQuestion()).to.be.false;
      expect('I love biscuit'.isQuestion()).to.be.false;
    });
    it('should return "false" if the string does not contain at least one alphanumeric character', () => {
      expect('?'.isQuestion()).to.be.false;
      expect('???'.isQuestion()).to.be.false;
      expect(' ?'.isQuestion()).to.be.false;
    });
  });

  describe('word', () => {
    it('should return a list of words', () => {
      expect('This is Andela'.word()).to.deep.equal(['This', 'is', 'Andela']);
    });
    it('should return a list of words without special characters', () => {
      expect('$T$$%his i^s A)()ndel###a'.word()).to.deep.equal(['This', 'is', 'Andela']);
    });
  });

  describe('wordCount', () => {
    it('should return the correct number of words', () => {
      expect('This is Andela TIA'.wordCount()).to.equal(4);
      expect('$this: is[] Andel!a'.wordCount()).to.equal(3);
    });
  });

  describe('toCurrency', () => {
    it('should return a currency representation of a number', () => {
      expect('10000.00'.toCurrency()).to.equal('10,000.00');
    });
    it('should return a currency representation with decimals', () => {
      expect('5000'.toCurrency()).to.equal('5,000.00');
    });
    it('should return a currency representation with two decimals', () => {
      expect('123456.78945'.toCurrency()).to.equal('123,456.79');
    });
    it ('should return error for invalid input', () => {
      expect('hello'.fromCurrency()).to.equal('Invalid Input')
    });
  });

  describe('fromCurrency', () => {
    it('should return a number representation of the currency', () => {
      expect('123,456,789.98'.fromCurrency()).to.equal(123456789.98);
    });
    it('should return a number representation of the currency without insignificant zeroes', () => {
      expect('123,456,789.00'.fromCurrency()).to.equal(123456789);
    });
    it ('should return error for invalid input', () => {
      expect('hello'.fromCurrency()).to.equal('Invalid Input')
    });
  });

  describe('inverseCase', () => {
    it('should return each letter of a string in its inverse case', () => {
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
    });
  });

  describe('alternatingCase', () => {
    it('should return an alternating case for each letter in a string starting with lower case', () => {
      expect('Checkpoint'.alternatingCase()).to.equal('cHeCkPoInT');
      expect('string'.alternatingCase()).to.equal('sTrInG');
    });
  });

  describe('getMiddle', () => {
    it('should return the character in the middle of a string', () => {
      expect('world'.getMiddle()).to.equal('r');
    });
    it('should return two characters for a string with an even length', () => {
      expect('worlds'.getMiddle()).to.equal('rl');
    });
  });

  describe('numberWords', () => {
    it('should return words for numbers', () => {
      expect('805'.numberWords()).to.equal('eight zero five');
    });
  });

  describe('isDigit', () => {
    it('should return "true" if string is a digit', () => {
      expect('7'.isDigit()).to.be.true;
    });
    it('should return "false" if string is not a single digit', () => {
      expect('77'.isDigit()).to.be.false;
    });
  });

  describe('doubleCheck', () => {
    it('should return "true" if string contains double characters', () => {
      expect('zz'.doubleCheck()).to.be.true;
      expect('&&'.doubleCheck()).to.be.true;
      expect('  '.doubleCheck()).to.be.true;
      expect('11'.doubleCheck()).to.be.true;
    });
    it('should return true if a string contains double characters', () => {
      expect('11 ddmf  '.doubleCheck()).to.be.true;
    });
    it('should return "false" if string does not contain double characters', () => {
      expect('12'.doubleCheck()).to.be.false;
      expect('az'.doubleCheck()).to.be.false;
      expect(' 1'.doubleCheck()).to.be.false;
      expect('!&'.doubleCheck()).to.be.false;
    });
  });
});
