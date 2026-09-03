#!/bin/bash
files=$(find src/app -name "*.tsx")
for f in $files; do
  grep -B 2 -A 1 "<table" "$f" | grep -v "^--" > /tmp/table_contexts.txt
  if [ -s /tmp/table_contexts.txt ]; then
    echo "--- $f ---"
    cat /tmp/table_contexts.txt
  fi
done
