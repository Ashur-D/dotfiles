import numpy as np
from pandas.core.indexes.extension import ExtensionIndex
from pandas.core.indexes.timedeltas import TimedeltaIndex
from typing_extensions import Self

from pandas._libs.tslibs import BaseOffset
from pandas._typing import (
    S1,
    AxisIndex,
    GenericT_co,
    TimeUnit,
)

class DatetimeIndexOpsMixin(ExtensionIndex[S1, GenericT_co]):
    @property
    def freq(self) -> BaseOffset | None: ...
    @property
    def freqstr(self) -> str | None:
        """
Return the frequency object as a string if it's set, otherwise None.

Examples
--------
For DatetimeIndex:

>>> idx = pd.DatetimeIndex(["1/1/2020 10:00:00+00:00"], freq="D")
>>> idx.freqstr
'D'

The frequency can be inferred if there are more than 2 points:

>>> idx = pd.DatetimeIndex(["2018-01-01", "2018-01-03", "2018-01-05"],
...                        freq="infer")
>>> idx.freqstr
'2D'

For PeriodIndex:

>>> idx = pd.PeriodIndex(["2023-1", "2023-2", "2023-3"], freq="M")
>>> idx.freqstr
'M'
        """
        pass
    @property
    def is_all_dates(self) -> bool: ...
    def min(
        self, axis: AxisIndex | None = None, skipna: bool = True, *args, **kwargs
    ) -> S1: ...
    def argmin(
        self, axis: AxisIndex | None = None, skipna: bool = True, *args, **kwargs
    ) -> np.int64: ...
    def max(
        self, axis: AxisIndex | None = None, skipna: bool = True, *args, **kwargs
    ) -> S1: ...
    def argmax(
        self, axis: AxisIndex | None = None, skipna: bool = True, *args, **kwargs
    ) -> np.int64: ...
    def __rsub__(  # type: ignore[misc,override]  # pyright: ignore[reportIncompatibleMethodOverride]
        self, other: DatetimeIndexOpsMixin
    ) -> TimedeltaIndex: ...

class DatetimeTimedeltaMixin(DatetimeIndexOpsMixin[S1, GenericT_co]):
    @property
    def unit(self) -> TimeUnit: ...
    def as_unit(self, unit: TimeUnit) -> Self: ...
