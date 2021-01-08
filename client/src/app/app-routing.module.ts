import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule) },
  {path: 'shop/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
