import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit-gate',
  templateUrl: './exit-gate.component.html',
  styleUrls: ['./exit-gate.component.css']
})
export class ExitGateComponent implements OnInit {

  dispatchDate: Date = new Date();
  rfidTag:string ='AbC1234';

  constructor() { }

  ngOnInit(): void {
  }

  BoombarrierOpen(){
    
  }



  closeButton(){

  }
}
