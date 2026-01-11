import React, { useState } from 'react';

const Country = ({ countrys,handleVisitedCountry }) => {
    // console.log(countrys)
    const { country, countryInfo, continent, population } = countrys;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // console.log('visited btn clicked')
        setVisited(!visited)
        handleVisitedCountry(countrys)
    }
    return (
        <div className=' mt-16'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='w-fit'
                        src={countryInfo.flag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-48 items-baseline-last'>
                        <h2 className="card-title">{country}</h2>
                        <p className='px-6 py-2 bg-amber-100 rounded-lg text-xl'>{continent}</p>
                    </div>
                    <p>{population}</p>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleVisited()}
                            className={`btn ${visited ? "btn- btn-secondary" : 'btn-primary'}`}>{visited ? "Visited" : 'Not Visited'}</button>
                    </div>
                </div>
            </div>
            {visited && (
                <div role="alert" className="alert alert-info">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg> */}
                    <span>Visited {country}</span>
                </div>
            )}
        </div>
    );
};

export default Country;