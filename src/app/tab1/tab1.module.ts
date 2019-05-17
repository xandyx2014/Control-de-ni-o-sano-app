import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnimatecssDirective } from '../directives/animatecss.directive';
import { ClickanimatecssDirective } from '../directives/clickanimatecss.directive';
import { DirectivesModule } from '../directives/directives.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    DirectivesModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
