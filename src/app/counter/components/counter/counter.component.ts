import { Component } from "@angular/core";




@Component({
  template: `
  <hr>
  <h1>Hola counter</h1>
<label>Counter {{ counter }}</label><br>
<button (click)="Aumentar(+1)">aumentar</button>
<button (click)="Aumentar(-1)">disminuir</button>
<button (click)="reset()">Reset</button>
  `,
  selector: 'app-counter'
}

)

export class CounterComponent {
  public counter: number = 10;
  constructor() { }
  Aumentar(value: number): void {

    this.counter += value;
  }

  reset(): void {
    this.counter = 10
  }
}
