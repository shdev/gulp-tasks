#!/bin/bash




egrep -r 'gulp([:space:]|\.)*task' gulp | gsed 's/^.*task('\''\([^'\'']*\).*$/\1/' | sort
