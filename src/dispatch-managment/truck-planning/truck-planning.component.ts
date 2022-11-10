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
  {vrTrNo: 1, dispatchDate: '22-03-2022', orderno: 121, lineItem: 'A',vendorname:'eska',transMedium:'Truck',transporter:'ddl',truckCapacity:1},
  {vrTrNo: 2, dispatchDate: '24-09-2022', orderno: 3243, lineItem: 'B',vendorname:'albama',transMedium:'Train',transporter:'ddc',truckCapacity:3},
  {vrTrNo: 3, dispatchDate: '25-03-2022', orderno: 4345, lineItem: 'C',vendorname:'Albany',transMedium:'Truck',transporter:'dtdc',truckCapacity:2},
  {vrTrNo: 4, dispatchDate: '26-09-2022', orderno: 1534, lineItem: 'D',vendorname:'Baylor',transMedium:'Train',transporter:'avb',truckCapacity:2},
  {vrTrNo: 5, dispatchDate: '27-03-2022', orderno: 1646, lineItem: 'E',vendorname:'Boston',transMedium:'Truck',transporter:'apm',truckCapacity:3},
  {vrTrNo: 6, dispatchDate: '28-09-2022', orderno: 8637, lineItem: 'F',vendorname:'Yale',transMedium:'Train',transporter:'xyz',truckCapacity:5},
 
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
  displayMenu= false;
 
  truckDetailsColumns = ['vrTrNo', 'dispatchDate', 'lineItem', 'orderno','vendorname','transMedium','transporter','truckCapacity', 'actions'];

  
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

 displayMenuList(){
   this.displayMenu=true;
  }

  deleteTruckDetails(value: TruckDetails) {
    console.log(value);
    const data = this.removeObjectWithId(
      this.truckSource.filteredData,
      value.vrTrNo
    );
    this.truckSource = new MatTableDataSource<TruckDetails>(data);
  }
  removeObjectWithId(arr: TruckDetails[], id: number| string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.vrTrNo === id);
    arr.splice(objWithIdIndex, 1);

    return arr;
  }
}
