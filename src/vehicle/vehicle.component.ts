import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit  {
  ngOnInit(): void {
  }

  links = ['Add', 'Edit'];
  activeLink = this.links[0];

activeTabFun(selectedTab:string): void {
console.log(selectedTab)
} 
}
