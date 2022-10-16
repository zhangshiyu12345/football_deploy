import pymongo
import random

class Mongo():

    def connectdb(self,file,id):
        try:
            MongoClient = pymongo.MongoClient('mongodb://127.0.0.1:27017')
            print(MongoClient.list_database_names())
            db = MongoClient['user']
            collection = db.files
            data = {'id':id,'file':file}
            collection.insert_one(data)
            print(collection.find())
        except Exception as e:
            print(e)

        finally:
            MongoClient.close()

        return db





if __name__ == '__main__':
    mongo = Mongo()
    db = mongo.connectdb()
    print(db)