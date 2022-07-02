import {Component, ElementRef, OnInit, TemplateRef} from '@angular/core';
import {QrCodeGenService} from "./qr-code-gen.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '二维码生成';



  constructor(public qrCodeGenService: QrCodeGenService) { }

  ngOnInit(): void {
    document.title = this.title


  }

}
