Command line tool for http://www.websequencediagrams.com/

```
$ npm install
$ echo "title Foo
A->B: bar
B-->A: baz" > foo.diag
$ node seqdiag.js foo.diag foo.png
$ open foo.png
```
