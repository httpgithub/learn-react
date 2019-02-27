//npm install --save-dev @babel/core @babel/node
//npm install --save-dev @babel/core @babel/cli @babel/preset-env
//npx babel-node   src/test.js

//https://blog.zfanw.com/babel-js/


import {take} from "redux-saga/effects"

const CHOOSE_COLOR = 'CHOOSE_COLOR';
const CHANGE_UI = 'CHANGE_UI';

const chooseColor = (color) => ({
    type: CHOOSE_COLOR,
    payload: {
      color,
    },
  });

function* changeColorSaga(){
    const action = yield take(CHOOSE_COLOR);
    console.info(action)
}

const gen = changeColorSaga();
gen.next()
gen.next()