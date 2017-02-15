# triangle-taxonomist
A simple command-line tool for categorizing triangles.

## Installation

This command-line tool is a node application, but is not published to npm. Assuming you [have node installed](https://nodejs.org/en/download/), simply clone this repo and install dependencies:

```terminal
$ git clone https://github.com/jmwohl/triangle-taxonomist.git && cd triangle-taxonomist
$ npm install
```

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
$ ∆   The triangle with sides 3, 4, 4 is an ISOSCELES triangle.   ∆
```

## Running tests

To run the unit tests:

```terminal
$ npm test
```
