$d = "content/paper"
$n = (Get-ChildItem $d -Directory | Where-Object { $_.Name -match '^post-\d+$' } | ForEach-Object { [int]($_.Name -replace 'post-', '') } | Measure-Object -Maximum).Maximum + 1
$target = "$d/post-$n"
hugo new "$target/index.md"
$filePath = "$target/index.md"
if (Test-Path $filePath) {
    (Get-Content $filePath) -replace "title = '.*'", "title = ''" | Set-Content $filePath
}
Set-Location $target