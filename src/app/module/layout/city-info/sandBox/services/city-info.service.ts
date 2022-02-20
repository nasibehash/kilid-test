

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CityInfoService {
  constructor(private httpClient: HttpClient,

    ) {
  }


  getHeader() {
    return {
      'Content-Type': 'application/json; text/html; charset=utf-8',
    };
  }



  postSeoFilterSearch(url:any) {
    return this.httpClient.post(`${environment.PURE_URL}/seo_legacy_api/url/decode/v2.0`,{
      headers: this.getHeader(),url}).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  getSeoPhraseByUrl(url:string) {
    return this.httpClient.post(`${environment.PURE_URL}/seo_legacy_api/url/seo/v2.0`, {
      headers: this.getHeader(),url
    }).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  searchPortal(params:any,body:any) {
    let createdParams = new HttpParams();
    createdParams = createdParams.append('page', params.page);
    createdParams = createdParams.append('sort', params.sort);
    params.filters && (Object.keys(params.filters).forEach((key) => {
      if (params.filters[key]) {
        createdParams = createdParams.append(`filters[${key}]`, `${params.filters[key]}`);
      }
    }));
    const header1= {'Content-Type':'text/html; charset=utf-8',};
    return this.httpClient.post(`${environment.PURE_URL}/api/listing/search/portal/v2.0`,body, { headers: this.getHeader(),params: createdParams}).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }


}

