const User = {
      name: 'Anna'
    , mail:'ann@no.com'
};

console.log('User:%j',User);

delete User.mail;

console.log('User:%j',User);

User.phone = '111-11-11';

console.log('User:%j',User);

//throw error
// User = {
//      mail:'user@no.com'
//     , home:'/home/wizard/'
// };