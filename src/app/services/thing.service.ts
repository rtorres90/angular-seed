import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Thing} from '../thing/model/thing';

@Injectable()
export class ThingService {
    private thingsUrl = 'api/things';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getThings(): Promise<Thing[]> {
        return this.http.get(this.thingsUrl)
            .toPromise()
            .then(response => response.json().data as Thing[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getThing(id: number): Promise<Thing> {
        const url = `${this.thingsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Thing)
            .catch(this.handleError);
    }

    update(thing: Thing): Promise<Thing> {
        const url = `${this.thingsUrl}/${thing.id}`;
        return this.http
            .put(url, JSON.stringify(thing), {headers: this.headers})
            .toPromise()
            .then(() => thing)
            .catch(this.handleError);
    }

    create(name: String): Promise<Thing> {
        return this.http
            .post(this.thingsUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Thing)
            .catch(this.handleError);
    }

    erase(id: number): Promise<void> {
        const url = `${this.thingsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
