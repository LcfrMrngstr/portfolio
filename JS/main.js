

// Creating a repepating text background for the skills section
const word_list = [ '<span>javascript</span>', '<span>python</span>', '<span>html</span>', '<span>css</span>', '<span>mongodb</span>', '<span>java</span>'];


var count  = 0;
var word_string = '';
var this_word;

while( count<500 ){

    //Getting a random number
    var rand_int = Math.floor((Math.random()*5)+1);
    
    //Getting a random word
    this_word = word_list[rand_int-1];

    //Adding the word to the string
    word_string = word_string+ this_word + ' ';

    count = count + 1
};

console.log(word_string)

//Inserting the string into the html
document.querySelector('#repeat_word_container #wrapper').innerHTML = '<p>'+word_string+'</p>'
