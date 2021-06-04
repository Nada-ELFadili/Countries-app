import React , {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import country from './country'
const url = 'https://restcountries.eu/rest/v2/all'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const fetchCountryData = async ()=> {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)   
        }
    useEffect (() => {
        fetchCountryData()
    },[])
// The remove part
    const RemoveCountry = (numericCode) => {
        const newCountry = countries.filter((country)=> country.numericCode !== numericCode) 
        setCountries(newCountry)
    }
// ----------------------------------------
    return (
    <>
    <section className="grid">
        {countries.map((country)=>{
            const { numericCode, name,  population,  region, capital,flag} = country
            return(
                <article key={numericCode}>
                    <div className="flag">
                        <img src={flag} alt={name} />
                    </div>
                    <div className="details">
                        <h4 className='country-name'>
                            Name: <span>{name}</span>
                         </h4>
                        <h4>Population : <span>{population}</span> </h4>
                        <h4>Region : <span>{region}</span> </h4>
                        <h4>Capital : <span>{capital}</span> </h4>
                        <div className="buttons">
                            <Link to={`/countries/${name}`}
                            className="btn">Learn More
                            </Link>
                            <button className="btn" onClick={()=>
                            RemoveCountry(numericCode)}>
                                Remove Country
                            </button>
                            
                        </div>

                    </div>

                </article> 
            )
        })}
    </section>
    </>

    )
}

export default Countries
