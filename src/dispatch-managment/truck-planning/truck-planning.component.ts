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

export interface TruckDetails {
  vrTrNo: string |number;
  dispatchDate:string |Date;
  lineItem:string;
  orderno: number;
  vendorname: string;
  transMedium:string;
  transporter:string;
  truckCapacity:number;
  
}

const ELEMENT_DATA: Element[] = [
  {position: 1, deliverydate: 'Hydrogen', orderno: 1.0079, vendorcode: 'H',vendorname:'eska',route:'alaska',transporter:'ddl',status:'sent',doqty:1,
  diqty:2,
  balqty:3},
  {position: 2, deliverydate: 'drogen', orderno: 1.79, vendorcode: 'G',vendorname:'albama',route:'albama',transporter:'ddc',status:'loading',doqty:1,
  diqty:2,
  balqty:3},
 
];

const TRUCK_DATA: TruckDetails[] = [
  {vrTrNo: 1, dispatchDate: '22-03-2022', orderno: 1.0079, lineItem: 'H',vendorname:'eska',transMedium:'Truck',transporter:'ddl',truckCapacity:1},
  {vrTrNo: 2, dispatchDate: '24-09-2022', orderno: 1.79, lineItem: 'G',vendorname:'albama',transMedium:'Train',transporter:'ddc',truckCapacity:34},
 
];


@Component({
  selector: 'app-truck-planning',
  templateUrl: './truck-planning.component.html',
  styleUrls: ['./truck-planning.component.css']
})
export class TruckPlanningComponent implements OnInit {

  defaultView = true
  selectedValue: string = 'pizza-1';
  dispatchDate: Date = new Date();
  transporter: string = '1';
  lineItemDqty: number = 1;
  lineItemMaterialCode: string = '';
  vendorCode:string = '';
  orderNumber:number = 1;
  totalWeight:string ='00000.000';
  planningDispatchOrderNo= null;
  planningLineItemNo=null;
  planningTransportationBy = null;
  plannningTransporterCode = null;
  planningTruckCapacity = null;
  planningTruckQty = null;
  displayedColumns = ['position', 'deliverydate', 'orderno', 'vendorcode','route','transporter','status','doqty','diqty','balqty','select'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  truckSource = new MatTableDataSource<TruckDetails>(TRUCK_DATA);
 
  truckDetailsColumns = ['vrTrNo', 'dispatchDate', 'lineItem', 'orderno','vendorname','transMedium','transporter','truckCapacity'];

  
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
this.route.navigateByUrl('delivery-order-modify');
  }

}
