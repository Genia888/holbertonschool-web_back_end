#!/usr/bin/env python3
"""Simple helper function for pagination"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Return a tuple of start and end indexes for a given page"""
    return (page - 1) * page_size, page * page_size