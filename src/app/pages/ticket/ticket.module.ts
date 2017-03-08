import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TicketPage } from './allticket/ticket.component';
import { TicketService } from './ticket.service';
import { NewTicketPage } from './newticket/newticket.component';

import { routing } from './ticket.routing'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        Ng2SmartTableModule,
        routing
    ],
    declarations: [
        TicketPage,
        NewTicketPage
    ],
    providers: [
        TicketService
    ]
})
export class TicketModule {
}
