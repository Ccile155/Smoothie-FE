import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { SmoothieComponent } from './smoothie/smoothie.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditionComponent } from './edition/edition.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppMenuComponent,
    SmoothieComponent,
    DetailComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatTabsModule,
    MatToolbarModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    FlexLayoutModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
