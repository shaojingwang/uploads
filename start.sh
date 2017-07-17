#!/bin/bash
cd `dirname $0`
screen -S xxx.xxx.com -d -m node app.js
