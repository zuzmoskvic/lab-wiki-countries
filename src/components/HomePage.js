import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HomePage(){
    const [countries, setCountries] = useState([]);

      useEffect(() => {
            axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                setCountries(response.data);
            });
        }, []);

    return <div>
        <Navbar /> 
        <div>
            {countries.map((country)=>{
            return <p><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></p>
        })
        }
        </div>
    </div>

}

export default HomePage;