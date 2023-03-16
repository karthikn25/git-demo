function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    
    ele.setAttribute(attrname,attrvalue);
    
    ele.innerHTML=content;
    
    return ele;
    
    }
    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
    
    }
    
    function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
    
    }
    var firstname=labels("label","for","firstname","firstname");
    var br=linebreak("br");
    var input=inputs("input","type","firstname","name","firstname","id","firstname");
    var br1=linebreak("br");
    var middlename=labels("label","for","middlename","middlename");
    var br2=linebreak("br");
    var input1=inputs("input","type","middlename","name","middlename","id","middlename");
    var br3=linebreak("br");
    var lastname=labels("label","for","lastname","lastname");
    var br4=linebreak("br");
    var input2=inputs("input","type","lastname","name","lastname","id","lastname");
    var br5=linebreak("br");
    var email=labels("label","for","email","email");
    var br6=linebreak("br");
    var input3=inputs("input","type","email","name","email","id","email");
    var br7=linebreak("br");
    var pass=labels("label","for","password","Password");
    var br8=linebreak("br");
    var input4=inputs("input","type","password","name","passowrd","id","password");
    
    document.body.append(firstname,br,input,br1,middlename,br2,input1,br3,lastname,br4,input2,br5,email,br6,input3,br7,pass,br8,input4);