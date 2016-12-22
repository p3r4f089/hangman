import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';
import {Mongo} from 'meteor/mongo';

Meteor.methods({
  regUser: function(data){
   Accounts.createUser({
     email: data.email,
     password: data.pass,
     profile:{
       name: data.name
     }
   });
   console.log('register user admin');
 },
  signupApp: function(data){
    Accounts.createUser({
      email: data.player + '@hangman.com',
      password: '12345678',
      profile:{
        name: data.player
      }
    });
  console.log('register user ' + data.player);
  },
  RemoveUser: function(id){
    Meteor.users.remove({_id:id});
  },
  getUSer: function(id){
    return Meteor.users.findOne({_id:id});
  }
});
