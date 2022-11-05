import { useSelector } from 'react-redux';
import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '..';


// useAppDispatch
// useDispatch => carregar/disparar intensoes ao reducer => setItem
const useAppDispatch = () => useDispatch<AppDispatch>();

// useAppSelector
// useSelector => traz/captura as informações da store => getItem
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };