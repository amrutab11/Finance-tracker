import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../local-storage.service';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    TransactionListComponent,
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [],
})
export class TransactionComponent {
  transactionForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    type: new FormControl(''),
  });

  id: number | undefined;
  option: string | undefined;
  constructor(
    private ls: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.option = params['option'];
    });
  }

  transactions: any = [];
  ngAfterViewInit() {
    if (this.option == 'EDIT' || this.option == 'VIEW') {
      this.transactions = this.ls.getData();
      // let index = transactions.findIndex((item:any)=>item.id == this.id)

      this.transactionForm.patchValue({
        ...this.transactions[this.id || 0],
      });

      if (this.option == 'VIEW') {
        this.transactionForm.disable();
      }
    }
  }

  data: any;
  handleSubmit() {
    if (this.option == 'ADD') {
      this.ls.saveData(this.transactionForm.value);
    }
    if (this.option == 'EDIT') {
      this.ls.saveData(this.transactionForm.value, this.id);
    }

    this.router.navigate(['/transactions']);
  }
}
