import React from "react";
import { appMapRoutes } from "../../helpers/appMapRoutes";
import { CountryType } from "../../helpers/types";

function CountriesLister({ countries }: {countries: any}) {

    return (
        <div>
            {
                countries.map((data: CountryType) => <div key={ data?.name }><a href={ `${appMapRoutes.CountriesSectionRoute}/${data?._id}` }>{ data?.name }</a> <br/></div>)
            }
        </div>
    )
}

export default CountriesLister;