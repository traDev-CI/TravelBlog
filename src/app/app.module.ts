import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MyFilter } from 'src/app/pipes/filterNav.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { GalleryComponent } from './componets/gallery/gallery.component';
import { CrudBService } from './services/crud-b.service'  
import { NewPostComponent } from './componets/newPost/newPost.component';
import { EditPostComponent } from './componets/editPost/editPost.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    GalleryComponent,
    MyFilter,
    NewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
