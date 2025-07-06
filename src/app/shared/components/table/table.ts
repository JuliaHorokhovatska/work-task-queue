import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  Signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import {
  TableColumn,
  TableSourceDetails,
  TableSourceType,
} from '../../models/models';
import { IsObjectPipe } from '../../pipes/is-object-pipe';
import { GetInitialsPipe } from '../../pipes/get-initials-pipe';

@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    IsObjectPipe,
    GetInitialsPipe,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {
  displayedColumns = input<TableColumn[]>();
  dataSourceDetails = input<TableSourceDetails[]>();
  showFilter = input<boolean>();

  matDataSource!: MatTableDataSource<any>;

  displayedColumnKeys: Signal<string[]> = computed(
    () => this.displayedColumns()?.map((column) => column.key) ?? []
  );

  @ViewChild(MatSort) sort!: MatSort;

  public readonly tableSourceType = TableSourceType;

  constructor() {
    effect(() => {
      if (this.dataSourceDetails()?.length) {
        this.matDataSource = new MatTableDataSource(this.dataSourceDetails());
        if (this.sort) {
          this.matDataSource.sort = this.sort;
        }
      }
    })
  }

  applyFilter(event: Event) {
    console.log(event);
    // const filterValue = (event.target as HTMLInputElement).value;
    // const dataSource = this.dataSource();
    // dataSource.filter = filterValue.trim().toLowerCase();

    // if (dataSource.paginator) {
    //   dataSource.paginator.firstPage();
    // }
  }

  onSortChange(event: { active: string; direction: 'asc' | 'desc' | '' }) {
    const sortedData = this.getSortedData(event.active, event.direction);
    this.matDataSource.data = sortedData;
  }

  getSortedData(active: string, direction: 'asc' | 'desc' | '') {
    const data = this.dataSourceDetails() ?? [];

    if (!active || direction === '') {
      return data;
    }

    const sortedData = [...data].sort((a, b) => {
      const dataA = a[active]?.data;
      const dataB = b[active]?.data;
      let valueA =
        dataA && typeof dataA === 'object' && 'name' in dataA
          ? (dataA as { name: string }).name
          : dataA;
      let valueB =
        dataB && typeof dataB === 'object' && 'name' in dataB
          ? (dataB as { name: string }).name
          : dataB;

      if (valueA == null) valueA = '';
      if (valueB == null) valueB = '';

      if (typeof valueA === 'string') valueA = valueA.toLowerCase();
      if (typeof valueB === 'string') valueB = valueB.toLowerCase();

      if (valueA < valueB) return direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sortedData;
  }
}
