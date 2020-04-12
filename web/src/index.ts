import { UserProps, User } from './models/User';

const user = User.buildUser({ name: 'Guy', age: 11 });

user.on('change', () => {
  console.log('changed');
});

user.trigger('change');
