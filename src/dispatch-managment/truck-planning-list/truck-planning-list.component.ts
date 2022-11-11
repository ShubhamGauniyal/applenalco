import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
export interface Element {
  deliverydate: string;
  position: number;
  orderno: number;
  vendorcode: string;
  vendorname: string;
  route:string;
  transporter:string;
  status:string;
  doqty:number;
  diqty:number;
  balqty:number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, deliverydate: '15/11/2022', orderno: 1.0079, vendorcode: 'H',vendorname:'eska',route:'alaska',transporter:'ddl',status:'sent',doqty:1,
  diqty:2,
  balqty:3},
  {position: 2, deliverydate: '16/11/2022', orderno: 1.79, vendorcode: 'G',vendorname:'albama',route:'albama',transporter:'ddc',status:'loading',doqty:1,
  diqty:2,
  balqty:3},
  {position: 3, deliverydate: '19/11/2022', orderno: 1.0079, vendorcode: 'H',vendorname:'eska',route:'alaska',transporter:'ddl',status:'sent',doqty:1,
  diqty:2,
  balqty:3},
  {position: 4, deliverydate: '18/11/2022', orderno: 1.79, vendorcode: 'G',vendorname:'albama',route:'albama',transporter:'ddc',status:'loading',doqty:1,
  diqty:2,
  balqty:3},
  {position: 5, deliverydate: '16/11/2022', orderno: 1.0079, vendorcode: 'H',vendorname:'eska',route:'alaska',transporter:'ddl',status:'sent',doqty:1,
  diqty:2,
  balqty:3},
  {position: 6, deliverydate: '15/11/2022', orderno: 1.79, vendorcode: 'G',vendorname:'albama',route:'albama',transporter:'ddc',status:'loading',doqty:1,
  diqty:2,
  balqty:3},
 
];

@Component({
  selector: 'app-truck-planning-list',
  templateUrl: './truck-planning-list.component.html',
  styleUrls: ['./truck-planning-list.component.css']
})
export class TruckPlanningListComponent implements OnInit {

  defaultView = true
  selectedValue: string = 'pizza-1';
  dispatchDate: Date = new Date();
  transporter: string = '1';
  lineItemDqty: number = 1;
  lineItemMaterialCode: string = '';
  vendorCode:string = '';
  orderNumber:number = 1;
  totalWeight:string ='00000.000';
  modifyPlanning = false;
  
  
  displayedColumns = ['position', 'deliverydate', 'orderno', 'vendorcode','route','transporter','status','doqty','diqty','balqty','select'];
  elementOriginalData = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Element>(this.elementOriginalData);
selectedElement: Element[] = [];

  
  constructor(private route:Router) {
    
   }

  ngOnInit(): void {
  }

  search(){
    console.log("dispatchDate = "+this.dispatchDate+" Transporter = "+this.transporter+" Vendor Code = "+this.vendorCode+" Order Number = "+this.orderNumber);
    console.log(this.transporter);
    localStorage.setItem('dispatchDate',this.dispatchDate.toString());
    localStorage.setItem('transporter',this.transporter);
    localStorage.setItem('vendorCode',this.vendorCode);
    localStorage.setItem('orderNumber',this.orderNumber.toString());
  }

  getRowData(event: Event){
console.log(event,'myevent');
//this.route.navigateByUrl('truck-planning-modify');
  }

  truckPlanning(){
    this.modifyPlanning = true;
    this.dataSource = new MatTableDataSource<Element>(this.selectedElement);
  }

saveModify(){
  this.modifyPlanning = false;
}

selectedList(element: Element){
  this.selectedElement.push(element);
}

closeButton(){
  this.dataSource = new MatTableDataSource<Element>(this.elementOriginalData);
  this.modifyPlanning = false;
  this.selectedElement=[];
}
}
