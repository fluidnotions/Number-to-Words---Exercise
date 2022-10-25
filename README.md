# Number to Words - Exercise

## Instructions

The client and server are independent node packages.  
However after repo clone, run ```npm run start``` this will:
- run npm i for the frontend
- run npm i for the server
- build the server and start it (port: 4000)
- build the frontend and start it (port: 3000)

**Note: it can take a couple of min for both servers to build & start.**

## Limitations

- cannot process decimals
- cannot process negative numbers
- cannot process numbers greater than 1000000
- cannot process zero

## Unit Tests

see [server/test/NumberToWords.test.ts](./server/test/NumberToWords.test.ts)   
The server tests can be run with ```npm run test:server```
