#!/bin/sh
let i=1
let b=101
while ((i < b))
do
    curl "https://demos.telerik.com/kendo-ui/content/web/foods/$i.jpg" -o $i.jpg
    i=$((i + 1))
done