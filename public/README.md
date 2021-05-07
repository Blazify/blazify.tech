# Blazescript

> Blazescript is a bytecode-compiled and vm interpreted programming language which is blazingly fast and object oriented, it contains all kind of features such as variables, functions, objects, classes, etc.

## Installation Process

First of all [install rust](https://www.rust-lang.org/tools/install)

```shell
$ git clone git@github.com:BlazifyOrg/blazescript.git
$ cargo install --path blazescript/ --bin blazescript
```

## Examples

- Hello world

```bzs
println("Hello world!")
```

- Comments

```bzs
@ single line comment
@@
    multi-line comments
@@
```

- Functions

```bzs
fun add(a, b) => {
    return a + b;
}

println(add(1, 2)); @ 3
```

- Objects

```bzs
var obj = {
    "property": 0
};

println(obj.property);

obj.property = 3;

println(obj.property);
```

- Classes

```bzs
class Main {
    var property = 0;

    fun() => { @ constructor
        soul.property = 5; @ soul is the object is operating on.
    }

    fun setProperty(new_val) {
        soul.property = new_val;
    }
}

var klass = new Main();
println(klass);

klass.setProperty(10);

println(klass);
```

## Contributing

```shell
$ git checkout -b your_pull_request_branch_name
$ npm i -g commitizen
$ npm i -g cz-conventional-changelog
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
# Do any changes with the code you want in the pull request
$ git add .
$ cz
$ git push origin your_pull_request_branch_name
# create a pull request
```

## License

- [Apache 2.0](https://github.com/BlazifyOrg/blazescript)

## Authors

- [RoMeAh (Ronit Rahaman)](https://romeah.me)
