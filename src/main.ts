import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/router/router.module';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
