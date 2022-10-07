import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { InformationsComponent } from './components/informations/informations.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'formations', component: FormationsComponent},
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'informations', component: InformationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
