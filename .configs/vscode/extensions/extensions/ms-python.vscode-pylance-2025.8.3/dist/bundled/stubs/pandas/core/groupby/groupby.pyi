from collections.abc import (
    Callable,
    Hashable,
    Iterable,
    Iterator,
    Sequence,
)
import datetime as dt
from typing import (
    Any,
    Generic,
    Literal,
    TypeVar,
    final,
    overload,
)

import numpy as np
from pandas.core.base import SelectionMixin
from pandas.core.frame import DataFrame
from pandas.core.groupby import (
    generic,
)
from pandas.core.groupby.indexing import (
    GroupByIndexingMixin,
    GroupByNthSelector,
)
from pandas.core.indexers import BaseIndexer
from pandas.core.indexes.api import Index
from pandas.core.resample import (
    DatetimeIndexResamplerGroupby,
    PeriodIndexResamplerGroupby,
    TimedeltaIndexResamplerGroupby,
)
from pandas.core.series import Series
from pandas.core.window import (
    ExpandingGroupby,
    ExponentialMovingWindowGroupby,
    RollingGroupby,
)
from typing_extensions import (
    Concatenate,
    Self,
    TypeAlias,
)

from pandas._libs.lib import _NoDefaultDoNotUse
from pandas._libs.tslibs import BaseOffset
from pandas._typing import (
    S1,
    AnyArrayLike,
    Axis,
    AxisInt,
    CalculationMethod,
    Dtype,
    Frequency,
    IndexLabel,
    IntervalClosedType,
    MaskType,
    NDFrameT,
    P,
    RandomState,
    Scalar,
    T,
    TimedeltaConvertibleTypes,
    TimeGrouperOrigin,
    TimestampConvention,
    TimestampConvertibleTypes,
    WindowingEngine,
    WindowingEngineKwargs,
    npt,
)

from pandas.plotting import PlotAccessor

_ResamplerGroupBy: TypeAlias = (
    DatetimeIndexResamplerGroupby[NDFrameT]  # ty: ignore[invalid-argument-type]
    | PeriodIndexResamplerGroupby[NDFrameT]  # ty: ignore[invalid-argument-type]
    | TimedeltaIndexResamplerGroupby[NDFrameT]  # ty: ignore[invalid-argument-type]
)

class GroupBy(BaseGroupBy[NDFrameT]):
    def __getattr__(self, attr: str) -> Any: ...
    def apply(self, func: Callable | str, *args, **kwargs) -> NDFrameT:
        """
Apply function ``func`` group-wise and combine the results together.

The function passed to ``apply`` must take a dataframe as its first
argument and return a DataFrame, Series or scalar. ``apply`` will
then take care of combining the results back together into a single
dataframe or series. ``apply`` is therefore a highly flexible
grouping method.

While ``apply`` is a very flexible method, its downside is that
using it can be quite a bit slower than using more specific methods
like ``agg`` or ``transform``. Pandas offers a wide range of method that will
be much faster than using ``apply`` for their specific purposes, so try to
use them before reaching for ``apply``.

Parameters
----------
func : callable
    A callable that takes a dataframe as its first argument, and
    returns a dataframe, a series or a scalar. In addition the
    callable may take positional and keyword arguments.
include_groups : bool, default True
    When True, will attempt to apply ``func`` to the groupings in
    the case that they are columns of the DataFrame. If this raises a
    TypeError, the result will be computed with the groupings excluded.
    When False, the groupings will be excluded when applying ``func``.

    .. versionadded:: 2.2.0

    .. deprecated:: 2.2.0

       Setting include_groups to True is deprecated. Only the value
       False will be allowed in a future version of pandas.

args, kwargs : tuple and dict
    Optional positional and keyword arguments to pass to ``func``.

Returns
-------
Series or DataFrame

See Also
--------
pipe : Apply function to the full GroupBy object instead of to each
    group.
aggregate : Apply aggregate function to the GroupBy object.
transform : Apply function column-by-column to the GroupBy object.
Series.apply : Apply a function to a Series.
DataFrame.apply : Apply a function to each row or column of a DataFrame.

Notes
-----

.. versionchanged:: 1.3.0

    The resulting dtype will reflect the return value of the passed ``func``,
    see the examples below.

Functions that mutate the passed object can produce unexpected
behavior or errors and are not supported. See :ref:`gotchas.udf-mutation`
for more details.

Examples
--------

>>> df = pd.DataFrame({'A': 'a a b'.split(),
...                    'B': [1, 2, 3],
...                    'C': [4, 6, 5]})
>>> g1 = df.groupby('A', group_keys=False)
>>> g2 = df.groupby('A', group_keys=True)

Notice that ``g1`` and ``g2`` have two groups, ``a`` and ``b``, and only
differ in their ``group_keys`` argument. Calling `apply` in various ways,
we can get different grouping results:

Example 1: below the function passed to `apply` takes a DataFrame as
its argument and returns a DataFrame. `apply` combines the result for
each group together into a new DataFrame:

>>> g1[['B', 'C']].apply(lambda x: x / x.sum())
          B    C
0  0.333333  0.4
1  0.666667  0.6
2  1.000000  1.0

In the above, the groups are not part of the index. We can have them included
by using ``g2`` where ``group_keys=True``:

>>> g2[['B', 'C']].apply(lambda x: x / x.sum())
            B    C
A
a 0  0.333333  0.4
  1  0.666667  0.6
b 2  1.000000  1.0

Example 2: The function passed to `apply` takes a DataFrame as
its argument and returns a Series.  `apply` combines the result for
each group together into a new DataFrame.

.. versionchanged:: 1.3.0

    The resulting dtype will reflect the return value of the passed ``func``.

>>> g1[['B', 'C']].apply(lambda x: x.astype(float).max() - x.min())
     B    C
A
a  1.0  2.0
b  0.0  0.0

>>> g2[['B', 'C']].apply(lambda x: x.astype(float).max() - x.min())
     B    C
A
a  1.0  2.0
b  0.0  0.0

The ``group_keys`` argument has no effect here because the result is not
like-indexed (i.e. :ref:`a transform <groupby.transform>`) when compared
to the input.

Example 3: The function passed to `apply` takes a DataFrame as
its argument and returns a scalar. `apply` combines the result for
each group together into a Series, including setting the index as
appropriate:

>>> g1.apply(lambda x: x.C.max() - x.B.min(), include_groups=False)
A
a    5
b    2
dtype: int64
        """
        pass
    @final
    @overload
    def any(self: GroupBy[Series], skipna: bool = ...) -> Series[bool]: ...
    @overload
    def any(self: GroupBy[DataFrame], skipna: bool = ...) -> DataFrame: ...
    @final
    @overload
    def all(self: GroupBy[Series], skipna: bool = ...) -> Series[bool]: ...
    @overload
    def all(self: GroupBy[DataFrame], skipna: bool = ...) -> DataFrame: ...
    @final
    @overload
    def count(self: GroupBy[Series]) -> Series[int]: ...
    @overload
    def count(self: GroupBy[DataFrame]) -> DataFrame: ...
    @final
    def mean(
        self,
        numeric_only: bool = False,
        engine: WindowingEngine = None,
        engine_kwargs: WindowingEngineKwargs = None,
    ) -> NDFrameT: ...
    @final
    def median(self, numeric_only: bool = False) -> NDFrameT: ...
    @final
    @overload
    def std(
        self: GroupBy[Series],
        ddof: int = ...,
        engine: WindowingEngine = ...,
        engine_kwargs: WindowingEngineKwargs = ...,
        numeric_only: bool = ...,
    ) -> Series[float]: ...
    @overload
    def std(
        self: GroupBy[DataFrame],
        ddof: int = ...,
        engine: WindowingEngine = ...,
        engine_kwargs: WindowingEngineKwargs = ...,
        numeric_only: bool = ...,
    ) -> DataFrame: ...
    @final
    @overload
    def var(
        self: GroupBy[Series],
        ddof: int = ...,
        engine: WindowingEngine = ...,
        engine_kwargs: WindowingEngineKwargs = ...,
        numeric_only: bool = ...,
    ) -> Series[float]: ...
    @overload
    def var(
        self: GroupBy[DataFrame],
        ddof: int = ...,
        engine: WindowingEngine = ...,
        engine_kwargs: WindowingEngineKwargs = ...,
        numeric_only: bool = ...,
    ) -> DataFrame: ...
    @final
    @overload
    def sem(
        self: GroupBy[Series], ddof: int = ..., numeric_only: bool = ...
    ) -> Series[float]: ...
    @overload
    def sem(
        self: GroupBy[DataFrame], ddof: int = ..., numeric_only: bool = ...
    ) -> DataFrame: ...
    def size(self: GroupBy[Series]) -> Series[int]: ...
    @final
    def sum(
        self,
        numeric_only: bool = False,
        min_count: int = 0,
        engine: WindowingEngine = None,
        engine_kwargs: WindowingEngineKwargs = None,
    ) -> NDFrameT:
        """
Compute sum of group values.

Parameters
----------
numeric_only : bool, default False
    Include only float, int, boolean columns.

    .. versionchanged:: 2.0.0

        numeric_only no longer accepts ``None``.

min_count : int, default 0
    The required number of valid values to perform the operation. If fewer
    than ``min_count`` non-NA values are present the result will be NA.

engine : str, default None None
    * ``'cython'`` : Runs rolling apply through C-extensions from cython.
    * ``'numba'`` : Runs rolling apply through JIT compiled code from numba.
        Only available when ``raw`` is set to ``True``.
    * ``None`` : Defaults to ``'cython'`` or globally setting ``compute.use_numba``

engine_kwargs : dict, default None None
    * For ``'cython'`` engine, there are no accepted ``engine_kwargs``
    * For ``'numba'`` engine, the engine can accept ``nopython``, ``nogil``
        and ``parallel`` dictionary keys. The values must either be ``True`` or
        ``False``. The default ``engine_kwargs`` for the ``'numba'`` engine is
        ``{'nopython': True, 'nogil': False, 'parallel': False}`` and will be
        applied to both the ``func`` and the ``apply`` groupby aggregation.

Returns
-------
Series or DataFrame
    Computed sum of values within each group.

Examples
--------
For SeriesGroupBy:

>>> lst = ['a', 'a', 'b', 'b']
>>> ser = pd.Series([1, 2, 3, 4], index=lst)
>>> ser
a    1
a    2
b    3
b    4
dtype: int64
>>> ser.groupby(level=0).sum()
a    3
b    7
dtype: int64

For DataFrameGroupBy:

>>> data = [[1, 8, 2], [1, 2, 5], [2, 5, 8], [2, 6, 9]]
>>> df = pd.DataFrame(data, columns=["a", "b", "c"],
...                   index=["tiger", "leopard", "cheetah", "lion"])
>>> df
          a  b  c
  tiger   1  8  2
leopard   1  2  5
cheetah   2  5  8
   lion   2  6  9
>>> df.groupby("a").sum()
     b   c
a
1   10   7
2   11  17
        """
        pass
    @final
    def prod(self, numeric_only: bool = False, min_count: int = 0) -> NDFrameT:
        """
Compute prod of group values.

Parameters
----------
numeric_only : bool, default False
    Include only float, int, boolean columns.

    .. versionchanged:: 2.0.0

        numeric_only no longer accepts ``None``.

min_count : int, default 0
    The required number of valid values to perform the operation. If fewer
    than ``min_count`` non-NA values are present the result will be NA.

Returns
-------
Series or DataFrame
    Computed prod of values within each group.

Examples
--------
For SeriesGroupBy:

>>> lst = ['a', 'a', 'b', 'b']
>>> ser = pd.Series([1, 2, 3, 4], index=lst)
>>> ser
a    1
a    2
b    3
b    4
dtype: int64
>>> ser.groupby(level=0).prod()
a    2
b   12
dtype: int64

For DataFrameGroupBy:

>>> data = [[1, 8, 2], [1, 2, 5], [2, 5, 8], [2, 6, 9]]
>>> df = pd.DataFrame(data, columns=["a", "b", "c"],
...                   index=["tiger", "leopard", "cheetah", "lion"])
>>> df
          a  b  c
  tiger   1  8  2
leopard   1  2  5
cheetah   2  5  8
   lion   2  6  9
>>> df.groupby("a").prod()
     b    c
a
1   16   10
2   30   72
        """
        pass
    @final
    def min(
        self,
        numeric_only: bool = False,
        min_count: int = -1,
        engine: WindowingEngine = None,
        engine_kwargs: WindowingEngineKwargs = None,
    ) -> NDFrameT:
        """
Compute min of group values.

Parameters
----------
numeric_only : bool, default False
    Include only float, int, boolean columns.

    .. versionchanged:: 2.0.0

        numeric_only no longer accepts ``None``.

min_count : int, default -1
    The required number of valid values to perform the operation. If fewer
    than ``min_count`` non-NA values are present the result will be NA.

engine : str, default None None
    * ``'cython'`` : Runs rolling apply through C-extensions from cython.
    * ``'numba'`` : Runs rolling apply through JIT compiled code from numba.
        Only available when ``raw`` is set to ``True``.
    * ``None`` : Defaults to ``'cython'`` or globally setting ``compute.use_numba``

engine_kwargs : dict, default None None
    * For ``'cython'`` engine, there are no accepted ``engine_kwargs``
    * For ``'numba'`` engine, the engine can accept ``nopython``, ``nogil``
        and ``parallel`` dictionary keys. The values must either be ``True`` or
        ``False``. The default ``engine_kwargs`` for the ``'numba'`` engine is
        ``{'nopython': True, 'nogil': False, 'parallel': False}`` and will be
        applied to both the ``func`` and the ``apply`` groupby aggregation.

Returns
-------
Series or DataFrame
    Computed min of values within each group.

Examples
--------
For SeriesGroupBy:

>>> lst = ['a', 'a', 'b', 'b']
>>> ser = pd.Series([1, 2, 3, 4], index=lst)
>>> ser
a    1
a    2
b    3
b    4
dtype: int64
>>> ser.groupby(level=0).min()
a    1
b    3
dtype: int64

For DataFrameGroupBy:

>>> data = [[1, 8, 2], [1, 2, 5], [2, 5, 8], [2, 6, 9]]
>>> df = pd.DataFrame(data, columns=["a", "b", "c"],
...                   index=["tiger", "leopard", "cheetah", "lion"])
>>> df
          a  b  c
  tiger   1  8  2
leopard   1  2  5
cheetah   2  5  8
   lion   2  6  9
>>> df.groupby("a").min()
    b  c
a
1   2  2
2   5  8
        """
        pass
    @final
    def max(
        self,
        numeric_only: bool = False,
        min_count: int = -1,
        engine: WindowingEngine = None,
        engine_kwargs: WindowingEngineKwargs = None,
    ) -> NDFrameT:
        """
Compute max of group values.

Parameters
----------
numeric_only : bool, default False
    Include only float, int, boolean columns.

    .. versionchanged:: 2.0.0

        numeric_only no longer accepts ``None``.

min_count : int, default -1
    The required number of valid values to perform the operation. If fewer
    than ``min_count`` non-NA values are present the result will be NA.

engine : str, default None None
    * ``'cython'`` : Runs rolling apply through C-extensions from cython.
    * ``'numba'`` : Runs rolling apply through JIT compiled code from numba.
        Only available when ``raw`` is set to ``True``.
    * ``None`` : Defaults to ``'cython'`` or globally setting ``compute.use_numba``

engine_kwargs : dict, default None None
    * For ``'cython'`` engine, there are no accepted ``engine_kwargs``
    * For ``'numba'`` engine, the engine can accept ``nopython``, ``nogil``
        and ``parallel`` dictionary keys. The values must either be ``True`` or
        ``False``. The default ``engine_kwargs`` for the ``'numba'`` engine is
        ``{'nopython': True, 'nogil': False, 'parallel': False}`` and will be
        applied to both the ``func`` and the ``apply`` groupby aggregation.

Returns
-------
Series or DataFrame
    Computed max of values within each group.

Examples
--------
For SeriesGroupBy:

>>> lst = ['a', 'a', 'b', 'b']
>>> ser = pd.Series([1, 2, 3, 4], index=lst)
>>> ser
a    1
a    2
b    3
b    4
dtype: int64
>>> ser.groupby(level=0).max()
a    2
b    4
dtype: int64

For DataFrameGroupBy:

>>> data = [[1, 8, 2], [1, 2, 5], [2, 5, 8], [2, 6, 9]]
>>> df = pd.DataFrame(data, columns=["a", "b", "c"],
...                   index=["tiger", "leopard", "cheetah", "lion"])
>>> df
          a  b  c
  tiger   1  8  2
leopard   1  2  5
cheetah   2  5  8
   lion   2  6  9
>>> df.groupby("a").max()
    b  c
a
1   8  5
2   6  9
        """
        pass
    @final
    def first(
        self, numeric_only: bool = False, min_count: int = -1, skipna: bool = True
    ) -> NDFrameT: ...
    @final
    def last(
        self, numeric_only: bool = False, min_count: int = -1, skipna: bool = True
    ) -> NDFrameT: ...
    @final
    def ohlc(self) -> DataFrame: ...
    def describe(
        self,
        percentiles: Iterable[float] | None = ...,
        include: Literal["all"] | list[Dtype] | None = ...,
        exclude: list[Dtype] | None = ...,
    ) -> DataFrame:
        """
Generate descriptive statistics.

Descriptive statistics include those that summarize the central
tendency, dispersion and shape of a
dataset's distribution, excluding ``NaN`` values.

Analyzes both numeric and object series, as well
as ``DataFrame`` column sets of mixed data types. The output
will vary depending on what is provided. Refer to the notes
below for more detail.

Parameters
----------
percentiles : list-like of numbers, optional
    The percentiles to include in the output. All should
    fall between 0 and 1. The default is
    ``[.25, .5, .75]``, which returns the 25th, 50th, and
    75th percentiles.
include : 'all', list-like of dtypes or None (default), optional
    A white list of data types to include in the result. Ignored
    for ``Series``. Here are the options:

    - 'all' : All columns of the input will be included in the output.
    - A list-like of dtypes : Limits the results to the
      provided data types.
      To limit the result to numeric types submit
      ``numpy.number``. To limit it instead to object columns submit
      the ``numpy.object`` data type. Strings
      can also be used in the style of
      ``select_dtypes`` (e.g. ``df.describe(include=['O'])``). To
      select pandas categorical columns, use ``'category'``
    - None (default) : The result will include all numeric columns.
exclude : list-like of dtypes or None (default), optional,
    A black list of data types to omit from the result. Ignored
    for ``Series``. Here are the options:

    - A list-like of dtypes : Excludes the provided data types
      from the result. To exclude numeric types submit
      ``numpy.number``. To exclude object columns submit the data
      type ``numpy.object``. Strings can also be used in the style of
      ``select_dtypes`` (e.g. ``df.describe(exclude=['O'])``). To
      exclude pandas categorical columns, use ``'category'``
    - None (default) : The result will exclude nothing.

Returns
-------
Series or DataFrame
    Summary statistics of the Series or Dataframe provided.

See Also
--------
DataFrame.count: Count number of non-NA/null observations.
DataFrame.max: Maximum of the values in the object.
DataFrame.min: Minimum of the values in the object.
DataFrame.mean: Mean of the values.
DataFrame.std: Standard deviation of the observations.
DataFrame.select_dtypes: Subset of a DataFrame including/excluding
    columns based on their dtype.

Notes
-----
For numeric data, the result's index will include ``count``,
``mean``, ``std``, ``min``, ``max`` as well as lower, ``50`` and
upper percentiles. By default the lower percentile is ``25`` and the
upper percentile is ``75``. The ``50`` percentile is the
same as the median.

For object data (e.g. strings or timestamps), the result's index
will include ``count``, ``unique``, ``top``, and ``freq``. The ``top``
is the most common value. The ``freq`` is the most common value's
frequency. Timestamps also include the ``first`` and ``last`` items.

If multiple object values have the highest count, then the
``count`` and ``top`` results will be arbitrarily chosen from
among those with the highest count.

For mixed data types provided via a ``DataFrame``, the default is to
return only an analysis of numeric columns. If the dataframe consists
only of object and categorical data without any numeric columns, the
default is to return an analysis of both the object and categorical
columns. If ``include='all'`` is provided as an option, the result
will include a union of attributes of each type.

The `include` and `exclude` parameters can be used to limit
which columns in a ``DataFrame`` are analyzed for the output.
The parameters are ignored when analyzing a ``Series``.

Examples
--------
Describing a numeric ``Series``.

>>> s = pd.Series([1, 2, 3])
>>> s.describe()
count    3.0
mean     2.0
std      1.0
min      1.0
25%      1.5
50%      2.0
75%      2.5
max      3.0
dtype: float64

Describing a categorical ``Series``.

>>> s = pd.Series(['a', 'a', 'b', 'c'])
>>> s.describe()
count     4
unique    3
top       a
freq      2
dtype: object

Describing a timestamp ``Series``.

>>> s = pd.Series([
...     np.datetime64("2000-01-01"),
...     np.datetime64("2010-01-01"),
...     np.datetime64("2010-01-01")
... ])
>>> s.describe()
count                      3
mean     2006-09-01 08:00:00
min      2000-01-01 00:00:00
25%      2004-12-31 12:00:00
50%      2010-01-01 00:00:00
75%      2010-01-01 00:00:00
max      2010-01-01 00:00:00
dtype: object

Describing a ``DataFrame``. By default only numeric fields
are returned.

>>> df = pd.DataFrame({'categorical': pd.Categorical(['d', 'e', 'f']),
...                    'numeric': [1, 2, 3],
...                    'object': ['a', 'b', 'c']
...                    })
>>> df.describe()
       numeric
count      3.0
mean       2.0
std        1.0
min        1.0
25%        1.5
50%        2.0
75%        2.5
max        3.0

Describing all columns of a ``DataFrame`` regardless of data type.

>>> df.describe(include='all')  # doctest: +SKIP
       categorical  numeric object
count            3      3.0      3
unique           3      NaN      3
top              f      NaN      a
freq             1      NaN      1
mean           NaN      2.0    NaN
std            NaN      1.0    NaN
min            NaN      1.0    NaN
25%            NaN      1.5    NaN
50%            NaN      2.0    NaN
75%            NaN      2.5    NaN
max            NaN      3.0    NaN

Describing a column from a ``DataFrame`` by accessing it as
an attribute.

>>> df.numeric.describe()
count    3.0
mean     2.0
std      1.0
min      1.0
25%      1.5
50%      2.0
75%      2.5
max      3.0
Name: numeric, dtype: float64

Including only numeric columns in a ``DataFrame`` description.

>>> df.describe(include=[np.number])
       numeric
count      3.0
mean       2.0
std        1.0
min        1.0
25%        1.5
50%        2.0
75%        2.5
max        3.0

Including only string columns in a ``DataFrame`` description.

>>> df.describe(include=[object])  # doctest: +SKIP
       object
count       3
unique      3
top         a
freq        1

Including only categorical columns from a ``DataFrame`` description.

>>> df.describe(include=['category'])
       categorical
count            3
unique           3
top              d
freq             1

Excluding numeric columns from a ``DataFrame`` description.

>>> df.describe(exclude=[np.number])  # doctest: +SKIP
       categorical object
count            3      3
unique           3      3
top              f      a
freq             1      1

Excluding object columns from a ``DataFrame`` description.

>>> df.describe(exclude=[object])  # doctest: +SKIP
       categorical  numeric
count            3      3.0
unique           3      NaN
top              f      NaN
freq             1      NaN
mean           NaN      2.0
std            NaN      1.0
min            NaN      1.0
25%            NaN      1.5
50%            NaN      2.0
75%            NaN      2.5
max            NaN      3.0
        """
        pass
    @final
    def resample(
        self,
        rule: Frequency | dt.timedelta,
        how: str | None = ...,
        fill_method: str | None = ...,
        limit: int | None = ...,
        kind: str | None = ...,
        on: Hashable | None = ...,
        *,
        closed: Literal["left", "right"] | None = ...,
        label: Literal["left", "right"] | None = ...,
        axis: Axis = ...,
        convention: TimestampConvention | None = ...,
        origin: TimeGrouperOrigin | TimestampConvertibleTypes = ...,
        offset: TimedeltaConvertibleTypes | None = ...,
        group_keys: bool = ...,
        **kwargs,
    ) -> _ResamplerGroupBy[NDFrameT]: ...
    @final
    def rolling(
        self,
        window: int | dt.timedelta | str | BaseOffset | BaseIndexer | None = ...,
        min_periods: int | None = None,
        center: bool | None = False,
        win_type: str | None = None,
        axis: Axis = 0,
        on: str | Index | None = None,
        closed: IntervalClosedType | None = None,
        method: CalculationMethod = "single",
        *,
        selection: IndexLabel | None = None,
    ) -> RollingGroupby[NDFrameT]: ...
    @final
    def expanding(
        self,
        min_periods: int = ...,
        axis: Axis = ...,
        method: CalculationMethod = ...,
        selection: IndexLabel | None = ...,
    ) -> ExpandingGroupby[NDFrameT]:
        """
Return an expanding grouper, providing expanding
functionality per group.

Returns
-------
pandas.api.typing.ExpandingGroupby

See Also
--------
Series.groupby : Apply a function groupby to a Series.
DataFrame.groupby : Apply a function groupby
    to each row or column of a DataFrame.
        """
        pass
    @final
    def ewm(
        self,
        com: float | None = ...,
        span: float | None = ...,
        halflife: TimedeltaConvertibleTypes | None = ...,
        alpha: float | None = ...,
        min_periods: int | None = ...,
        adjust: bool = ...,
        ignore_na: bool = ...,
        axis: Axis = ...,
        times: str | np.ndarray | Series | np.timedelta64 | None = ...,
        method: CalculationMethod = ...,
        *,
        selection: IndexLabel | None = ...,
    ) -> ExponentialMovingWindowGroupby[NDFrameT]:
        """
Return an ewm grouper, providing ewm functionality per group.

Returns
-------
pandas.api.typing.ExponentialMovingWindowGroupby

See Also
--------
Series.groupby : Apply a function groupby to a Series.
DataFrame.groupby : Apply a function groupby
    to each row or column of a DataFrame.
        """
        pass
    @final
    def ffill(self, limit: int | None = ...) -> NDFrameT: ...
    @final
    def bfill(self, limit: int | None = ...) -> NDFrameT: ...
    @final
    @property
    def nth(self) -> GroupByNthSelector[Self]: ...
    @final
    def quantile(
        self,
        q: float | AnyArrayLike = 0.5,
        interpolation: str = "linear",
        numeric_only: bool = False,
    ) -> NDFrameT: ...
    @final
    def ngroup(self, ascending: bool = True) -> Series[int]: ...
    @final
    def cumcount(self, ascending: bool = True) -> Series[int]: ...
    @final
    def rank(
        self,
        method: str = "average",
        ascending: bool = True,
        na_option: str = "keep",
        pct: bool = False,
        axis: AxisInt | _NoDefaultDoNotUse = 0,
    ) -> NDFrameT: ...
    @final
    def cumprod(
        self, axis: Axis | _NoDefaultDoNotUse = ..., *args, **kwargs
    ) -> NDFrameT: ...
    @final
    def cumsum(
        self, axis: Axis | _NoDefaultDoNotUse = ..., *args, **kwargs
    ) -> NDFrameT: ...
    @final
    def cummin(
        self,
        axis: AxisInt | _NoDefaultDoNotUse = ...,
        numeric_only: bool = ...,
        **kwargs,
    ) -> NDFrameT: ...
    @final
    def cummax(
        self,
        axis: AxisInt | _NoDefaultDoNotUse = ...,
        numeric_only: bool = ...,
        **kwargs,
    ) -> NDFrameT: ...
    @final
    def shift(
        self,
        periods: int | Sequence[int] = 1,
        freq: Frequency | None = ...,
        axis: Axis | _NoDefaultDoNotUse = 0,
        fill_value=...,
        suffix: str | None = ...,
    ) -> NDFrameT: ...
    @final
    def diff(
        self, periods: int = 1, axis: AxisInt | _NoDefaultDoNotUse = 0
    ) -> NDFrameT: ...
    @final
    def pct_change(
        self,
        periods: int = ...,
        fill_method: Literal["bfill", "ffill"] | None | _NoDefaultDoNotUse = ...,
        limit: int | None | _NoDefaultDoNotUse = ...,
        freq=...,
        axis: Axis | _NoDefaultDoNotUse = ...,
    ) -> NDFrameT: ...
    @final
    def head(self, n: int = ...) -> NDFrameT: ...
    @final
    def tail(self, n: int = ...) -> NDFrameT: ...
    @final
    def sample(
        self,
        n: int | None = None,
        frac: float | None = None,
        replace: bool = False,
        weights: Sequence | Series | None = ...,
        random_state: RandomState | None = ...,
    ) -> NDFrameT: ...

_GroupByT = TypeVar("_GroupByT", bound=GroupBy)

# GroupByPlot does not really inherit from PlotAccessor but it delegates
# to it using __call__ and __getattr__. We lie here to avoid repeating the
# whole stub of PlotAccessor
@final
class GroupByPlot(PlotAccessor, Generic[_GroupByT]):
    def __init__(self, groupby: _GroupByT) -> None: ...
    # The following methods are inherited from the fake parent class PlotAccessor
    # def __call__(self, *args, **kwargs): ...
    # def __getattr__(self, name: str): ...

class BaseGroupBy(SelectionMixin[NDFrameT], GroupByIndexingMixin):
    @final
    def __len__(self) -> int: ...
    @final
    def __repr__(self) -> str: ...  # noqa: PYI029 __repr__ here is final
    @final
    @property
    def groups(self) -> dict[Hashable, Index]: ...
    @final
    @property
    def ngroups(self) -> int: ...
    @final
    @property
    def indices(self) -> dict[Hashable, Index | npt.NDArray[np.int_] | list[int]]: ...
    @overload
    def pipe(
        self,
        func: Callable[Concatenate[Self, P], T],
        *args: P.args,
        **kwargs: P.kwargs,
    ) -> T:
        """
Apply a ``func`` with arguments to this GroupBy object and return its result.

Use `.pipe` when you want to improve readability by chaining together
functions that expect Series, DataFrames, GroupBy or Resampler objects.
Instead of writing

>>> h = lambda x, arg2, arg3: x + 1 - arg2 * arg3
>>> g = lambda x, arg1: x * 5 / arg1
>>> f = lambda x: x ** 4
>>> df = pd.DataFrame([["a", 4], ["b", 5]], columns=["group", "value"])
>>> h(g(f(df.groupby('group')), arg1=1), arg2=2, arg3=3)  # doctest: +SKIP

You can write

>>> (df.groupby('group')
...    .pipe(f)
...    .pipe(g, arg1=1)
...    .pipe(h, arg2=2, arg3=3))  # doctest: +SKIP

which is much more readable.

Parameters
----------
func : callable or tuple of (callable, str)
    Function to apply to this GroupBy object or, alternatively,
    a `(callable, data_keyword)` tuple where `data_keyword` is a
    string indicating the keyword of `callable` that expects the
    GroupBy object.
args : iterable, optional
       Positional arguments passed into `func`.
kwargs : dict, optional
         A dictionary of keyword arguments passed into `func`.

Returns
-------
the return type of `func`.

See Also
--------
Series.pipe : Apply a function with arguments to a series.
DataFrame.pipe: Apply a function with arguments to a dataframe.
apply : Apply function to each group instead of to the
    full GroupBy object.

Notes
-----
See more `here
<https://pandas.pydata.org/pandas-docs/stable/user_guide/groupby.html#piping-function-calls>`_

Examples
--------
>>> df = pd.DataFrame({'A': 'a b a b'.split(), 'B': [1, 2, 3, 4]})
>>> df
   A  B
0  a  1
1  b  2
2  a  3
3  b  4

To get the difference between each groups maximum and minimum value in one
pass, you can do

>>> df.groupby('A').pipe(lambda x: x.max() - x.min())
   B
A
a  2
b  2
        """
        pass
    @overload
    def pipe(
        self,
        func: tuple[Callable[..., T], str],
        *args: Any,
        **kwargs: Any,
    ) -> T: ...
    @final
    def get_group(self, name) -> NDFrameT: ...
    @final
    def __iter__(self) -> Iterator[tuple[Hashable, NDFrameT]]: ...
    @overload
    def __getitem__(self: BaseGroupBy[DataFrame], key: Scalar) -> generic.SeriesGroupBy: ...  # type: ignore[overload-overlap] # pyright: ignore[reportOverlappingOverload]
    @overload
    def __getitem__(
        self: BaseGroupBy[DataFrame], key: Iterable[Hashable]
    ) -> generic.DataFrameGroupBy: ...
    @overload
    def __getitem__(
        self: BaseGroupBy[Series[S1]],
        idx: list[str] | Index | Series[S1] | MaskType | tuple[Hashable | slice, ...],
    ) -> generic.SeriesGroupBy: ...
    @overload
    def __getitem__(self: BaseGroupBy[Series[S1]], idx: Scalar) -> S1: ...
