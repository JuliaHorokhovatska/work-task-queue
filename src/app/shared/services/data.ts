import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkQueue } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getWorkQueue(): Observable<WorkQueue[]> {
    return this.http.get<WorkQueue[]>('assets/data/work-queue.json');
  }
}
