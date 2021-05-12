function Validator(options) {
    
    var selectorRules = {}
    var formElement = document.querySelector(options.form)

    // Hàm thực hiện validate
    function validate(inputElement, rule) { 
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector]
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra rule
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    } 

    // Lấy element của form cần validate
    if (formElement) {

        // Khi submit form
        formElement.onsubmit = (e) => {
            e.preventDefault()
            
            // Lặp qua từng rules và validate luôn
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector)
                validate(inputElement, rule)
            })
        }

        // Lặp qua mỗi rules và xử lý các sự kiện onblur, oninput
        options.rules.forEach(rule => {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }
            else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
                
        });
    }
}
// Định nghĩa các rules

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
Validator.isPhoneNumber = function(selector, message) {
    return {
        selector: selector,
        test: (value) => {
            var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            return phoneNumber.test(value) ? undefined : message
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return regex.test(value) ? undefined : message
        }
    }    
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `Vui lòng nhập ít nhất ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message
        }
    }
}