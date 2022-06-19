import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import {UserDetailService} from './user-detail.service';
import { TableDataComponent } from './table-data/table-data.component';
import { UserPostComponent } from './user-post/user-post.component';
import { counterReducer } from './counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    UserPostComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
