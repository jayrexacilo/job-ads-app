const validation = (rules, inputs) => {
    const errorMessages = [];

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
                            errorMessages.push("Something's wrong, reload the page and try again");
                            return errorMessages;
                            break;
                    }
                }
    
                if(rule === 'required' && !inputValue.length) {
                    errorMessages.push(item + ' should not be empty');
                } else if(inputValue.length){
                    switch(rule) {
                        case 'min':
                        if(inputValue.length < rules[item][rule]) {
                            errorMessages.push(inputs[item].name + " must be a minimum of " + rules[item][rule]);
                        }
                        break;
                    case 'max':
                        if(inputValue.length > rules[item][rule]) {
                            errorMessages.push(inputs[item].name + " must be a maximum of " + rules[item][rule]);
                        }
                        break;
                    case 'matches':
                        if(inputValue !== rules[item][rule]) {
                            errorMessages.push("Password did not match");
                        }
                        break;
                    }
                }
            }
        }
    }

    return (errorMessages.length) ? errorMessages : true;
}

export default validation;