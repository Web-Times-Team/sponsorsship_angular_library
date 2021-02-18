import { Component, Input, OnInit } from '@angular/core';
import { MediasButInfType } from '../types/medias-but-info-type';

@Component({
  selector: 'wtt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() mediasButInfTypes: MediasButInfType[];
  mediasButInfDatas: any[] = [];
  @Input() usernameField: string; // must receiving UsernameField[0] or UsernameField[1] type enum

  constructor() { }

  ngOnInit(): void {

    this.mediasButInfTypes.forEach((type) => {
      const mediasButInf: any = {};
      switch (type) {
        case MediasButInfType.facebook:
          mediasButInf.icon = 'bootstrap-icons.svg#facebook';
          mediasButInf.name = MediasButInfType[0];
          mediasButInf.color = 'btn-primary';
          break;
        case MediasButInfType.google:
          mediasButInf.icon = 'bootstrap-icons.svg#google';
          mediasButInf.name = MediasButInfType[1];
          mediasButInf.color = 'btn-danger';
          break;
        default:
          mediasButInf.icon = 'bootstrap-icons.svg#linkedin';
          mediasButInf.name = MediasButInfType[2];
          mediasButInf.color = 'btn-info';
      }
      this.mediasButInfDatas.push(mediasButInf);
    })
    console.log(this.mediasButInfDatas);
  }

}
