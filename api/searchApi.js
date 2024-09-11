import axios from "axios"


export const fetchData = async (query) => {
    try {
        //https://autocomplete.search.hereapi.com/v1/autocomplete?q=Ha&in=countryCode:VNM&limit=5&apiKey=ZpHJUnwdK8k2nTUgzMnSDggQOnjGe2F1xpxacCgIlQ4

        //https://autosuggest.search.hereapi.com/v1/autosuggest?at=21.0278,105.8342&q=Hanoi&limit=5&apiKey=ZpHJUnwdK8k2nTUgzMnSDggQOnjGe2F1xpxacCgIlQ4
        
        const api = `https://autosuggest.search.hereapi.com/v1/autosuggest?at=21.0278,105.8342&q=${query}&limit=5&apiKey=ZpHJUnwdK8k2nTUgzMnSDggQOnjGe2F1xpxacCgIlQ4`
        const res = await axios.get(api)
        if(res.status === 200){
            console.log(res.data.items);
            
            return res.data.items
        }
        else{
            console.error(res.status);
        }
    } catch (error) {
        console.error(error);
        throw error
    }
}
