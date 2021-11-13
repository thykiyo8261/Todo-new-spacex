import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { SrvService } from './srv.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaceXComponent } from './space-x/space-x.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoTableComponent,
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SrvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
