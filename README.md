## Setup project
**1. cd caesar-cipher** 

**2. yarn** 

## Usage
- -s, --shift: a shift
- --input: an input file
- --output: an output file
- -a, --action: an action encode/decode

Note: **action** and **shift** options are mandatory.

## Usage Example
```
node caesar-cli.js --action decode --shift 3 --input input.txt --output output.txt
```
or
```
node caesar-cli.js -a decode -s 3
```