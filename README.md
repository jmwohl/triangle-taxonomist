# triangle-taxonomist
A simple command-line tool for categorizing triangles.

[![Build Status](https://travis-ci.org/jmwohl/triangle-taxonomist.svg?branch=master)](https://travis-ci.org/jmwohl/triangle-taxonomist) [![Coverage Status](https://coveralls.io/repos/github/jmwohl/triangle-taxonomist/badge.svg?branch=master)](https://coveralls.io/github/jmwohl/triangle-taxonomist?branch=master)

## Requirements

- Node 6.x

## Installation

```terminal
npm install -g triangle-taxonomy
```

To install from the source, simply clone this repo and install dependencies:

```terminal
$ git clone https://github.com/jmwohl/triangle-taxonomist.git && cd triangle-taxonomist
$ npm install -g
```

Although not necessary to install globally, this will allow you to use the `tt` command directly rather than executing `./bin/cli.js`.

To uninstall, use `$ npm uninstall -g triangle-taxonomy` (or `$ npm uninstall -g` in the repo dir if you've installed from source).

## Usage

To categorize a triangle based on its three side lengths, simply specify each side as a positional argument to the `tt` command.

```terminal
$ tt [side_a_length] [side_b_length] [side_c_length]
```

For example:

```terminal
$ tt 3 4 4
```

Will result in the following output:

```terminal
$ isosceles
```

## Running tests

To run the unit tests and display code coverage:

```terminal
$ npm test
```
