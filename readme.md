# Oxc Config

A set of predefined Oxc config.

## Usage

Install the package:

```bash
npm install --save-dev @arianrhodsandlot/oxc-config
```

Then, extend the config in your oxlint or oxfmt configuration file.

- For oxlint, create a `.oxlintrc.json` with the following content:
  ```json
  {
    "$schema": "https://cdn.jsdelivr.net/npm/oxlint@latest/configuration_schema.json",
    "env": { "browser": true, "builtin": true, "es2026": true, "node": true },
    "extends": ["node_modules/@arianrhodsandlot/oxc-config/oxlintrc.json"]
  }
  ```
  or a `oxlint.config.ts` with the following content:
  ```ts
  export { oxlintrc as default } from '@arianrhodsandlot/oxc-config'
  ```
- For oxfmt, create a `oxfmt.config.ts` with the following content:
  ```ts
  export { oxfmtrc as default } from '@arianrhodsandlot/oxc-config'
  ```

## License

[MIT](license)
