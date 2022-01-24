import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer, rootSaga } from ".";

// 미들웨어
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

// 저장소
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

sagaMiddleware.run(rootSaga);

export { store };
