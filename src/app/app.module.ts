import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductoComponent } from './producto/producto.component';
import { EstiloProductosDirective } from './estilo-productos.directive';
import { TaskListComponent } from './task-list/task-list.component';
import { HighlightDirective } from './highlight.directive';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    ProductoComponent,
    EstiloProductosDirective,
    TaskListComponent,
    HighlightDirective,
    MiPipePersonalizadoPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
