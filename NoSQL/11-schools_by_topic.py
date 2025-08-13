#!/usr/bin/env python3
"""Python function"""

def schools_by_topic(mongo_collection, topic):
    """That function returns the list of school having a specific topic"""
    return list(mongo_collection.find({"topics": topic}))
