import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter, map, Observable } from 'rxjs';

import { Table } from '../../../shared/components/table/table';
import {
  AccountStatus,
  TableColumn,
  TableSourceDetails,
  TableSourceType,
  TextColor,
} from '../../../shared/models/models';
import { DataService } from '../../../shared/services/data';

enum PolicyColumns {
  line = 'Line',
  eff_date = 'Eff. date',
  exp_date = 'Exp. date',
  status = 'Status',
  expiring_tech = 'Expiring tech',
  expiring_premium = 'Expiring premium',
  renewal_to_tech = 'Renewal to tech',
  renewal_tech = 'Renewal tech',
  renewal_premium = 'Renewal premium',
  rate_change = 'Rate change',
  loss_ratio = 'Loss ratio',
}

@Component({
  selector: 'app-policies-table',
  imports: [CommonModule, MatTooltipModule, Table],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoliciesTable implements OnInit {
  policiesTableColumns$!: Observable<TableColumn[]>;
  policiesTableDetails$!: Observable<TableSourceDetails[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.policiesTableDetails$ = this.dataService.getPolicies().pipe(
      filter((policies) => !!policies?.length),
      map((policies) => {
        return policies.map((item) => {
          return {
            line: {
              data: item.line,
              type: TableSourceType.line,
              textColor: TextColor.default,
            },
            eff_date: {
              data: item.eff_date,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            exp_date: {
              data: item.exp_date,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            status: {
              data: {
                name: item.status,
                color:
                  item.status === AccountStatus.active
                    ? TextColor.success
                    : item.status === AccountStatus.pending
                    ? TextColor.warning
                    : TextColor.primary,
              },
              type: TableSourceType.status,
              textColor: TextColor.default,
            },
            expiring_tech: {
              data: item.expiring_tech,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            expiring_premium: {
              data: item.expiring_premium,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            renewal_to_tech: {
              data: item.renewal_to_tech,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            renewal_tech: {
              data: item.renewal_tech,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            renewal_premium: {
              data: item.renewal_premium,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            rate_change: {
              data: item.rate_change ? `${item.rate_change}%` : 'N/A',
              type: TableSourceType.text,
              textColor:
                item.rate_change > 5 ? TextColor.danger : TextColor.default,
            },
            loss_ratio: {
              data: item.loss_ratio ?? 'N/A',
              type: item.loss_ratio ? TableSourceType.label : TableSourceType.text,
              textColor: this.getTextColorByRatioValue(item.loss_ratio),
            },
          };
        });
      })
    );

    this.policiesTableColumns$ = this.policiesTableDetails$.pipe(
      filter((policies) => !!policies?.length),
      map((policies) => {
        const keys = Object.keys(
          policies[0]
        ) as (keyof typeof PolicyColumns)[];
        return keys.map((key) => {
          return {
            key: key,
            label: PolicyColumns[key] ?? key,
          };
        });
      })
    );
  }

  getTextColorByRatioValue(ratio: string) {
    if (!ratio) return TextColor.default;

    const numberValue = Number(ratio.replace('%', ''));

    if (numberValue < 30) {
      return TextColor.success;
    } else if (numberValue >= 30 && numberValue < 60) {
      return TextColor.warning;
    } else {
      return TextColor.danger;
    }
  }
}
