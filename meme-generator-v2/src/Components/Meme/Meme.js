import React, { useEffect, useState } from 'react'

export const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        const getMemes = async () => {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    };

    return (
        <main>
            <div className='form'>
                <input
                    className='form--input'
                    type='text'
                    placeholder='Top Text'
                    name="topText"
                    value={Meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className='form--input'
                    type='text'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image' alt='new random meme' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
