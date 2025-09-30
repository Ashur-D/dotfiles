from collections.abc import (
    Callable,
    Hashable,
    Iterable,
    Sequence,
)
from typing import (
    final,
    overload,
)

import numpy as np
import pandas as pd
from pandas.core.indexes.base import Index
from typing_extensions import Self

from pandas._typing import (
    AnyAll,
    Axes,
    DropKeep,
    Dtype,
    HashableT,
    IndexLabel,
    Level,
    MaskType,
    NaPosition,
    SequenceNotStr,
    np_1darray,
    np_ndarray_anyint,
)

class MultiIndex(Index):
    def __new__(
        cls,
        levels: Sequence[SequenceNotStr[Hashable]] = ...,
        codes: Sequence[Sequence[int]] = ...,
        sortorder: int | None = ...,
        names: SequenceNotStr[Hashable] = ...,
        copy: bool = ...,
        name: SequenceNotStr[Hashable] = ...,
        verify_integrity: bool = ...,
    ) -> Self: ...
    @classmethod
    def from_arrays(
        cls,
        arrays: Sequence[Axes],
        sortorder: int | None = ...,
        names: SequenceNotStr[Hashable] = ...,
    ) -> Self: ...
    @classmethod
    def from_tuples(
        cls,
        tuples: Iterable[tuple[Hashable, ...]],
        sortorder: int | None = ...,
        names: SequenceNotStr[Hashable] = ...,
    ) -> Self: ...
    @classmethod
    def from_product(
        cls,
        iterables: Sequence[SequenceNotStr[Hashable] | pd.Series | pd.Index | range],
        sortorder: int | None = ...,
        names: SequenceNotStr[Hashable] = ...,
    ) -> Self: ...
    @classmethod
    def from_frame(
        cls,
        df: pd.DataFrame,
        sortorder: int | None = ...,
        names: SequenceNotStr[Hashable] = ...,
    ) -> Self: ...
    @property
    def shape(self): ...
    @property  # Should be read-only
    def levels(self) -> list[Index]: ...
    def set_levels(self, levels, *, level=..., verify_integrity: bool = ...): ...
    @property
    def codes(self): ...
    def set_codes(self, codes, *, level=..., verify_integrity: bool = ...): ...
    def copy(  # type: ignore[override]  # pyright: ignore[reportIncompatibleMethodOverride] # pyrefly: ignore
        self, names: SequenceNotStr[Hashable] = ..., deep: bool = False
    ) -> Self: ...
    def view(self, cls=...): ...
    def __contains__(self, key) -> bool:
        """
Return a boolean indicating whether the provided key is in the index.

Parameters
----------
key : label
    The key to check if it is present in the index.

Returns
-------
bool
    Whether the key search is in the index.

Raises
------
TypeError
    If the key is not hashable.

See Also
--------
Index.isin : Returns an ndarray of boolean dtype indicating whether the
    list-like key is in the index.

Examples
--------
>>> idx = pd.Index([1, 2, 3, 4])
>>> idx
Index([1, 2, 3, 4], dtype='int64')

>>> 2 in idx
True
>>> 6 in idx
False
        """
        pass
    @property
    def dtype(self) -> np.dtype: ...
    @property
    def dtypes(self) -> pd.Series[Dtype]: ...
    def memory_usage(self, deep: bool = False) -> int: ...
    @property
    def nbytes(self) -> int: ...
    def format(
        self,
        name: bool | None = ...,
        formatter: Callable | None = ...,
        na_rep: str | None = ...,
        names: bool = ...,
        space: int = ...,
        sparsify: bool | None = ...,
        adjoin: bool = ...,
    ) -> list: ...
    def __len__(self) -> int: ...
    @property
    def values(self): ...
    @property
    def is_monotonic_increasing(self) -> bool: ...
    @property
    def is_monotonic_decreasing(self) -> bool: ...
    def duplicated(self, keep: DropKeep = "first"):
        """
Indicate duplicate index values.

Duplicated values are indicated as ``True`` values in the resulting
array. Either all duplicates, all except the first, or all except the
last occurrence of duplicates can be indicated.

Parameters
----------
keep : {'first', 'last', False}, default 'first'
    The value or values in a set of duplicates to mark as missing.

    - 'first' : Mark duplicates as ``True`` except for the first
      occurrence.
    - 'last' : Mark duplicates as ``True`` except for the last
      occurrence.
    - ``False`` : Mark all duplicates as ``True``.

Returns
-------
np.ndarray[bool]

See Also
--------
Series.duplicated : Equivalent method on pandas.Series.
DataFrame.duplicated : Equivalent method on pandas.DataFrame.
Index.drop_duplicates : Remove duplicate values from Index.

Examples
--------
By default, for each set of duplicated values, the first occurrence is
set to False and all others to True:

>>> idx = pd.Index(['lama', 'cow', 'lama', 'beetle', 'lama'])
>>> idx.duplicated()
array([False, False,  True, False,  True])

which is equivalent to

>>> idx.duplicated(keep='first')
array([False, False,  True, False,  True])

By using 'last', the last occurrence of each set of duplicated values
is set on False and all others on True:

>>> idx.duplicated(keep='last')
array([ True, False,  True, False, False])

By setting keep on ``False``, all duplicates are True:

>>> idx.duplicated(keep=False)
array([ True, False,  True, False,  True])
        """
        pass
    def dropna(self, how: AnyAll = "any") -> Self:
        """
Return Index without NA/NaN values.

Parameters
----------
how : {'any', 'all'}, default 'any'
    If the Index is a MultiIndex, drop the value when any or all levels
    are NaN.

Returns
-------
Index

Examples
--------
>>> idx = pd.Index([1, np.nan, 3])
>>> idx.dropna()
Index([1.0, 3.0], dtype='float64')
        """
        pass
    def get_level_values(self, level: str | int) -> Index: ...
    def unique(self, level=...):
        """
Return unique values in the index.

Unique values are returned in order of appearance, this does NOT sort.

Parameters
----------
level : int or hashable, optional
    Only return values from specified level (for MultiIndex).
    If int, gets the level by integer position, else by level name.

Returns
-------
Index

See Also
--------
unique : Numpy array of unique values in that column.
Series.unique : Return unique values of Series object.

Examples
--------
>>> idx = pd.Index([1, 1, 2, 3, 3])
>>> idx.unique()
Index([1, 2, 3], dtype='int64')
        """
        pass
    def to_frame(  # pyrefly: ignore
        self,
        index: bool = True,
        name: list[HashableT] = ...,
        allow_duplicates: bool = False,
    ) -> pd.DataFrame: ...
    def to_flat_index(self): ...
    def remove_unused_levels(self): ...
    @property
    def nlevels(self) -> int: ...
    @property
    def levshape(self): ...
    def __reduce__(self): ...
    @overload  # type: ignore[override]
    def __getitem__(
        self,
        idx: slice | np_ndarray_anyint | Sequence[int] | Index | MaskType,
    ) -> Self: ...
    @overload
    def __getitem__(  # pyright: ignore[reportIncompatibleMethodOverride]
        self, key: int
    ) -> tuple: ...
    def append(self, other): ...  # pyrefly: ignore
    def repeat(self, repeats, axis=...):
        """
Repeat elements of a MultiIndex.

Returns a new MultiIndex where each element of the current MultiIndex
is repeated consecutively a given number of times.

Parameters
----------
repeats : int or array of ints
    The number of repetitions for each element. This should be a
    non-negative integer. Repeating 0 times will return an empty
    MultiIndex.
axis : None
    Must be ``None``. Has no effect but is accepted for compatibility
    with numpy.

Returns
-------
MultiIndex
    Newly created MultiIndex with repeated elements.

See Also
--------
Series.repeat : Equivalent function for Series.
numpy.repeat : Similar method for :class:`numpy.ndarray`.

Examples
--------
>>> idx = pd.Index(['a', 'b', 'c'])
>>> idx
Index(['a', 'b', 'c'], dtype='object')
>>> idx.repeat(2)
Index(['a', 'a', 'b', 'b', 'c', 'c'], dtype='object')
>>> idx.repeat([1, 2, 3])
Index(['a', 'b', 'b', 'c', 'c', 'c'], dtype='object')
        """
        pass
    def drop(self, codes, level: Level | None = None, errors: str = "raise") -> Self: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def swaplevel(self, i: int = -2, j: int = -1): ...
    def reorder_levels(self, order): ...
    def sortlevel(
        self,
        level: Level | Sequence[Level] = 0,
        ascending: bool = True,
        sort_remaining: bool = True,
        na_position: NaPosition = "first",
    ): ...
    @final
    def get_indexer(self, target, method=..., limit=..., tolerance=...): ...
    def get_indexer_non_unique(self, target): ...
    def reindex(self, target, method=..., level=..., limit=..., tolerance=...): ...
    def get_slice_bound(
        self, label: Hashable | Sequence[Hashable], side: str
    ) -> int: ...
    def get_loc_level(
        self, key, level: Level | list[Level] | None = None, drop_level: bool = True
    ): ...
    def get_locs(self, seq): ...
    def truncate(
        self, before: IndexLabel | None = None, after: IndexLabel | None = None
    ): ...
    def equals(self, other) -> bool: ...
    def equal_levels(self, other): ...
    def insert(self, loc, item): ...
    def delete(self, loc): ...
    def isin(self, values, level=...) -> np_1darray[np.bool]:
        """
Return a boolean array where the index values are in `values`.

Compute boolean array of whether each index value is found in the
passed set of values. The length of the returned boolean array matches
the length of the index.

Parameters
----------
values : set or list-like
    Sought values.
level : str or int, optional
    Name or position of the index level to use (if the index is a
    `MultiIndex`).

Returns
-------
np.ndarray[bool]
    NumPy array of boolean values.

See Also
--------
Series.isin : Same for Series.
DataFrame.isin : Same method for DataFrames.

Notes
-----
In the case of `MultiIndex` you must either specify `values` as a
list-like object containing tuples that are the same length as the
number of levels, or specify `level`. Otherwise it will raise a
``ValueError``.

If `level` is specified:

- if it is the name of one *and only one* index level, use that level;
- otherwise it should be a number indicating level position.

Examples
--------
>>> idx = pd.Index([1,2,3])
>>> idx
Index([1, 2, 3], dtype='int64')

Check whether each index value in a list of values.

>>> idx.isin([1, 4])
array([ True, False, False])

>>> midx = pd.MultiIndex.from_arrays([[1,2,3],
...                                  ['red', 'blue', 'green']],
...                                  names=('number', 'color'))
>>> midx
MultiIndex([(1,   'red'),
            (2,  'blue'),
            (3, 'green')],
           names=['number', 'color'])

Check whether the strings in the 'color' level of the MultiIndex
are in a list of colors.

>>> midx.isin(['red', 'orange', 'yellow'], level='color')
array([ True, False, False])

To check across the levels of a MultiIndex, pass a list of tuples:

>>> midx.isin([(1, 'red'), (3, 'red')])
array([ True, False, False])
        """
        pass
