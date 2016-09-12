
import { Mongo } from 'meteor/mongo';


//User Collection
Users = new Mongo.Collection('user');

//Seasons Collection
Seasons = new Mongo.Collection('seasons');

//Target Collection
Targets = new Mongo.Collection('targets');

//TargetUpdates
Targets = new Mongo.Collection('targetUpdates');
