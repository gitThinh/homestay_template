export interface INav {
  id: string;
  name: string;
  url?: string;
  isBlank?: boolean;
  children?: {
    id: string;
    name: string;
    url: string;
    isBlank?: boolean;
  }[];
}
