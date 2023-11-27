export interface ColumnProp {
  /**
   * Title of this column
   */
  title: string,
  /**
   * Display field of the data record, support nest path by string array
   */
  dataIndex: string | string[],
  /**
   * Unique key of this column, you can ignore this prop if you've set a unique dataIndex
   */
  key?: string,
  /**
   * specify how content is aligned
   */
  align?: 'left' | 'center' | 'right',
  /**
   * Set column to be fixed: true(same as left) 'left' 'right'
   */
  fixed?: boolean | 'left' | 'right',
  /**
   * Width of this column
   */
  width?: number | string,
  children?: ColumnProp[],
};


export interface ColumnTable extends ColumnProp{
  colspan: number,
  sort: number,
  fixedLeft: number,
  fixedRight: number,
  children?: ColumnTable[],
};