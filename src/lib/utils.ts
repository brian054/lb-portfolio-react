import {clsx} from 'clsx' // for conditionally applying class names, handles strings, arrays, object, etc.
import {twMerge} from 'tailwind-merge' // function that merges tailwind classes, removing duplicates and fixing conflicts

/*
    This cn function does the following:
    - accepts any number of class values
    - filters and formats them with clsx
    - resolves any tailwind conflicts w/ twMerge
*/
export const cn = (...inputs: any[]) => { // you can pass in any number of arguments (strings, obj's, whatever)
    return twMerge(clsx(...inputs))
}; // cn = class name