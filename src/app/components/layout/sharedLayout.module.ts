import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProjectCardComponent } from '../project-card/project-card.component';


@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, SideMenuComponent , ProjectCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent, FooterComponent, SideMenuComponent, ProjectCardComponent],
})
export class LayoutModule {}
