const add_favorite =(character) => {
    const favorites = [];
    if(favorites.find((fav) => fav === character)){
        console.log('encontrado')
    } else {
        favorites.push(...character, character);
        localStorage.setItem('favorites', JSON.stringify(favorites))
        console.log(localStorage)
    }
}

const delete_favorite=(person_favorite) => {
    let filtered = person_favorite.filter((fav) => {
        fav !== person_favorite
    })
    //console.log(filtered)
    person_favorite = filtered
    console.log(person_favorite)
    localStorage.setItem('favorites', JSON.stringify(person_favorite))
}

