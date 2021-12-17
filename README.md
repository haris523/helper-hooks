# helper-hooks

## Description

This package contains hooks that were mainly made for react-native, but they also might work for react. 
Current hooks in this package are:

useArray

Return value| Parameters | Description
--- | --- | ---
push | (element:any) | Adds an element to the end of the array
pop | () | Removes the last item in the array and returns it
clear | () | Removes all of the elements from the array
remove | (index:number) | Removes item on a certain index
insert | (item:any,index:number) | Inserts an element on a certain index
replace | (item:any,index:number) | Replaces an element on a certain index
setArray | ([]) | Method for updating the array, if it's not present on the list
removeDoubleValues | () | Removes all of the double values ex. [1,2,2,3] returns [1,2,3]
array | value | Just the array value

## Update

I will continue adding hooks to this package whenever I need to use some of them inside a project.
