import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SwaggerApiService {

  endPoint: string = "http://34.213.192.159:9000/reversi/game/";
  token: string = "ca0f4d34-d46d-4aad-8379-1e835a6ed7b3";

  constructor(public http: Http) { }

  getGameState() {
    const params: URLSearchParams = new URLSearchParams();
    params.set("token", this.token);

    return this.http.get(this.endPoint, { search: params })
      .map((res: Response) => res.json());
  }

  restartGame() {
    const params: URLSearchParams = new URLSearchParams();
    params.set("token", this.token);

    return this.http.delete(this.endPoint, { search: params })
      .map((res: Response) => res.json());
  }

  performMovement(coordX:string, coordY:string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set("token", this.token);
    params.set("x", coordX);
    params.set("y", coordY);

    return this.http.post(this.endPoint + 'movements/', params)
      .map((res: Response) => res.json());
  }

}
