class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
   }

  static titleize(sentence) {
    let expected = [];
    let newString =  ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let captSentence = sentence.split( " ")
    for (let x =0; x < captSentence.length; x++){
    if (x == 0){
      expected.push( this.capitalize(captSentence[x]))
    }else if (newString.includes(captSentence[x])){
        expected.push(captSentence[x])
      }else{
        expected.push(this.capitalize(captSentence[x]))
      }

  }
  return expected.join( " ");
}
}

Formatter.capitalize();

Formatter.sanitize();

Formatter.titleize();
