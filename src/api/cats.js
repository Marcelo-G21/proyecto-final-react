import axios from "axios";
import { BASE_URL, API_KEY} from "../../config";

export class catAPI {
    static async fetchCatBreed(breed){
        if(breed === undefined) {
            breed = "abyssinian"
        }
        try{
            const resp = await axios.get(`${BASE_URL}${breed}`,
            { 'headers': {'X-Api-Key': API_KEY}});
            return resp.data;
        }catch(e){
            console.log(e);
        }
    }
}