Compact button holding a single icon — close buttons, nav arrows, social links, toolbar actions. Always pass a `label` for accessibility.

```jsx
<IconButton label="Close" variant="soft"><CloseIcon/></IconButton>
<IconButton label="Next" variant="solid" round={false}><ArrowIcon/></IconButton>
```

Variants: `solid` (navy), `soft` (navy tint, default), `accent` (yellow), `ghost`. Sizes `sm`/`md`/`lg`. `round` toggles circle vs rounded-square.
