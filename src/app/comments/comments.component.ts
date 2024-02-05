import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <p>
      Componente de Comentarios
    </p>
    <img src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png">
    <p>
    Ya en este tiempo se había levantado Sancho Panza, algo maltratado2 de los mozos de los frailes, y había estado atento a la batalla de su señor don Quijote, y rogaba a Dios en su corazón fuese servido de darle vitoria y que en ella ganase alguna ínsula de donde le hiciese gobernador, como se lo había prometido. Viendo, pues, ya acabada la pendencia y que su amo volvía a subir sobre Rocinante, llegó a tenerle el estribo y, antes que subiese, se hincó de rodillas delante dél y, asiéndole de la mano, se la besó3 y le dijo:

—Sea vuestra merced servido, señor don Quijote mío, de darme el gobierno de la ínsula que en esta rigurosa pendencia se ha ganado, que, por grande que sea, yo me siento con fuerzas de saberla gobernar tal y tan bien como otro que haya gobernado ínsulas en el mundo.
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
