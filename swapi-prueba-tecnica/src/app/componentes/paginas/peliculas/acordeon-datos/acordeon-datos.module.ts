import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonDatosRoutingModule } from './acordeon-datos-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "ngx-bootstrap/accordion";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcordeonDatosRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
  ]
})
export class AcordeonDatosModule { }
