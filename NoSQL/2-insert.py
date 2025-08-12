#!/usr/bin/env python3
"""
Insert a document {name: "Holberton school"} into the collection 'school' in the database 'my_db'.
"""

from pymongo import MongoClient

def main():
    client = MongoClient('mongodb://localhost:27017/')
    db = client.my_db
    school_collection = db.school

    result = school_collection.insert_one({"name": "Holberton school"})
    print(f"Inserted document id: {result.inserted_id}")

if __name__ == "__main__":
    main()
