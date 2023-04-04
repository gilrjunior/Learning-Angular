import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="Ola Mundo!" *ngIf="destruir"></app-title>
  <p><button (click)="destruirComponente()">Destruir</button></p>
  <p>{{num}} <button (click)="adicionar()">Adicionar</button></p>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  title = 'meu-primeiro-projeto';
  public num:number = 1;
  public destruir:boolean = true;  

  constructor(){ }

  public destruirComponente():boolean {

    return this.destruir = false;

  }

  public adicionar():number {

    return this.num += 1;

  }

   
  ngOnInit(): void {

    console.log('Iniciou o processo');
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

}
