[{
	id: '',
	name: '',
	room: ''
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.users = [];
	}
	addUser (id, name, room) {
		var user = {id, name, room};
		this.users.push(user);
        return user;
	}
	removeUser(id) {
		// return user that was removed
	}
	getUser (id) {

	}
	getUserList (room) {

	}
}

module.exports = {Users};

// class Person {
//    constructor (name, age) {
//      console.log(name, age);
//      this.name = name;
//      this.age = age;
//    }
//    getUserDescription() {
//    	return `${this.name} is ${this.age} old.`;
//    }
// }

// var me = new Person("michael", 30);
// var description = me.getUserDescription();
// console.log(description);