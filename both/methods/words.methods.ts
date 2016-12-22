import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';
import {Mongo} from 'meteor/mongo';
import {Words} from '../collections/words.collection';

Meteor.methods({

  registerWords: function(data){



      console.log('register words' + JSON.stringify(data.word));
      check(data,{
        word: String
      });


      Words.insert({
        owner: Meteor.userId(),
        word: data.word,
        date: new Date()
      });
    

  },
  findWords: function(){
    if(Words.find().cursor.count() != 0){
      let word =  Words.find().fetch();
      return word;
    }else{
      console.log('nothing');
    }

  },
  removeWord: function(id){
    Words.remove({_id:id});
  }

});
