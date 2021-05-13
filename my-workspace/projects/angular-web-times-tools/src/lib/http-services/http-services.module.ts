import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[HttpErrorHandlerService, MessageService]
})
export class HttpServicesModule { }
