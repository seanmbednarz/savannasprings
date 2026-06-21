Inline banner for confirmations, warnings and notices (form success, hard-water alert, rental reminder).

```jsx
<Alert tone="success" title="Request received" icon={<CheckIcon/>}>
  We'll call within one business day to schedule your free water test.
</Alert>
<Alert tone="warning" onClose={() => {}}>Your salt is running low.</Alert>
```

Tones: info, success, warning, danger, brand. Optional `title`, `icon`, `onClose`.
