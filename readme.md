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
- For oxfmt, as oxfmt does not support extending configuration files yet, we need to copy the config file directly:
  ```sh
  cp node_modules/@arianrhodsandlot/oxc-config/oxfmtrc.json .oxfmtrc.json
  ```

## License

[MIT](license)
