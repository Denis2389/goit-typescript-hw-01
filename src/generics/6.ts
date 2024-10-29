type Errors = {
      email?: string[];
      firstName?: string[];
      lastName?: string[];
      phone?: string[];
    };
    
    type Form = {
      email: string | null;
      firstName: string | null;
      lastName: string | null;
      phone: string | null;
      errors: Errors;
    };
    
    // Реалізуйте Params так, 
    // щоб унеможливити поле 'errors' з типу Form

    type Params = Omit<Form, 'errors'>

    const formData: Params = {
        email: 'dsdsd.@gmail.com',
        firstName: 'Denis',
        lastName: 'Berezniak',
        phone: '123-32-2123'
    };

    console.log(formData)
    