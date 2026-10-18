# Pull the product repo's docs\ into this site's docs\ and make them Jekyll-clean.
# Usage (from the site root):
#   .\scripts\sync-docs.ps1 -Repo C:\src\aml-fraud-transaction-monitoring   copy + clean
#   .\scripts\sync-docs.ps1 -CleanOnly                                      docs\ already copied by hand
param([string]$Repo, [switch]$CleanOnly)
$ErrorActionPreference = "Stop"

if (-not $CleanOnly) {
  if (-not $Repo) { throw "pass -Repo <path> or -CleanOnly" }
  $src = Join-Path $Repo "docs"
  if (-not (Test-Path $src)) { throw "no docs folder at $src" }
  Write-Host "1. copy"
  if (Test-Path docs) { Remove-Item docs -Recurse -Force }
  Copy-Item $src docs -Recurse
} else {
  if (-not (Test-Path docs)) { throw "no docs folder here" }
  Write-Host "1. copy skipped (-CleanOnly)"
}

Write-Host "2. strip Just the Docs theme files"
foreach ($p in "_config.yml","Gemfile","Gemfile.lock","_sass","_includes","_layouts",".github","favicon.ico","README.md") {
  $t = Join-Path docs $p; if (Test-Path $t) { Remove-Item $t -Recurse -Force }
}
if (Test-Path docs\assets) { Get-ChildItem docs\assets -Recurse -Include *.css,*.scss,*.js | Remove-Item -Force }

Write-Host "3. strip layout: lines"
Get-ChildItem docs -Recurse -Filter *.md | ForEach-Object {
  (Get-Content $_.FullName) -notmatch '^layout:\s*[a-zA-Z_-]+\s*$' | Set-Content $_.FullName
}

Write-Host "4. audit links"
$hits = Get-ChildItem docs -Recurse -Filter *.md | Select-String -Pattern '\]\(/|jube-home\.github\.io|site\.baseurl'
if ($hits) { Write-Host "Fix these (see COMPILE.md section 2):"; $hits | ForEach-Object { Write-Host "  $($_.Path):$($_.LineNumber)" } }
else { Write-Host "no absolute or root-relative links found" }

Write-Host "5. pages without a title (dropped from the menu):"
Get-ChildItem docs -Recurse -Filter *.md | ForEach-Object {
  if (-not ((Get-Content $_.FullName -TotalCount 20) -match '^title:')) { Write-Host "  $($_.FullName)" }
}

Write-Host "done. docs pages: $((Get-ChildItem docs -Recurse -Filter *.md).Count)"
