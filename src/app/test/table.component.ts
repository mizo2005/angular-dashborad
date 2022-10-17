import { Component } from '@angular/core';

/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableStickyComplexFlexExample {
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  tables = [0];

  constructor() {
    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'name';
    this.displayedColumns[1] = 'finishdata';
    this.displayedColumns[2] = 'client';
    this.displayedColumns[3] = 'price';
    this.displayedColumns[4] = 'team';
    this.displayedColumns[5] = 'status';
  }

  /** Whether the button toggle group contains the id as an active value. */
}

export interface PeriodicElement {
  name: string;
  finishdata: string;
  client: string;
  price: string;
  team: string[];
  status: string[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Ministry Wikipedai',
    finishdata: '10 May 2022',
    client: 'Ministry',
    price: '$5300',
    team: [
      'assets/image/team-01.png',
      'assets/image/team-02.png',
      'assets/image/team-03.png',
      'assets/image/team-04.png',
    ],
    status: ['Complated'],
  },
  {
    name: 'Elzero Shop',
    finishdata: '10 Oct 2021',
    client: 'Elzero Company',
    price: '$1500',
    team: [
      'assets/image/team-01.png',
      'assets/image/team-02.png',
      'assets/image/team-03.png',
    ],
    status: ['Complated'],
  },
  {
    name: 'Bouba App',
    finishdata: '05 Sep 2021',
    client: 'Bouba',
    price: '$800',
    team: ['assets/image/team-01.png', 'assets/image/team-02.png'],
    status: ['Complated'],
  },
  {
    name: 'Mahmoud Wibesite',
    finishdata: '22 May 2021',
    client: 'Mahmoud',
    price: '$600',
    team: ['assets/image/team-02.png'],
    status: ['Complated'],
  },
  {
    name: 'Sayed Wibesite',
    finishdata: '24 May 2021',
    client: 'Sayed',
    price: '$300',
    team: ['assets/image/team-02.png', 'assets/image/team-05.png'],
    status: ['Complated'],
  },
  {
    name: 'Arena Application',
    finishdata: '01 May 2021',
    client: 'Arena Company',
    price: '$2600',
    team: [
      'assets/image/team-01.png',
      'assets/image/team-02.png',
      'assets/image/team-03.png',
      'assets/image/team-04.png',
      'assets/image/team-05.png',
    ],
    status: ['Complated'],
  },
];
