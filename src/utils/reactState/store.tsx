import { proxy, useSnapshot } from 'valtio';

declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T
}

interface Data {
  id:number;
  controller:any;
  arrowController:any;
}


interface State {
  cardsData: Data[]; // 这里将 cardsData 定义为字符串类型的数组
}

const state = proxy<State>({
  cardsData:[]
});

export { state, useSnapshot };