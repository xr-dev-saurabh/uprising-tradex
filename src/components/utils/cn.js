const { ClassValue, clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");
// import {clsx, ClassValue} from 'clsx';
// import {twMerge} from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn };
