Labelled text field for forms (quote requests, contact, water-test scheduling). Supports a leading icon, hint text and error state.

```jsx
<Input label="Full name" placeholder="Jane Smith" />
<Input label="Email" type="email" iconLeft={<MailIcon/>} hint="We'll never share it." />
<Input label="ZIP code" error="Please enter a valid ZIP." />
```

Sizes `sm`/`md`/`lg`. Pass standard input attributes (`type`, `value`, `onChange`, `placeholder`).
