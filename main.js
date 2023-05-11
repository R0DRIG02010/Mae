i=1;


 function fotos() 
 {
     i++;

     if(i==4) {
        i=1;
     }

     document.getElementById("mae").src=i+".jpg";

 }