const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const date = dayjs.utc().format('MMMM D, YYYY [at] h:mm A [UTC]')
const readmePath = path.join(__dirname, '..', 'README.md')
let readme = fs.readFileSync(readmePath, 'utf8')
readme = readme.replace(
  /Last updated:.*\n/,
  `Last updated: ${date}\n`
)
fs.writeFileSync(readmePath, readme, 'utf8')
