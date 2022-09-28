const axios = require("axios");
const jwt = require("jsonwebtoken")

const home = async (req, res) => {
    const email = req.session.email
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    res.render('index', { characters: data.results, email })
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

const login_page = (req, res) => {
    const email = req.session.email;
    res.render('login', {email: email})
}

const login = (req, res) => {
    const { email, password } = req.body;
    
    if(email === 'admin@gmail.com' && password == 'admin'){
        req.session.email = email;
        res.redirect('private')
    } else {
        res.redirect('login')
    }
}

const private = (req, res) => {
    const email = req.session.email;
    res.render('private', { email: email });
}   
const logout = (req, res) => {
    delete req.session.email
    return res.redirect('/')
}   

module.exports = {
    home,
    location,
    episodes,
    characterById,
    locationById,
    episodeById,
    login_page,
    login, 
    private,
    logout
}