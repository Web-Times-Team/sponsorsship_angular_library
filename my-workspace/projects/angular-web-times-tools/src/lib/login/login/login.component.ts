import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MediaButInfType } from '../types/media-but-info-type';

@Component({
  selector: 'wtt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() mediaButInfTypes: MediaButInfType[];
  mediaButInfDatas: any[] = [];
  @Input() usernameField: string; // must receiving UsernameField[0] or UsernameField[1] type enum
  @Output() loginValue = new EventEmitter<any>();
  /**
   * reative form
   */
  loginForm = this.fb.group(
    {
      username: ['', Validators.required], // control sur input username 
      password: ['', Validators.required] // control sur input password
    }
  )


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.mediaButInfTypes.forEach((type) => {
      const mediasButInf: any = {};
      switch (type) {
        case MediaButInfType.facebook:
          mediasButInf.icon = 'bootstrap-icons.svg#facebook';
          mediasButInf.name = MediaButInfType[0];
          mediasButInf.color = 'btn-primary';
          break;
        case MediaButInfType.google:
          mediasButInf.icon = 'bootstrap-icons.svg#google';
          mediasButInf.name = MediaButInfType[1];
          mediasButInf.color = 'btn-danger';
          break;
        default:
          mediasButInf.icon = 'bootstrap-icons.svg#linkedin';
          mediasButInf.name = MediaButInfType[2];
          mediasButInf.color = 'btn-info';
      }
      this.mediaButInfDatas.push(mediasButInf);
    })
    console.log(this.mediaButInfDatas);
  }

  /**
   * envoie les informations de login son parent via un evenement output
   */
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginValue.emit(this.loginForm.value);
    } else {
      this.loginForm.markAsDirty();
    };
  }
}
