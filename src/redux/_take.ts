import { select, take, takeEvery } from 'redux-saga/effects'

// 액션
const GET_TAKE = "GET_TAKE";

export const getTakeAction = () => ({ type: GET_TAKE });

// 모든 액션에 대해서 로그를 찍도록 하는 사가 - takeEvery
export function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    // const state = yield select()
    console.log('watchAndLog');
  })
};

// 
export function* watchAndLogTake(): Generator<any> {
  while (true) {
    /**
     * take는 call, put과 비슷하지만, 특정한 액션을 기다리기 위해서 미들웨어에 알려주는 명령 오브젝트를 생성한다.
     * 
     * call - 미들웨어가 프로미스의 resolve를 기다리게 한다.
     * take - 미들웨어가 매칭되는 액션이 dispatch될 때 까지 기다린다.
     * 즉, *(어떤 액션)이 dispatch 될 때까지 기다린다.
     */
    const action: any = yield take('*');
    console.log('watchAndLog Take', action);
  }
};

/**
 * take와 takeEvery 차이점
 * 
 * takeEvery - 실행된 태스크가 다시 실행될 때에 대한 관리 방법이 없다(?), 매칭되는 액션에 단순히 실행만 됨, 언제 observing(감시)를 멈춰야하는지에 대한 관리방법이 없음
 * 
 * take - 사가가 스스로 액션을 pulling 한다. 사가가 일반 함수를 콜 하는 것 처럼 보인다? 풀 접근법??
 */

/**
 * 로그인 플로우
 */
function* loginFlow(): Generator {
  while (true) {
    yield take("LOGIN");
    // 로그인 로직

    yield take("LOGOUT");
    // 로그아웃 로직
  }
}
