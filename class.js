// 1. Реализуй модель пользователя
class User {
  // Добавь свойства:
  // name,
  // age,
  // role(по умолчанию user),
  // permissions(по умолчаию пустой массив)
  //   isOnline(по умолчаию пустой false)
  // isAuthenticated(по умолчаию пустой false)
  constructor(
    { name, age },
    role = 'user',
    permissions = [],
    isOnline = false,
    isAuthenticated = false,
  ) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.permissions = permissions;
    this.isOnline = isOnline;
    this.isAuthenticated = isAuthenticated;
  }

  //   добавить геттер и сеттер для свойства permissions.
  //   Сеттер будет записывать в permissions новые данные
  //   добавить геттер и сеттер для свойства role. Будут записываться admin или partner
  get currentPermissions() {
    return this.permissions;
  }

  set currentPermissions(value) {
    // this.permissions.push(value);
    this.permissions = [...this.permissions, value];
  }

  get newRole() {
    return this.role;
  }

  set newRole(role) {
    this.role = role;
  }

  //   Добавь код для того, чтобы пользователь вошел в аккаунт. Свойство isAuthenticated измени в true
  authenticate() {
    this.isAuthenticated = true;
  }
  //   Добавь код для того, чтобы пользователь стал активным. Свойство isAuthenticated измени в true
  connect() {
    this.isOnline = true;
  }
  //   Добавь код для того, чтобы пользователю можно было расширить права доступа. БУдут записываться
  //   данные: "html", "js", "react", "node"
  addPermission(permission) {
    this.permissions =[...this.permissions, permission]
  }
}

// Проверь функционал

const alex = new User({ name: 'Alex', age: 25 });
console.log(alex.currentPermissions);
alex.currentPermissions = 'html';
alex.currentPermissions = 'js';
console.log(alex.currentPermissions);

console.log(alex.newRole);
alex.newRole = 'partner';
console.log(alex.newRole);
alex.addPermission("react");
console.log(alex);

// 2. Расширь функционал базового класса на свое усмотрение.
// Как вариант, ты можешь:
// Добавить новый класс Admin
// Добавить ему собственные свойства логирования его данных.
// Дописать ему методы disconnect(), removePermissions()

class Admin extends User{
   
  constructor({ name, age }, ...parametrs){ // rest оператор
    super({ name, age }, ...parametrs) // spread оператор
  }
}

const nikita = new Admin({name:'Nikita', age: 34}, 'admin',[], true, true); 
console.log(nikita);