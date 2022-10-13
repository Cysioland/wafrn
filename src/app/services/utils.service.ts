import { Injectable } from '@angular/core';
import * as sanitizeHtml from 'sanitize-html';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  objectToFormData(obj: any): FormData {
    let res = new FormData();
    Object.keys(obj).forEach((key: string) => {
      res.append(key, obj[key]);
    })
    return res;
  }

}
