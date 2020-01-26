#!/usr/bin/env bash

writefile="./EXAMPLES.md"

# Clear output file (*turncate 0)
> $writefile

for folder in *; do

	# If not a folder, don't look for icons inside.
	if [[ ! -d $folder ]]; then
		continue
	fi

	echo "folder: $folder"
	# write header for the folder
	echo "# $folder" >> $writefile

	# loop through all icons in folder

	# this will be one string per icons directory to concatenate all the icon
	# html tags to avoid line breaks after each tag
	iconsbatch=""
	iconsbatchrel="" # for directory/README.md's, because icon paths need to be relative to the dir
	for icon in "./$folder/"*.svg; do
		echo "icon: $icon"
		if [[ -f $icon ]]; then
			# <img src="icons/add.svg" width="24" height="24"/>
			# echo "![$file]($file)" >> README.md
			icontag="<img src='$icon' width='48' height='48'/>"
			iconsbatch="$iconsbatch $icontag"

			relpath="${icon//$folder\/}"
			icontagrel="| <img src='$relpath' width='48' height='48' /> | ${relpath//.\/} |\n"
			iconsbatchrel="$iconsbatchrel$icontagrel"
		fi
	done
	# Append to main README.md
	echo $iconsbatch >> $writefile
	# Write to each folder's own README
	# "${firstString/Suzi/$secondString}"
	echo "| icon | name |" > ./$folder/README.md
	echo "| --- | --- |" >> ./$folder/README.md
	echo -e $iconsbatchrel >> ./$folder/README.md
done
