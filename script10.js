//c)Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    console.log(result); 
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result);
      }
    result.forEach(result => {
        console.log(result.name,result.capital,result.flags); 
    });
}



