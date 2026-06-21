Checkbox for opt-ins and multi-select lists (e.g. "Yes, send me free salt-delivery reminders").

```jsx
<Checkbox label="Add free salt delivery" defaultChecked />
<Checkbox label="Subscribe to specials" onChange={e => setOn(e.target.checked)} />
```

Works controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).
