import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '404',
  component: ErrorPageComponent
},
{
  path: '**',
  //component: ErrorPageComponent
  redirectTo:'404'
}
]


@NgModule({
  
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
