import {
    useSelector as defaultUseSelector,
    TypedUseSelectorHook,
} from "react-redux";
import type { RootState } from "@redux/store";

const useSelector: TypedUseSelectorHook<RootState> = defaultUseSelector;
export default useSelector;