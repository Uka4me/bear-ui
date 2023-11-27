import { PropType } from './vue/dist/vue.esm-bundler.js';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    /**
     * Title of this table
     */
    title: {
        type: StringConstructor;
    };
    /**
     * Columns of table config
     */
    columns: {
        type: PropType<ColumnProp[]>;
        required: true;
    };
    /**
     * Data record array to be displayed
     */
    dataSources: {
        type: PropType<any[]>;
    };
    /**
     * Border to all cells
    */
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether table is striped
    */
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Makes the cells narrower
    */
    narrowed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Rows are highlighted when hovering
    */
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Set sticky header and scroll bar
    */
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether the table can be scrollable
    */
    scroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Height of this table. Works only when the "scroll" parameter is enabled
    */
    height: {
        type: PropType<string | number>;
        default: string;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    /**
     * Title of this table
     */
    title: {
        type: StringConstructor;
    };
    /**
     * Columns of table config
     */
    columns: {
        type: PropType<ColumnProp[]>;
        required: true;
    };
    /**
     * Data record array to be displayed
     */
    dataSources: {
        type: PropType<any[]>;
    };
    /**
     * Border to all cells
    */
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether table is striped
    */
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Makes the cells narrower
    */
    narrowed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Rows are highlighted when hovering
    */
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Set sticky header and scroll bar
    */
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether the table can be scrollable
    */
    scroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Height of this table. Works only when the "scroll" parameter is enabled
    */
    height: {
        type: PropType<string | number>;
        default: string;
    };
}>>, {
    bordered: boolean;
    striped: boolean;
    narrowed: boolean;
    hoverable: boolean;
    sticky: boolean;
    scroll: boolean;
    height: string | number;
}, {}>;
export default _default;
