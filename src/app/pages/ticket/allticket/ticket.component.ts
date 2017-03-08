import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TicketService } from '../ticket.service'

import 'style-loader!./ticket.style.scss';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.template.html'
})
export class TicketPage {
  pieChartData: any = [
    {
      color: "red",
      description: 'New',
      stats: '10,000',
      icon: 'plus',
    }, {
      color: "yellow",
      description: 'Pending',
      stats: '5000',
      icon: 'money',
    }, {
      color: "gray",
      description: 'Resolved',
      stats: '500',
      icon: 'face',
    }, {
      color: "green",
      description: 'Closed',
      stats: '32,592',
      icon: 'refresh',
    }
  ];

  ticketsTableSettigns: any = {
    columns: {
      Id: {
        title: 'Id',
        type: 'string'
      },
      autoPista: {
        title: 'Autopista',
        type: 'string'
      },
      element: {
        title: 'element',
        type: 'string'
      },
      commModes: {
        title: 'Comm. Mode',
        type: 'string'
      },
      incidentDateTime: {
        title: 'Incident DateTime',
        type: 'date'
      },
      createdBy: {
        title: 'Created Ny',
        type: 'string'
      },
      assignedTo: {
        title: 'Assigned To',
        type: 'string'
      },
      preority: {
        title: 'Preority',
        type: 'string'
      },
      status: {
        title: 'Status',
        type: 'string'
      },
    },
    mode: 'external',
    noDataMessage: 'No Tickets Found Matching Search Criteria',
    actions : null,
  }

  ticketDataSource: LocalDataSource = new LocalDataSource();

  /**
   * 
   */
  constructor(private _ticketService: TicketService) {
    _ticketService.getAllTickets().then((tickets) => {
      this.ticketDataSource.load(tickets);
    });
  }
}