//d)Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    console.log(result); 
    var result=JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result);
    }
        var cusd=result.filter((x)=>{
          for(var i in x.currencies){
            if(x.currencies[i].code==="USD"){
              return true;
            }
          }
        });
        console.log(cusd);
      
    
}



