// Z2KFakwx4v0biTFL98Dvf6wAn2zDGge2rtvlvp2XwFsZX0FOR30TpIkR  

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('input[type="search"]');
    const imgContainer = document.getElementById("img1");

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impedisce l'invio predefinito del modulo
        const query = searchInput.value.trim();
        imgContainer.innerHTML = ""; 
        fetchImages(query);
    });
});

function fetchImages(query) {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: "Z2KFakwx4v0biTFL98Dvf6wAn2zDGge2rtvlvp2XwFsZX0FOR30TpIkR"
        }
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error('non ci siamo');  //genera un'eccezione quando viene eseguita, interrompe immediatamente l'esecuzione del codice e restituisce un oggetto di errore.
        }
        return resp.json();
    })
    .then(data => {
        inserisciImg(data);
    })
    .catch(err => console.error("Problem:", err));
}

function inserisciImg(data) {
    let arr = data.photos;
    let element = document.getElementById("img1");
    
    arr.forEach(photo => {
        let url = photo.src.small;
        let img = document.createElement("img");
        img.setAttribute("src", url);
       
        img.classList.add("col-3", "my-2"); 
        element.appendChild(img);
    });
}
