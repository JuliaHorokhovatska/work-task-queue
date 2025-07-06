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

export enum TextColor {
  default = 'default',
  primary = 'primary',
  success = 'success',
  danger = 'danger',
}

export enum TableSourceType {
  text = 'text',
  status = 'status',
  label = 'label',
  user = 'user',
  strong = 'strong'
}