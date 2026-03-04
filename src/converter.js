/**
 * Maps CSS property values to Vuetify utility class names.
 * Key: CSS property name → Value: map of CSS value → Vuetify class
 */
const CSS_TO_VUETIFY = {
    'font-weight': {
        'thin': 'font-weight-thin',
        '100': 'font-weight-thin',
        'light': 'font-weight-light',
        '300': 'font-weight-light',
        'regular': 'font-weight-regular',
        '400': 'font-weight-regular',
        'normal': 'font-weight-regular',
        'medium': 'font-weight-medium',
        '500': 'font-weight-medium',
        'semibold': 'font-weight-bold',
        '600': 'font-weight-bold',
        'bold': 'font-weight-bold',
        '700': 'font-weight-bold',
        'black': 'font-weight-black',
        '900': 'font-weight-black',
    },
    'font-style': {
        'italic': 'font-italic',
    },
    'text-align': {
        'left': 'text-left',
        'center': 'text-center',
        'right': 'text-right',
        'justify': 'text-justify',
        'start': 'text-start',
        'end': 'text-end',
    },
    'text-decoration': {
        'none': 'text-decoration-none',
        'line-through': 'text-decoration-line-through',
        'overline': 'text-decoration-overline',
        'underline': 'text-decoration-underline',
    },
    'text-transform': {
        'lowercase': 'text-lowercase',
        'uppercase': 'text-uppercase',
        'capitalize': 'text-capitalize',
        'none': 'text-none',
    },
    'white-space': {
        'normal': 'text-wrap',
        'nowrap': 'text-no-wrap',
        'pre-wrap': 'text-pre-wrap',
    },
    'word-break': {
        'break-all': 'text-break',
    },
    'overflow-wrap': {
        'break-word': 'text-break',
    },
    'display': {
        'none': 'd-none',
        'inline': 'd-inline',
        'inline-block': 'd-inline-block',
        'block': 'd-block',
        'flex': 'd-flex',
        'inline-flex': 'd-inline-flex',
        'grid': 'd-grid',
        'inline-grid': 'd-inline-grid',
        'table': 'd-table',
        'table-cell': 'd-table-cell',
        'table-row': 'd-table-row',
        'contents': 'd-contents',
    },
    'float': {
        'none': 'float-none',
        'left': 'float-left',
        'right': 'float-right',
        'start': 'float-start',
        'end': 'float-end',
    },
    'overflow': {
        'auto': 'overflow-auto',
        'hidden': 'overflow-hidden',
        'visible': 'overflow-visible',
        'scroll': 'overflow-scroll',
    },
    'overflow-x': {
        'auto': 'overflow-x-auto',
        'hidden': 'overflow-x-hidden',
        'visible': 'overflow-x-visible',
    },
    'overflow-y': {
        'auto': 'overflow-y-auto',
        'hidden': 'overflow-y-hidden',
        'visible': 'overflow-y-visible',
    },
    'position': {
        'static': 'position-static',
        'relative': 'position-relative',
        'fixed': 'position-fixed',
        'absolute': 'position-absolute',
        'sticky': 'position-sticky',
    },
    'flex-direction': {
        'row': 'flex-row',
        'column': 'flex-column',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-column-reverse',
    },
    'flex-wrap': {
        'wrap': 'flex-wrap',
        'nowrap': 'flex-nowrap',
        'wrap-reverse': 'flex-wrap-reverse',
    },
    'justify-content': {
        'flex-start': 'justify-start',
        'start': 'justify-start',
        'flex-end': 'justify-end',
        'end': 'justify-end',
        'center': 'justify-center',
        'space-between': 'justify-space-between',
        'space-around': 'justify-space-around',
        'space-evenly': 'justify-space-evenly',
    },
    'align-items': {
        'flex-start': 'align-start',
        'start': 'align-start',
        'flex-end': 'align-end',
        'end': 'align-end',
        'center': 'align-center',
        'baseline': 'align-baseline',
        'stretch': 'align-stretch',
    },
    'align-content': {
        'flex-start': 'align-content-start',
        'start': 'align-content-start',
        'flex-end': 'align-content-end',
        'end': 'align-content-end',
        'center': 'align-content-center',
        'space-between': 'align-content-space-between',
        'space-around': 'align-content-space-around',
        'stretch': 'align-content-stretch',
    },
    'align-self': {
        'auto': 'align-self-auto',
        'flex-start': 'align-self-start',
        'start': 'align-self-start',
        'flex-end': 'align-self-end',
        'end': 'align-self-end',
        'center': 'align-self-center',
        'baseline': 'align-self-baseline',
        'stretch': 'align-self-stretch',
    },
    'flex-grow': {
        '0': 'flex-grow-0',
        '1': 'flex-grow-1',
    },
    'flex-shrink': {
        '0': 'flex-shrink-0',
        '1': 'flex-shrink-1',
    },
    'width': {
        '25%': 'w-25',
        '33%': 'w-33',
        '50%': 'w-50',
        '66%': 'w-66',
        '75%': 'w-75',
        '100%': 'w-100',
        'auto': 'w-auto',
    },
    'height': {
        '25%': 'h-25',
        '50%': 'h-50',
        '75%': 'h-75',
        '100%': 'h-100',
        'auto': 'h-auto',
    },
    'cursor': {
        'pointer': 'cursor-pointer',
        'default': 'cursor-default',
        'text': 'cursor-text',
        'wait': 'cursor-wait',
        'move': 'cursor-move',
        'not-allowed': 'cursor-not-allowed',
        'none': 'cursor-none',
        'zoom-in': 'cursor-zoom-in',
        'zoom-out': 'cursor-zoom-out',
        'grab': 'cursor-grab',
    },
    'user-select': {
        'none': 'user-select-none',
        'text': 'user-select-text',
        'all': 'user-select-all',
        'auto': 'user-select-auto',
    },
    'vertical-align': {
        'baseline': 'align-baseline',
        'top': 'align-top',
        'middle': 'align-middle',
        'bottom': 'align-bottom',
        'text-top': 'align-text-top',
        'text-bottom': 'align-text-bottom',
    },
    'border-radius': {
        '0': 'rounded-0',
        '4px': 'rounded-sm',
        '8px': 'rounded',
        '16px': 'rounded-lg',
        '24px': 'rounded-xl',
        '50%': 'rounded-circle',
        '9999px': 'rounded-pill',
    },
};

/** CSS properties that map to Vuetify spacing classes */
const SPACING_PREFIXES = {
    'margin': 'm',
    'margin-top': 'mt',
    'margin-right': 'mr',
    'margin-bottom': 'mb',
    'margin-left': 'ml',
    'padding': 'p',
    'padding-top': 'pt',
    'padding-right': 'pr',
    'padding-bottom': 'pb',
    'padding-left': 'pl',
};

/**
 * Convert a single spacing value to a Vuetify spacing class.
 * Returns the class name or null if the value cannot be converted.
 */
function convertSpacingValue(prefix, value) {
    if (value === '0' || value === '0px') return `${prefix}-0`;
    if (value === 'auto') return `${prefix}-auto`;
    const pxMatch = value.match(/^(\d+(?:\.\d+)?)px$/);
    if (pxMatch) {
        const px = parseFloat(pxMatch[1]);
        const n = px / 4;
        if (Number.isInteger(n) && n >= 0 && n <= 16) return `${prefix}-${n}`;
    }
    return null;
}

/**
 * Convert a margin/padding shorthand value (1–4 values) to Vuetify spacing classes.
 * Returns an array of class names, or null if the value cannot be converted.
 */
function convertSpacing(prop, value) {
    const dir = SPACING_PREFIXES[prop];
    // Directional properties (e.g. margin-top) use a single value
    if (prop !== 'margin' && prop !== 'padding') {
        const cls = convertSpacingValue(dir, value);
        return cls ? [cls] : null;
    }
    // Shorthand: split into individual values
    const parts = value.trim().split(/\s+/);
    if (parts.length === 1) {
        const allSidesClass = convertSpacingValue(`${dir}a`, parts[0]);
        return allSidesClass ? [allSidesClass] : null;
    }
    if (parts.length === 2) {
        // vertical horizontal
        const y = convertSpacingValue(`${dir}y`, parts[0]);
        const x = convertSpacingValue(`${dir}x`, parts[1]);
        if (y && x) return [y, x];
        return null;
    }
    if (parts.length === 3) {
        // top horizontal bottom
        const t = convertSpacingValue(`${dir}t`, parts[0]);
        const x = convertSpacingValue(`${dir}x`, parts[1]);
        const b = convertSpacingValue(`${dir}b`, parts[2]);
        if (t && x && b) return [t, x, b];
        return null;
    }
    if (parts.length === 4) {
        // top right bottom left
        const t = convertSpacingValue(`${dir}t`, parts[0]);
        const r = convertSpacingValue(`${dir}r`, parts[1]);
        const b = convertSpacingValue(`${dir}b`, parts[2]);
        const l = convertSpacingValue(`${dir}l`, parts[3]);
        if (t && r && b && l) return [t, r, b, l];
        return null;
    }
    return null;
}

/**
 * Parse a CSS selector into a tag name and an array of class names.
 * Tag defaults to 'div' when not specified.
 */
function parseSelector(selector) {
    const tagMatch = selector.match(/^([a-z][a-z0-9]*)/i);
    const tag = tagMatch ? tagMatch[1].toLowerCase() : 'div';
    const classes = (selector.match(/\.([a-z_][\w-]*)/gi) || []).map(c => c.slice(1));
    return { tag, classes };
}

/**
 * Parse a CSS text block into an array of { selector, declarations } objects.
 * Each declarations entry is { property, value }.
 */
function parseCSSRules(cssText) {
    const rules = [];
    const ruleRegex = /([^{]+)\{([^}]*)\}/g;
    let match;
    while ((match = ruleRegex.exec(cssText)) !== null) {
        const selector = match[1].trim();
        const declarations = [];
        match[2].split(';').forEach(decl => {
            const colonIdx = decl.indexOf(':');
            if (colonIdx === -1) return;
            const property = decl.slice(0, colonIdx).trim();
            const value = decl.slice(colonIdx + 1).trim();
            if (property) declarations.push({ property, value });
        });
        if (selector) rules.push({ selector, declarations });
    }
    return rules;
}

/**
 * Convert a single CSS rule to an HTML element string with Vuetify classes.
 */
function convertRule({ selector, declarations }) {
    const { tag, classes } = parseSelector(selector);
    const vuetifyClasses = [...classes];
    const styleEntries = [];

    for (const { property, value } of declarations) {
        // Try spacing conversion
        if (SPACING_PREFIXES[property]) {
            const spacingClasses = convertSpacing(property, value);
            if (spacingClasses) {
                vuetifyClasses.push(...spacingClasses);
                continue;
            }
        }
        // Try direct property-value mapping
        if (CSS_TO_VUETIFY[property]?.[value]) {
            vuetifyClasses.push(CSS_TO_VUETIFY[property][value]);
            continue;
        }
        // Fall back to style attribute
        styleEntries.push({ property, value });
    }

    return generateHTML(tag, vuetifyClasses, styleEntries);
}

/**
 * Generate a formatted HTML element string.
 *
 * Indentation style:
 *   <tag
 *       class="
 *           cls1
 *           cls2
 *       "
 *       style="
 *           prop: value;
 *       "
 *   ></tag>
 */
function generateHTML(tag, classes, styleEntries) {
    const hasClasses = classes.length > 0;
    const hasStyle = styleEntries.length > 0;

    if (!hasClasses && !hasStyle) {
        return `<${tag}></${tag}>`;
    }

    const lines = [`<${tag}`];

    if (hasClasses) {
        lines.push(`    class="`);
        classes.forEach(cls => lines.push(`        ${cls}`));
        lines.push(`    "`);
    }

    if (hasStyle) {
        lines.push(`    style="`);
        styleEntries.forEach(({ property, value }) => lines.push(`        ${property}: ${value};`));
        lines.push(`    "`);
    }

    lines.push(`></${tag}>`);

    return lines.join('\n');
}

/**
 * Convert a full CSS text into one or more HTML elements with Vuetify classes.
 */
export function convert(cssText) {
    const rules = parseCSSRules(cssText);
    return rules.map(convertRule).join('\n');
}
