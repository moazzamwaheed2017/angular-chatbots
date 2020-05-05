import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  private baseURL;
  private token;
  private token1;
  private token2;

  constructor(private http: Http) {
    this.baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
      this.token1 = "642c15b015d94b72bf0a1d21e6876595";
  }

  public getResponse(query: string) {
    let data = {
      query: query,
      lang: 'en',
      sessionId: '1234567'
    }

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token1}`);
       
    return this.http
      .post(`${this.baseURL}`, data, { headers: headers })
      .map(res => {
        return res.json()
      })
  }
}
