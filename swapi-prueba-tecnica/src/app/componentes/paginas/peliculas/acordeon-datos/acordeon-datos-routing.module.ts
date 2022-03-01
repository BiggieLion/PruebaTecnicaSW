import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcordeonDatosComponent } from './acordeon-datos.component';

const routes: Routes = [{ path: '', component: AcordeonDatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcordeonDatosRoutingModule { }
