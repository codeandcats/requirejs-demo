<center>
  <img src="https://raw.githubusercontent.com/codeandcats/requirejs-demo/master/logo.png" />
</center>

# RequireJS Demo
This was a simple experiment that tests a strategy of mixing "legacy" scripts already defined in the global scope with new TypeScript scripts loaded by RequireJS.

With this technique working in this small app, the same principle can be applied to a larger app with lots of legacy js and a goal of migrating to TypeScript bit by bit. 

## Build
```
npm install typescript typings --global
typings install
tsc
```

## Run
Simply open `Home.html` in browser
