



export class Login{




    constructor(page){
        this.page=page
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');  
        this.loginButton = page.locator('#login-button');
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}


function login(user) {
  console.log('One arg');
}

function login(user, pass) {
  console.log('Two args');
}


class User {
  constructor(name, age) {
    this.namename = name;
    this.age = age;
  }

    _greet() {
    console.log(`Hello, my name is ${this._namename} and I am ${this.age} years old.`);
  }
}

page.on('console',msg=>{

    if(msg.type()=== 'error'){

        console.log("error msg is ",msg.text())
    }
})