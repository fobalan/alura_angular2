import { Http, Headers} from '@angular/http';
import { FotoComponent } from './foto.component';

export class FotoService {

    http: Http;
    headers: Headers;
    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastrar(foto: FotoComponent){
        if(foto._id){
            
        } else{
            return this.http.post('v1/fotos', JSON.stringify(foto), {headers: this.headers} );
        }
    }

    listagem(){
        return this.http.get('v1/fotos').map(res => res.json());
    }

}