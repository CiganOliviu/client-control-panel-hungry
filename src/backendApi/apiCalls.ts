import { requestUrls } from "./requestUrls"
import useCustomFetch from "./useCustomFetch"

export const useCustomFetchCountries = () => {
    const {
        error: serverErrorCountries,
        data: apiDataCountries,
        isLoading: isLoadingCountries,
    } = useCustomFetch(requestUrls.fetchCountries);

    return { isLoadingCountries, serverErrorCountries, apiDataCountries };
}

export const useCustomFetchCountriesDetail = (name: string) => {
    const {
        error: serverErrorCountriesDetail,
        data: apiDataCountriesDetail,
        isLoading: isLoadingCountriesDetail,
    } = useCustomFetch(`${requestUrls.fetchCountries}/${name}`)

    return { isLoadingCountriesDetail, serverErrorCountriesDetail, apiDataCountriesDetail}
}