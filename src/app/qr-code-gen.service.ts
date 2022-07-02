import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import * as qrcode from 'qrcode'

@Injectable({
  providedIn: 'root'
})
export class QrCodeGenService {

  constructor() { }

  geneDataURL(s: string): Observable<string> {
    return new Observable<string>(subscriber => {
      qrcode.toDataURL(s, (err, url) => {
        if (err) {
          subscriber.error(err)
        }
        subscriber.next(url)
        subscriber.complete()
      })
    })
  }
}
