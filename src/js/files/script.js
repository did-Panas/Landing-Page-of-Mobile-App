// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// ==================================================================================
// ===== BLOCKING SUBMIT-BTN with empty input (before validating) ===================

// const inputSubscript = document.querySelector('.subscribe-form__input');
// const btnSubmit = document.querySelector('.subscribe-form__btn');

// if (inputSubscript) {
// 	inputSubscript.addEventListener("blur", function (e) {

// 		if (inputSubscript.value.length > 0) {
// 			btnSubmit.disabled = false;
// 		} else {
// 			btnSubmit.disabled = true;
// 		}

// 	});
// }

// ===============
// ++++!!!!!!
// Валідація форм (З ВРАХУВАННЯМ ПУСТОГО ІНПУТУ + В КІНЦІ КОД БЛОКУВАННЯ BTN-SUBMIT)
// (вставити до formValidate в файл - forms.js)

// validateInput(formRequiredItem) {
// 	let error = 0;
// 	if (formRequiredItem.dataset.required === "email") {
// 		formRequiredItem.value = formRequiredItem.value.replace(" ", "");
// 		if ((this.emailTest(formRequiredItem)) && (formRequiredItem.value !== "")) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	else if (formRequiredItem.dataset.required === "uaphone") {
// 		formRequiredItem.value = formRequiredItem.value.replace(" ", "");
// 		if ((this.phoneTest(formRequiredItem)) && (formRequiredItem.value !== "")) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
// 		this.addError(formRequiredItem);
// 		error++;
// 	} else {
// 		if (!formRequiredItem.value.trim()) {
// 			this.addError(formRequiredItem);
// 			error++;
// 		} else {
// 			this.removeError(formRequiredItem);
// 		}
// 	}
// 	return error;
// },

// ==========================

// ============ >>>>>>>BLOCKING SUBMIT-BTN with empty input (before validating) =====

// else if (formRequiredItem.tagName === "SELECT" && Number(formRequiredItem.value) == 1) {
// 	this.addError(formRequiredItem);
// 	error++;
// }

// ================================================================================

// ==================================================================================