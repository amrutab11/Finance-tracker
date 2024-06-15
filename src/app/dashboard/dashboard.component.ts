import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { MatCardModule } from '@angular/material/card';
import { Transaction } from '../../model/transaction';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private ls: LocalStorageService) {
    // ls.initStorage()
  }

  totalIncome = 0;
  totalExpence = 0;
  ngOnInit() {
    let transactions = this.ls.getData();

    transactions.forEach((element: Transaction) => {
      if (element.type == 'I') {
        this.totalIncome += element.amount;
      } else if (element.type == 'E') {
        this.totalExpence += element.amount;
      }
    });
  }
}
