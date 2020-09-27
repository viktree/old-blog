const tasks = arr => arr.join(" && ")

const hooks = {
  "pre-commit": tasks([
    // save nvm version for netlify
    "[ ! -e .nvmrc ] && node -v  > .nvmrc || :",
    "git add .nvmrc",
    // format all the things
    "pretty-quick --staged",
  ]),
}

module.exports = {
  hooks,
}
