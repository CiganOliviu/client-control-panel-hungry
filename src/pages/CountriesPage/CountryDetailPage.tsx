import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomFetchCountryDetail } from '../../backendApi/apiCalls';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { CountryType } from '../../helpers/types';

function CountryDetailPage() {

    const { id } = useParams();
    const [country, setCountry] = useState<CountryType>();
    const { serverErrorCountryDetail, apiDataCountryDetail } = useCustomFetchCountryDetail(id);

    useEffect(() => {
        if (apiDataCountryDetail) {
            setCountry(apiDataCountryDetail);
        }
    }, [apiDataCountryDetail])

    useEffect(() => {
        if (serverErrorCountryDetail) {
            throw new Error("Error when fetching countries data from restapi");
        }
    }, [serverErrorCountryDetail])
    
    return (
        <div>
            <Header />   
            { country?.name }
            <Footer />
        </div>
    )
}

export default CountryDetailPage;