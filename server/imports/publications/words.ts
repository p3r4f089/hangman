import {Words} from '../../../both/collections/words.collection';
import {Meteor} from 'meteor/meteor';

Meteor.publish('words', ()=> Words.find());
