
    let string = "";

let buttons = document.querySelectorAll(".button");


Array.from(buttons).forEach(button => {

    button.addEventListener('click', (tar) => {
        if (tar.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (tar.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (tar.target.innerHTML == 'CE') {
            var str =  document.querySelector('input').value;
            newstr=str.substring(0,str.length-1)
            document.querySelector('input').value = newstr;
        }
        else {
            console.log(tar.target);
            string = string + tar.target.innerHTML;
            document.querySelector('input').value = string;
        
        }
          
       })
    });
    
 

    function myfunction() {
        var element= document.body;
        element.classList.toggle('dark-mode');
        // element.classList.toggle('heading');
        var light = document.heading;
        element.classList.toggle('light');  
    }
    
  
