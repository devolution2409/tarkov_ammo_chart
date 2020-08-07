#!/bin/bash

yarn build && git add . && git commit -am "updating that stuff" && git push && git subtree push --prefix dist origin gh-pages