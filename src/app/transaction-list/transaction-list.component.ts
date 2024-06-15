import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LocalStorageService } from '../local-storage.service';
import { JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    MatTableModule,
    JsonPipe,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent {
  dataSource: any;
  constructor(private ls: LocalStorageService) {}

  ngOnInit() {
    this.dataSource = this.ls.getData();
  }
  displayedColumns: string[] = [
    'action',
    'id',
    'type',
    'description',
    'amount',
    'date',
  ];

  deleteTransaction(id: any) {
    this.ls.removeData(id);
    this.dataSource = this.ls.getData();
  }
}
