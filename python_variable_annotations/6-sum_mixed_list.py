#!/usr/bin/env python3
"""Module that defines a function to sum a mixed list of integers and floats."""

from typing import Union


def sum_mixed_list(mxd_lst: list[Union[int, float]]) -> float:
    """Returns the sum of a mixed list of integers and floats."""
    return sum(mxd_lst)
