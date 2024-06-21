import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages';
import { HomeLayoutComponent } from './layout';
import { HeroComponent,FeaturesComponent, TestimonialComponent } from './components';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLayoutComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule

  ]
})
export class HomeModule { }
