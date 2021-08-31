import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { SavePostComponent } from './board/save-post/save-post.component';
import { ListPostComponent } from './board/list-post/list-post.component';
import { BoardService } from "./services/board.service";
import { UserService } from "./services/user.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, RegisterComponent, FooterComponent, SavePostComponent, ListPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    BoardService,
    UserService,
    TokenInterceptorService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
