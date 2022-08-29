import axios, { AxiosResponse ,AxiosPromise} from 'axios';
import { UserProps } from "./User";
interface HasId {
    id?: number;
}
export class ApiSync<T extends HasId> {
    constructor (public rootUrl: string) { }
    fetch(id:number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    save(data:T):AxiosPromise {
        const {id} = data;
        if(id){
           return axios.put(`http://localhost:3000/users/${id}`,data)
        }else{
           return  axios.post(`${this.rootUrl}`,data);
        }
    }
}