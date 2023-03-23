import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare let $: any;
// Set the Locaion of the Reveal Server - this is the default Sample Server for Reveal
$.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
//$.ig.RevealSdkSettings.setBaseUrl("http://localhost:5111");

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})

export class ViewDashboardComponent implements AfterViewInit {

  @ViewChild('revealView') el!: ElementRef;

  ngAfterViewInit(): void {
    var revealView = new $.ig.RevealView(this.el.nativeElement);

    // Load Dashboard from Server
    $.ig.RVDashboard.loadDashboard("Marketing").then((dashboard: any) => {

      // Create a New Instance of a RevealView
      revealView = new $.ig.RevealView(this.el.nativeElement);

      // Assign the Dashboard to the RevealView
      revealView.dashboard = dashboard;
    });
  } 
}
