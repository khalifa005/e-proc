//used for the data grid
export interface EventObject {
    event: string;
    value: {
      limit: number;
      page: number;
      key: string;
      order: string;
    };
  }
