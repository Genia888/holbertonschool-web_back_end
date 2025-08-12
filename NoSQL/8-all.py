#!/usr/bin/env python3


"""That lists all documents in a collection"""

def list_all(mongo_collection):
    """Returns a list of all documents in a MongoDB collection"""
    return list(mongo_collection.find())
