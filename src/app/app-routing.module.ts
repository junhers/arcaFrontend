import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { ChartComponent } from './chart/chart.component';
import { ErrorComponent } from './error/error.component';
import { SourceDonneeComponent } from './source-donnee/source-donnee.component';

const routes: Routes = [
  {path: 'source', component: SourceDonneeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'batch', component: BatchComponent},
  {path: 'chart', component:  ChartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
