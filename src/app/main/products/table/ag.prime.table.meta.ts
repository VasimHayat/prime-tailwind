export interface Column {
  field: string;
  header: string;
  filter: string;
  type:string; // 'text', 'date', 'numeric', etc.
  isFrozen?:boolean,
  isTag?:boolean,
  isCurrency?: boolean,
  isTime?: boolean; // For date columns that should display time
  isCustomTpl?:boolean; // For custom templates
}