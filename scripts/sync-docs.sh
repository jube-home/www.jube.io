#!/usr/bin/env bash
# Pull the product repo's docs/ into this site's docs/ and make them Jekyll-clean.
# Usage (from the site root):
#   scripts/sync-docs.sh <path-to-product-repo>   copy + clean
#   scripts/sync-docs.sh --clean-only              docs/ already copied by hand; just clean + audit
set -euo pipefail
ARG="${1:?usage: scripts/sync-docs.sh <path-to-product-repo> | --clean-only}"

if [ "$ARG" != "--clean-only" ]; then
  SRC="$ARG/docs"
  [ -d "$SRC" ] || { echo "no docs/ folder at $SRC"; exit 1; }
  echo "1. copy"
  rm -rf docs; mkdir docs; cp -R "$SRC"/. docs/
else
  [ -d docs ] || { echo "no docs/ folder here"; exit 1; }
  echo "1. copy skipped (--clean-only)"
fi

echo "2. strip Just the Docs theme files"
rm -rf docs/_config.yml docs/Gemfile docs/Gemfile.lock docs/_sass docs/_includes docs/_layouts docs/.github docs/favicon.ico docs/README.md
if [ -d docs/assets ]; then
  find docs/assets -type f \( -name '*.css' -o -name '*.scss' -o -name '*.js' \) -delete
  find docs/assets -type d -empty -delete
fi

echo "3. strip layout: lines (the doc layout is applied by _config.yml defaults)"
grep -rl '^layout:' docs --include='*.md' 2>/dev/null | xargs -r sed -i'' -E '/^layout: *[a-zA-Z_-]+ *$/d' || true

echo "4. audit links"
HITS=$(grep -rnIE '\]\(/|jube-home\.github\.io|site\.baseurl' docs || true)
if [ -n "$HITS" ]; then echo "Fix these (see COMPILE.md section 2):"; echo "$HITS"; else echo "no absolute or root-relative links found"; fi

echo "5. pages without a title (dropped from the menu):"
find docs -name '*.md' | while read -r f; do head -20 "$f" | grep -q '^title:' || echo "  $f"; done

echo "done. docs pages: $(find docs -name '*.md' | wc -l | tr -d ' ')"
