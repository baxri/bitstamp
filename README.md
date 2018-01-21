# bitstamp
Bitstamp application programming interface (API) client allows our clients to access and control their accounts, using custom written software.

This node client uses [bitstamp](https://www.npmjs.com/package/bitstamp).

A basic API wrapper for the Bitstamp REST API. Please refer to their [documentation](https://www.bitstamp.net/api/) documentation for all calls explained. Check out example.js for a list of all possible calls and their parameters.

## Download

Clone project in your local enviroment

`git clone git@github.com:baxri/bitstamp-node-client.git`
`npm install`

## Configuration

To start application first you must create `config/bitstamp.js` file with this content.

`
modules.export.key = '938453940857390537095'
modules.export.secret = '509750975098750975068'
modules.export.key = '939559'
`

## Run application

To run application just run npm command

`npm start`

