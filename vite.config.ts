import { oxfmtrc, oxlintrc } from './index.js'

export default {
  fmt: oxfmtrc,
  lint: oxlintrc,
  staged: { '*': 'vp check --fix' },
}
