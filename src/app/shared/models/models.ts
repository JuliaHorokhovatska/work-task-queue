export interface WorkQueue {
  originator: string;
  client: {
    name: string;
    line: string;
  };
  type: string;
  status: WorkStatus;
  created: string;
}

export enum WorkStatus {
  new = 'New',
  pending = 'Pending Review',
  completed = 'Completed'
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableSource {
  data: string | Object;
  type: TableSourceType;
  textColor: TextColor;
}

export interface TableSourceDetails {
  [key: string]: TableSource;
}

export interface AccountDetails {
  account: {
    name: string;
    line: string;
  }
  line: string;
  broker: string;
  date: string;
  premium: string;
  rated_premium: string;
  loss_ratio: string;
  appetite: string;
  status: AccountStatus;
  triage: string;
  winnability: string;
}

export enum AccountStatus {
  active = 'Active',
  underReview = 'Under Review',
}

export enum AccountWinnability {
  veryStrong = 'Very Strong',
  strong = 'Strong',
  medium = 'Medium',
}

export enum TextColor {
  default = 'default',
  primary = 'primary',
  darkPrimary = 'dark-primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum TableSourceType {
  text = 'text',
  status = 'status',
  label = 'label',
  labelBorder = 'label-border',
  user = 'user',
  strong = 'strong'
}