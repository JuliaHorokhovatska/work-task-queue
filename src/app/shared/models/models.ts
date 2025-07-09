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

export interface AccountStatistics {
  winnability: AccountStatistic;
  review: AccountStatistic;
  portfolio: AccountStatistic;
  broker: AccountStatistic;
}

export interface AccountStatistic {
  title: string;
  overall_score: OverallScore;
  historical_trend: Record<string, number>;
  position: PositionScore;
  increasing_winnability: WinnabilityScore;
  descreasing_winnability: WinnabilityScore;
}

export interface OverallScore {
  percentage: number;
  score: AccountWinnability;
}

export interface PositionScore {
  your_score: number;
  market_average: number;
  top_competitor: number;
}

export interface WinnabilityScore {
  [key: string]: {
    value: number;
    increase: number;
  }
}

export interface PoliciesDetails {
  line: {
    name: string;
    line: string;
    icon: string;
  };
  eff_date: string;
  exp_date: string;
  status: AccountStatus;
  expiring_tech: string;
  expiring_premium: string;
  renewal_to_tech: string;
  renewal_tech: string;
  renewal_premium: string;
  rate_change: number;
  loss_ratio: string;
}

export enum AccountStatus {
  active = 'Active',
  underReview = 'Under Review',
  pending = 'Pending',
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
  strong = 'strong',
  line = 'line'
}