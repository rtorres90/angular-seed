import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThingsComponent}      from './thing/things.component';
const routes: Routes = [
  {path: '', redirectTo: '/things', pathMatch: 'full'},
  {path: 'things', component: ThingsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
