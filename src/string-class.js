'use strict';
const StringClass = {

  hasVowels() {
    return /[aeiouAEIOU]/g.test( this );
  },

  toUpper() {
    return this.replace( /[a-z]/g, ( character ) => {
      return String.fromCharCode( character.charCodeAt() - 32 );
    } );
  },

  toLower() {
    return this.replace( /[A-Z]/g, ( character ) => {
      return String.fromCharCode( character.charCodeAt() + 32 );
    } );
  },

  ucFirst() {
    return `${this.slice(0,1).toUpper()}${this.slice(1).toLower()}`;
  },

  isQuestion() {
    return /^[A-Za-z0-9\s]+\?$/.test( this.trim() );
  },

  word() {
    return this.replace( /[^\w\s]/g, '' ).split( /\s+/ );
  },

  wordCount() {
    return this.word().length;
  },

  reverseWord() {
    return this.replace( /./g, ( character, index ) =>
      this[ this.length - ( index + 1 ) ] );
  },

  toCurrency() {
    let roundCurrency = String( Math.round( ( ( Number( this ) ) + 0.00001 ) * 100 ) / 100 );
    roundCurrency = roundCurrency.indexOf( '.' ) > -1 ? roundCurrency : roundCurrency + '.00';
    return roundCurrency.replace( /./g, ( number, index ) => {
      return index && number !== "." && ( ( roundCurrency.length - index ) % 3 === 0 ) ? ',' + number : number;
    } );
  },

  fromCurrency() {
    return this.replace( /(,|\.00)/g, '' );
  },

  inverseCase() {
    return this.replace( /\w/g, ( character ) => {
      return /[A-Z]/.test( character ) ? character.toLower() : character.toUpper();
    } );
  },

  alternatingCase() {
    return this.replace( /\w/g, ( character, index ) => {
      return ( index + 1 ) % 2 === 0 ? character.toUpper() : character.toLower();
    } );
  },

  getMiddle() {
    const middle = this.length / 2;
    return ( middle === Math.floor( middle ) ) ?
      this.substr( middle - 1, 2 ) : this.charAt( middle );
  },

  numberWords() {
    const mapNumbers = {
      0: 'zero ',
      1: 'one ',
      2: 'two ',
      3: 'three ',
      4: 'four ',
      5: 'five ',
      6: 'six ',
      7: 'seven ',
      8: 'eight ',
      9: 'nine '
    };

    return this.replace( /\d/g, number => mapNumbers[ number ] ).trim();
  },

  isDigit() {
    return /^[-+]?\d$/.test( this );
  },
  doubleCheck() {
    return /(.)\1/.test( this );
  }
}
Object.assign( String.prototype, StringClass );
