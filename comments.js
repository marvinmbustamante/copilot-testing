// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// import the router
const comments = require('./comments');

// create the server
const app = express 