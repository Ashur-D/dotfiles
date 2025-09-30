from collections.abc import Hashable
import datetime
from typing import (
    Any,
    overload,
)

import numpy as np
import pandas as pd
from pandas import Index
from pandas.core.indexes.accessors import PeriodIndexFieldOps
from pandas.core.indexes.datetimelike import DatetimeIndexOpsMixin
from pandas.core.indexes.timedeltas import TimedeltaIndex
from typing_extensions import Self

from pandas._libs.tslibs import (
    NaTType,
    Period,
)
from pandas._libs.tslibs.period import _PeriodAddSub
from pandas._typing import (
    AxesData,
    Dtype,
    Frequency,
    np_1darray,
)

class PeriodIndex(DatetimeIndexOpsMixin[pd.Period, np.object_], PeriodIndexFieldOps):
    def __new__(
        cls,
        data: AxesData[Any] | None = None,
        freq: Frequency | None = None,
        dtype: Dtype | None = None,
        copy: bool = False,
        name: Hashable | None = None,
    ) -> Self: ...
    @property
    def values(self) -> np_1darray[np.object_]: ...
    @overload  # type: ignore[override]
    def __sub__(self, other: Period) -> Index: ...
    @overload
    def __sub__(self, other: Self) -> Index: ...
    @overload
    def __sub__(self, other: _PeriodAddSub) -> Self: ...
    @overload
    def __sub__(self, other: NaTType) -> NaTType: ...
    @overload
    def __sub__(  # pyright: ignore[reportIncompatibleMethodOverride]
        self, other: TimedeltaIndex | pd.Timedelta
    ) -> Self: ...
    @overload  # type: ignore[override]
    def __rsub__(self, other: Period) -> Index: ...
    @overload
    def __rsub__(self, other: Self) -> Index: ...
    @overload
    def __rsub__(  # pyright: ignore[reportIncompatibleMethodOverride]
        self, other: NaTType
    ) -> NaTType: ...
    def asof_locs(
        self,
        where: pd.DatetimeIndex | PeriodIndex,
        mask: np_1darray[np.bool_],
    ) -> np_1darray[np.intp]: ...
    @property
    def is_full(self) -> bool: ...
    @property
    def inferred_type(self) -> str: ...
    @property
    def freqstr(self) -> str: ...
    def shift(self, periods: int = 1, freq: Frequency | None = None) -> Self:
        """
Shift index by desired number of time frequency increments.

This method is for shifting the values of datetime-like indexes
by a specified time increment a given number of times.

Parameters
----------
periods : int, default 1
    Number of periods (or increments) to shift by,
    can be positive or negative.
freq : pandas.DateOffset, pandas.Timedelta or string, optional
    Frequency increment to shift by.
    If None, the index is shifted by its own `freq` attribute.
    Offset aliases are valid strings, e.g., 'D', 'W', 'M' etc.

Returns
-------
pandas.DatetimeIndex
    Shifted index.

See Also
--------
Index.shift : Shift values of Index.
PeriodIndex.shift : Shift values of PeriodIndex.
        """
        pass

def period_range(
    start: (
        str | datetime.datetime | datetime.date | pd.Timestamp | pd.Period | None
    ) = None,
    end: (
        str | datetime.datetime | datetime.date | pd.Timestamp | pd.Period | None
    ) = None,
    periods: int | None = None,
    freq: Frequency | None = None,
    name: Hashable | None = None,
) -> PeriodIndex: ...
