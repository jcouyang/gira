![](https://travis-ci.org/jcouyang/gira.svg?branch=master)

## HOW TO USE
### Chrome User
https://chrome.google.com/webstore/detail/fgmclhebkmfbpeiiomjfcfikchamelmp
### Firefox & others
#### 1 install [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) first
then restart your browser

#### 2 install Gira plugin
by just click  [gira.user.js](https://rawgit.com/jcouyang/gira/master/greasemonkey/gira.user.js)

#### 3 login

goto [getgira.github.com](http://getgira.github.com) click  login

or login by click[here](https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&scope=public_repo,user) for **public** repo access

or login [here](https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&scope=private_repo,user) for **private** repo access

#### 4 now open any issue page
for example https://github.com/jcouyang/gira/issues

#### 5 [wiki how](https://github.com/jcouyang/gira/wiki/How-To)
## FOR DEVEPLOMENT
### install dependency
```
npm install -g gulp
npm install
```

### compile
```

gulp// compile everything
gulp scripts //to compile, reactify and browerify

gulp tests // compile tests file

// configure GM_location in gulpfile.js, then
gulp grease // to generate greasemonkey user script and cp to greasemonkey script local location

```

### tests

using ![jest](http://facebook.github.io/jest/)
```
npm test
```




