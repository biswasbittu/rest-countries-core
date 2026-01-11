import { use, useState } from "react";
import Country from "../Country/Country";



const Countries = ({ countriesPromise }) => {
    const [visitedCountres, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const countries = use(countriesPromise);
    // console.log(countries)

    const handleVisitedFlag = (flag) => {
        // console.log('flag is added',flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }
    const handleVisitedCountry = (countrys) => {
        //   

        const newCountry = [...visitedCountres, countrys]
        setVisitedCountries(newCountry)
    }
    return (
        <div>
            <h1>Visited Country : {visitedCountres.length} <div>
                {
                    visitedFlags.map(flags =>

                        <div className="avatar p-4">
                            <div className="w-20 rounded">
                                <img
                                    src={flags}
                                    alt="Tailwind-CSS-Avatar-component"
                                />
                            </div>
                        </div>

                    )
                }
                {/* <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={visitedFlags} />
                    </div>
                </div> */}
            </div></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-24">
                {
                    countries.filter(singleCountry => singleCountry.countryInfo._id !== null).map(countrys =>
                        <Country countrys={countrys} key={countrys.countryInfo._id} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}
                        visitedFlags={visitedFlags}></Country>
                    )

                }
            </div>

        </div>
    );
};

export default Countries;