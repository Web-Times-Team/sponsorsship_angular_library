import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaButInfType } from '../types/media-but-info-type';

@Component({
  selector: 'wtt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() mediaButInfTypes: MediaButInfType[];
  mediaButInfDatas: any[] = [];
  @Input() signupRoute: string;
  @Input() forgotPasswordRoute: string;
  @Input() usernameField: string; // must receiving UsernameField[0] or UsernameField[1] type enum
  @Output() loginValue = new EventEmitter<any>();
  mobile = true;
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    /**
     * reative form
     */
    this.loginForm = this.fb.group(
      {
        [this.usernameField]: ['', Validators.required], // control sur input username 
        password: ['', Validators.required] // control sur input password
      }
    )
    this.mediaButInfTypes.forEach((type) => {
      const mediasButInf: any = {};
      switch (type) {
        case MediaButInfType.facebook:
          mediasButInf.icon = 'bootstrap-icons.svg#facebook';
          mediasButInf.name = MediaButInfType[0];

          break;
        case MediaButInfType.google:
          mediasButInf.icon = 'bootstrap-icons.svg#google';
          mediasButInf.name = MediaButInfType[1];

          break;
        default:
          mediasButInf.icon = 'bootstrap-icons.svg#linkedin';
          mediasButInf.name = MediaButInfType[2];

      }
      this.mediaButInfDatas.push(mediasButInf);
    })

    const mediaQueryList = window.matchMedia('(min-width: 768px)');
    mediaQueryList.addEventListener('change', this.screenTest);
  }

  /**
   * Test device type
   * @param event 
   */
  screenTest(event: any) {
    if (event.matches) {
      this.mobile = false;
      console.log('it is not mobile', this.mobile);
    } else {
      this.mobile = true;
      console.log('it is mobile', this.mobile);
    }
  }

  buttonClass(isFirst: boolean, info: any): any {
    return {
      'btn-primary': info.name === MediaButInfType[0],
      'btn-danger': info.name === MediaButInfType[1],
      'btn-info': info.name === MediaButInfType[2],
    }
  }
  /**
   * 
   */
  signup(): void {
    this.router.navigate([this.signupRoute]);
  }
 /**
   * 
   */
  forgotPassword(): void {
    this.router.navigate([this.forgotPasswordRoute]);
  }
  /**
   * sends his parent's login information via an output event
   */
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginValue.emit(this.loginForm.value);
    } else {
      this.loginForm.markAsDirty();
    };
  }
}
