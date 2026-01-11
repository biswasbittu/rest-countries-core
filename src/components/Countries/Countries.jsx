import { use, useState } from "react";
import Country from "../Country/Country";



const Countries = ({countriesPromise}) => {
    const[visitedCountry,setVisitedCountry]=useState([])
    const countries =use(countriesPromise);
    // console.log(countries)
    const handleVisitedCountry = (countrys)=>{
        alert('Clicked from Countried')
        console.log(countrys)
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24">
                {
               countries.filter(singleCountry=>singleCountry.countryInfo._id !== null).map(countrys=>
                <Country countrys={countrys} key={countrys.countryInfo._id} handleVisitedCountry={handleVisitedCountry}></Country>
               )
               
            }
            </div>

        </div>
    );
};

export default Countries;