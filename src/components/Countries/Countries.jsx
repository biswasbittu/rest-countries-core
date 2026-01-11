import { use } from "react";
import Country from "../Country/Country";



const Countries = ({countriesPromise}) => {
    const countries =use(countriesPromise);
    // console.log(countries)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24">
                {
               countries.filter(singleCountry=>singleCountry.countryInfo._id !== null).map(countrys=>
                <Country countrys={countrys} key={countrys.countryInfo._id}></Country>
               )
               
            }
            </div>

        </div>
    );
};

export default Countries;