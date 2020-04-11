import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterGradleDeploy2SharedModule } from 'app/shared/shared.module';
import { JhipsterGradleDeploy2CoreModule } from 'app/core/core.module';
import { JhipsterGradleDeploy2AppRoutingModule } from './app-routing.module';
import { JhipsterGradleDeploy2HomeModule } from './home/home.module';
import { JhipsterGradleDeploy2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterGradleDeploy2SharedModule,
    JhipsterGradleDeploy2CoreModule,
    JhipsterGradleDeploy2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterGradleDeploy2EntityModule,
    JhipsterGradleDeploy2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterGradleDeploy2AppModule {}
