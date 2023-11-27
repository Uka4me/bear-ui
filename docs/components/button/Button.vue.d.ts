import { PropType } from './vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: PropType<String | undefined>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    inverted: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    hovered: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * If you want different button sizes for each breakpoint, you can use Bulma's responsive buttons
    */
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The button comes in 4 different sizes: small, normal, medium, large.
     * While the default size is the normal one, the is-normal modifier exists in case you need to reset the button to its normal size.
     * @values small, normal, medium, large
     * @version 1.0.5
     */
    size: {
        type: PropType<"is-small" | "is-normal" | "is-medium" | "is-large">;
        default: string;
    };
    color: {
        type: PropType<"primary" | "secondary">;
        default: string;
    };
    iconRight: StringConstructor;
    iconLeft: StringConstructor;
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: string) => boolean;
    };
    tag: {
        type: PropType<"a" | "button" | "input" | "router-link" | "nuxt-link" | "n-link" | "RouterLink" | "NuxtLink" | "NLink">;
        default: string;
        validator: (value: string) => boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: PropType<String | undefined>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    inverted: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    hovered: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * If you want different button sizes for each breakpoint, you can use Bulma's responsive buttons
    */
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The button comes in 4 different sizes: small, normal, medium, large.
     * While the default size is the normal one, the is-normal modifier exists in case you need to reset the button to its normal size.
     * @values small, normal, medium, large
     * @version 1.0.5
     */
    size: {
        type: PropType<"is-small" | "is-normal" | "is-medium" | "is-large">;
        default: string;
    };
    color: {
        type: PropType<"primary" | "secondary">;
        default: string;
    };
    iconRight: StringConstructor;
    iconLeft: StringConstructor;
    type: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: string) => boolean;
    };
    tag: {
        type: PropType<"a" | "button" | "input" | "router-link" | "nuxt-link" | "n-link" | "RouterLink" | "NuxtLink" | "NLink">;
        default: string;
        validator: (value: string) => boolean;
    };
}>>, {
    type: "button" | "submit" | "reset";
    disabled: boolean;
    expanded: boolean;
    rounded: boolean;
    loading: boolean;
    outlined: boolean;
    inverted: boolean;
    focused: boolean;
    active: boolean;
    hovered: boolean;
    selected: boolean;
    responsive: boolean;
    size: "is-small" | "is-normal" | "is-medium" | "is-large";
    color: "primary" | "secondary";
    tag: "a" | "button" | "input" | "router-link" | "nuxt-link" | "n-link" | "RouterLink" | "NuxtLink" | "NLink";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
