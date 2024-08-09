import { toast, ToastContent, ToastOptions } from "react-toastify";

const TOAST_OPTIONS: ToastOptions = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined
};

export const AppToaster = {
	error(content: ToastContent) {
		toast.error(content, TOAST_OPTIONS);
	}
};
