![cf](https://i.imgur.com/7v5ASc8.png) 32: Authentication and Authorization
======

#### Project Description

An app that resembles instagram. With the ability to upload and update photos to and from a database hosted on AWS S3.

#### Scripts to remember:

- Frontend:
 npm run watch
 ```
 16:51 ~/codefellows/401/week8/33-photo-uploads/lab-maddy/sluggram-frontend [maddy-thur !] npm run watch

> 36-d18@1.0.0 watch /Users/maddys87/codefellows/401/week8/33-photo-uploads/lab-maddy/sluggram-frontend
> webpack-dev-server --inline --hot

Project is running at http://localhost:8080/
webpack output is served from /
404s will fallback to /index.html
Hash: db6a9ad8aa7518161cfb
Version: webpack 3.6.0
Time: 3672ms
                         Asset       Size  Chunks                    Chunk Names
bundle-db6a9ad8aa7518161cfb.js    1.93 MB       0  [emitted]  [big]  main
                    index.html  353 bytes          [emitted]         
   [1] ./node_modules/react/react.js 56 bytes {0} [built]
  [90] (webpack)/hot/log.js 1.04 kB {0} [built]
 [153] (webpack)/hot/emitter.js 77 bytes {0} [built]

```


- Backend:
mongod --dbpath ./db


#### Additions for Auth:

I added this chunk of code to the landing-container/index.js file:
```
return (
     <div>
       <h2>hello world from landing!</h2>
       <AuthForm
         auth={params.auth}
         onComplete={handleComplete}/>

       <section>
         {utils.renderIf(this.props.auth,
           <Dashboard
           />
         )}
       </section>
     </div>
   );
```
CHANGED TO:
```
/REFORMATTED
    return (
       <div>
        {this.props.auth ?
          <h2>hello world from landing!</h2> :
          <AuthForm
          auth={params.auth}
          onComplete={handleComplete}/>
        }
       </div>
    );
  }
}

//added on 10/11 before starting on lab 33
let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
```

#### ADDITIONS FOR LAB 33- photo upload
- added profile-action.js in frontend/src/action
- added imports to src/component/app

## Learning Objectives
* We will be able to manage basic and bearer auth on the client side
* We will learn to manage cookies on the client side

## Requirements
#### Configuration
#### backend
* clone [sluggram-backend](http://github.com/slugbyte/sluggram)

##### frontend
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
* `src/style/lib`
  * `_vars.scss`
* `src/style/base`
  * `_base.scss`
  * `_reset.scss`
* `src/style/layout`
  * `_header.scss`
  * `_footer.scss`
  * `_content.scss`

#### Feature Tasks
* Review the backend code for the Sluggram API; you should be able to interpret and understand what's happening
* create a simple front end for your cf-gram (or comparable) API
* create a landing page that enables a user to signup and signin
  * redirect the user to the dashboard page on signup or signin
  * store the users token in `localStorage` on signin

###### App Component Tree
Your components should be nested in the following layout  
```
App
  LandingContainer
    AuthForm
```
