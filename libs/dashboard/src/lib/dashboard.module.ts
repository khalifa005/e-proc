import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from '@e-proc/nebular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  NotFoundComponent,
];


@NgModule({
  imports: [
     BrowserModule,
     RouterModule,
     CommonModule,
     NebularModule
    ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DashboardModule {}
