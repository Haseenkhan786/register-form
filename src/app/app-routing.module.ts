import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PersondataComponent } from './persondata/persondata.component';
const routes: Routes = [
  { path:'register',component:RegisterComponent},

   { path:'persondata',component:PersondataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
