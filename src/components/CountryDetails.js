import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function CountryDetails() {
    let { alpha3Code } = useParams();
    const [country, setCountry] = useState(null);

      useEffect(() => {
        if (alpha3Code) {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
          .then((response) => {
            setCountry(response.data);
          });
        }
      }, [alpha3Code]);

    return (<div>
    <Navbar />
{
      country ? 
      <>
          <h1>{country.name.common}</h1>
          <table className="table">
          <tbody>
              <tr>
              <td style={{width: "50%"}}>Capital of the Country</td>
              <td>{country.capital[0]}</td>
              </tr>
              <tr>
              <td>Area</td>
              <td>
                  {country.area} km
                  <sup>2</sup>
              </td>
              </tr>
              <tr>
              <td>Borders</td>
              <td>
                  <ul>

                  

                  </ul>
              </td>
              </tr>
          </tbody>
          </table>

      </>

      : (<p>Checking...</p>)
  }

    </div>)
}

export default CountryDetails;