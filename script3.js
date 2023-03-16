//1)a)print odd numbers in an array?
//Answer:
//Anonymous function:
var a=function(arr){
    for(var i=0;i<arr.length;i++){
          if(arr[i]%2!=0){
             return arr[i];
          } 
     }
     console.log(a(arr[i]));
  }
//IFEEfunction:
    (function(arr){
    for(var i=0;i<arr.length;i++){
               if(arr[i]%2!=0){
                  console.log(arr[i]);
               } 
          }
    })([7,4,9,2,6]);
    

//b)Convert all the strings to title caps in a string array?
//Answer:
//Anonymous function:
var final;
var b=function(str){
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
      final=str.join(" ") 
    } 
    return final;
}
console.log(b(final));


//IFEEfunction:
var final;
(function(str){
str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1); 
      final=str.join(" ");
    } 
    console.log(final);
  })("ALL IS WELL");

//c)sum of all numbers in an array?
//Answer;
//Anonymous function:
var a=function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
       sum=sum+arr[i];
     }
     return sum;
  }
  console.log(a(sum));

//IFEEfunction:

(function(arr){
var sum=0;
    for(var i=0;i<arr.length;i++){
       sum=sum+arr[i];
     }
     console.log(sum);
})([12,13,14,15]);

//d)Return all the prime numbers in an array?
//Answer;
//Anonymous function:
var a=function(arr){
    arr=arr.filter((number)=>{
      for (var i= 2;i<= Math.sqrt(number);i++){
        if(number%i===0){ 
        return false;
        }
      }
      return true;
    });
    console.log(a(arr));
}
//IFEEfunction:
   
 (function(arr){
    arr=arr.filter((number)=>{
      for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
        return false;
        }
      }
      return true;
      console.log(arr);
    });
})([1,2,3,4,5,6]);

//e)Return all the palindromes?
//Answer;
//Anonymous function:
var a=function(arr,n)
{
    for(let i=0;i<n;i++)
    {
        let ans=isPalindrome(arr[i]);
        if (ans==false)
            return false;
    }
    return true;
}
console.log(a(ans));

//IFEEfunction:


 (function(arr, n){
        for (let i=0;i<n;i++){
            let ans=isPalindrome(arr[i]);
            if(ans==false){
                return false;
            }
        }
        return true;
        console.log(ans);
    })([1,2,3],3);


//f)Return median of two sorted arrays of the same size?
//Answer;
//Anonymous function:

var getMedian=function(arr1,arr2,n){
    var i=0; 
    var j=0; 
    var count;
    var m1=-1,m2=-1;
    for (count=0;count<=n;count++){
        if(i==n){
            m1=m2;
            m2=arr2[0];
            break;
        }
        else if(j==n){
            m1=m2;
            m2=arr1[0];
            break;
        }
        if(arr1[i]<=arr2[j]){
            m1=m2;
            m2=arr1[i];
            i++;
        }
        else{
            m1=m2; 
            m2=arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var arr1=[1,12,15,26,38];
var arr2=[2,13,17,30,45];
var n1=arr1.length;
var n2=arr2.length;
if (n1==n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");



//IFEEfunction:

(function(arr1,arr2,n){
  var i=0; 
  var j=0; 
  var count;
  var m1=-1,m2=-1;
  for (count=0;count<=n;count++){
      if(i==n){
          m1=m2;
          m2=arr2[0];
          break;
      }
      else if(j==n){
          m1=m2;
          m2=arr1[0];
          break;
      }
      if(arr1[i]<=arr2[j]){
          m1=m2;
          m2=arr1[i];
          i++;
      }
      else{
          m1=m2; 
          m2=arr2[j];
          j++;
      }
  }

  console.log((m1 + m2)/2);
});var arr1=[1,12,15,26,38];
var arr2=[2,13,17,30,45];


//g)Remove duplicates from an array?
//Answer;
//Anonymous function:

var a=function(arr){
  let dup=[...new Set(arr)];
  return dup;
  console.log(a(dup));
}

//IFEEfunction:

(function(arr){
  let dup=[...new Set(arr)];
  console.log(dup);
 })([1,1,2,3,4]);


 //h)Rotate an array by k times?
 //Answer;
//Anonymous function:
var ans;
var a=function(array , k){
  k = k % a.length;
    if(k < 0){
      k += a.length;
    }


   ans=reverse(a, 0, a.length - k - 1);
   ans=reverse(a, a.length - k, a.length - 1);
   ans=reverse(a, 0, a.length - 1);
    return ans; 
  }
  console.log(a(array,k));
  

//IFEEfunction:
var ans;  
(function(array , k){
  k = k % a.length;
    if(k < 0){
      k += a.length;
    }


    ans=reverse(a, 0, a.length - k - 1);
    ans=reverse(a, a.length - k, a.length - 1);
    ans=reverse(a, 0, a.length - 1);
    console.log(ans);
  })([1,2,3,4] , 2)




//4)Do the below programes in arrow function?
//a)Print odd numbers in an array?
//Answer:

 oddNumbers=(arr)=>{
  for(var i=0;i<arr.length;i++){
       if(arr[i]%2!=0){
          console.log(arr[i]);
       } 
  }
       }
       
//b)Convert all the strings to title caps in a string array?
//Answer:

titleCase=(str)=>{
  str=str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1); 
  } 
  console.log(str.join(" "));
}            


//c)sum of all numbers in an array?
//Answer;

sum=(arr)=>{
var sum=0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
        }
        console.log (sum);
        }

 
//d)Return all the prime numbers in an array?
//Answer:

primeNumber=(numArray)=>{
  numArray=numArray.filter((number)=>{
    for(var i=2;i<=Math.sqrt(number);i++){
      if(number%i===0)return false;
    }
    return true;
  });
  console.log(numArray);
}



//e)Return all the palindromes?
//Answer;

Palindrome=(arr,n)=>{
        for (let i=0;i<n;i++){
            let ans=isPalindrome(arr[i]);
            if(ans==false)
                return false;
        }
        return true;
    }






