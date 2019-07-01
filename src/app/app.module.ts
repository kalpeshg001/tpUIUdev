import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ListeAnimauxComponent } from './ui-components/liste-animaux/liste-animaux.component';
import { PageAnimalComponent } from './ui-components/page-animal/page-animal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ListeAnimauxComponent, PageAnimalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
