import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './pages/calender/calender.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Import Containers

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: DashboardComponent,
    data: {
        title: 'Home'
    }
},
{
  path: 'calender',
  component: CalenderComponent,
  data: {
      title: 'calender'
  }
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
