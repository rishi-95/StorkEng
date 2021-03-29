import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { ScrollspyDirective } from './scrollspy.directive';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, AboutComponent, ServicesComponent, FooterComponent, SwitcherComponent, ScrollspyDirective,],
  imports: [
    CommonModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, AboutComponent, ServicesComponent, FooterComponent, SwitcherComponent, ScrollspyDirective]
})
export class SharedModule { }
