import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  public initStorage() {
    localStorage.setItem('transactions', JSON.stringify([]));
  }

  public saveData(value: object, index?: number) {
    let transactions = JSON.parse(localStorage.getItem('transactions') || '[]');

    if (!index) {
      if (transactions.length > 0) {
        index = transactions[transactions.length - 1]['id'] + 1;
      } else {
        index = 0;
      }
      transactions.push({
        id: index,
        ...value,
      });
    } else {
      transactions[index] = { id: transactions[index]['id'], ...value };
    }

    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
  public getData() {
    let temp = JSON.parse(localStorage.getItem('transactions') || '[]');
    return temp;
  }
  public removeData(id: number) {
    let transactions = JSON.stringify(
      this.getData().filter((item: any) => item.id != id)
    );
    localStorage.setItem('transactions', transactions);
  }

  public clearData() {
    localStorage.clear();
  }
}
