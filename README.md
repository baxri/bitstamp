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
module.exports = {
    key: '778987978967967896797979',
    secret: '455675445457457577576767567567',
    account_id: '8908970890'
}
`

## Run application

To run application just run npm command

`npm run start`

