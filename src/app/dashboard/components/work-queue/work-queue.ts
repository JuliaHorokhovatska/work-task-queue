import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, Observable } from 'rxjs';

import { DataService } from '../../../shared/services/data';
import {
  TableColumn,
  TableSourceDetails,
  TableSourceType,
  TextColor,
  WorkStatus,
} from '../../../shared/models/models';
import { Table } from '../../../shared/components/table/table';

@Component({
  selector: 'app-work-queue',
  imports: [CommonModule, Table],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkQueue implements OnInit {
  workQueueTableColumns$!: Observable<TableColumn[]>;
  workQueueTableDetails$!: Observable<TableSourceDetails[]>;

  workStatusTab: WritableSignal<WorkStatus | ''> = signal('');
  workQueueTableDetails: WritableSignal<TableSourceDetails[]> = signal([]);

  workQueueTableDetailsByStatus: WritableSignal<{
    [key: string]: TableSourceDetails[];
  }> = signal({});

  workQueueTableSource: Signal<TableSourceDetails[]> = computed(() => {
    if (this.workStatusTab()) {
      return this.workQueueTableDetailsByStatus()[this.workStatusTab()];
    } else {
      return this.workQueueTableDetails();
    }
  });

  private destroyRef = inject(DestroyRef);

  public readonly workStatus = WorkStatus;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.workQueueTableDetails$ = this.dataService.getWorkQueue().pipe(
      filter((workQueue) => !!workQueue?.length),
      map((workQueue) => {
        return workQueue.map((item) => {
          return {
            originator: {
              data: item.originator,
              type: TableSourceType.user,
              textColor: TextColor.default,
            },
            client: {
              data: item.client,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            type: {
              data: item.type,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            status: {
              data: {
                name: item.status,
                color:
                  item.status === WorkStatus.new
                    ? 'primary'
                    : item.status === WorkStatus.pending
                    ? 'warning'
                    : 'success',
              },
              type: TableSourceType.status,
              textColor: TextColor.default,
            },
            created: {
              data: item.created,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
          };
        });
      })
    );

    this.workQueueTableDetails$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((workQueue) => {
        this.workQueueTableDetails.set(workQueue);
        this.workQueueTableDetailsByStatus.set(
          workQueue.reduce((acc, item) => {
            const statusData = item['status']?.data;
            const status = (statusData as { name: string })?.name;
            if (acc[status]) {
              acc[status].push(item);
            } else {
              acc[status] = [item];
            }
            return acc;
          }, {} as { [key: string]: TableSourceDetails[] })
        );
      });

    this.workQueueTableColumns$ = this.workQueueTableDetails$.pipe(
      filter((workQueue) => !!workQueue?.length),
      map((workQueue) => {
        const keys = Object.keys(workQueue[0]);
        return keys.map((key) => {
          return {
            key: key,
            label: key === 'client' ? 'Client/Line' : key,
          };
        });
      })
    );
  }

  setActiveTab(tab: WorkStatus | '') {
    this.workStatusTab.set(tab);
  }
}
