import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Bem-vindo!"

  constructor(){ }
  
  ngOnInit():void {

  }

  ngOnChanges(): void {
    
    setTimeout(() => {
      console.log(`Title changed`);
    }, 2000);

  }

  ngOnDestroy(): void {
    console.log("Deleted title element")
  }
    

}
