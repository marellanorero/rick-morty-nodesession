const axios = require("axios");

const home = async (req, res) => {

    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    res.render('index', { characters: data.results })
}

const characterById = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    res.render('characterById', { character: data })
}

const location = async (req, res) => {

    const { data } = await axios.get('https://rickandmortyapi.com/api/location');
    res.render('location', { locations: data.results })
}

const locationById = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    res.render('locationByID', { location: data })
}

const episodes = async (req, res) => {

    const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
    res.render('episodes', { episodes: data.results })
}

const episodeById = async (req, res) => {

    let id = req.params.id;

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    res.render('episodeByID', { episode: data })
}




module.exports = {
    home,
    location,
    episodes,
    characterById,
    locationById,
    episodeById
}