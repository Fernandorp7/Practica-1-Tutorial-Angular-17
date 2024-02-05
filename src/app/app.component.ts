import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // template: `
    //   <h1> Hola mundo </h1>
    //   {{ title }}
    //   {{ city }}
    // `,
    styleUrl: './app.component.css'
    // styles: `
    //   h1{
    //     color: #00ff00;
    //   }
    // `
    ,
    imports: [RouterOutlet, UserComponent, CommentsComponent]
})
export class AppComponent {
  title: string = 'Angular17Clase';
  city: string = "Casablanca";
}
