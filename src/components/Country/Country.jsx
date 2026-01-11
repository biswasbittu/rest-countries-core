import React from 'react';

const Country = ({ countrys }) => {
    // console.log(countrys)
    const { country, countryInfo, continent, population } = countrys;


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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;