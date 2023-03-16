//b)Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    console.log(result); 
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
      console.log(result);
    }
 var final=result.filter((ele)=>ele.population<200000);

 console.log(final);
}