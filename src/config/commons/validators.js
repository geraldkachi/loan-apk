const _cvvValidator = (input, el = this) => {
  const re = /^\d+$/;
  const digit = input.trim();
  const validDigit = re.test(digit);
  const validLen = digit.length === 3;
  el.setState(prevState => {
    return {
      ...prevState,
      cvv: {
        ...prevState.cvv,
        value: digit,
        valid: validDigit && validLen,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        cvv: !validDigit
          ? 'CVV must be a number'
          : !validLen
          ? 'CVV must be 3 digits'
          : '',
      },
    };
  });
};

const _accountValidator = (input, el = this, name) => {
  const re = /^\d+$/;
  const digit = input.trim();
  const validDigit = re.test(digit);
  const validLen = name === 'bvn' ? digit.length === 11 : digit.length === 10;
  el.setState(prevState => {
    return {
      ...prevState,
      [name]: {
        ...prevState[name],
        value: digit,
        valid: validDigit && validLen,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        [name]: !validDigit
          ? `${name} must be a number`
          : !validLen
          ? `${name} must be ${name === 'bvn' ? '11' : '10'} digits`
          : '',
      },
    };
  });
};

const _digitsValidator = (input, el = this, name) => {
  const re = /^\d+$/;
  const digit = input.trim();
  const validDigit = re.test(digit);
  el.setState(prevState => {
    return {
      ...prevState,
      [name]: {
        ...prevState[name],
        value: digit,
        valid: validDigit,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        [name]: !validDigit ? `${name} must be a number` : '',
      },
    };
  });
};

const _phoneHandler = (input, el = this) => {
  const re = /^([0]?\d([7](?=0)|[8](?=0|1)|[9](?=0))\d{9}(?!\d))$/;
  const telephone = input.trim();
  const validPhone = re.test(telephone);
  el.setState(prevState => {
    return {
      ...prevState,
      telephone: {
        ...prevState.telephone,
        value: telephone,
        valid: validPhone,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        telephone: !validPhone ? 'Invalid phone number' : '',
      },
    };
  });
};

const _emailHandler = (input, el = this) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.trim();
  const validEmail = re.test(email);
  el.setState(prevState => {
    return {
      ...prevState,
      email: {
        ...prevState.email,
        value: email,
        valid: validEmail,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        email: !validEmail ? 'Invalid email address' : '',
      },
    };
  });
};

const _emptyTest = (input, el = this, name) => {
  const text = input.trim();
  const empty = text.length > 0 ? false : true;
  el.setState(prevState => {
    return {
      ...prevState,
      empties: {
        ...prevState.empties,
        [name]: empty ? `${name} cannot be empty!` : '',
      },
    };
  });
  return empty;
};

const _passwordHandler = (input, el = this) => {
  const {
    confirmPassword: {value},
  } = el.state;
  const pass = input.trim();
  const confirmPassVal = value.length > 1 ? value.trim() : '';
  const cpTestResult = _validPassword(confirmPassVal.trim(), pass);
  const passTestResult = pass.length > 7 ? true : false;
  el.setState(prevState => {
    return {
      ...prevState,

      password: {
        ...prevState.password,
        value: pass,
        valid: passTestResult,
        touched: true,
      },
      confirmPassword: {
        ...prevState.confirmPassword,
        valid: cpTestResult && confirmPassVal.length > 0,
      },
      errors: {
        ...prevState.errors,
        password: !passTestResult
          ? 'Password must be at least 8 characters'
          : '',
        confirmPassword:
          !cpTestResult && confirmPassVal.length > 0
            ? 'Passwords do not match'
            : '',
      },
    };
  });
};

const _confirmPasswordHandler = (input, el = this) => {
  const confirmPass = input.trim();
  const {
    password: {value},
  } = el.state;
  const validatePassword = value.length > 1 ? value.trim() : '';

  const testResult = _validPassword(validatePassword.trim(), confirmPass);
  el.setState(prevState => {
    return {
      ...prevState,

      confirmPassword: {
        ...prevState.confirmPassword,
        value: confirmPass,
        valid: testResult,
        touched: true,
      },
      errors: {
        ...prevState.errors,
        confirmPassword: !testResult ? 'Passwords do not match' : '',
      },
    };
  });
};

const _validPassword = (confirmer, password) => {
  if (confirmer === '' && password.length > 7) {
    return false;
  } else if (
    confirmer !== '' &&
    password === confirmer &&
    password.length > 7
  ) {
    return true;
  }
};

export {
  _emailHandler,
  _phoneHandler,
  _passwordHandler,
  _confirmPasswordHandler,
  _emptyTest,
  _digitsValidator,
  _accountValidator,
  _cvvValidator,
};
