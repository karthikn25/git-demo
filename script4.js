


// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

var a=[];
class Movie{
constructor(title,studio,rating){
this.title=title;
this.studio=studio;
this.rating=rating;    
}
getrating() {
return "the rating is  " + this.rating;
}
}

var Movie1 = new Movie ("ponniyin selvan","LYKA","20","Tanjore");
var Movie2 = new Movie ("sarkar","Sun pictures","19", "chennai");
var Movie3 = new Movie ("Leo","Seven screen studio","23","kashmir"); 

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
constructor(title, studio, rating){
    this.title = title;
    this.studio = studio;
    this.rating = "PG";
    }
}
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
