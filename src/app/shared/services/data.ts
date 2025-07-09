import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountDetails, AccountStatistics, WorkQueue } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getWorkQueue(): Observable<WorkQueue[]> {
    return this.http.get<WorkQueue[]>('assets/data/work-queue.json');
  }

  getAccounts(): Observable<any[]> {
    return this.http.get<AccountDetails[]>('assets/data/accounts.json');
  }

  getAccountDetails(): Observable<AccountStatistics> {
    return this.http.get<AccountStatistics>('assets/data/account-details.json');
  }
}
