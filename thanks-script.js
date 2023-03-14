window.addEventListener('load', () => {

    const rating = sessionStorage.getItem("rating");
    if (rating != undefined) {
        document.getElementById('rating').innerHTML = `You selected ${rating} out of 5`;
    } else {
        document.getElementById('rating').innerHTML = `You didn't select a rating :(`;
        
    }
    
})