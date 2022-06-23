#!/bin/bash

if [ -z "$*" ];
then
	echo "No arguments supplied"
else
	for i in "$@"
	do
		echo "$i"
	done
fi
