import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'catalogo',
    component: ProductsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
