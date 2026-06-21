/* @ds-bundle: {"format":3,"namespace":"SavannaSpringsDesignSystem_15883b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"878a4947ff9c","components/actions/IconButton.jsx":"07f0aa2ebea4","components/display/Avatar.jsx":"50b54f614982","components/display/Badge.jsx":"101947eae382","components/display/Card.jsx":"8e528972657b","components/feedback/Alert.jsx":"066b674c8d07","components/forms/Checkbox.jsx":"d7e835b6e9be","components/forms/Input.jsx":"0c9106cc0c07","components/forms/Select.jsx":"19f00f097da2","components/forms/Switch.jsx":"28d74cf0726d","ui_kits/website/AboutPage.jsx":"97762def308b","ui_kits/website/App.jsx":"9b41becbbab0","ui_kits/website/CityPage.jsx":"368ea7bd7dd1","ui_kits/website/ContactPage.jsx":"b686b49d72a4","ui_kits/website/FaqPage.jsx":"dffe8823b27c","ui_kits/website/FinancingPage.jsx":"d5e25b443dcc","ui_kits/website/Footer.jsx":"3982a5c5d5a9","ui_kits/website/FreeWaterTest.jsx":"d4353677dad1","ui_kits/website/GalleryPage.jsx":"8c544a298784","ui_kits/website/Header.jsx":"4c158d9ef655","ui_kits/website/Hero.jsx":"033fed935c09","ui_kits/website/HomePage.jsx":"a64022f09641","ui_kits/website/Icon.jsx":"c143c1369aaf","ui_kits/website/ProblemPage.jsx":"f64195ef6738","ui_kits/website/ProductPage.jsx":"9510a54bfb20","ui_kits/website/ReviewsPage.jsx":"fcf38c6374f4","ui_kits/website/Shared.jsx":"05f419e26b72","ui_kits/website/SpecialsPage.jsx":"555954ed51ee","ui_kits/website/cities-data.js":"e538f3c81a98","ui_kits/website/problems-data.js":"bc52808f8644","ui_kits/website/products-data.js":"0c04542875c4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SavannaSpringsDesignSystem_15883b = window.SavannaSpringsDesignSystem_15883b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Button
 * Friendly, confident actions. Pill-shaped by default to match the
 * rounded brand. Primary = navy; accent = sun yellow (the headline CTA
 * across the brand's ads); water = spring blue; plus secondary, outline
 * and ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  block = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 16px',
      gap: 7,
      minHeight: 36,
      iconBox: 16
    },
    md: {
      fontSize: 15,
      padding: '12px 22px',
      gap: 9,
      minHeight: 44,
      iconBox: 18
    },
    lg: {
      fontSize: 17,
      padding: '15px 30px',
      gap: 10,
      minHeight: 54,
      iconBox: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: 'var(--brand)',
      bgHover: 'var(--brand-hover)',
      bgActive: 'var(--brand-active)',
      fg: 'var(--text-inverse)',
      border: 'transparent',
      shadow: 'var(--shadow-sm)'
    },
    accent: {
      bg: 'var(--accent)',
      bgHover: 'var(--accent-hover)',
      bgActive: 'var(--accent-active)',
      fg: 'var(--navy-900)',
      border: 'transparent',
      shadow: 'var(--shadow-accent)'
    },
    water: {
      bg: 'var(--water)',
      bgHover: 'var(--water-hover)',
      bgActive: 'var(--spring-600)',
      fg: 'var(--navy-900)',
      border: 'transparent',
      shadow: 'var(--shadow-sm)'
    },
    secondary: {
      bg: 'var(--navy-50)',
      bgHover: 'var(--navy-100)',
      bgActive: 'var(--navy-200)',
      fg: 'var(--navy-700)',
      border: 'transparent',
      shadow: 'none'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'var(--navy-50)',
      bgActive: 'var(--navy-100)',
      fg: 'var(--navy-700)',
      border: 'var(--border-strong)',
      shadow: 'none'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--navy-50)',
      bgActive: 'var(--navy-100)',
      fg: 'var(--navy-700)',
      border: 'transparent',
      shadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const radius = shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)';
  const bg = disabled ? 'var(--neutral-200)' : active ? p.bgActive : hover ? p.bgHover : p.bg;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled || loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      minHeight: s.minHeight,
      padding: s.padding,
      color: disabled ? 'var(--neutral-400)' : p.fg,
      background: bg,
      border: `1.5px solid ${disabled ? 'transparent' : p.border}`,
      borderRadius: radius,
      boxShadow: disabled || variant === 'ghost' || variant === 'outline' ? 'none' : p.shadow,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      outline: 'none',
      ...style
    }
  }), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.iconBox,
      height: s.iconBox,
      borderRadius: '50%',
      border: '2.5px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'ss-spin 0.7s linear infinite',
      opacity: 0.9
    }
  }), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.iconBox,
      height: s.iconBox
    }
  }, iconLeft), children, !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.iconBox,
      height: s.iconBox
    }
  }, iconRight), /*#__PURE__*/React.createElement("style", null, `@keyframes ss-spin { to { transform: rotate(360deg); } }`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — IconButton
 * Square/circular button for a single icon (close, nav, social).
 */
function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  round = true,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    solid: {
      bg: 'var(--brand)',
      bgHover: 'var(--brand-hover)',
      fg: 'var(--text-inverse)'
    },
    soft: {
      bg: 'var(--navy-50)',
      bgHover: 'var(--navy-100)',
      fg: 'var(--navy-700)'
    },
    accent: {
      bg: 'var(--accent)',
      bgHover: 'var(--accent-hover)',
      fg: 'var(--navy-900)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--navy-50)',
      fg: 'var(--navy-700)'
    }
  };
  const p = palettes[variant] || palettes.soft;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      color: disabled ? 'var(--neutral-400)' : p.fg,
      background: disabled ? 'var(--neutral-100)' : hover ? p.bgHover : p.bg,
      border: 'none',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)',
      outline: 'none',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Avatar
 * Circular image or initials. Used for testimonials / staff.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  color = 'navy',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 44,
    lg: 60,
    xl: 84
  };
  const dim = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  const colors = {
    navy: ['var(--navy-100)', 'var(--navy-700)'],
    water: ['var(--spring-100)', 'var(--spring-700)'],
    sun: ['var(--sun-200)', 'var(--sun-800)'],
    orange: ['#ffe7d1', 'var(--orange-700)']
  };
  const [bg, fg] = colors[color] || colors.navy;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: dim * 0.38,
      flex: 'none',
      userSelect: 'none',
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Badge
 * Small status / label pill. Soft tinted by default.
 */
function Badge({
  children,
  color = 'navy',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    navy: {
      soft: ['var(--navy-50)', 'var(--navy-700)'],
      solid: ['var(--navy-700)', '#fff']
    },
    water: {
      soft: ['var(--spring-50)', 'var(--spring-700)'],
      solid: ['var(--spring-500)', '#fff']
    },
    sun: {
      soft: ['var(--sun-100)', 'var(--sun-800)'],
      solid: ['var(--sun-400)', 'var(--navy-900)']
    },
    orange: {
      soft: ['#ffe7d1', 'var(--orange-700)'],
      solid: ['var(--orange-500)', '#fff']
    },
    success: {
      soft: ['var(--green-100)', 'var(--green-700)'],
      solid: ['var(--success)', '#fff']
    },
    danger: {
      soft: ['var(--red-100)', 'var(--red-700)'],
      solid: ['var(--danger)', '#fff']
    },
    neutral: {
      soft: ['var(--neutral-100)', 'var(--neutral-700)'],
      solid: ['var(--neutral-600)', '#fff']
    }
  };
  const [bg, fg] = (palette[color] || palette.navy)[variant === 'solid' ? 'solid' : 'soft'];
  const sizes = {
    sm: {
      fs: 11,
      pad: '3px 9px',
      gap: 4
    },
    md: {
      fs: 12.5,
      pad: '5px 12px',
      gap: 5
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: fg,
      background: bg,
      padding: s.pad,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.fs,
      height: s.fs
    }
  }, iconLeft), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Card
 * Rounded surface container. Variants for elevation/emphasis.
 */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)'
    },
    soft: {
      background: 'var(--navy-50)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    outline: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none'
    },
    water: {
      background: 'var(--surface-water)',
      border: '1px solid var(--spring-100)',
      boxShadow: 'none'
    },
    brand: {
      background: 'var(--navy-700)',
      border: '1px solid var(--navy-700)',
      boxShadow: 'var(--shadow-md)',
      color: '#fff'
    }
  };
  const v = variants[variant] || variants.elevated;
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: pads[padding] ?? pads.md,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: hoverable && hover ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: hoverable && hover ? 'var(--shadow-lg)' : v.boxShadow,
      cursor: hoverable ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Alert
 * Inline message banner with semantic tone.
 */
function Alert({
  children,
  title,
  tone = 'info',
  icon = null,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--spring-50)',
      bd: 'var(--spring-200)',
      fg: 'var(--spring-700)',
      tx: 'var(--spring-900)'
    },
    success: {
      bg: 'var(--green-100)',
      bd: '#a7dcc1',
      fg: 'var(--green-700)',
      tx: 'var(--green-700)'
    },
    warning: {
      bg: 'var(--amber-100)',
      bd: '#f1d488',
      fg: 'var(--amber-700)',
      tx: 'var(--amber-700)'
    },
    danger: {
      bg: 'var(--red-100)',
      bd: '#f1b3ad',
      fg: 'var(--red-700)',
      tx: 'var(--red-700)'
    },
    brand: {
      bg: 'var(--navy-50)',
      bd: 'var(--navy-200)',
      fg: 'var(--navy-700)',
      tx: 'var(--navy-800)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: t.bg,
      border: `1.5px solid ${t.bd}`,
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: t.fg,
      flex: 'none',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: t.tx,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: t.tx,
      opacity: 0.92
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: t.fg,
      padding: 2,
      display: 'inline-flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Checkbox
 * Rounded checkbox with brand navy fill. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 22,
      height: 22,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: on ? 'var(--brand)' : 'var(--surface)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--navy-900)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Input
 * Text field with optional label, leading icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 40,
      fs: 14,
      px: 12
    },
    md: {
      h: 48,
      fs: 15,
      px: 14
    },
    lg: {
      h: 56,
      fs: 16,
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--navy-800)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: s.h,
      padding: `0 ${s.px}px`,
      background: 'var(--surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? `0 0 0 var(--ring-width) ${error ? 'var(--red-100)' : 'var(--spring-100)'}` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--neutral-500)',
      flex: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      color: 'var(--navy-900)',
      minWidth: 0
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Select
 * Native select styled to match Input, with a custom chevron.
 */
function Select({
  label,
  hint,
  error,
  size = 'md',
  id,
  children,
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      h: 40,
      fs: 14,
      px: 12
    },
    md: {
      h: 48,
      fs: 15,
      px: 14
    },
    lg: {
      h: 56,
      fs: 16,
      px: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--navy-800)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: s.h,
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface)',
      boxShadow: focus ? `0 0 0 var(--ring-width) ${error ? 'var(--red-100)' : 'var(--spring-100)'}` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: `0 ${s.px + 26}px 0 ${s.px}px`,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      color: 'var(--navy-900)',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), children), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "var(--neutral-500)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: s.px,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savanna Springs — Switch
 * Pill toggle. Spring-blue when on.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? {
    w: 38,
    h: 22,
    k: 16
  } : {
    w: 48,
    h: 28,
    k: 22
  };
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: dims.w,
      height: dims.h,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.w,
      height: dims.h,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--water)' : 'var(--neutral-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--navy-900)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
// Savanna Springs — About / Our Story page
const SSAboutPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const VALUES = [{
    icon: 'home',
    title: 'Family, not a sales floor',
    body: 'We\u2019re not a slick, faceless outfit. You know who the owners are — and that family culture still runs the company every day.'
  }, {
    icon: 'shieldCheck',
    title: 'Honest, prompt service',
    body: 'Take care of customers with the best products and fair, honest service, and they take care of us. It\u2019s worked for over a decade.'
  }, {
    icon: 'award',
    title: 'American-made quality',
    body: 'A proud Water-Right® dealer installing custom-built, made-in-USA systems — backed by warranties up to 20 years.'
  }, {
    icon: 'badgeCheck',
    title: 'Licensed expertise',
    body: 'Ohio EPA Licensed Operators with 35+ years of combined experience, and a WQA Certified Water Specialist on the team.'
  }];
  const STATS = [['2008', 'Family owned since'], ['35+ yrs', 'Combined experience'], ['Water-Right®', 'Authorized dealer'], ['20-yr', 'Warranties available']];
  const CREDS = ['Ohio EPA Licensed Operators', 'Water-Right® Authorized Dealer', 'WQA Certified Water Specialist', 'Regional Chamber member'];
  function AboutPage({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        left: '54%',
        backgroundImage: 'url(../../assets/img-hero-people.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, var(--navy-700) 0%, var(--navy-700) 46%, rgba(31,43,110,0.7) 60%, rgba(31,43,110,0.1) 82%, rgba(31,43,110,0) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'var(--orange-500)',
        opacity: 0.85,
        right: '48%',
        bottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 16
      }
    }, "Our story"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 50,
        lineHeight: 1.05,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, "A family business, named after our daughter."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18.5,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '20px 0 30px',
        maxWidth: 480
      }
    }, "The name came from the owners\u2019 daughter, Savannah \u2014 and that family culture has run the company since 2008."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Join the family \u2014 book a free test")))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 820,
        margin: '0 auto',
        padding: '72px 24px 56px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 12
      }
    }, "Since 2008"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-900)',
        margin: '0 0 18px',
        letterSpacing: '-0.02em'
      }
    }, "You know who the owners are."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.75,
        color: 'var(--text-body)',
        margin: '0 0 18px'
      }
    }, "Savanna Springs has been family owned and operated since 2008. The name came from the owners\u2019 daughter, Savannah, and that family culture still shapes how we treat every customer. We\u2019re not a slick, faceless sales outfit \u2014 when you call, you reach the people whose name is on the door."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.75,
        color: 'var(--text-body)',
        margin: 0
      }
    }, "Our belief is simple: take care of customers with the best products and prompt, honest service at a fair price, and they\u2019ll take care of us. That\u2019s worked for over a decade \u2014 and for thousands of neighbors across the Mahoning Valley and Western PA.")), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-water)',
        borderTop: '1px solid var(--spring-100)',
        borderBottom: '1px solid var(--spring-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 680,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "What we stand for"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "The same values since day one")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20
      },
      className: "ss-grid-4"
    }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
      key: v.title,
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 28,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 54,
        height: 54,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: v.icon,
      size: 27,
      color: "var(--navy-700)"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, v.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: 0
      }
    }, v.body)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
        marginBottom: 44
      },
      className: "ss-grid-4"
    }, STATS.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px 20px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-700)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-body)',
        marginTop: 8
      }
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center'
      }
    }, CREDS.map(cr => /*#__PURE__*/React.createElement("span", {
      key: cr,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        background: 'var(--navy-50)',
        border: '1px solid var(--navy-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '10px 18px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--navy-800)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badgeCheck",
      size: 17,
      color: "var(--spring-600)"
    }), " ", cr)))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      heading: "Join the family \u2014 book your free water test"
    }));
  }
  return AboutPage;
}();
window.SSAboutPage = SSAboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Savanna Springs — Website App (client-side router)
function SSApp() {
  const [page, setPage] = React.useState('Home');
  const navigate = p => {
    setPage(p);
    window.scrollTo({
      top: 0
    });
  };
  const Header = window.SSHeader;
  const Footer = window.SSFooter;

  // Free Water Test — standalone page wrapper around the reusable form section
  function FreeTestPage({
    onNavigate
  }) {
    const FreeWaterTest = window.SSFreeWaterTest;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '46px 24px 36px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "No cost \xB7 No pressure"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Your free in-home water test"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17.5,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        maxWidth: 600,
        margin: '14px auto 0'
      }
    }, "Find out exactly what's in your water. A licensed operator tests it on-site and recommends the right fix \u2014 with zero obligation."))), /*#__PURE__*/React.createElement(FreeWaterTest, {
      onNavigate: onNavigate
    }));
  }
  const pages = {
    Home: window.SSHomePage,
    Specials: window.SSSpecialsPage,
    FreeTest: FreeTestPage,
    Problems: window.SSProblemsHub,
    Products: window.SSProductsHub,
    ServiceAreas: window.SSServiceAreasHub,
    About: window.SSAboutPage,
    Reviews: window.SSReviewsPage,
    Gallery: window.SSGalleryPage,
    FAQ: window.SSFaqPage,
    Financing: window.SSFinancingPage,
    Contact: window.SSContactPage
  };
  const Page = pages[page];
  const isProblem = window.SS_PROBLEMS && window.SS_PROBLEMS[page];
  const isProduct = window.SS_PRODUCTS && window.SS_PRODUCTS[page];
  const isCity = window.SS_CITIES && window.SS_CITIES[page];
  function Stub({
    title
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const Icon = window.SSIcon;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '96px 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: 'var(--radius-xl)',
        background: 'var(--navy-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "droplet",
      size: 36,
      color: "var(--navy-700)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "Coming up next"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 40,
        color: 'var(--navy-900)',
        margin: '0 0 12px',
        letterSpacing: '-0.02em'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        color: 'var(--text-body)',
        margin: '0 0 26px'
      }
    }, "This page is part of the full site map and will be built in a later stage. For now, explore our products or book your free water test."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => navigate('Products')
    }, "View products"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => navigate('FreeTest')
    }, "Free water test")));
  }
  const navKey = window.SS_PROBLEMS && window.SS_PROBLEMS[page] ? 'Problems' : window.SS_PRODUCTS && window.SS_PRODUCTS[page] ? 'Products' : window.SS_CITIES && window.SS_CITIES[page] ? 'ServiceAreas' : ['Home', 'Products', 'Specials', 'About', 'Problems', 'ServiceAreas', 'Reviews', 'Gallery', 'FAQ', 'Financing', 'Contact'].includes(page) ? page : '';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    current: navKey,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, isProblem ? /*#__PURE__*/React.createElement(window.SSProblemPage, {
    problemKey: page,
    onNavigate: navigate
  }) : isProduct ? /*#__PURE__*/React.createElement(window.SSProductPage, {
    productKey: page,
    onNavigate: navigate
  }) : isCity ? /*#__PURE__*/React.createElement(window.SSCityPage, {
    cityKey: page,
    onNavigate: navigate
  }) : Page ? /*#__PURE__*/React.createElement(Page, {
    onNavigate: navigate
  }) : /*#__PURE__*/React.createElement(Stub, {
    title: page
  })), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate
  }));
}
window.SSApp = SSApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CityPage.jsx
try { (() => {
// Savanna Springs — City (service area) page template + Service Areas hub
(function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const TINTS = {
    water: 'var(--spring-100)',
    navy: 'var(--navy-50)',
    sun: 'var(--sun-100)',
    orange: '#ffe7d1'
  };
  const INKS = {
    water: 'var(--spring-600)',
    navy: 'var(--navy-700)',
    sun: 'var(--sun-700)',
    orange: 'var(--orange-600)'
  };
  function CityPage({
    cityKey,
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const c = window.SS_CITIES[cityKey];
    if (!c) return null;
    const go = k => onNavigate && onNavigate(k);
    const services = window.SS_CITY_SERVICES[c.type] || window.SS_CITY_SERVICES.municipal;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.28,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '52px 24px 60px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 40,
        alignItems: 'center'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--spring-200)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        marginBottom: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Home');
      },
      style: {
        color: 'var(--spring-200)',
        textDecoration: 'none'
      }
    }, "Home"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 14,
      color: "var(--spring-300)"
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('ServiceAreas');
      },
      style: {
        color: 'var(--spring-200)',
        textDecoration: 'none'
      }
    }, "Service Areas"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 14,
      color: "var(--spring-300)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, c.city)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 14
      }
    }, c.county, " County \xB7 ZIP ", c.zip), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 44,
        lineHeight: 1.08,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, c.h1), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '18px 0 28px',
        maxWidth: 560
      }
    }, c.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      }),
      onClick: () => go('FreeTest')
    }, "Get my free water test"), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 19,
      color: "var(--sun-400)"
    })), "(877) 750-1420"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 210,
        height: 168,
        borderRadius: 'var(--radius-2xl)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 56,
      color: "var(--sun-400)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        padding: '0 12px'
      }
    }, c.city), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--spring-200)'
      }
    }, c.county, " County \xB7 ", c.zip))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 40,
        alignItems: 'start'
      },
      className: "ss-grid-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, c.city, " water, explained"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-900)',
        margin: '0 0 16px',
        letterSpacing: '-0.02em'
      }
    }, "Local water, diagnosed locally"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        margin: 0
      }
    }, c.context), c.hometown && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 18,
        background: 'var(--sun-100)',
        border: '1px solid var(--sun-200)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 16px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "home",
      size: 16,
      color: "var(--sun-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--sun-800)'
      }
    }, "Our hometown \u2014 fastest service in the Valley"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-50)',
        border: '1px solid var(--navy-100)',
        borderRadius: 'var(--radius-xl)',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--navy-700)',
        marginBottom: 16
      }
    }, "Most common here"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, c.mostCommon.map(m => /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--navy-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "droplet",
      size: 15,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--navy-900)',
        fontWeight: 500
      }
    }, m))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        color: 'var(--navy-900)',
        margin: '0 0 24px',
        letterSpacing: '-0.02em'
      }
    }, "What we fix in ", c.city), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      },
      className: "ss-grid-3"
    }, c.problems.map(pk => {
      const r = window.SS_PROBLEMS[pk];
      return /*#__PURE__*/React.createElement(Card, {
        key: pk,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(pk)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-lg)',
          background: TINTS[r.color],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.icon,
        size: 24,
        color: INKS[r.color]
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 16.5,
          color: 'var(--navy-900)',
          margin: 0,
          lineHeight: 1.2
        }
      }, r.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 3,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13
        }
      }, "See the fix ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 13,
        color: "var(--spring-700)"
      })))));
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 16px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        color: 'var(--navy-900)',
        margin: '0 0 24px',
        letterSpacing: '-0.02em'
      }
    }, "Services in ", c.city), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 18
      },
      className: "ss-grid-4"
    }, services.map(sk => {
      const pr = window.SS_PRODUCTS[sk];
      return /*#__PURE__*/React.createElement(Card, {
        key: sk,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(sk)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 50,
          height: 50,
          borderRadius: 'var(--radius-lg)',
          background: TINTS[pr.color],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: pr.icon,
        size: 26,
        color: INKS[pr.color]
      })), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 17,
          color: 'var(--navy-900)',
          margin: '0 0 6px'
        }
      }, pr.label), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 13.5,
          lineHeight: 1.5,
          color: 'var(--text-body)',
          margin: 0
        }
      }, window.SS_PRODUCT_BLURB[sk]));
    }))), /*#__PURE__*/React.createElement(window.SSHowItWorks, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(window.SSReviews, {
      onNavigate: onNavigate,
      count: 3,
      title: `Trusted across ${c.city} and the Valley`,
      sub: "Real homeowners and businesses we\u2019ve helped nearby. Live Google reviews \u2014 here are a few favorites."
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '60px 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        color: '#fff',
        margin: '0 0 8px',
        letterSpacing: '-0.02em'
      }
    }, "Proudly serving ", c.city, " & nearby ", c.nearby.slice(0, 3).join(', ')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16.5,
        color: 'var(--spring-100)',
        margin: '0 auto 28px',
        maxWidth: 620
      }
    }, "From our shop in Lowellville we cover Mahoning, Columbiana & Trumbull counties plus Western PA. Find your town:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center'
      }
    }, window.SS_CITY_ORDER.map(k => {
      const cc = window.SS_CITIES[k];
      const active = k === c.key;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => go(k),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          background: active ? 'var(--sun-400)' : 'rgba(255,255,255,0.07)',
          border: active ? '1px solid var(--sun-400)' : '1px solid rgba(255,255,255,0.16)',
          borderRadius: 'var(--radius-pill)',
          padding: '10px 17px',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 15,
          color: active ? 'var(--navy-900)' : '#fff'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "mapPin",
        size: 15,
        color: active ? 'var(--navy-700)' : 'var(--sun-400)'
      }), " ", cc.city);
    })))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      defaultZip: c.zip,
      heading: `Book your free in-home water test in ${c.city}`
    }));
  }
  window.SSCityPage = CityPage;

  // ---- Service Areas hub ----
  function ServiceAreasHub({
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 58px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Service areas"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Water treatment across Youngstown, the Mahoning Valley & Western PA"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 640,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "From our base in Lowellville, we serve Mahoning, Columbiana & Trumbull counties plus Western PA \u2014 city water and private wells alike."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get my free water test")))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22
      },
      className: "ss-grid-3"
    }, window.SS_CITY_ORDER.map(k => {
      const cc = window.SS_CITIES[k];
      return /*#__PURE__*/React.createElement(Card, {
        key: k,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(k)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginBottom: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 50,
          height: 50,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--navy-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "mapPin",
        size: 26,
        color: "var(--navy-700)"
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 19,
          color: 'var(--navy-900)',
          margin: 0,
          lineHeight: 1.15
        }
      }, cc.city), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, cc.county, " County \xB7 ", cc.zip))), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          lineHeight: 1.5,
          color: 'var(--text-body)',
          margin: 0
        }
      }, "Most common: ", cc.mostCommon[0], "."), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          marginTop: 14,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 14
        }
      }, "View ", cc.city, " ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 15,
        color: "var(--spring-700)"
      })));
    }))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate
    }));
  }
  window.SSServiceAreasHub = ServiceAreasHub;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CityPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
// Savanna Springs — Contact page
const SSContactPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  function ContactPage({
    onNavigate
  }) {
    const {
      Input,
      Select,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: ''
    });
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    const labelStyle = {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--navy-900)',
      marginBottom: 6,
      display: 'block'
    };
    const taStyle = {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--navy-900)',
      padding: '11px 13px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface)',
      resize: 'vertical',
      minHeight: 110,
      outline: 'none',
      lineHeight: 1.5
    };
    const HOURS = [['Mon–Fri', '9:00 AM – 5:00 PM'], ['Saturday', 'By appointment'], ['Sunday', 'Closed']];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Contact"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 48,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Contact Savanna Springs"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 19,
        color: 'var(--spring-100)',
        margin: '14px 0 24px'
      }
    }, "We make one thing perfectly clear\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get a free water test"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      style: {
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.5)'
      },
      onClick: () => go('FreeTest')
    }, "Request a quick quote")))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 44,
        alignItems: 'start'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, [['mapPin', '875 River Road, Lowellville, OH 44436', 'https://www.google.com/maps?q=875+River+Road,+Lowellville,+OH+44436'], ['phone', '(877) 750-1420', 'tel:18777501420'], ['mail', 'info@savannaspringswater.com', 'mailto:info@savannaspringswater.com']].map(([icon, text, href]) => /*#__PURE__*/React.createElement("a", {
      key: text,
      href: href,
      target: icon === 'mapPin' ? '_blank' : undefined,
      rel: "noreferrer",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24,
      color: "var(--navy-700)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--navy-900)'
      }
    }, text)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 24,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 18,
      color: "var(--navy-700)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--navy-700)'
      }
    }, "Hours")), HOURS.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 0',
        borderBottom: '1px solid var(--border)',
        fontFamily: 'var(--font-body)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-body)'
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--navy-900)',
        fontWeight: 600
      }
    }, h)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, ['facebook', 'instagram'].map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--navy-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 20,
      color: "var(--navy-700)"
    }))), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginLeft: 'auto',
        color: 'var(--spring-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 16,
      color: "var(--spring-700)"
    }), " Customer login")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("iframe", {
      title: "Savanna Springs location",
      src: "https://www.google.com/maps?q=875+River+Road,+Lowellville,+OH+44436&output=embed",
      style: {
        width: '100%',
        height: 260,
        border: 0,
        display: 'block'
      },
      loading: "lazy"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        borderRadius: 'var(--radius-2xl)',
        padding: 34,
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '30px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--green-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 40,
      color: "var(--green-700)",
      strokeWidth: 2.6
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, "Message sent!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'var(--text-body)',
        margin: '0 auto 24px',
        maxWidth: 340
      }
    }, "Thanks", form.name ? `, ${form.name.split(' ')[0]}` : '', " \u2014 we", '’', "ll get back to you shortly."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => {
        setSent(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          topic: '',
          message: ''
        });
      }
    }, "Send another message")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: '0 0 4px'
      }
    }, "Send us a message"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 22px'
      }
    }, "We", '’', "ll get back to you within one business day."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Jane Smith",
      value: form.name,
      onChange: set('name'),
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      }),
      value: form.email,
      onChange: set('email'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "(330) 555-0199",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 18
      }),
      value: form.phone,
      onChange: set('phone')
    })), /*#__PURE__*/React.createElement(Select, {
      label: "How can we help?",
      placeholder: "Choose a topic",
      value: form.topic,
      onChange: set('topic')
    }, /*#__PURE__*/React.createElement("option", null, "Free water test"), /*#__PURE__*/React.createElement("option", null, "Quick quote"), /*#__PURE__*/React.createElement("option", null, "Service or repair"), /*#__PURE__*/React.createElement("option", null, "Salt / water delivery"), /*#__PURE__*/React.createElement("option", null, "Financing"), /*#__PURE__*/React.createElement("option", null, "Something else")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: labelStyle
    }, "Message"), /*#__PURE__*/React.createElement("textarea", {
      style: taStyle,
      placeholder: "How can we help?",
      value: form.message,
      onChange: set('message'),
      required: true
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent",
      size: "lg",
      block: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Send message"))))));
  }
  return ContactPage;
}();
window.SSContactPage = SSContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqPage.jsx
try { (() => {
// Savanna Springs — FAQ page (accordion + FAQ schema + cross-links)
const SSFaqPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const FAQS = [{
    q: 'What causes hard water, and why should I treat it?',
    link: ['HardWater', 'Hard water & scale'],
    a: 'Hard water is high in dissolved calcium and magnesium. It leaves scale in your pipes and water heater, spots your dishes, stiffens laundry, and makes you use more soap. A softener removes those minerals at the source, so everything in your home works better and lasts longer.'
  }, {
    q: 'Why does my water smell like rotten eggs?',
    link: ['Smelly', 'Rotten-egg smell'],
    a: 'That smell is hydrogen sulfide gas, usually produced by iron and sulfur bacteria in the water or water heater. Our self-sanitizing Sanitizer Plus with Crystal-Right\u00ae kills the odor-causing bacteria and rinses clean \u2014 no chemicals to buy.'
  }, {
    q: 'What kind of salt should I use in my softener?',
    link: ['Salt', 'Salt delivery'],
    a: 'We recommend Pro\u2019s Pick Dura-Cube\u00ae \u2014 up to 99.8% pure and virtually 100% soluble, compacted to prevent mushing and bridging in your brine tank. Even better: let us deliver it and load it for you, so you never lift another bag.'
  }, {
    q: 'Will a water softener work with my septic system?',
    link: ['Softeners', 'Water softeners'],
    a: 'Yes. Modern demand-based softeners like the Impression Plus Series\u00ae regenerate only when needed and use up to 75% less regeneration water and 60% less salt than old time-clock units \u2014 which is easy on a septic system. We size the unit to keep discharge low.'
  }, {
    q: 'Can you remove nitrates or other specific contaminants?',
    link: ['RO', 'Reverse osmosis'],
    a: 'A reverse-osmosis system removes a broad range of dissolved contaminants for your drinking water, and a Viqua\u00ae UV stage adds protection against bacteria and pathogens. A free in-home test \u2014 including a TDS reading \u2014 shows exactly what\u2019s present so we recommend the right solution.'
  }, {
    q: 'What do pH and grains/ppm actually mean for my water?',
    link: ['Sediment', 'Sediment & low pH'],
    a: 'pH measures how acidic your water is \u2014 low pH is corrosive and can cause blue-green staining and a metallic taste. Hardness is measured in grains per gallon (gpg), and dissolved solids in parts per million (ppm/TDS). Our free test reads all of these so your system is sized correctly.'
  }, {
    q: 'Do you service systems you didn\u2019t install?',
    link: ['Products', 'Browse products'],
    a: 'Yes \u2014 we service all makes and models, whoever installed them, plus salt and water delivery. If your old softener quit or you inherited one with the house, we can get it running or right-size a replacement.'
  }, {
    q: 'Is your equipment really made in the USA?',
    link: ['Products', 'Our products'],
    a: 'Yes. We\u2019re a proud Water-Right\u00ae authorized dealer and only install American-made, custom-built systems \u2014 backed by warranties up to 20 years.'
  }, {
    q: 'How much does a system cost, and do you offer financing?',
    link: ['Financing', 'See financing'],
    a: 'Every system is right-sized and quoted to your water, home and budget, so pricing varies. We offer flexible financing \u2014 including 6 months no interest \u2014 plus rentals with one month free to lower the upfront cost.'
  }, {
    q: 'Is the in-home water test really free?',
    link: ['FreeTest', 'Book a free test'],
    a: 'Completely free, with no obligation and no pressure. A licensed operator tests your water on-site, and we\u2019ll call within 24 business hours to schedule.'
  }];
  function FaqPage({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    const [open, setOpen] = React.useState(0);
    React.useEffect(() => {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      };
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ss-faq-schema';
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
      return () => {
        const e = document.getElementById('ss-faq-schema');
        if (e) e.remove();
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "FAQ"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 48,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Water questions, answered"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 600,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "Hard water, odor, salt, septic systems and more. Still not sure? A free in-home test settles it."))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 860,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, FAQS.map((f, i) => {
      const isOpen = open === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setOpen(isOpen ? -1 : i),
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 18,
          color: 'var(--navy-900)'
        }
      }, f.q), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: isOpen ? 'var(--navy-700)' : 'var(--navy-50)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none',
          transition: 'transform 200ms var(--ease-out)',
          transform: isOpen ? 'rotate(180deg)' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevronDown",
        size: 18,
        color: isOpen ? 'var(--sun-400)' : 'var(--navy-700)'
      }))), isOpen && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '0 24px 22px'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          lineHeight: 1.65,
          color: 'var(--text-body)',
          margin: '0 0 14px'
        }
      }, f.a), /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          go(f.link[0]);
        },
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 14.5,
          textDecoration: 'none'
        }
      }, f.link[1], " ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 16,
        color: "var(--spring-700)"
      }))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        background: 'var(--surface-water)',
        border: '1px solid var(--spring-100)',
        borderRadius: 'var(--radius-2xl)',
        padding: '32px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: 0
      }
    }, "Still have a question?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        color: 'var(--text-body)',
        margin: '4px 0 0'
      }
    }, "Call (877) 750-1420 or book a free in-home water test.")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get my free water test"))));
  }
  return FaqPage;
}();
window.SSFaqPage = SSFaqPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FinancingPage.jsx
try { (() => {
// Savanna Springs — Financing page
const SSFinancingPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const TIERS = [{
    term: '6 months',
    rate: 'No interest',
    note: 'if paid in full',
    min: '$299+',
    highlight: true
  }, {
    term: '36 months',
    rate: '5.99% APR',
    note: 'fixed',
    min: '$2,000+'
  }, {
    term: '60 months',
    rate: '6.99% APR',
    note: 'fixed',
    min: '$2,000+'
  }, {
    term: '84 months',
    rate: '7.99% APR',
    note: 'fixed',
    min: '$2,000+'
  }, {
    term: '120 months',
    rate: '9.99% APR',
    note: 'fixed',
    min: '$2,500+'
  }];
  function FinancingPage({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Available financing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 48,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Clean water that fits your budget"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 600,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "Get the water you deserve now and pay over time. Flexible terms on approved credit \u2014 including 6 months no interest."))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16
      },
      className: "ss-fin-grid"
    }, TIERS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.term,
      style: {
        background: t.highlight ? 'var(--navy-700)' : 'var(--surface)',
        border: t.highlight ? '1px solid var(--navy-700)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '26px 20px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative'
      }
    }, t.highlight && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -11,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--sun-400)',
        color: 'var(--navy-900)',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 11,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 12px',
        whiteSpace: 'nowrap'
      }
    }, "Most popular"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)',
        marginBottom: 10
      }
    }, t.term), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: t.highlight ? 22 : 24,
        color: t.highlight ? '#fff' : 'var(--navy-900)',
        lineHeight: 1.05,
        letterSpacing: '-0.01em'
      }
    }, t.rate), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)',
        marginTop: 4
      }
    }, t.note), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        paddingTop: 14,
        borderTop: t.highlight ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11.5,
        color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, "Purchases"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: t.highlight ? 'var(--sun-400)' : 'var(--navy-700)',
        marginTop: 3
      }
    }, t.min))))), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '24px auto 0',
        maxWidth: 560
      }
    }, "Rates and terms shown are on approved credit. Contact us for full details and to apply."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 36,
        background: 'var(--surface-water)',
        border: '1px solid var(--spring-100)',
        borderRadius: 'var(--radius-2xl)',
        padding: '36px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "Ready to apply?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        color: 'var(--text-body)',
        margin: '5px 0 0'
      }
    }, "Contact us for details \u2014 or start with a free water test and we", '\u2019', "ll quote it all together.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('Contact')
    }, "Apply for financing"), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 18
      })
    }, "(877) 750-1420"))))), /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `@media (max-width: 760px){ .ss-fin-grid{ grid-template-columns:1fr 1fr !important; } } @media (max-width: 440px){ .ss-fin-grid{ grid-template-columns:1fr !important; } }`
      }
    }));
  }
  return FinancingPage;
}();
window.SSFinancingPage = SSFinancingPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FinancingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Savanna Springs — Site Footer (4-column)
const SSFooter = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const SOLUTIONS = [['Rotten-egg smell', 'Smelly'], ['Hard water & scale', 'HardWater'], ['Rust & orange stains', 'Rust'], ['Bad-tasting water', 'Taste'], ['Well water problems', 'Well'], ['Chlorine taste & smell', 'Chlorine']];
  const PRODUCTS = [['Water softeners', 'Softeners'], ['Reverse osmosis', 'RO'], ['Iron & sulfur filters', 'IronSulfur'], ['Whole-house filtration', 'WholeHouse'], ['Salt delivery', 'Salt'], ['Equipment rentals', 'Rentals']];
  const CITIES = [['Youngstown', 'Youngstown'], ['Boardman', 'Boardman'], ['Poland', 'Poland'], ['Canfield', 'Canfield'], ['Struthers', 'Struthers'], ['Austintown', 'Austintown'], ['Salem', 'Salem'], ['Lowellville', 'Lowellville'], ['South Range / N. Lima', 'SouthRange']];
  function Col({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 14
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, children));
  }
  function FLink({
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onClick && onClick();
      },
      style: {
        color: 'var(--spring-100)',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        padding: '5px 0',
        textDecoration: 'none'
      }
    }, children);
  }
  function Footer({
    onNavigate
  }) {
    const go = k => onNavigate && onNavigate(k);
    const BADGES = ['Since 2008', 'WQA Certified', 'Water-Right® Dealer', 'Made in USA'];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--navy-800)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '60px 24px 30px',
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr 1fr 1fr',
        gap: 40
      },
      className: "ss-footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-savanna-springs.png",
      alt: "Savanna Springs",
      style: {
        height: 60,
        marginBottom: 16,
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.3))'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        color: 'var(--spring-100)',
        fontSize: 14.5,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 17,
      color: "var(--sun-400)",
      style: {
        marginTop: 2,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", null, "875 River Road, Lowellville, OH 44436")), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        textDecoration: 'none',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "var(--sun-400)"
    }), " (877) 750-1420"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@savannaspringswater.com",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--spring-100)',
        fontSize: 14.5,
        textDecoration: 'none',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16,
      color: "var(--sun-400)"
    }), " info@savannaspringswater.com"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 18
      }
    }, BADGES.map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 11px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 12.5,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "badgeCheck",
      size: 13,
      color: "var(--sun-400)"
    }), " ", b))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 16,
        color: 'var(--sun-400)',
        margin: 0
      }
    }, "We make one thing perfectly clear\u2026")), /*#__PURE__*/React.createElement(Col, {
      title: "Solutions"
    }, SOLUTIONS.map(([l, k]) => /*#__PURE__*/React.createElement(FLink, {
      key: k,
      onClick: () => go(k)
    }, l))), /*#__PURE__*/React.createElement(Col, {
      title: "Products"
    }, PRODUCTS.map(([l, k]) => /*#__PURE__*/React.createElement(FLink, {
      key: k,
      onClick: () => go(k)
    }, l))), /*#__PURE__*/React.createElement(Col, {
      title: "Service Areas"
    }, CITIES.map(([l, k]) => /*#__PURE__*/React.createElement(FLink, {
      key: k,
      onClick: () => go(k)
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
        color: 'var(--neutral-400)',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Savanna Springs Water Solutions. Family owned since 2008."), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('About');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "About"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Reviews');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "Reviews"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Gallery');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "Gallery"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('FAQ');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "FAQ"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Financing');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "Financing"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Contact');
      },
      style: {
        color: 'var(--neutral-400)',
        textDecoration: 'none'
      }
    }, "Contact")))), /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
          @media (max-width: 860px) { .ss-footer-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 520px) { .ss-footer-grid { grid-template-columns: 1fr !important; } }
        `
      }
    }));
  }
  return Footer;
}();
window.SSFooter = SSFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FreeWaterTest.jsx
try { (() => {
// Savanna Springs — Free Water Test lead form (reusable section + page)
const SSFreeWaterTest = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const CONCERNS = ['Hard water', 'Contaminants', 'Odors', 'Staining', 'White deposits', 'Bad taste', 'Other'];
  const PERKS = [['search', 'On-site water analysis', 'A licensed operator tests hardness, iron, pH and chlorine right at your tap.'], ['clipboard', 'Custom recommendation', 'We size the right system for your home, water and budget — no upsell, no pressure.'], ['phone', 'We call within 24 hours', 'A Savanna Springs operator follows up within 24 business hours to schedule.']];
  function FreeWaterTest({
    onNavigate,
    defaultZip = '',
    heading = 'Get a free in-home water test',
    sub = 'Find out exactly what\u2019s in your water — no cost, no pressure. We\u2019ll be in touch within 24 business hours to schedule.'
  }) {
    const {
      Input,
      Select,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      name: '',
      phone: '',
      email: '',
      zip: defaultZip,
      concern: '',
      notes: '',
      source: '',
      coupon: ''
    });
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    const taStyle = {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--navy-900)',
      padding: '11px 13px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface)',
      resize: 'vertical',
      minHeight: 88,
      outline: 'none',
      lineHeight: 1.5
    };
    const labelStyle = {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--navy-900)',
      marginBottom: 6,
      display: 'block'
    };
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 320,
        height: 320,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.22,
        filter: 'blur(6px)',
        left: -120,
        bottom: -120
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: 'var(--orange-500)',
        opacity: 0.85,
        left: '42%',
        top: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '74px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.05fr',
        gap: 56,
        alignItems: 'start'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Free Water Test"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 44,
        lineHeight: 1.05,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, heading), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '18px 0 30px',
        maxWidth: 460
      }
    }, sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        marginBottom: 28
      }
    }, PERKS.map(([icon, t, b]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: '#fff'
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.5,
        color: 'var(--spring-100)',
        marginTop: 2
      }
    }, b))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 'var(--radius-pill)',
        padding: '10px 18px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18,
      color: "var(--sun-400)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-body)',
        fontSize: 15
      }
    }, "Prefer to call? ", /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        color: 'var(--sun-400)',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, "(877) 750-1420")))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        borderRadius: 'var(--radius-2xl)',
        padding: 34,
        boxShadow: 'var(--shadow-lg)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '26px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--green-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 40,
      color: "var(--green-700)",
      strokeWidth: 2.6
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, "Request received!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'var(--text-body)',
        margin: '0 auto 24px',
        maxWidth: 360
      }
    }, "Thanks", form.name ? `, ${form.name.split(' ')[0]}` : '', " \u2014 we'll call within 24 business hours to schedule your free water test."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => {
        setSent(false);
        setForm({
          name: '',
          phone: '',
          email: '',
          zip: defaultZip,
          concern: '',
          notes: '',
          source: '',
          coupon: ''
        });
      }
    }, "Submit another request")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: '0 0 4px'
      }
    }, "Book your free test"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        margin: '0 0 22px'
      }
    }, "It only takes a minute."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Jane Smith",
      value: form.name,
      onChange: set('name'),
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      placeholder: "(330) 555-0199",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 18
      }),
      value: form.phone,
      onChange: set('phone'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ZIP code",
      placeholder: "44512",
      value: form.zip,
      onChange: set('zip'),
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      }),
      value: form.email,
      onChange: set('email'),
      required: true
    }), /*#__PURE__*/React.createElement(Select, {
      label: "I'm concerned about",
      placeholder: "Choose one",
      value: form.concern,
      onChange: set('concern')
    }, CONCERNS.map(c => /*#__PURE__*/React.createElement("option", {
      key: c
    }, c))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: labelStyle
    }, "Describe your water concerns"), /*#__PURE__*/React.createElement("textarea", {
      style: taStyle,
      placeholder: "Tell us what you're noticing \u2014 smell, stains, taste, spots\u2026",
      value: form.notes,
      onChange: set('notes')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "How did you find us?",
      placeholder: "Select",
      value: form.source,
      onChange: set('source')
    }, /*#__PURE__*/React.createElement("option", null, "Google search"), /*#__PURE__*/React.createElement("option", null, "Facebook / Instagram"), /*#__PURE__*/React.createElement("option", null, "Friend / referral"), /*#__PURE__*/React.createElement("option", null, "Mailer / flyer"), /*#__PURE__*/React.createElement("option", null, "Repeat customer"), /*#__PURE__*/React.createElement("option", null, "Other")), /*#__PURE__*/React.createElement(Input, {
      label: "Coupon code (optional)",
      placeholder: "e.g. CLEAR25",
      value: form.coupon,
      onChange: set('coupon')
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "accent",
      size: "lg",
      block: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Book my free water test"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        textAlign: 'center',
        margin: 0
      }
    }, "No obligation. We'll never share your information."))))), /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `@media (max-width: 860px){ .ss-wt-grid{ grid-template-columns:1fr !important; } }`
      }
    }));
  }
  return FreeWaterTest;
}();
window.SSFreeWaterTest = SSFreeWaterTest;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FreeWaterTest.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryPage.jsx
try { (() => {
// Savanna Springs — Gallery (before & after) page
const SSGalleryPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const GROUPS = [{
    title: 'Rust & iron stains',
    icon: 'flame',
    items: [{
      before: 'rust-ringed toilet tank',
      after: 'spotless white tank',
      problem: 'Rust'
    }, {
      before: 'orange-stained tub & fixtures',
      after: 'clean white tub',
      problem: 'Rust'
    }, {
      before: 'iron-stained laundry',
      after: 'bright, unstained wash',
      problem: 'Well'
    }]
  }, {
    title: 'Hard-water scale',
    icon: 'droplet',
    items: [{
      before: 'scaled, crusty faucet',
      after: 'clear, spot-free faucet',
      problem: 'HardWater'
    }, {
      before: 'cloudy, spotted glassware',
      after: 'crystal-clear glasses',
      problem: 'HardWater'
    }, {
      before: 'scaled shower head',
      after: 'full-flow clean head',
      problem: 'HardWater'
    }]
  }, {
    title: 'Clean installs',
    icon: 'wrench',
    items: [{
      before: 'old, leaking softener',
      after: 'tidy Impression Plus® install',
      problem: 'Softeners'
    }, {
      before: 'cluttered utility corner',
      after: 'neat softener + RO setup',
      problem: 'RO'
    }, {
      before: 'no drinking-water system',
      after: 'under-sink RO, faucet installed',
      problem: 'RO'
    }]
  }];
  function Plate({
    label,
    kind
  }) {
    const isBefore = kind === 'before';
    const stripe = isBefore ? 'repeating-linear-gradient(135deg, #e7ebf3 0 14px, #dde3ee 14px 28px)' : 'repeating-linear-gradient(135deg, var(--spring-50) 0 14px, #dcf0fb 14px 28px)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1,
        minHeight: 168,
        background: stripe,
        display: 'flex',
        alignItems: 'flex-end',
        padding: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: isBefore ? 'var(--neutral-500)' : 'var(--spring-700)',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: 'var(--radius-sm)',
        padding: '3px 8px'
      }
    }, isBefore ? 'Before' : 'After'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 11.5,
        lineHeight: 1.4,
        color: isBefore ? 'var(--neutral-600)' : 'var(--spring-800)',
        background: 'rgba(255,255,255,0.78)',
        borderRadius: 'var(--radius-sm)',
        padding: '5px 8px'
      }
    }, label));
  }
  function GalleryPage({
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Gallery"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 50,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Real installs, real results."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 620,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "Before-and-after results from homes and businesses around the Valley \u2014 stained fixtures cleared up, clean installs, and the systems behind them."))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--navy-50)',
        border: '1px solid var(--navy-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 16px',
        marginBottom: 30,
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--navy-800)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 15,
      color: "var(--navy-700)"
    }), " Placeholders shown \u2014 drop in real customer photos before publishing."), GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.title,
      style: {
        marginBottom: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: g.icon,
      size: 22,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, g.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22
      },
      className: "ss-grid-3"
    }, g.items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      variant: "elevated",
      padding: "none",
      hoverable: true,
      onClick: () => go(it.problem)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 0
      }
    }, /*#__PURE__*/React.createElement(Plate, {
      kind: "before",
      label: it.before
    }), /*#__PURE__*/React.createElement(Plate, {
      kind: "after",
      label: it.after
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--text-body)'
      }
    }, "See how we fixed it"), /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "var(--spring-700)"
    })))))))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      heading: "Want results like these? Book your free water test"
    }));
  }
  return GalleryPage;
}();
window.SSGalleryPage = SSGalleryPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Savanna Springs — Site Header (sticky, with mobile menu)
const SSHeader = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const NAV = [{
    label: 'Water Problems',
    key: 'Problems'
  }, {
    label: 'Products',
    key: 'Products'
  }, {
    label: 'Service Areas',
    key: 'ServiceAreas'
  }, {
    label: 'About',
    key: 'About'
  }, {
    label: 'Specials',
    key: 'Specials'
  }];
  function Header({
    current = 'Home',
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const [open, setOpen] = React.useState(false);
    const go = k => {
      setOpen(false);
      onNavigate && onNavigate(k);
    };
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-700)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--spring-100)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 15,
      color: "var(--sun-400)"
    }), " Serving Mahoning, Columbiana & Trumbull counties + Western PA"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@savannaspringswater.com",
      style: {
        color: '#fff',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15,
      color: "var(--sun-400)"
    }), " info@savannaspringswater.com"))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Home');
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-savanna-springs.png",
      alt: "Savanna Springs Water Solutions",
      style: {
        height: 52,
        width: 'auto'
      }
    })), /*#__PURE__*/React.createElement("nav", {
      className: "ss-nav-desktop",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }
    }, NAV.map(item => {
      const active = item.key === current;
      return /*#__PURE__*/React.createElement("a", {
        key: item.key,
        href: "#",
        onClick: e => {
          e.preventDefault();
          go(item.key);
        },
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 15,
          color: active ? 'var(--navy-700)' : 'var(--neutral-600)',
          padding: '8px 13px',
          borderRadius: 'var(--radius-pill)',
          background: active ? 'var(--navy-50)' : 'transparent',
          textDecoration: 'none',
          whiteSpace: 'nowrap'
        }
      }, item.label);
    })), /*#__PURE__*/React.createElement("div", {
      className: "ss-nav-desktop",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--navy-800)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--navy-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16,
      color: "var(--navy-700)"
    })), "(877) 750-1420"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go('FreeTest')
    }, "Free Water Test")), /*#__PURE__*/React.createElement("button", {
      className: "ss-nav-mobile-btn",
      onClick: () => setOpen(o => !o),
      "aria-label": "Menu",
      style: {
        display: 'none',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-md)',
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? 'x' : 'menu',
      size: 24,
      color: "var(--navy-700)"
    }))), open && /*#__PURE__*/React.createElement("div", {
      className: "ss-nav-mobile-panel",
      style: {
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '12px 16px 20px'
      }
    }, NAV.map(item => /*#__PURE__*/React.createElement("a", {
      key: item.key,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(item.key);
      },
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--navy-900)',
        padding: '12px 8px',
        borderBottom: '1px solid var(--border)',
        textDecoration: 'none'
      }
    }, item.label)), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '14px 8px',
        color: 'var(--navy-800)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18,
      color: "var(--navy-700)"
    }), " (877) 750-1420"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      block: true,
      onClick: () => go('FreeTest')
    }, "Free Water Test"))), /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
          @media (max-width: 1040px) {
            .ss-nav-desktop { display: none !important; }
            .ss-nav-mobile-btn { display: inline-flex !important; }
          }
        `
      }
    }));
  }
  return Header;
}();
window.SSHeader = SSHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Savanna Springs — Homepage Hero
const SSHero = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  function Trust({
    icon,
    children
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--spring-100)',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      color: "var(--sun-400)"
    }), " ", children);
  }
  function Hero({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        background: 'var(--navy-700)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        left: '48%',
        backgroundImage: 'url(../../assets/img-hero-people.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, var(--navy-700) 0%, var(--navy-700) 42%, rgba(31,43,110,0.82) 56%, rgba(31,43,110,0.2) 80%, rgba(31,43,110,0) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.35,
        filter: 'blur(8px)',
        left: -120,
        top: -140
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: '50%',
        background: 'var(--orange-500)',
        opacity: 0.9,
        right: '50%',
        bottom: 44
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 24px 88px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--spring-300)',
        marginBottom: 18
      }
    }, "We make one thing perfectly clear\u2026"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 58,
        lineHeight: 1.04,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, "Whatever's wrong with your water, we make it ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sun-400)'
      }
    }, "perfectly clear.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 19,
        lineHeight: 1.55,
        color: 'var(--spring-100)',
        margin: '22px 0 32px',
        maxWidth: 530
      }
    }, "Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good \u2014 for homes and businesses across Youngstown and Western PA."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      }),
      onClick: () => onNavigate && onNavigate('FreeTest')
    }, "Get my free water test"), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        textDecoration: 'none',
        padding: '4px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 20,
      color: "var(--sun-400)"
    })), "(877) 750-1420")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Trust, {
      icon: "star"
    }, "Family owned since 2008"), /*#__PURE__*/React.createElement(Trust, {
      icon: "shieldCheck"
    }, "Ohio EPA-licensed operators"), /*#__PURE__*/React.createElement(Trust, {
      icon: "badgeCheck"
    }, "WQA Certified")))));
  }
  return Hero;
}();
window.SSHero = SSHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// Savanna Springs — Homepage (problem-first, drives to free water test)
const SSHomePage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const WHY = [{
    icon: 'home',
    title: 'Local & family owned',
    body: 'Named after our daughter Savannah — serving the Valley since 2008. You know who the owners are.'
  }, {
    icon: 'award',
    title: 'American-made equipment',
    body: 'A proud authorized Water-Right® dealer. Custom-built, made in the USA — built to last.'
  }, {
    icon: 'wrench',
    title: 'We service everything',
    body: 'All makes and models, plus salt and water delivery. We keep your system running for the long haul.'
  }, {
    icon: 'dollarSign',
    title: 'Honest & affordable',
    body: 'Right-sized systems and flexible financing — including 6 months no interest. No pressure, ever.'
  }];
  const PRODUCTS = [{
    icon: 'droplet',
    color: 'water',
    title: 'Water softeners',
    body: 'Impression Plus® softeners end hard-water scale, spots and dry skin.',
    key: 'Softeners'
  }, {
    icon: 'beaker',
    color: 'navy',
    title: 'Reverse osmosis',
    body: 'Bottle-quality drinking water straight from your own tap.',
    key: 'RO'
  }, {
    icon: 'flame',
    color: 'orange',
    title: 'Iron & sulfur filters',
    body: 'Clear iron, sulfur and the rotten-egg smell — self-sanitizing media.',
    key: 'IronSulfur'
  }, {
    icon: 'shield',
    color: 'water',
    title: 'Whole-house filtration',
    body: 'Custom media systems for cleaner, safer water at every tap.',
    key: 'WholeHouse'
  }, {
    icon: 'truck',
    color: 'sun',
    title: 'Salt delivery',
    body: 'We deliver and load Dura-Cube® softener salt — never haul a bag again.',
    key: 'Salt'
  }, {
    icon: 'calendar',
    color: 'navy',
    title: 'Equipment rentals',
    body: 'Try soft water with no upfront cost — one month free rent.',
    key: 'Rentals'
  }];
  const SPECIALS = [['refresh', 'One month free rent', 'on Impression Plus® softeners'], ['truck', 'One year of free salt', 'with a Water-Right® softener'], ['droplet', 'RO for pennies a day', 'bottle-quality drinking water'], ['dollarSign', '6 months no interest', 'flexible financing available']];
  const CITIES = (window.SS_CITY_ORDER || []).map(k => ({
    key: k,
    label: window.SS_CITIES[k].city
  }));
  const TINTS = {
    water: 'var(--spring-100)',
    navy: 'var(--navy-50)',
    sun: 'var(--sun-100)',
    orange: '#ffe7d1'
  };
  const INKS = {
    water: 'var(--spring-600)',
    navy: 'var(--navy-700)',
    sun: 'var(--sun-700)',
    orange: 'var(--orange-600)'
  };
  function HomePage({
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const Hero = window.SSHero;
    const SectionHead = window.SSSectionHead;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(window.SSTrustStrip, null), /*#__PURE__*/React.createElement(window.SSProblemPicker, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(window.SSHowItWorks, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 24px',
        maxWidth: 1180,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Why Savanna Springs",
      title: "A water team your neighbors actually trust",
      sub: "Not a faceless sales outfit \u2014 a family business that fixes the real problem and stands behind the work."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
        marginTop: 46
      },
      className: "ss-grid-4"
    }, WHY.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.title,
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 28,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 54,
        height: 54,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: w.icon,
      size: 27,
      color: "var(--navy-700)"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18.5,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, w.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: 0
      }
    }, w.body)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 28,
        flexWrap: 'wrap',
        marginTop: 40,
        padding: '24px 0 0',
        borderTop: '1px solid var(--border)'
      }
    }, [['2008', 'Family owned since'], ['35+ yrs', 'Combined experience'], ['20-yr', 'Warranties available'], ['EPA', 'Licensed operators']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 32,
        color: 'var(--navy-700)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-water)',
        borderTop: '1px solid var(--spring-100)',
        borderBottom: '1px solid var(--spring-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '80px 24px'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Our products",
      title: "American-made, built for your water",
      sub: "We only install equipment made in America, custom-built and sized to your home."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
        marginTop: 44
      },
      className: "ss-grid-3"
    }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      variant: "elevated",
      hoverable: true,
      padding: "lg",
      onClick: () => go(p.key)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-lg)',
        background: TINTS[p.color],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 28,
      color: INKS[p.color]
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: 0
      }
    }, p.body), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 16,
        color: 'var(--spring-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "var(--spring-700)"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('Products'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "See all products")))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.25,
        right: -80,
        top: -100
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '78px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: 52,
        alignItems: 'center'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Service area"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 40,
        lineHeight: 1.06,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: 0
      }
    }, "Serving Youngstown, the Mahoning Valley & Western PA"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17.5,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '16px 0 24px',
        maxWidth: 460
      }
    }, "From our shop on River Road in Lowellville, we serve Mahoning, Columbiana & Trumbull counties plus Western PA \u2014 city water and private wells alike."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go('ServiceAreas'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Find your town")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
      }
    }, CITIES.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => go(c.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.16)',
        borderRadius: 'var(--radius-pill)',
        padding: '11px 18px',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15.5,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mapPin",
      size: 16,
      color: "var(--sun-400)"
    }), " ", c.label))))), /*#__PURE__*/React.createElement(window.SSReviews, {
      onNavigate: onNavigate,
      count: 3
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--sun-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '60px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap',
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--navy-700)',
        marginBottom: 10
      }
    }, "Specials & financing"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 36,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        color: 'var(--navy-900)',
        margin: 0
      }
    }, "Better water, made affordable")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('Specials')
    }, "See all specials"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('Financing'),
      style: {
        borderColor: 'var(--navy-700)',
        color: 'var(--navy-800)'
      }
    }, "Financing"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 18
      },
      className: "ss-grid-4"
    }, SPECIALS.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        background: 'rgba(255,255,255,0.55)',
        border: '1px solid rgba(31,43,110,0.12)',
        borderRadius: 'var(--radius-xl)',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        color: 'var(--navy-900)',
        margin: '0 0 4px',
        lineHeight: 1.15
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--navy-800)',
        margin: 0
      }
    }, body)))))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      heading: "Ready to make your water perfectly clear?",
      sub: "Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours to schedule."
    }));
  }
  return HomePage;
}();
window.SSHomePage = SSHomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Savanna Springs — Icon set (Lucide-derived path data, MIT)
// Single stroke style (2px round). Add names as needed.
const SS_ICON_PATHS = {
  droplet: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  check: 'M20 6 9 17l-5-5',
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  arrowDown: 'M12 5v14M19 12l-7 7-7-7',
  chevronRight: 'm9 18 6-6-6-6',
  chevronDown: 'm6 9 6 6 6-6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  shieldCheck: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z|m9 12 2 2 4-4',
  home: 'M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  alert: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z|M12 9v4|M12 17h.01',
  star: 'M11.48 3.5a.57.57 0 0 1 1.04 0l2.13 4.92 5.34.47c.5.04.7.67.32 1l-4.04 3.53 1.2 5.24c.11.49-.42.87-.85.61L12 16.98l-4.62 2.79c-.43.26-.96-.12-.85-.61l1.2-5.24L3.69 9.4c-.38-.34-.18-.97.32-1l5.34-.47z',
  drop2: 'M12 2.69s5.66 5.66 5.66 9.31A5.66 5.66 0 1 1 6.34 12C6.34 8.34 12 2.69 12 2.69z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  x: 'M18 6 6 18M6 6l12 12',
  mail: 'M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z|m22 7-10 5L2 7',
  mapPin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z|M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z|M12 6v6l4 2',
  truck: 'M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1|M14 9h4l3 3v5a1 1 0 0 1-1 1h-1|M7.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z|M17.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  wrench: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z',
  sparkle: 'M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z',
  flask: 'M9 3h6|M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.3h12.4a1.5 1.5 0 0 0 1.3-2.3L14 9.5V3|M7.8 15h8.4',
  beaker: 'M4.5 3h15|M6 3v15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3|M6 13h12',
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  instagram: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z|M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z|M17.5 6.5h.01',
  star6: 'M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6L12 17.7 5.8 21.7l2.4-7.6L2 9.6h7.6z',
  thumbsUp: 'M7 10v12|M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z',
  wind: 'M12.8 19.6A2 2 0 1 0 14 16H2|M17.5 8a2.5 2.5 0 1 1 2 4H2|M9.8 4.4A2 2 0 1 1 11 8H2',
  waves: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  award: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11|M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z',
  badgeCheck: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z|m9 12 2 2 4-4',
  dollarSign: 'M12 2v20|M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  calendar: 'M8 2v4|M16 2v4|M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|M3 10h18',
  factory: 'M2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8l-7 4V8l-7 4V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z|M17 18h.01|M12 18h.01|M7 18h.01',
  clipboard: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2|M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z|m21 21-4.3-4.3',
  refresh: 'M3 12a9 9 0 0 1 15-6.7L21 8|M21 3v5h-5|M21 12a9 9 0 0 1-15 6.7L3 16|M3 21v-5h5',
  arrowUpRight: 'M7 7h10v10|M7 17 17 7',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z|M12 1v2|M12 21v2|M4.2 4.2l1.4 1.4|M18.4 18.4l1.4 1.4|M1 12h2|M21 12h2|M4.2 19.8l1.4-1.4|M18.4 5.6l1.4-1.4',
  quote: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .25-1 1.25V20c0 1 0 1 1 1z|M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  style = {},
  ...rest
}) {
  const d = SS_ICON_PATHS[name];
  const paths = (d || '').split('|');
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), paths.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })));
}
window.SSIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProblemPage.jsx
try { (() => {
// Savanna Springs — Problem page template + Water Problems hub
(function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const TINTS = {
    water: 'var(--spring-100)',
    navy: 'var(--navy-50)',
    sun: 'var(--sun-100)',
    orange: '#ffe7d1'
  };
  const INKS = {
    water: 'var(--spring-600)',
    navy: 'var(--navy-700)',
    sun: 'var(--sun-700)',
    orange: 'var(--orange-600)'
  };
  function Breadcrumb({
    trail,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--spring-200)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        marginBottom: 16,
        flexWrap: 'wrap'
      }
    }, trail.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, t.key ? /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(t.key);
      },
      style: {
        color: 'var(--spring-200)',
        textDecoration: 'none'
      }
    }, t.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, t.label), i < trail.length - 1 && /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 14,
      color: "var(--spring-300)"
    }))));
  }
  function ProblemPage({
    problemKey,
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const p = window.SS_PROBLEMS[problemKey];
    if (!p) return null;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.28,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'var(--orange-500)',
        opacity: 0.85,
        right: '46%',
        bottom: 26
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '52px 24px 60px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 40,
        alignItems: 'center'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      onNavigate: onNavigate,
      trail: [{
        label: 'Home',
        key: 'Home'
      }, {
        label: 'Water Problems',
        key: 'Problems'
      }, {
        label: p.label
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 14
      }
    }, p.eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        lineHeight: 1.06,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, p.h1), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '18px 0 28px',
        maxWidth: 520
      }
    }, p.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      }),
      onClick: () => go('FreeTest')
    }, "Get my free water test"), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 19,
      color: "var(--sun-400)"
    })), "(877) 750-1420"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168,
        height: 168,
        borderRadius: 'var(--radius-2xl)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 78,
      color: "var(--sun-400)"
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: p.cause ? '1fr 1fr' : '1fr',
        gap: 22
      },
      className: "ss-grid-2"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 32,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: '#ffe7d1',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 22,
      color: "var(--orange-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--orange-600)'
      }
    }, "The problem")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        lineHeight: 1.65,
        color: 'var(--navy-900)',
        margin: 0
      }
    }, p.problem)), p.cause && /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-50)',
        border: '1px solid var(--navy-100)',
        borderRadius: 'var(--radius-xl)',
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--navy-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "flask",
      size: 22,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--navy-700)'
      }
    }, "The cause")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        lineHeight: 1.65,
        color: 'var(--navy-900)',
        margin: 0
      }
    }, p.cause)))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 700,
        margin: '0 auto 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "How we fix it"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 36,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: 'var(--navy-900)',
        margin: 0
      }
    }, "Diagnose \u2192 Recommend \u2192 Install")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
        marginTop: 40
      },
      className: "ss-grid-3"
    }, p.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '30px 26px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--neutral-200)',
        lineHeight: 1
      }
    }, String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, s.label), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: 0
      }
    }, s.body))))), p.payoff && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '24px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-water)',
        border: '1px solid var(--spring-100)',
        borderRadius: 'var(--radius-2xl)',
        padding: '34px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, p.payoff.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 40,
        color: 'var(--spring-600)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--text-body)',
        marginTop: 8
      }
    }, l))))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--navy-700)',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        boxShadow: 'var(--shadow-lg)'
      },
      className: "ss-grid-2"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '40px 44px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 14
      }
    }, "What we recommend"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: '#fff',
        margin: '0 0 14px',
        letterSpacing: '-0.02em'
      }
    }, p.product.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.65,
        color: 'var(--spring-100)',
        margin: '0 0 22px',
        maxWidth: 540
      }
    }, p.recommend), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26
      }
    }, p.product.badges.map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.16)',
        borderRadius: 'var(--radius-pill)',
        padding: '6px 13px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 13,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "var(--sun-400)",
      strokeWidth: 2.6
    }), " ", b))), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go(p.product.key),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Explore this solution")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(160deg, var(--navy-600), var(--navy-800))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        borderLeft: '1px solid rgba(255,255,255,0.1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150,
        height: 220,
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 56,
      color: "var(--spring-300)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 12,
        color: 'var(--spring-200)',
        letterSpacing: '0.08em'
      }
    }, "MADE IN USA"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: '0 0 24px'
      }
    }, "Other water problems we solve"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      },
      className: "ss-grid-3"
    }, p.related.map(rk => {
      const r = window.SS_PROBLEMS[rk];
      return /*#__PURE__*/React.createElement(Card, {
        key: rk,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(rk)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-lg)',
          background: TINTS[r.color],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.icon,
        size: 24,
        color: INKS[r.color]
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 17,
          color: 'var(--navy-900)',
          margin: 0
        }
      }, r.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 4,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13.5
        }
      }, "See the fix ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 14,
        color: "var(--spring-700)"
      })))));
    })))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      heading: p.cta + ' — book your free water test'
    }));
  }
  window.SSProblemPage = ProblemPage;

  // ---- Water Problems hub ----
  function ProblemsHub({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    const items = window.SS_PROBLEM_ORDER.map(k => ({
      icon: window.SS_PROBLEMS[k].icon,
      color: window.SS_PROBLEMS[k].color,
      title: window.SS_PROBLEMS[k].label,
      body: window.SS_PROBLEM_BLURB[k],
      key: k
    }));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 58px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Water problems"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 50,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "What", '\u2019', "s wrong with your water?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 620,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "Smelly, hard, rusty, cloudy, or bad-tasting \u2014 we diagnose the real cause and fix it for good. Find your problem below, or start with a free in-home water test."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get my free water test")))), /*#__PURE__*/React.createElement(window.SSProblemPicker, {
      onNavigate: onNavigate,
      items: items,
      eyebrow: "Pick your problem",
      title: "Eight problems, one local team",
      sub: "Each one custom-diagnosed and fixed at the source \u2014 for city water and private wells alike."
    }), /*#__PURE__*/React.createElement(window.SSHowItWorks, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate
    }));
  }
  window.SSProblemsHub = ProblemsHub;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProblemPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
// Savanna Springs — Product page template + Products hub
(function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const TINTS = {
    water: 'var(--spring-100)',
    navy: 'var(--navy-50)',
    sun: 'var(--sun-100)',
    orange: '#ffe7d1'
  };
  const INKS = {
    water: 'var(--spring-600)',
    navy: 'var(--navy-700)',
    sun: 'var(--sun-700)',
    orange: 'var(--orange-600)'
  };
  function Check({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--green-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--green-700)",
      strokeWidth: 2.6
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--navy-900)',
        lineHeight: 1.45
      }
    }, children));
  }
  function ProductPage({
    productKey,
    onNavigate
  }) {
    const {
      Card,
      Button,
      Badge
    } = window.SavannaSpringsDesignSystem_15883b;
    const p = window.SS_PRODUCTS[productKey];
    if (!p) return null;
    const go = k => onNavigate && onNavigate(k);
    const showMade = !['Bottled', 'Salt'].includes(p.key);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.28,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '52px 24px 60px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 40,
        alignItems: 'center'
      },
      className: "ss-wt-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--spring-200)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        marginBottom: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Home');
      },
      style: {
        color: 'var(--spring-200)',
        textDecoration: 'none'
      }
    }, "Home"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 14,
      color: "var(--spring-300)"
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('Products');
      },
      style: {
        color: 'var(--spring-200)',
        textDecoration: 'none'
      }
    }, "Products"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 14,
      color: "var(--spring-300)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, p.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 14
      }
    }, p.eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        lineHeight: 1.06,
        letterSpacing: '-0.025em',
        color: '#fff',
        margin: 0
      }
    }, p.h1), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        lineHeight: 1.6,
        color: 'var(--spring-100)',
        margin: '18px 0 24px',
        maxWidth: 540
      }
    }, p.lead), p.chips && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 24
      }
    }, p.chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.18)',
        borderRadius: 'var(--radius-pill)',
        padding: '6px 14px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 13.5,
        color: '#fff'
      }
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      }),
      onClick: () => go('FreeTest')
    }, "Get my free water test"), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 19,
      color: "var(--sun-400)"
    })), "(877) 750-1420"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168,
        height: 168,
        borderRadius: 'var(--radius-2xl)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 78,
      color: "var(--sun-400)"
    }))))), p.intro && /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 940,
        margin: '0 auto',
        padding: '46px 24px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18.5,
        lineHeight: 1.65,
        color: 'var(--text-body)',
        margin: 0
      }
    }, p.intro))), p.models && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, p.models.length > 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 700,
        margin: '0 auto 38px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, "The lineup"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "Choose the right fit for your water")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 24
      }
    }, p.models.map(m => /*#__PURE__*/React.createElement(Card, {
      key: m.name,
      variant: "elevated",
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr'
      },
      className: "ss-grid-2"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 36
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 14,
        flexWrap: 'wrap'
      }
    }, showMade && /*#__PURE__*/React.createElement(Badge, {
      color: "sun"
    }, "Made in USA"), m.tag && /*#__PURE__*/React.createElement(Badge, {
      color: "water"
    }, m.tag)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 25,
        color: 'var(--navy-900)',
        margin: '0 0 10px',
        letterSpacing: '-0.02em'
      }
    }, m.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: '0 0 22px',
        maxWidth: 540
      }
    }, m.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px 20px'
      },
      className: "ss-grid-2"
    }, m.features.map(f => /*#__PURE__*/React.createElement(Check, {
      key: f
    }, f))), m.warranty && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: 22,
        padding: '12px 16px',
        background: 'var(--navy-50)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shieldCheck",
      size: 18,
      color: "var(--navy-700)",
      style: {
        marginTop: 1,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--navy-800)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: 'var(--font-display)'
      }
    }, "Warranty:"), " ", m.warranty)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => go('FreeTest')
    }, "Request a free water test"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(160deg, var(--spring-50), var(--navy-50))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150,
        height: 224,
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(180deg, var(--neutral-0), var(--neutral-100))',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 14,
        right: 14,
        width: 18,
        height: 18,
        borderRadius: 4,
        background: 'var(--navy-700)'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 54,
      color: INKS[p.color]
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 12,
        color: 'var(--navy-700)',
        letterSpacing: '0.06em',
        textAlign: 'center',
        padding: '0 10px'
      }
    }, "MADE IN USA")))))))), p.segments && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '24px 24px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 34
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, p.segments.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, p.segments.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      },
      className: "ss-grid-3"
    }, p.segments.items.map(s => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '22px 24px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "factory",
      size: 22,
      color: "var(--navy-700)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--navy-900)'
      }
    }, s))))), p.highlights && /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-water)',
        borderTop: '1px solid var(--spring-100)',
        borderBottom: '1px solid var(--spring-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10
      }
    }, p.highlights.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, p.highlights.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16
      }
    }, p.highlights.items.map(e => /*#__PURE__*/React.createElement("div", {
      key: e,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        background: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        padding: '20px 22px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 'var(--radius-md)',
        background: 'var(--green-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 18,
      color: "var(--green-700)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.45,
        color: 'var(--navy-900)',
        fontWeight: 500
      }
    }, e)))))), p.delivery && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        background: 'var(--navy-50)',
        border: '1px solid var(--navy-100)',
        borderRadius: 'var(--radius-2xl)',
        padding: '32px 36px',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 60,
        height: 60,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "truck",
      size: 30,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 280
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        color: 'var(--navy-900)',
        margin: '0 0 6px'
      }
    }, p.delivery.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: 0
      }
    }, p.delivery.body)))), p.callFirst && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '8px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--sun-400)',
        borderRadius: 'var(--radius-2xl)',
        padding: '34px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "Let", '\u2019', "s talk through your project."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'var(--navy-800)',
        margin: '6px 0 0'
      }
    }, "Every commercial system is designed and quoted around your needs.")), /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      })
    }, "(877) 750-1420")))), p.solves && /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: '0 0 24px'
      }
    }, "Problems this solves"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      },
      className: "ss-grid-3"
    }, p.solves.map(sk => {
      const r = window.SS_PROBLEMS[sk];
      return /*#__PURE__*/React.createElement(Card, {
        key: sk,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(sk)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-lg)',
          background: TINTS[r.color],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.icon,
        size: 24,
        color: INKS[r.color]
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 17,
          color: 'var(--navy-900)',
          margin: 0
        }
      }, r.label), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 4,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13.5
        }
      }, "See the fix ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 14,
        color: "var(--spring-700)"
      })))));
    }))), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate,
      heading: p.cta
    }));
  }
  window.SSProductPage = ProductPage;

  // ---- Products hub ----
  function ProductsHub({
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 58px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Our products"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 48,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "American-made water treatment, built for your water."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 640,
        margin: '16px auto 0',
        lineHeight: 1.6
      }
    }, "We only install equipment made in America, custom-built and sized to your home. Browse the lineup, or start with a free water test."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get my free water test")))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '72px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22
      },
      className: "ss-grid-3"
    }, window.SS_PRODUCT_ORDER.map(k => {
      const pr = window.SS_PRODUCTS[k];
      return /*#__PURE__*/React.createElement(Card, {
        key: k,
        variant: "elevated",
        hoverable: true,
        padding: "lg",
        onClick: () => go(k)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-lg)',
          background: TINTS[pr.color],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: pr.icon,
        size: 28,
        color: INKS[pr.color]
      })), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 20,
          color: 'var(--navy-900)',
          margin: '0 0 8px'
        }
      }, pr.label), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: 'var(--font-body)',
          fontSize: 14.5,
          lineHeight: 1.55,
          color: 'var(--text-body)',
          margin: 0
        }
      }, window.SS_PRODUCT_BLURB[k]), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          marginTop: 16,
          color: 'var(--spring-700)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 14.5
        }
      }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 16,
        color: "var(--spring-700)"
      })));
    }))), /*#__PURE__*/React.createElement(window.SSTrustStrip, null), /*#__PURE__*/React.createElement(window.SSFreeWaterTest, {
      onNavigate: onNavigate
    }));
  }
  window.SSProductsHub = ProductsHub;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReviewsPage.jsx
try { (() => {
// Savanna Springs — Reviews page
const SSReviewsPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  function ReviewsPage({
    onNavigate
  }) {
    const {
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Reviews"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 50,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "What our neighbors say"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 20,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.16)',
        borderRadius: 'var(--radius-pill)',
        padding: '12px 22px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 20,
      color: "var(--sun-400)",
      fill: "var(--sun-400)"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: '#fff'
      }
    }, "5.0 average \xB7 loved across the Valley")))), /*#__PURE__*/React.createElement(window.SSReviews, {
      onNavigate: onNavigate,
      count: 6,
      eyebrow: "Real customers",
      title: "Reviews from real installs",
      sub: "Live Google reviews stream in here via Elfsight \u2014 these are a few of our favorites."
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '0 24px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'var(--surface-water)',
        border: '1px dashed var(--spring-300)',
        borderRadius: 'var(--radius-xl)',
        padding: '20px 26px',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star6",
      size: 22,
      color: "var(--spring-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        color: 'var(--text-body)'
      }
    }, "Live Google reviews load here via ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--navy-700)'
      }
    }, "Elfsight"), " \u2014 always up to date, straight from your neighbors."))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '40px 24px 72px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--sun-400)',
        borderRadius: 'var(--radius-2xl)',
        padding: '40px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        color: 'var(--navy-900)',
        margin: 0,
        letterSpacing: '-0.02em'
      }
    }, "Want results like these?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16.5,
        color: 'var(--navy-800)',
        margin: '6px 0 0'
      }
    }, "Start with a free, no-pressure in-home water test.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Book my free water test"))));
  }
  return ReviewsPage;
}();
window.SSReviewsPage = SSReviewsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReviewsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Savanna Springs — Reusable homepage / page sections
// Exposes: SSSectionHead, SSTrustStrip, SSProblemPicker, SSHowItWorks, SSReviews
(function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const TINTS = {
    water: 'var(--spring-100)',
    navy: 'var(--navy-50)',
    sun: 'var(--sun-100)',
    orange: '#ffe7d1',
    green: 'var(--green-100)'
  };
  const INKS = {
    water: 'var(--spring-600)',
    navy: 'var(--navy-700)',
    sun: 'var(--sun-700)',
    orange: 'var(--orange-600)',
    green: 'var(--green-700)'
  };

  // ---- Section heading (eyebrow → H2 → sub) ----
  function SectionHead({
    eyebrow,
    title,
    sub,
    align = 'center',
    dark = false,
    maxWidth = 740
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: align,
        maxWidth,
        margin: align === 'center' ? '0 auto' : 0
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "ss-eyebrow",
      style: {
        marginBottom: 10,
        color: dark ? 'var(--sun-400)' : undefined
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 42,
        lineHeight: 1.06,
        letterSpacing: '-0.02em',
        color: dark ? '#fff' : 'var(--navy-900)',
        margin: 0
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 17.5,
        lineHeight: 1.6,
        color: dark ? 'var(--spring-100)' : 'var(--text-body)',
        marginTop: 14
      }
    }, sub));
  }
  window.SSSectionHead = SectionHead;

  // ---- Trust strip ----
  function TrustStrip() {
    const ITEMS = [['star', 'Since 2008'], ['badgeCheck', 'WQA Certified'], ['shieldCheck', 'Water-Right® Dealer'], ['home', 'Made in USA'], ['wrench', 'We service all makes']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, ITEMS.map(([icon, label], i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--navy-800)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      color: "var(--spring-600)"
    }), " ", label), i < ITEMS.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'var(--neutral-300)'
      },
      className: "ss-dot"
    })))));
  }
  window.SSTrustStrip = TrustStrip;

  // ---- Problem picker grid ----
  const DEFAULT_PROBLEMS = [{
    icon: 'wind',
    color: 'sun',
    title: 'Rotten-egg smell',
    body: 'That sulfur odor in your tap and shower water.',
    key: 'Smelly'
  }, {
    icon: 'droplet',
    color: 'water',
    title: 'Hard water & scale',
    body: 'Spotty dishes, crusty faucets, dry skin, more soap.',
    key: 'HardWater'
  }, {
    icon: 'flame',
    color: 'orange',
    title: 'Rust & orange stains',
    body: 'Stains in sinks, tubs, toilets, and laundry.',
    key: 'Rust'
  }, {
    icon: 'beaker',
    color: 'navy',
    title: 'Bad-tasting water',
    body: 'Cloudy, metallic, or chemical-tasting tap water.',
    key: 'Taste'
  }, {
    icon: 'home',
    color: 'water',
    title: 'Well water problems',
    body: 'Iron, sulfur, sediment, and bacteria from a well.',
    key: 'Well'
  }, {
    icon: 'flask',
    color: 'sun',
    title: 'Chlorine taste & smell',
    body: 'That "pool water" smell from city water.',
    key: 'Chlorine'
  }];
  function ProblemPicker({
    onNavigate,
    items = DEFAULT_PROBLEMS,
    eyebrow = 'Start with your problem',
    title = "What's wrong with your water?",
    sub = 'Pick what sounds like your home — we diagnose the real cause, then fix it for good. Not sure? Start with a free in-home water test.'
  }) {
    const {
      Card
    } = window.SavannaSpringsDesignSystem_15883b;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '78px 24px',
        maxWidth: 1180,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: eyebrow,
      title: title,
      sub: sub
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
        marginTop: 44
      },
      className: "ss-grid-3"
    }, items.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      variant: "elevated",
      hoverable: true,
      padding: "lg",
      onClick: () => onNavigate && onNavigate(p.key)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-lg)',
        background: TINTS[p.color],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 28,
      color: INKS[p.color]
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--navy-900)',
        margin: 0,
        lineHeight: 1.15
      }
    }, p.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: '16px 0 0'
      }
    }, p.body), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 16,
        color: 'var(--spring-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5
      }
    }, "See the fix ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "var(--spring-700)"
    }))))));
  }
  window.SSProblemPicker = ProblemPicker;

  // ---- How it works (3-step) ----
  function HowItWorks({
    onNavigate,
    dark = false
  }) {
    const STEPS = [{
      n: '01',
      icon: 'search',
      title: 'We diagnose',
      body: 'A free in-home water test for hardness, iron, pH and chlorine — so we treat the real problem, not a guess.'
    }, {
      n: '02',
      icon: 'clipboard',
      title: 'We recommend',
      body: 'A custom system, right-sized to your water, your home and your budget. No upsell, no pressure.'
    }, {
      n: '03',
      icon: 'truck',
      title: 'We install',
      body: 'Professional installation by our licensed team — and we service all makes and models for the long haul.'
    }];
    const bg = dark ? 'transparent' : 'var(--surface-water)';
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: bg,
        borderTop: dark ? 'none' : '1px solid var(--spring-100)',
        borderBottom: dark ? 'none' : '1px solid var(--spring-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '78px 24px'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "How it works",
      title: "Diagnose \u2192 Recommend \u2192 Install",
      sub: "Three simple steps from problem water to water you love.",
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
        marginTop: 46
      },
      className: "ss-grid-3"
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.n,
      style: {
        position: 'relative',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px 28px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--navy-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 28,
      color: "var(--sun-400)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 38,
        color: 'var(--neutral-200)',
        lineHeight: 1
      }
    }, s.n)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: 'var(--navy-900)',
        margin: '0 0 8px'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: 0
      }
    }, s.body))))));
  }
  window.SSHowItWorks = HowItWorks;

  // ---- Reviews ----
  const REVIEWS = [{
    q: 'Beyond happy with the customer service and attention to detail. They did a water test to make sure we got the best system for our home. Highly recommend!',
    n: 'Madison M.'
  }, {
    q: 'Super job! Matt and Steve were excellent installers — very clean and responsive. Great price with even better service. We just ordered an RO system too.',
    n: 'Margaret F.'
  }, {
    q: 'Love our new water softener and reverse osmosis system. Even our heating guy commented on the quality of the work.',
    n: 'Brian F.'
  }, {
    q: "I don't have to think about anything. You show up and deliver my salt, and if something isn't working you fix it.",
    n: 'Jessica C.'
  }, {
    q: 'The softener and reverse osmosis systems are GREAT! When we travel, we truly miss the water we have at home.',
    n: 'Drew C.'
  }, {
    q: 'I recommend Savanna Springs in every home. Hated how hard our water was — my skin, the detergent, even the taste. Not anymore.',
    n: 'Dom L.'
  }];
  function Reviews({
    onNavigate,
    count = 3,
    eyebrow = 'Reviews',
    title = 'What our neighbors say',
    sub = 'Real homeowners across the Mahoning Valley and Western PA. Live Google reviews — here are a few favorites.'
  }) {
    const {
      Avatar,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const items = REVIEWS.slice(0, count);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '78px 24px',
        maxWidth: 1180,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: eyebrow,
      title: title,
      sub: sub
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)`,
        gap: 22,
        marginTop: 44
      },
      className: "ss-grid-3"
    }, items.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.n,
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 30,
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 30,
      color: "var(--spring-300)",
      fill: "var(--spring-100)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 2,
        margin: '14px 0 12px'
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 17,
      color: "var(--sun-400)",
      fill: "var(--sun-400)"
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--navy-900)',
        margin: '0 0 20px',
        flex: 1
      }
    }, "\"", r.q, "\""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: r.n,
      color: "navy"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--navy-900)'
      }
    }, r.n))))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate && onNavigate('Reviews'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 18
      })
    }, "Read all reviews")));
  }
  window.SSReviews = Reviews;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SpecialsPage.jsx
try { (() => {
// Savanna Springs — Specials / Current Offers page
const SSSpecialsPage = function () {
  const Icon = props => React.createElement(window.SSIcon, props);
  const OFFERS = [{
    tag: '1 MONTH FREE',
    color: 'navy',
    title: 'Impression Series R.O. — 1 month free rent',
    body: 'Bottle-quality drinking water from your own tap, with your first month of rent on us.',
    foot: 'One-year lease · install charge applies',
    key: 'RO'
  }, {
    tag: '1 YEAR FREE',
    color: 'sun',
    title: 'One year of free salt',
    body: 'Buy a Water-Right® softener and we\u2019ll cover a year of salt — 12 × 40-lb bags. We recommend Dura-Cube®.',
    foot: 'With softener purchase',
    key: 'Salt'
  }, {
    tag: '1 MONTH FREE',
    color: 'water',
    title: 'One month free rent on softeners',
    body: 'Try an Impression Plus® softener with your first month of rent free — feel the difference first.',
    foot: 'One-year lease · install charge applies',
    key: 'Softeners'
  }, {
    tag: '6 MO · 0%',
    color: 'orange',
    title: '6 months no interest',
    body: 'Special financing on purchases of $299 and up — plus longer terms available. See all the options.',
    foot: 'On approved credit',
    key: 'Financing'
  }];
  function SpecialsPage({
    onNavigate
  }) {
    const {
      Card,
      Button
    } = window.SavannaSpringsDesignSystem_15883b;
    const go = k => onNavigate && onNavigate(k);
    const tints = {
      orange: 'var(--orange-500)',
      navy: 'var(--navy-700)',
      water: 'var(--spring-500)',
      sun: 'var(--sun-400)'
    };
    const inks = {
      orange: '#fff',
      navy: '#fff',
      water: '#fff',
      sun: 'var(--navy-900)'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--navy-700)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--spring-500)',
        opacity: 0.26,
        right: -70,
        top: -110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 1180,
        margin: '0 auto',
        padding: '54px 24px 56px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--sun-400)',
        marginBottom: 12
      }
    }, "Current offers"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 52,
        color: '#fff',
        margin: 0,
        letterSpacing: '-0.025em'
      }
    }, "Special offers"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 18,
        color: 'var(--spring-100)',
        maxWidth: 560,
        margin: '14px auto 0'
      }
    }, "Current deals on softeners, drinking water and salt. Questions? Call ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#fff'
      }
    }, "(877) 750-1420"), "."))), /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 1180,
        margin: '0 auto',
        padding: '64px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24
      },
      className: "ss-grid-2"
    }, OFFERS.map(o => /*#__PURE__*/React.createElement(Card, {
      key: o.title,
      variant: "elevated",
      padding: "none",
      hoverable: true,
      onClick: () => go(o.key)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 132,
        flex: 'none',
        background: tints[o.color],
        color: inks[o.color],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        letterSpacing: '-0.01em',
        textAlign: 'center',
        padding: 14,
        lineHeight: 1.15
      }
    }, o.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '24px 26px'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        color: 'var(--navy-900)',
        margin: '0 0 8px',
        lineHeight: 1.2
      }
    }, o.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-body)',
        margin: '0 0 14px'
      }
    }, o.body), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        fontStyle: 'italic'
      }
    }, o.foot), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        color: 'var(--spring-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13.5
      }
    }, "Details ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 14,
      color: "var(--spring-700)"
    })))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        flexWrap: 'wrap',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18,
      color: "var(--spring-600)"
    }), " Questions? Call ", /*#__PURE__*/React.createElement("a", {
      href: "tel:18777501420",
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, "(877) 750-1420"), " or email ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@savannaspringswater.com",
      style: {
        color: 'var(--navy-700)',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, "info@savannaspringswater.com"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40,
        background: 'var(--surface-water)',
        border: '1px solid var(--spring-100)',
        borderRadius: 'var(--radius-2xl)',
        padding: '36px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--sun-400)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 28,
      color: "var(--navy-900)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--navy-900)',
        margin: 0
      }
    }, "Not sure which deal is right?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15.5,
        color: 'var(--text-body)',
        margin: '4px 0 0'
      }
    }, "Start with a free water test \u2014 we", '\u2019', "ll match you to the best offer."))), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('FreeTest'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowRight",
        size: 20
      })
    }, "Get a free water test"))));
  }
  return SpecialsPage;
}();
window.SSSpecialsPage = SSSpecialsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SpecialsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/cities-data.js
try { (() => {
// Savanna Springs — Service-area (city) page data. Real localized copy from the brief.
window.SS_CITIES = {
  Youngstown: {
    key: 'Youngstown',
    city: 'Youngstown',
    county: 'Mahoning',
    zip: '44512',
    type: 'municipal',
    h1: 'Water Softeners & Water Treatment in Youngstown, OH',
    lead: 'Hard water, rust stains, or a chlorine taste at your Youngstown tap? Savanna Springs has been the Valley\u2019s local water team since 2008 — free in-home test, right-sized system, professional install.',
    context: 'Most Youngstown homes are on city water from the Mahoning Valley Sanitary District, drawn from Meander Reservoir — treated and chlorinated, so many notice a chlorine taste and switch to RO and whole-house carbon filtration. Older East- and West-side homes pick up taste and staining from aging plumbing, and some outskirts run on wells with hardness and iron.',
    mostCommon: ['Chlorine taste & smell', 'Scale & spotting', 'RO drinking water', 'Aging-plumbing taste'],
    problems: ['Chlorine', 'HardWater', 'Taste', 'Rust', 'Sediment', 'Well'],
    nearby: ['Boardman', 'Austintown', 'Struthers', 'Campbell', 'Poland'],
    meta: 'Water Softeners Youngstown, OH | Savanna Springs'
  },
  Boardman: {
    key: 'Boardman',
    city: 'Boardman',
    county: 'Mahoning',
    zip: '44512',
    type: 'municipal',
    h1: 'Water Softeners & Water Treatment in Boardman, OH',
    lead: 'Spot-free dishes, softer water, and better-tasting drinking water for your Boardman home — diagnosed with a free test and installed by your local team since 2008.',
    context: 'One of the Valley\u2019s largest suburbs, Boardman is mostly on municipal water. Treated water still leaves scale and a chlorine taste, so most homes add a softener plus an RO system. We size to your exact water and offer financing to make it easy.',
    mostCommon: ['Scale & spotting', 'Chlorine taste', 'RO drinking water', 'Whole-house filtration'],
    problems: ['Chlorine', 'HardWater', 'Taste', 'Sediment', 'Rust', 'SoftWaterOut'],
    nearby: ['Youngstown', 'Poland', 'Canfield', 'Struthers'],
    meta: 'Water Softeners Boardman, OH | Savanna Springs'
  },
  Poland: {
    key: 'Poland',
    city: 'Poland',
    county: 'Mahoning',
    zip: '44514',
    type: 'mixed',
    h1: 'Water Softeners & Water Treatment in Poland, OH',
    lead: 'Village or township, city water or a private well — Poland homes get the right water solution from Savanna Springs, starting with a free in-home test.',
    context: 'The village runs on municipal water, while many Poland Township homes are on wells with hardness, iron, and sulfur odor. Village homes deal with chlorine taste and scale; township homes face well chemistry. A free test tells us exactly which side you\u2019re on.',
    mostCommon: ['Well hardness / iron / sulfur', 'Rotten-egg odor', 'Chlorine taste (village)', 'RO drinking water'],
    problems: ['Well', 'Smelly', 'HardWater', 'Chlorine', 'Rust', 'Taste'],
    nearby: ['Boardman', 'Struthers', 'New Middletown', 'Youngstown'],
    meta: 'Water Softeners Poland, OH | Savanna Springs'
  },
  Canfield: {
    key: 'Canfield',
    city: 'Canfield',
    county: 'Mahoning',
    zip: '44406',
    type: 'well',
    h1: 'Well Water Treatment & Softeners in Canfield, OH',
    lead: 'Canfield and Canfield Township are well-water country. We\u2019re well-water specialists — softening, iron removal, and odor control, all backed by a free in-home test.',
    context: 'Lots of private wells here, with hard water carrying iron, manganese, and sulfur that cause staining and rotten-egg odor. The self-sanitizing Sanitizer Plus with Crystal-Right® softens, removes iron and manganese, controls odor, and corrects low pH in one unit — no chemicals to buy.',
    mostCommon: ['Well hardness', 'Iron / manganese staining', 'Rotten-egg odor', 'Low pH'],
    problems: ['Well', 'Smelly', 'Rust', 'HardWater', 'Sediment', 'Taste'],
    nearby: ['Boardman', 'Austintown', 'North Lima', 'South Range'],
    meta: 'Well Water Treatment & Softeners Canfield, OH | Savanna Springs'
  },
  Struthers: {
    key: 'Struthers',
    city: 'Struthers',
    county: 'Mahoning',
    zip: '44471',
    type: 'municipal',
    h1: 'Water Softeners & Water Treatment in Struthers, OH',
    lead: 'Hard-water scale, an old softener that quit, or a chlorine taste in Struthers? We install new systems and service every brand — book a free water test.',
    context: 'An older river town on municipal water, Struthers sees hard-water scale, chlorine taste, and aging softeners installed by other companies. We service all makes and models, and we\u2019re just minutes away in Lowellville.',
    mostCommon: ['Hard-water scale', 'Chlorine taste', 'Aging / failed softeners', 'RO drinking water'],
    problems: ['HardWater', 'Chlorine', 'SoftWaterOut', 'Taste', 'Rust', 'Sediment'],
    nearby: ['Youngstown', 'Campbell', 'Poland', 'Lowellville'],
    meta: 'Water Softeners Struthers, OH | Savanna Springs'
  },
  Lowellville: {
    key: 'Lowellville',
    city: 'Lowellville',
    county: 'Mahoning',
    zip: '44436',
    type: 'mixed',
    hometown: true,
    h1: 'Water Softeners & Water Treatment in Lowellville, OH',
    lead: 'Lowellville is our hometown — our shop is right on River Road. Nobody knows this village\u2019s water better, and nobody gets to you faster. Free water test, always.',
    context: 'Our home base, right by the Pennsylvania line. Whether you\u2019re on municipal water or a private well, we test free and fix it fast — softening, iron and odor removal, or reverse osmosis for drinking water.',
    mostCommon: ['Hardness & scale', 'Iron & sulfur (wells)', 'Fast local service', 'RO drinking water'],
    problems: ['HardWater', 'Smelly', 'Rust', 'Chlorine', 'Taste', 'SoftWaterOut'],
    nearby: ['Struthers', 'Poland', 'Coitsville', 'New Middletown'],
    meta: 'Water Softeners Lowellville, OH | Savanna Springs'
  },
  Austintown: {
    key: 'Austintown',
    city: 'Austintown',
    county: 'Mahoning',
    zip: '44515',
    type: 'municipal',
    h1: 'Water Softeners & Water Treatment in Austintown, OH',
    lead: 'Soft, spot-free water and better-tasting drinking water for your Austintown home — sized to your water and installed by your local team since 2008.',
    context: 'A large township on Meander Reservoir water, Austintown\u2019s treated supply still leaves scale and a chlorine taste, so most homes pair a softener with an RO system for the best of both.',
    mostCommon: ['Scale & spotting', 'Chlorine taste', 'RO drinking water', 'Whole-house filtration'],
    problems: ['Chlorine', 'HardWater', 'Taste', 'Sediment', 'Rust', 'SoftWaterOut'],
    nearby: ['Youngstown', 'Canfield', 'Boardman', 'Mineral Ridge'],
    meta: 'Water Softeners Austintown, OH | Savanna Springs'
  },
  Salem: {
    key: 'Salem',
    city: 'Salem',
    county: 'Columbiana',
    zip: '44460',
    type: 'mixed',
    h1: 'Water Softeners & Well Water Treatment in Salem, OH',
    lead: 'In Salem and the Columbiana County countryside, city homes and rural wells need very different treatment. We do both — starting with a free in-home water test.',
    context: 'City homes are on the municipal supply, while the surrounding countryside is heavily on wells with hardness, iron, and sulfur odor. We bring softening and iron/sulfur filtration to the wells, and RO to the city homes.',
    mostCommon: ['Well hardness / iron / sulfur', 'Rotten-egg odor', 'Chlorine taste (in town)', 'RO drinking water'],
    problems: ['Well', 'Smelly', 'HardWater', 'Chlorine', 'Rust', 'Taste'],
    nearby: ['Columbiana', 'Leetonia', 'Canfield', 'Beloit'],
    meta: 'Water Softeners & Well Water Treatment Salem, OH | Savanna Springs'
  },
  SouthRange: {
    key: 'SouthRange',
    city: 'South Range / North Lima',
    county: 'Mahoning',
    zip: '44452',
    type: 'well',
    h1: 'Well Water Treatment in South Range / North Lima, OH',
    lead: 'The South Range area — North Lima, Greenford, and the surrounding countryside — is private-well country, and that\u2019s exactly where we specialize.',
    context: 'Covering North Lima, Greenford, and the rural Beaver and Green Township countryside, almost everyone here is on a private well. Water is typically hard with iron, manganese, sulfur (rotten-egg), sediment, and low pH. One self-sanitizing Sanitizer Plus softens, removes iron, kills odor, and corrects pH all at once.',
    mostCommon: ['Well hardness', 'Iron / manganese staining', 'Rotten-egg sulfur odor', 'Sediment & low pH'],
    problems: ['Well', 'Smelly', 'Rust', 'HardWater', 'Sediment', 'Chlorine'],
    nearby: ['North Lima', 'Greenford', 'Canfield', 'Poland', 'New Middletown'],
    meta: 'Well Water Treatment — South Range / North Lima, OH | Savanna Springs'
  }
};
window.SS_CITY_ORDER = ['Youngstown', 'Boardman', 'Poland', 'Canfield', 'Struthers', 'Lowellville', 'Austintown', 'Salem', 'SouthRange'];

// product services to surface per city type
window.SS_CITY_SERVICES = {
  municipal: ['Softeners', 'RO', 'WholeHouse', 'Salt'],
  well: ['IronSulfur', 'Softeners', 'WholeHouse', 'RO'],
  mixed: ['Softeners', 'IronSulfur', 'RO', 'Salt']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/cities-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/problems-data.js
try { (() => {
// Savanna Springs — Problem page data (all 8). Real copy from the build brief.
window.SS_PROBLEMS = {
  Smelly: {
    key: 'Smelly',
    label: 'Rotten-egg smell',
    icon: 'wind',
    color: 'sun',
    eyebrow: 'Water problem · Odor',
    h1: 'Why does my water smell like rotten eggs?',
    lead: 'Turn on the faucet and get hit with the smell of rotten eggs — in your drinking water, the shower, or the laundry. Usually not harmful, but unpleasant enough to make you avoid your own tap.',
    problem: 'The smell shows up in drinking water, the shower, and laundry. It\u2019s usually not harmful — just unpleasant enough that you start avoiding it.',
    cause: 'Hydrogen sulfide gas, often from iron and sulfur bacteria in the water or water heater. Those bacteria can also leave a dark "slime" inside fixtures and toilet tanks.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free in-home water test shows whether it\u2019s hydrogen sulfide, iron/sulfur bacteria, or both.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'A Sanitizer Plus conditioner that kills the odor-causing bacteria and softens at the same time — no chemicals to buy.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Sized and installed by our Ohio EPA-licensed team, then serviced for the long haul.'
    }],
    recommend: 'The Sanitizer Plus Series conditioner with Crystal-Right® media uses patented self-chlorinating technology to kill the odor-causing bacteria, then rinses clean — while softening, removing iron and manganese, and raising low pH in one unit. No chemicals to buy.',
    product: {
      name: 'Sanitizer Plus with Crystal-Right®',
      key: 'IronSulfur',
      badges: ['Made in USA', 'Self-sanitizing', '4-in-1']
    },
    cta: 'Stop holding your breath at the tap',
    related: ['Well', 'Rust', 'HardWater'],
    meta: 'Rotten-Egg Smell in Your Water? We Fix It | Savanna Springs'
  },
  HardWater: {
    key: 'HardWater',
    label: 'Hard water & scale',
    icon: 'droplet',
    color: 'water',
    eyebrow: 'Water problem · Hard water',
    h1: 'Hard water is quietly costing you money',
    lead: 'Spotty dishes, crusty faucets, stiff laundry, dry skin and dull hair, and far too much soap. Hard water works against you in every room — and quietly shortens the life of your appliances.',
    problem: 'Spotty dishes, crusty faucets, stiff laundry, dry skin and dull hair, and using too much soap and detergent to get anything clean.',
    cause: 'Excess calcium, magnesium, and sometimes iron leave scale that clogs pipes, shortens water-heater life, and fights every detergent you own.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free test measures your exact hardness (grains per gallon) and iron, so the system is sized precisely to your water.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'A high-efficiency Impression Plus® softener — or the RC Series on city water to remove chlorine and hardness in one tank.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Professionally installed and serviced. Rental and financing available if you\u2019d rather spread the cost.'
    }],
    recommend: 'The Impression Plus Series® softener uses meter-based regeneration and high-capacity resin — up to 60% less salt and 75% less regeneration water than old time-clock units. On city water, the Impression Plus RC (Resin/Carbon) Series removes chlorine and hardness in one tank.',
    product: {
      name: 'Impression Plus Series® softeners',
      key: 'Softeners',
      badges: ['Made in USA', 'Eco-Friendly', '60% less salt']
    },
    payoff: {
      title: 'The payoff',
      stats: [['50%', 'less laundry detergent'], ['70%', 'less dish detergent'], ['47%', 'better water-heater efficiency']]
    },
    cta: 'See what soft water actually feels like',
    related: ['Taste', 'Chlorine', 'SoftWaterOut'],
    meta: 'Hard Water Treatment & Water Softeners | Youngstown OH'
  },
  Rust: {
    key: 'Rust',
    label: 'Rust & orange stains',
    icon: 'flame',
    color: 'orange',
    eyebrow: 'Water problem · Staining',
    h1: 'Stop rust and orange stains for good',
    lead: 'Orange and brown staining in sinks, tubs, toilets, and laundry. A metallic taste. Rust rings that keep coming back no matter how hard you scrub.',
    problem: 'Orange and brown staining in sinks, tubs, toilets and laundry, a metallic taste, and rust rings that keep coming back no matter how often you clean.',
    cause: 'Iron and manganese in your water — which also corrode plumbing and make taste and odor worse over time.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free test measures iron, manganese, and pH so we can match the right media to your water.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'An iron-reducing conditioner or a custom filter built with the right media for your iron levels.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Sized to your water, installed by our team, and serviced on all makes and models.'
    }],
    recommend: 'An iron-reducing Sanitizer Plus conditioner or a custom Impression Plus Filter Series (IMPBF) built with the right media. For heavy well iron paired with odor, the self-sanitizing Sanitizer Plus handles it all together — softening, iron/manganese removal, and odor control in one unit.',
    product: {
      name: 'Iron & sulfur filtration',
      key: 'IronSulfur',
      badges: ['Made in USA', 'Custom media', 'All makes serviced']
    },
    cta: 'Reclaim your white sinks',
    related: ['Smelly', 'Well', 'Sediment'],
    meta: 'Stop Rust & Orange Water Stains | Iron Filtration | Savanna Springs'
  },
  Taste: {
    key: 'Taste',
    label: 'Bad-tasting water',
    icon: 'beaker',
    color: 'navy',
    eyebrow: 'Water problem · Taste',
    h1: 'Better-tasting water, straight from your tap',
    lead: 'A metallic, chemical, or just "off" taste. Cloudy ice. And a recurring bill for bottled water you shouldn\u2019t need to buy in the first place.',
    problem: 'A metallic, chemical or "off" taste, cloudy ice, and the constant expense and hassle of buying bottled water.',
    cause: 'Chlorine, dissolved minerals, and other contaminants. Sometimes water that\u2019s perfectly "safe" still tastes bad because of dissolved solids.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free test — including a TDS reading — shows exactly what\u2019s affecting the taste of your water.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'A reverse-osmosis system under the sink for sparkling drinking water, better coffee, and clearer ice.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Installed and maintained by Savanna Springs. Rentals available for pennies a day.'
    }],
    recommend: 'A reverse-osmosis system under the sink — the Impression Series R.O. (four-stage + carbon polish) for sparkling water, better coffee and clearer ice. The top-of-line Eclipse R.O. adds a TDS faucet monitor and no-mess filter changes, with no electricity needed. It replaces the bottled-water habit for pennies a day.',
    product: {
      name: 'Reverse osmosis drinking water',
      key: 'RO',
      badges: ['Made in USA', 'Pennies a day', 'TDS monitor']
    },
    cta: 'Taste the difference',
    related: ['Chlorine', 'HardWater', 'Sediment'],
    meta: 'Reverse Osmosis Drinking Water Systems | Mahoning Valley'
  },
  Well: {
    key: 'Well',
    label: 'Well water problems',
    icon: 'home',
    color: 'water',
    eyebrow: 'Water problem · Well water',
    h1: 'Well water specialists for Northeast Ohio & Western PA',
    lead: 'Rusty sinks and dishwashers, rotten-egg odor, laundry staining, high lime, sediment, and the occasional bacteria scare. Well water is where many companies struggle — and exactly where we specialize.',
    problem: 'Rusty sinks and dishwashers, rotten-egg odor, laundry staining, high calcium and lime, sediment, and occasional bacteria. It\u2019s where many companies struggle — and where we specialize.',
    cause: 'A changing mix of extreme hardness, iron, manganese, sulfur, low pH, and sediment that varies well to well — and even season to season.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: '35+ years of experience plus the newest media and controls. We test in your home and build around your well\u2019s exact chemistry.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'Iron-reducing conditioning, self-chlorinating odor control, UV for bacteria, or the right filter/softener combo — whatever your well needs.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Custom-built, professionally installed, and serviced for life.'
    }],
    recommend: 'Iron-reducing conditioning for rusty fixtures; the self-chlorinating Sanitizer Plus with Crystal-Right® for odor; Viqua® UV for bacteria; and the right filter/softener combo for staining. The Sanitizer Plus performs like four units in one — softening, removing iron and manganese, controlling odor, and raising pH.',
    product: {
      name: 'Sanitizer Plus & well solutions',
      key: 'IronSulfur',
      badges: ['35+ yrs experience', 'Self-sanitizing', 'UV available']
    },
    cta: 'Tame your well water',
    related: ['Smelly', 'Rust', 'Sediment'],
    meta: 'Well Water Treatment — Iron, Sulfur & Sediment | NE Ohio'
  },
  Sediment: {
    key: 'Sediment',
    label: 'Sediment & cloudy water',
    icon: 'waves',
    color: 'water',
    eyebrow: 'Water problem · Sediment',
    h1: 'Cloudy, gritty, or discolored water?',
    lead: 'A cloudy glass, grit in your faucet aerators, and tinted water that clogs fixtures and wears out appliances before their time.',
    problem: 'A cloudy glass, grit collecting in aerators, and tinted water that clogs fixtures and shortens the life of your appliances.',
    cause: 'Turbidity from suspended particles and sediment — or acidic (low-pH) water pulling color and metals out of your pipes, which can cause blue-green staining and a metallic taste.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free test checks turbidity, sediment, and pH/alkalinity to pinpoint what\u2019s clouding your water.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'A custom filter for turbidity, plus a neutralizing filter where acidic water is the culprit.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Built to your water and installed by our team.'
    }],
    recommend: 'A custom Impression Plus Filter Series (IMPBF) for turbidity, plus a neutralizing filter where needed for acidic water. We test in-home, determine the media formula, and build the configuration around what your water actually needs.',
    product: {
      name: 'Whole-house filtration',
      key: 'WholeHouse',
      badges: ['Custom media', 'Made in USA', 'pH neutralizing']
    },
    cta: 'Clear it up',
    related: ['Rust', 'Well', 'Taste'],
    meta: 'Cloudy Water, Sediment & Discoloration Treatment | Savanna Springs'
  },
  Chlorine: {
    key: 'Chlorine',
    label: 'Chlorine taste & smell',
    icon: 'flask',
    color: 'sun',
    eyebrow: 'Water problem · Chlorine',
    h1: 'Get the "pool water" smell out of your tap',
    lead: 'City water that smells and tastes like a swimming pool. It\u2019s not harmful — but it\u2019s unpleasant every single day, in every glass and every shower.',
    problem: 'City water that smells or tastes like chlorine. It isn\u2019t harmful, but it\u2019s unpleasant daily — in your drinking water, your coffee, and your shower.',
    cause: 'Municipal chlorine or chloramine. Chloramine in particular can irritate skin, break down rubber plumbing parts, and harm aquarium fish.',
    steps: [{
      label: 'We diagnose',
      icon: 'search',
      body: 'A free test confirms whether it\u2019s chlorine or chloramine — which changes the media we use.'
    }, {
      label: 'We recommend',
      icon: 'clipboard',
      body: 'A Resin/Carbon softener that removes chlorine and hardness in one tank, or Crystal-Right/Carbon for tougher chloramine.'
    }, {
      label: 'We install',
      icon: 'wrench',
      body: 'Sized, installed, and serviced by Savanna Springs.'
    }],
    recommend: 'The Impression Plus RC (Resin/Carbon) for chlorine plus hardness in one tank; Impression Plus Crystal-Right/Carbon for tougher chloramine and ammonia; or an RO system for drinking water only. A free test tells us which media your city water calls for.',
    product: {
      name: 'Impression Plus RC & RO',
      key: 'Softeners',
      badges: ['Made in USA', 'One-tank design', 'City water']
    },
    cta: 'Lose the chlorine taste',
    related: ['Taste', 'HardWater', 'Sediment'],
    meta: 'Remove Chlorine & Chloramine Taste from City Water | Savanna Springs'
  },
  SoftWaterOut: {
    key: 'SoftWaterOut',
    label: 'Running out of soft water',
    icon: 'truck',
    color: 'sun',
    eyebrow: 'Water problem · Salt & capacity',
    h1: 'Tired of hauling salt — or running out of soft water?',
    lead: 'Lugging heavy, messy salt bags down the basement stairs. Or running out of soft water mid-week because the system was never sized right. There\u2019s a better way.',
    problem: 'Lugging heavy, messy salt bags — or running out of soft water mid-week because an undersized system can\u2019t keep up with your household.',
    steps: [{
      label: 'Right-size it',
      icon: 'search',
      body: 'We size the system to your household — including Impression Plus Twin Systems for 24-hour soft water (20,000–120,000 grains, up to 28 GPM).'
    }, {
      label: 'Salt delivery',
      icon: 'truck',
      body: 'We take salt off your plate with Pro\u2019s Pick Dura-Cube® — we fill the brine tank and stack the bags wherever you want.'
    }, {
      label: 'Weekly routes',
      icon: 'calendar',
      body: 'Weekly delivery routes available across the Valley, so you never run out and never lift another bag.'
    }],
    recommend: 'Right-size the system — including Impression Plus Twin Systems for continuous 24-hour soft water (20,000–120,000 grains, up to 28 GPM) — and let us deliver Pro\u2019s Pick Dura-Cube® softener salt. We\u2019ll fill the brine tank and stack the bags wherever you like.',
    product: {
      name: 'Salt delivery & Twin Systems',
      key: 'Salt',
      badges: ['Free delivery', 'Twin systems', 'Weekly routes']
    },
    cta: 'Never run out — or lift another bag',
    related: ['HardWater', 'Well', 'Rust'],
    meta: 'Salt Delivery & Never Run Out of Soft Water | Savanna Springs'
  }
};

// display order for the hub & picker
window.SS_PROBLEM_ORDER = ['Smelly', 'HardWater', 'Rust', 'Taste', 'Well', 'Sediment', 'Chlorine', 'SoftWaterOut'];
window.SS_PROBLEM_BLURB = {
  Smelly: 'That sulfur odor in your tap and shower water.',
  HardWater: 'Spotty dishes, crusty faucets, dry skin, more soap.',
  Rust: 'Stains in sinks, tubs, toilets, and laundry.',
  Taste: 'Cloudy, metallic, or chemical-tasting tap water.',
  Well: 'Iron, sulfur, sediment, and bacteria from a well.',
  Sediment: 'Cloudy, gritty, or discolored water at the tap.',
  Chlorine: 'That "pool water" smell from city water.',
  SoftWaterOut: 'Hauling salt or running out of soft water.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/problems-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/products-data.js
try { (() => {
// Savanna Springs — Product page data (8 products). Real copy from the build brief.
window.SS_PRODUCTS = {
  Softeners: {
    key: 'Softeners',
    label: 'Water softeners',
    icon: 'droplet',
    color: 'water',
    eyebrow: 'Products · Softeners',
    h1: 'Water softeners that last.',
    lead: 'Highly efficient, demand-based softeners — custom-sized and competitively priced to end hard-water problems throughout your home.',
    models: [{
      name: 'Impression Plus Series®',
      tag: 'Most popular',
      blurb: 'Our flagship softener — microprocessor controls with an LED display, meter-based regeneration, and a valve built to never rust.',
      features: ['Microprocessor controls + LED display', 'Meter-based regeneration', 'Chlorine-resistant high-capacity resin', 'NORYL® valve — no screws or bolts to rust', 'Vortech® tank technology'],
      warranty: '20-yr mineral tank · 20-yr resin · 5-yr brine tank · 5-yr control valve · 5-yr labor'
    }, {
      name: 'Impression Plus RC (Resin/Carbon) Series',
      tag: 'For city water',
      blurb: 'Removes chlorine and hardness in one tank for municipal water — carbon protects the resin and your plumbing.',
      features: ['Chlorine + hardness in one tank', 'Carbon protects the resin', 'Space-saving single-tank design', 'Ideal for city water']
    }, {
      name: 'Impression Plus Crystal-Right/Carbon Series',
      tag: 'For chloramine',
      blurb: 'Softens while removing chloramine, ammonia, and unwanted odor and taste.',
      features: ['Removes chloramine + ammonia', 'Controls odor & taste', 'Softens at the same time']
    }, {
      name: 'Impression Plus Twin System',
      tag: '24-hour soft water',
      blurb: 'Continuous, around-the-clock soft water for larger households that never want to run out.',
      features: ['Never run out of soft water', '20,000–120,000 grains', 'Up to 28 GPM', 'Sized for big homes']
    }],
    highlights: {
      eyebrow: 'Eco-friendly · Money-saving',
      title: 'Good for your home and your wallet',
      items: ['Laundry detergent down up to 50%', 'Dish detergent down up to 70%', 'Water-heater efficiency up to 47%', 'Up to 60% less salt than time-clock units', 'Up to 75% less regeneration water']
    },
    solves: ['HardWater', 'Chlorine', 'SoftWaterOut'],
    cta: 'Get a free water test and the right-sized softener',
    meta: 'Water Softeners — Impression Plus Series | Savanna Springs'
  },
  RO: {
    key: 'RO',
    label: 'Reverse osmosis',
    icon: 'beaker',
    color: 'navy',
    eyebrow: 'Products · Drinking water',
    h1: 'Bottle-quality drinking water from your own tap.',
    lead: 'Crisp, clean drinking water under your sink — better coffee, clearer ice, and no more hauling cases of bottled water.',
    models: [{
      name: 'Impression Series R.O.',
      tag: 'Four-stage',
      blurb: 'Four-stage filtration with a final carbon polish for sparkling, great-tasting water.',
      features: ['Four stages + carbon polish', 'Sparkling, great-tasting water', 'Better coffee & clearer ice', '3-gallon storage tank'],
      warranty: '5-yr warranty · 1-yr labor'
    }, {
      name: 'Eclipse R.O.',
      tag: 'Top of line',
      blurb: 'Our best drinking-water system — with a TDS faucet monitor and no-mess filter changes.',
      features: ['TDS faucet monitor', 'Clean drop-in filter changes', 'No electricity needed', '3-gallon storage tank'],
      warranty: '5-yr warranty · 1-yr labor'
    }, {
      name: 'Viqua® UV Sterilization',
      tag: 'Bacteria protection',
      blurb: 'Adds a layer of protection against bacteria, viruses, and waterborne pathogens.',
      features: ['Kills bacteria, viruses, algae & mold', 'Guards against crypto & giardia', 'Stainless-steel chamber', 'Lamp-failure alarm']
    }],
    highlights: {
      eyebrow: 'The value',
      title: 'Bottle-quality for pennies a day',
      items: ['Replaces the bottled-water habit', 'Crisp water straight from the tap', 'Better coffee, tea & ice', 'Rentals available']
    },
    solves: ['Taste', 'Chlorine'],
    cta: 'Find the right system with a free water test',
    meta: 'Reverse Osmosis Drinking Water — Impression & Eclipse R.O. | Savanna Springs'
  },
  IronSulfur: {
    key: 'IronSulfur',
    label: 'Iron & sulfur filters',
    icon: 'flame',
    color: 'orange',
    eyebrow: 'Products · Iron & sulfur',
    h1: 'Clear out iron, sulfur, and the rotten-egg smell.',
    lead: 'The toughest well-water problems — iron staining and that rotten-egg odor — solved at the source with self-sanitizing media.',
    models: [{
      name: 'Sanitizer Plus Series with Crystal-Right®',
      tag: '4-in-1, self-sanitizing',
      blurb: 'Patented self-chlorinating technology kills iron and sulfur bacteria, then rinses clean — performing like four units in one.',
      features: ['Patented self-chlorinating media', '4-in-1: soften, iron, odor, pH', 'No chemicals to buy', '"Check salt" indicator', 'Lithium battery backup'],
      warranty: '20-yr mineral tank · 20-yr resin · 20-yr Crystal-Right® media · 5-yr control valve · 5-yr labor'
    }, {
      name: 'Impression Plus Filter Series (IMPBF)',
      tag: 'Custom media',
      blurb: 'Custom media built to your water — turbidity, chlorine, acidic-water neutralizing, or iron removal.',
      features: ['Turbidity removal', 'Chlorine removal', 'Neutralizing acidic water', 'Iron removal']
    }],
    solves: ['Smelly', 'Rust', 'Well'],
    cta: 'Book a free water test — we\u2019ll spec the right media',
    meta: 'Iron & Sulfur Filters — Sanitizer Plus with Crystal-Right | Savanna Springs'
  },
  WholeHouse: {
    key: 'WholeHouse',
    label: 'Whole-house filtration',
    icon: 'shield',
    color: 'water',
    eyebrow: 'Products · Whole-house',
    h1: 'Cleaner, safer water at every tap.',
    lead: 'Custom-designed media systems that treat one problem or several at once — used alongside a conditioner or on their own.',
    models: [{
      name: 'Impression Plus Filter Series (IMPBF)',
      tag: 'Custom media',
      blurb: 'Custom-designed media blends that treat one or several problems at once. Use it with a conditioner or alone.',
      features: ['Turbidity removal', 'Chlorine removal', 'Neutralizing acidic water', 'Iron removal']
    }],
    highlights: {
      eyebrow: 'How we design it',
      title: 'Built around your water, not a catalog',
      items: ['We test your water in-home', 'We determine the media formula', 'We recommend the configuration', 'One or several problems, one system']
    },
    solves: ['Sediment', 'Rust', 'Chlorine'],
    cta: 'Get a free water test to design your whole-house system',
    meta: 'Whole-House Water Filtration | Custom Media Systems | Savanna Springs'
  },
  Commercial: {
    key: 'Commercial',
    label: 'Commercial water treatment',
    icon: 'factory',
    color: 'navy',
    eyebrow: 'Products · Commercial',
    h1: 'Reliable, cost-effective commercial water treatment.',
    lead: 'For apartment buildings, nursing homes, restaurants, manufacturing, pharmaceutical operations, and larger homes that need commercial-grade equipment.',
    intro: 'One size doesn\u2019t fit all. We design the system around your project and service it long after install — so your water keeps performing.',
    segments: {
      eyebrow: 'Who we serve',
      title: 'Commercial-grade, custom-built',
      items: ['Apartment buildings', 'Nursing homes', 'Restaurants', 'Manufacturing', 'Pharmaceutical', 'Larger homes']
    },
    callFirst: true,
    cta: 'Talk through your commercial project',
    meta: 'Commercial Water Treatment Systems | Youngstown, OH | Savanna Springs'
  },
  Bottled: {
    key: 'Bottled',
    label: 'Bottled water & coolers',
    icon: 'drop2',
    color: 'sun',
    eyebrow: 'Products · Delivery',
    h1: 'Premium bottled water & coolers, delivered.',
    lead: 'Premium drinking water from a natural artesian spring in Lowellville, then rigorously filtered — we don\u2019t start with tap water like many competitors.',
    chips: ['20 oz', '1 gallon', '5 gallon'],
    models: [{
      name: '"Glacier" WaterSafe Cooler',
      tag: 'Top-load',
      blurb: 'Spill-proof and hygienically sealed, with Dry Guard protection.',
      features: ['Spill-proof design', 'Hygienically sealed', 'Dry Guard protection']
    }, {
      name: '"Storm" Back-Saver Cooler',
      tag: 'Bottom-load',
      blurb: 'Bottom-loading means no overhead lifting — hot and cold on tap.',
      features: ['No overhead lifting', 'Bottom-load bottle', 'Hot & cold water']
    }, {
      name: '"Glacier" Bottle-Less Cooler',
      tag: 'Bottle-less',
      blurb: 'Unlimited water with an advanced filter that removes rust, chlorine, lead, cysts, and odors.',
      features: ['Unlimited water', 'Removes rust, chlorine & lead', 'Filters cysts & odors']
    }, {
      name: '"Crystal Pro" Bottle-Less Dispenser',
      tag: 'Bottle-less',
      blurb: 'UV-protected with hot, ambient, and cold water, 4.7-gallon capacity, and leak detection.',
      features: ['UV protection', 'Hot / ambient / cold', '4.7-gallon capacity', 'Leak detection']
    }],
    delivery: {
      title: 'Delivery that fits your routine',
      body: 'Businesses every 1–4 weeks; residential customers get email reminders and just leave empties out. Serving Mahoning, Columbiana & Trumbull counties plus Western PA.'
    },
    cta: 'Set up delivery — fill out the form or call',
    meta: 'Bottled Water Delivery & Water Coolers | Mahoning Valley | Savanna Springs'
  },
  Salt: {
    key: 'Salt',
    label: 'Salt delivery',
    icon: 'truck',
    color: 'sun',
    eyebrow: 'Products · Salt delivery',
    h1: 'Salt delivery — the better way.',
    lead: 'Salt is heavy, messy, and bulky. Let us handle it. We deliver Pro\u2019s Pick Dura-Cube® and load it for you — so you never lift another bag.',
    highlights: {
      eyebrow: 'Pro\u2019s Pick Dura-Cube®',
      title: 'A cleaner, easier salt',
      items: ['Up to 99.8% pure', 'Virtually 100% soluble', 'Compacted to prevent mushing & bridging', '2-handle 40-lb easy-open bag', 'Bag is 50% recycled']
    },
    delivery: {
      title: 'We do the heavy lifting',
      body: 'Weekly delivery routes across the Valley. We\u2019ll fill your brine tank and stack the bags wherever you want them.'
    },
    solves: ['SoftWaterOut'],
    cta: 'Set up your salt delivery schedule today',
    meta: 'Water Softener Salt Delivery — Dura-Cube | Savanna Springs'
  },
  Rentals: {
    key: 'Rentals',
    label: 'Equipment rentals',
    icon: 'calendar',
    color: 'water',
    eyebrow: 'Products · Rentals',
    h1: 'Try soft water without the upfront cost.',
    lead: 'Not ready to buy? Rent a softener or drinking-water system and feel the difference first — with a special offer to get you started.',
    models: [{
      name: 'Impression Plus® softener rental',
      tag: 'One month free',
      blurb: 'Rent our flagship softener and get one month of free rent to start.',
      features: ['One month free rent', 'One-year lease', 'Install charge applies', 'Service included']
    }, {
      name: 'Impression Series R.O. rental',
      tag: 'Pennies a day',
      blurb: 'Bottle-quality drinking water for pennies a day — one month free for a limited time.',
      features: ['One month free (limited time)', 'One-year lease', 'Install charge applies', 'Maintenance included']
    }],
    solves: ['HardWater', 'Taste'],
    cta: 'Ask about rentals on your free water test',
    meta: 'Water Softener & R.O. Rentals | Savanna Springs'
  }
};
window.SS_PRODUCT_ORDER = ['Softeners', 'RO', 'IronSulfur', 'WholeHouse', 'Commercial', 'Bottled', 'Salt', 'Rentals'];
window.SS_PRODUCT_BLURB = {
  Softeners: 'Impression Plus® softeners end hard-water scale, spots and dry skin.',
  RO: 'Bottle-quality reverse-osmosis drinking water from your own tap.',
  IronSulfur: 'Self-sanitizing media clears iron, sulfur and the rotten-egg smell.',
  WholeHouse: 'Custom media systems for cleaner, safer water at every tap.',
  Commercial: 'Commercial-grade systems custom-built around your project.',
  Bottled: 'Spring water, coolers and delivery for home and business.',
  Salt: 'We deliver and load Dura-Cube® softener salt — free of the hassle.',
  Rentals: 'Try soft water or RO with no upfront cost — one month free.'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/products-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
