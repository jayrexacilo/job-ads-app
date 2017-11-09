const validation = {
    registration: (inputs) => {
        const { registerType, name, email, username, password, reTypePassword } = inputs;
        let validate = {
            errorMessages: [],
            rules: {
                registerType: {
                    required: true,
                    type: ['employer', 'applicant']
                },
                email: {
                    required: true,
                    valid: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                },
                username: {
                    required: true,
                    min: 2,
                    max: 20,
                    // unique: 'users'
                },
                password:{ 
                    required: true,
                    min: 6,
                },
                reTypePassword:{ 
                    required: true,
                    matches: password.value
                },
                name:{ 
                    required: true,
                    min: 2,
                    max: 50
                }}
        }
        const rules = validate.rules;

        if(rules) {
            for(let item in rules) {
                for(let rule in rules[item]) {
                    let inputValue = inputs[item].value;

                    if(rules[item] === 'registerType' && rule === 'type') {
                        switch(rules[item][rule]) {
                            case 'employer':
                            case 'applicant':
                                break;
                            default:
                                validate.errorMessages.push("Something's wrong, reload the page and try again");
                                return validate.errorMessages;
                                break;
                        }
                    }

                    if(rule === 'required' && !inputValue.length) {
                        validate.errorMessages.push(item + ' should not be empty');
                    } else if(inputValue.length){
                        switch(rule) {
                            case 'min':
                            if(inputValue.length < rules[item][rule]) {
                                validate.errorMessages.push(inputs[item].name + " must be a minimum of " + rules[item][rule]);
                            }
                            break;
                        case 'max':
                            if(inputValue.length > rules[item][rule]) {
                                validate.errorMessages.push(inputs[item].name + " must be a maximum of " + rules[item][rule]);
                            }
                            break;
                        case 'matches':
                            if(inputValue != rules[item][rule]) {
                                validate.errorMessages.push("Password did not match");
                            }
                            break;
                        // case 'unique':
                        // 	$check = $this->_db->get($rule_value, array($item, '=', $value));
                        // 	if($check->count()) {
                        // 		validate.errorMessages.push("{$item} already exists.");
                        // 	}
                        // 	break;
                        }
                    }
                }
            }
        }

        return validate.errorMessages;
    }
}

export default validation;