import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// import { MaterialModule } from './material.module';
// import { AgmCoreModule } from '@agm/core';
// import { environment } from 'src/environments/environment.prod';

import { HeaderComponent } from './pages/header/component/header.component';

// import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
// import {
//   NgbAlertModule,
//   NgbModule,
//   NgbPaginationModule,
// } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirmComponent } from './shared/components/ngbd-modal-confirm/ngbd-modal-confirm.component';
import { LoginComponent } from './pages/login/component/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgbdModalConfirmComponent,
    LoginComponent,
    // LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // MaterialModule,
    SharedModule,
    // AgmCoreModule.forRoot({
    //   apiKey: environment.apiKey,
    //   libraries: [],
    // }),
    ToastrModule.forRoot({
      timeOut: 3000,
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // NgbModule,
    // NgbPaginationModule,
    // NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
