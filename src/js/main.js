// Main JS File
import lazySizes from 'lazysizes'
import lazybgset from 'lazysizes/plugins/bgset/ls.bgset' // eslint-disable-line
import 'babel-polyfill'
import 'svgxuse' // eslint-disable-line
import './partial/kittnad' // Small Advertising for Kittn :)
import './partial/modernizer-loader'
import './partial/conditionizr-init'
import './partial/disable-pointerevents'

// Lasysizes Lazyload Config
const lazySizesConfig = window.lazySizesConfig || {}
window.lazySizesConfig = lazySizesConfig
window.lazySizesConfig.expand = 130
lazySizesConfig.expFactor = 1.3

// Lazy Sizes Init
lazySizes.init()
