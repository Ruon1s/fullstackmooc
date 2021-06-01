import React, {useState, useEffect} from 'react';
import Languages from './Languages'
import axios from 'axios';

const SingleCountry = (props) => {
    const {name, capital, population, languages, flag} = props.country[0];
    console.log(name, capital, population, languages, flag)
    console.log('lang', languages[0].name);
    const [weather, setWeather] = useState({});

    useEffect(() => {
            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(response => {
              console.log('promise fulfilled');
              console.log('weather data' ,response.data);
              setWeather(response.data);
            });
          }, []);
          console.log('render', weather)

    return(
        <div>
        <h1>{name}</h1>
        <p>capital {capital}</p>
        <p>population {population}</p>
        <h2>languages</h2>
        <ul>
        { languages.map(language => <Languages key={language.name} language={language.name}/>) }
        </ul>
        <img src={flag} style={{height: '100px'}} alt={'flag'}/>
        {weather.main &&
        <>
        <h2>Weather in {capital}</h2>
        <h3>temperature: {weather.main.temp} C°</h3>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} style={{height: '80px'}} alt={weather.weather[0].description}/>
        <p>{weather.weather[0].description}</p>
        </>
        }
        </div>
        
    );
}

export default SingleCountry;