import { useDispatch as defUseDispatch } from "react-redux";
import type { AppDispatch } from "@redux/store";

const useDispatch = () => defUseDispatch<AppDispatch>();
export default useDispatch;
