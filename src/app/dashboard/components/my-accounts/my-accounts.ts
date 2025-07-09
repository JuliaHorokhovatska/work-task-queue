import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter, map, Observable } from 'rxjs';

import { Table } from '../../../shared/components/table/table';
import { DataService } from '../../../shared/services/data';
import {
  AccountStatus,
  TableColumn,
  TableSourceDetails,
  TableSourceType,
  TextColor,
} from '../../../shared/models/models';

enum AccountColumns {
  account = 'Account name/type',
  line = 'Line',
  broker = 'Broker',
  date = 'Renewal date',
  premium = 'Premium',
  rated_premium = 'Rated premium',
  loss_ratio = 'Loss ratio',
  appetite = 'Appetite',
  status = 'Status',
  triage = 'Triage',
  winnability = 'Winnability',
}

@Component({
  selector: 'app-my-accounts',
  imports: [CommonModule, MatTooltipModule, Table],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccounts implements OnInit {
  accountsTableColumns$!: Observable<TableColumn[]>;
  accountsTableDetails$!: Observable<TableSourceDetails[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.accountsTableDetails$ = this.dataService.getAccounts().pipe(
      filter((accounts) => !!accounts?.length),
      map((accounts) => {
        return accounts.map((item) => {
          return {
            account: {
              data: item.account,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            line: {
              data: item.line,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            broker: {
              data: item.broker,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            date: {
              data: item.date,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            premium: {
              data: item.premium,
              type: TableSourceType.text,
              textColor: TextColor.primary,
            },
            rated_premium: {
              data: item.rated_premium,
              type: TableSourceType.text,
              textColor: TextColor.default,
            },
            loss_ratio: {
              data: item.loss_ratio,
              type: TableSourceType.label,
              textColor: this.getTextColorByRatioValue(item.loss_ratio),
            },
            appetite: {
              data: item.appetite?.toUpperCase(),
              type: TableSourceType.label,
              textColor: TextColor.darkPrimary,
            },
            status: {
              data: {
                name: item.status,
                color:
                  item.status === AccountStatus.active
                    ? TextColor.success
                    : TextColor.primary,
              },
              type: TableSourceType.status,
              textColor: TextColor.default,
            },
            triage: {
              data: item.triage,
              type: TableSourceType.labelBorder,
              textColor: TextColor.primary,
            },
            winnability: {
              data: item.winnability,
              type: TableSourceType.strong,
              textColor: TextColor.primary,
            },
          };
        });
      })
    );

    this.accountsTableColumns$ = this.accountsTableDetails$.pipe(
      filter((accounts) => !!accounts?.length),
      map((accounts) => {
        const keys = Object.keys(
          accounts[0]
        ) as (keyof typeof AccountColumns)[];
        return keys.map((key) => {
          return {
            key: key,
            label: AccountColumns[key] ?? key,
          };
        });
      })
    );
  }

  getTextColorByRatioValue(ratio: string) {
    const numberValue = Number(ratio.replace('%', ''));

    if (numberValue < 35) {
      return TextColor.success;
    } else if (numberValue >= 35 && numberValue < 50) {
      return TextColor.warning;
    } else {
      return TextColor.danger;
    }
  }
}
