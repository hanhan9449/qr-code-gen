#!/usr/bin/env bash

arr=( 72 96 128 144 152 192 384 512 )
name="饼干.svg"

for n in "${arr[@]}"
do
  echo $n
  inkscape -w $n -h $n $name -o "icon-${n}x${n}.png"
done

