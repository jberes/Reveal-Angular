import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


declare let $: any;
$.ig.RevealSdkSettings.setBaseUrl("http://localhost:5111");

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.scss']
})
export class NewDashboardComponent implements AfterViewInit {
  
  @ViewChild('revealView') el!: ElementRef;
  
  ngAfterViewInit(): void {
    var revealView = new $.ig.RevealView(this.el.nativeElement);
    revealView.startInEditMode = true;

    revealView.onDataSourcesRequested = (callback) => {

      var sqlServerDataSource = new $.ig.RVSqlServerDataSource();
      sqlServerDataSource.id="sqlServer";
      //*******************************************************************
      // CHANGE THE HOST TO YOUR OWN
      sqlServerDataSource.host = "s0106linuxsql1.infragistics.local";
      //*******************************************************************

      sqlServerDataSource.title = "SQL Server Data Source";
      sqlServerDataSource.subtitle = "Full Northwind Database";

      // SQL Server Data Source Item in Stored Procs
      var sqlDataSourceItem1 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
      sqlDataSourceItem1.id="CustomerOrders";
      sqlDataSourceItem1.title = "Customer Orders";
      sqlDataSourceItem1.subtitle = "Custom SQL Query";

      var sqlDataSourceItem2 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
      sqlDataSourceItem2.id="CustOrderHist";
      sqlDataSourceItem2.title = "Customer Orders History";
      sqlDataSourceItem2.subtitle = "Stored Procedure";

      var sqlDataSourceItem3 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
      sqlDataSourceItem3.id="CustOrdersOrders";
      sqlDataSourceItem3.title = "Customer Orders Orders";
      sqlDataSourceItem3.subtitle = "Stored Procedure";

      var sqlDataSourceItem4 = new $.ig.RVSqlServerDataSourceItem(sqlServerDataSource);
      sqlDataSourceItem4.id="TenMostExpensiveProducts";
      sqlDataSourceItem4.title = "Ten Most Expensive Products";
      sqlDataSourceItem4.subtitle = "Stored Procedure";

      
      //**********************************************
      // Note, this is the callback that loads everything above into the dialog.  If you don't want to show the entire
      // database, just remove sqlServerDataSource from the array and leave it empty like this []
      callback(new $.ig.RevealDataSources([sqlServerDataSource], 
          [sqlDataSourceItem1, sqlDataSourceItem2, sqlDataSourceItem3, sqlDataSourceItem4, ], false));
  };

  }
  
}
