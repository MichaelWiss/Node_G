const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

	var users;

	beforeEach(() => {
      users = new Users();
      users.users = [{
      	id: '1',
      	name: 'Mike',
      	room: 'Node Course'
      }, {
      	id: '2',
      	name: 'Jen',
      	room: 'React Course'
      }, {
      	id: '3',
      	name: 'Julie',
      	room: 'Node Course'
      }];
	});
   
   it('should add new user', () => {
   	var users = new Users();
   	var user = {
   		id: '123',
   		name: 'Michael',
   		room: 'The Office Fans'
   	};
   	var resUser = users.addUser(user.id, user.name, user.room);

   	expect(users.users).toEqual([user]);
   });

   it('should return names for node course', () => {
      var userList = users
   });
});