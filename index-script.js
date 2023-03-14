let rating;

document.querySelectorAll('input').forEach((element, index, array) => { 
    element.addEventListener('click', event => {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.remove("selected");
        }
        
        element.classList.add("selected");
        rating = element.value;
        sessionStorage.setItem("rating" , rating);
        }
       )
      }
     );



     