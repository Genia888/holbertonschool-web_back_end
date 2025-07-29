#!/usr/bin/env python3
"""That defines a function to create a multiplier
function with type annotations."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by the given multiplier."""
    def multiplier_function(value: float) -> float:
        """Multiplies the input value by the multiplier."""
        return value * multiplier
    return multiplier_function
