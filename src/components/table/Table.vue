<template>
  <div
    :class="[
      {
        'table-sticky': sticky,
        'table-scroll': scroll
      }
    ]"
    :style="[
      {
        height: scroll ? typeof height === 'number' ? `${height}px` : height : undefined
      }
    ]"
  >
  <table
    id="main-table"
    class="table is-fullwidth main-table mobile-optimised"
    :class="[
      {
        'is-bordered': bordered,
        'is-striped': striped,
        'is-hoverable': hoverable,
        'is-narrow': narrowed,
      }
    ]"
  >
    <caption v-if="title">{{ title }}</caption>
    <thead>
      <tr
        v-for="[i, columns1] in columnsHeader.entries()"
      >
        <th
          v-for="column in columns1"
          :key="column.key || column.dataIndex"
          scope="col"
          :colspan="column.colspan"
          :rowspan="column.colspan === 1 ? columnsHeader.length - i : undefined"
          :class="{
            'column-fixed-left': column.fixed === 'left' || column.fixed === true,
            'column-fixed-right': column.fixed === 'right',
          }"
          :style="{
            width: column.colspan === 1 ? typeof column.width === 'number' ? `${column.width}px` : column.width : undefined,
            left: column.fixed === 'left' || column.fixed === true ? `${column.fixedLeft}px` : undefined,
            right: column.fixed === 'right' ? `${column.fixedRight}px` : undefined,
          }"
        >
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data of dataSources">
        <td
          v-for="column in columnsBody"
          :key="column.key || column.dataIndex"
          :data-th="column.title"
          :class="{
            'column-fixed-left': column.fixed === 'left' || column.fixed === true,
            'column-fixed-right': column.fixed === 'right',
          }"
          :style="{
            width: column.colspan === 1 ? typeof column.width === 'number' ? `${column.width}px` : column.width : undefined,
            left: column.fixed === 'left' || column.fixed === true ? `${column.fixedLeft}px` : undefined,
            right: column.fixed === 'right' ? `${column.fixedRight}px` : undefined,
          }"
        >
          {{ data[column.dataIndex] }}
        </td>
      </tr>
    </tbody>
    <!-- <tfoot>
      <tr>
        <td class="column-fixed-left">Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
        <td>Footer 4</td>
        <td>Footer 5</td>
        <td>Footer 6</td>
        <td>Footer 7</td>
        <td>Footer 8</td>
      </tr>
    </tfoot> -->
  </table>
</div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, onMounted, computed } from 'vue';
// @ts-ignore
import { ColumnProp, ColumnTable } from './types';

const props = defineProps({
  /**
   * Title of this table
   */
  title: {
    type: String,
  },
  /**
   * Columns of table config
   */
  columns: {
    type: Array as PropType<ColumnProp[]>,
    required: true
  },
  /**
   * Data record array to be displayed
   */
  dataSources: {
    type: Array as PropType<any[]>,
  },
  /** 
   * Border to all cells
  */
  bordered: {
    type: Boolean,
    default: false,
  },
  /** 
   * Whether table is striped
  */
  striped: {
    type: Boolean,
    default: false,
  },
  /** 
   * Makes the cells narrower
  */
  narrowed: {
    type: Boolean,
    default: false,
  },
  /** 
   * Rows are highlighted when hovering
  */
  hoverable: {
    type: Boolean,
    default: false,
  },
  /** 
   * Set sticky header and scroll bar
  */
  sticky: {
    type: Boolean,
    default: false,
  },
  /** 
   * Whether the table can be scrollable
  */
  scroll: {
    type: Boolean,
    default: false,
  },
  /** 
   * Height of this table. Works only when the "scroll" parameter is enabled
  */
  height: {
    type: [String, Number] as PropType<number | string>,
    default: 'inherit',
  },
});

const columnsHeader = computed(() => {
  const ar: ColumnTable[][] = [];
  const columns_fixed_left: { [key: string]: ColumnTable } = new Map();
  const columns_fixed_right: { [key: string]: ColumnTable } = new Map();
  let i = 0;
  const generateTh = (columns: ColumnProp[], level = 0): ColumnTable[] => {
    if (!ar[level]) {
        ar[level] = [];
    }
    
    const c: ColumnTable[] = columns.map(column => {
      const _column: ColumnTable = { 
        ...column, 
        children: undefined 
      };
      
      if (column.children) {
        _column.children = generateTh(column.children, level + 1);
      } else {
        if (column.fixed === 'left' || column.fixed === true) {
          columns_fixed_left.set(_column.dataIndex, _column);
        }

        if (column.fixed === 'right') {
          columns_fixed_right.set(_column.dataIndex, _column);
        }
      }

      _column.colspan = _column.children?.reduce((acc: number, cur: ColumnTable) => cur.children ? acc + cur.colspan - 1 : acc, _column.children.length) || 1
      _column.sort = i++;

      return _column;
    });
    ar[level] = ar[level].concat(c);
    return c;
  };

  generateTh(props.columns);

  const getWidthColumn = (width: string | number) => {
    if (!width) {
      return 0;
    }

    if (typeof width === 'number') {
      return width;
    }
    return parseFloat(width.replace("px", ""));
  };

  const ar_left: ColumnTable[] = [...columns_fixed_left.values()];
  ar_left.sort((a, b) => a.sort - b.sort);

  let fixedLeft = 0;
  for (const column of ar_left) {
    const _column = columns_fixed_left.get(column.dataIndex);
    _column.fixedLeft = fixedLeft;

    const numberValue = getWidthColumn(_column.width);
    fixedLeft += numberValue;
  }

  const ar_right: ColumnTable[] = [...columns_fixed_right.values()];
  ar_right.sort((a, b) => b.sort - a.sort);

  let fixedRight = 0;
  for (const column of ar_right) {
    const _column = columns_fixed_right.get(column.dataIndex);
    _column.fixedRight = fixedRight;

    const numberValue = getWidthColumn(_column.width);
    fixedRight += numberValue;
  }

  return ar;
});

const columnsBody = computed(() => {
  const sort = [...columnsHeader.value.flat().filter(column => !column.children)];
  sort.sort((a, b) => a.sort - b.sort);
  return sort;
});

onMounted(() => {
  
  
})

</script>

<style scoped>
.table-scroll {
  position: relative;
  width:100%;
  z-index: 1;
  margin: auto;
  overflow: auto;
  height: inherit;
}

.table-scroll table {
  width: 100%;
  min-width: max-content;
}

.table-sticky table {
  /* width: 100%;
  min-width: max-content; */
  border-collapse: separate;
  border-spacing: 0;
}
.table-wrap {
  position: relative;
}
.table-scroll th,
.table-scroll td {
  vertical-align: top;
  overflow-wrap: break-word;
}
.table-sticky thead {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}

.table-sticky thead th {
  background: #fff;
}

.table-sticky tfoot,
.table-sticky tfoot th,
.table-sticky tfoot td {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
}


@media screen and (max-width:701px) {
	.table-scroll{box-shadow:0 0 10px rgba(0,0,0,0.5);}
	table.mobile-optimised {
		word-wrap:break-word;
	}
	table.mobile-optimised thead,
	table.mobile-optimised tfoot  {
		display:none
	}
	table.mobile-optimised td,
	table.mobile-optimised tbody th  {
		display:block;
		float:left;/* ie9 and under hack */
		width:100%;
		clear:both;
		/* background:#ffff; */
		padding:10px 5px;
		-moz-box-sizing:border-box;
		-webkit-box-sizing:border-box;
		box-sizing:border-box;
	}
	table.mobile-optimised tbody tr:nth-child(odd) td,
	table.mobile-optimised tbody tr:nth-child(odd) th{
		/* background:#ccc; */
	} 
	table.mobile-optimised tbody, table.mobile-optimised tr {
		display:block
	}
	.mobile-optimised td:before,
	.mobile-optimised tbody th:before  {
		content:attr(data-th);
		display:block;
		font-weight:bold;
		margin:0 0 2px;
		/* color:#000; */
	}
	.mobile-optimised tbody tr {
		/* border-bottom:1px solid #00c0f3 */
	}
}

.column-fixed-left {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  /* z-index: 2; */
  background: #fff;
}

.column-fixed-right {
  position: -webkit-sticky;
  position: sticky;
  right: 0;
  /* z-index: 2; */
  background: #fff;
}

</style>
