#!/usr/bin/env node

'use strict';

const alphabets = require('.');

console.log(alphabets.toString().replace(/,/g, ', '));
