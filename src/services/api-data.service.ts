import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }

  scheduleDeliveryList(dispatchDate:string,transporter:string,vendorCode:string,orderNumber:string){
  //   let requestPayload = {
  //     "dispatch_date" : dispatchDate,
  //     "customer_code" : vendorCode,
  //     "transporter" : transporter,
  //     "order_number" : orderNumber,
  // }
  //console.log("scheduleDeliveryList--->"+JSON.stringify(requestPayload));
  return this.http.get<any>(environment.getDelivryOrder+"?dispatch_date="+dispatchDate+"&customer_code="+
  vendorCode+"&transporter="+transporter+"&order_number="+orderNumber);
  }

  getTruckPlanOrders(dispatchDate:string,vendorCode:string){
    // let requestPayload = {
    //   "dispatch_date" : "2021-01-02",
    //   "customer_code" : "0001000693"
    //  }
     return this.http.get<any>(environment.get_truck_planning_orders+"?dispatch_date="+
     dispatchDate+"&customer_code="+vendorCode);
  }
}
