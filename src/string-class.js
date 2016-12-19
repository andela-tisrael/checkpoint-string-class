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
    return this.replace( /\w/g, ( letter ) => {
      return /[A-Z]/.test( letter ) ? letter.toLower() : letter.toUpper();
    } );
  },

  alternatingCase() {

  },

  getMiddle() {

  },

  numberWords() {

  },

  isDigit() {

  },
  doubleCheck() {

  }
}
Object.assign( String.prototype, StringClass );
