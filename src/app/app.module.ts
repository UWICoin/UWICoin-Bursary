import { MessagingService } from './services/messaging/messaging.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './services/authentication/authentication.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from './modules/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { DatabaseService } from './services/database/database.services';
import { FIREBASE_CONFIG } from './firebase.config';
import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RippleLibService } from './services/rippled-lib/ripple-lib';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccountsTableComponent } from './components/accounts-table/accounts-table.components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// tslint:disable-next-line:max-line-length
import { MatSortModule, MatDialogModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './services/auth-guard/auth-guard';
import { RoleGuard } from './services/role-guard/role-guard';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    CommonModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    DatabaseService,
    MessagingService,
    RippleLibService,
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
