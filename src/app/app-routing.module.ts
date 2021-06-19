import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComisionesComponent } from './pages/comisiones/comisiones.component';
import { PaginaDemoComponent } from './pages/pagina-demo/pagina-demo.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'comisiones',component: ComisionesComponent},
  {path:'sobre-mi',component: SobreMiComponent},
  {path:'portafolio',component: PortafolioComponent},
  {path:'home',component: PaginaDemoComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
