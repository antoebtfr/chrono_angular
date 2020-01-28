import { ModeSelectComponent } from './components/mode-select/mode-select.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoadingPageComponent},
  {path: 'mode', component: ModeSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
