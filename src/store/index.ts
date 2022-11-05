import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//CONFIRGURAÇÃO DO ARMAZENAMENTO PARA O REDUX PERSIST
const config = {
  key: 'finances-growdev',
  storage,
};

// criar o metodo de persistencia de dados no localStorage
const persist = persistReducer(config, rootReducer);

// CRIAR STORE
const minhaStore = createStore(
  persist,
  composeWithDevTools(applyMiddleware(thunk))
);

// CRIAR O PERSISTOR
const meuPersistor = persistStore(minhaStore);

export { minhaStore, meuPersistor }

export type RootState = ReturnType<typeof minhaStore.getState>;
export type AppDispatch = typeof minhaStore.dispatch;




