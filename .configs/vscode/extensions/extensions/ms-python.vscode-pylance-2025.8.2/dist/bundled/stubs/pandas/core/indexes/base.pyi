from builtins import str as _str
from collections.abc import (
    Callable,
    Hashable,
    Iterable,
    Iterator,
    Sequence,
)
from datetime import (
    datetime,
    timedelta,
)
from typing import (
    Any,
    ClassVar,
    Generic,
    Literal,
    final,
    overload,
    type_check_only,
)

import numpy as np
from pandas import (
    DataFrame,
    DatetimeIndex,
    Interval,
    IntervalIndex,
    MultiIndex,
    Period,
    PeriodDtype,
    PeriodIndex,
    Series,
    TimedeltaIndex,
)
from pandas.core.arrays import ExtensionArray
from pandas.core.base import (
    IndexOpsMixin,
    NumListLike,
    _ListLike,
)
from pandas.core.strings.accessor import StringMethods
from typing_extensions import (
    Never,
    Self,
)

from pandas._libs.interval import _OrderableT
from pandas._typing import (
    C2,
    S1,
    T_COMPLEX,
    T_INT,
    AnyAll,
    ArrayLike,
    AxesData,
    DropKeep,
    Dtype,
    DtypeArg,
    DTypeLike,
    DtypeObj,
    GenericT,
    GenericT_co,
    HashableT,
    IgnoreRaise,
    Just,
    Label,
    Level,
    MaskType,
    NaPosition,
    ReindexMethod,
    Scalar,
    SequenceNotStr,
    SliceType,
    SupportsDType,
    TimedeltaDtypeArg,
    TimestampDtypeArg,
    np_1darray,
    np_ndarray_anyint,
    np_ndarray_bool,
    np_ndarray_complex,
    np_ndarray_float,
    np_ndarray_str,
    type_t,
)

class InvalidIndexError(Exception): ...

class Index(IndexOpsMixin[S1]):
    __hash__: ClassVar[None]  # type: ignore[assignment]
    # overloads with additional dtypes
    @overload
    def __new__(  # pyright: ignore[reportOverlappingOverload]
        cls,
        data: Sequence[bool | np.bool_] | IndexOpsMixin[bool] | np_ndarray_bool,
        *,
        dtype: Literal["bool"] | type_t[bool | np.bool_] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[bool]: ...
    @overload
    def __new__(
        cls,
        data: Sequence[int | np.integer] | IndexOpsMixin[int] | np_ndarray_anyint,
        *,
        dtype: Literal["int"] | type_t[int | np.integer] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[int]: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: Literal["int"] | type_t[int | np.integer],
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[int]: ...
    @overload
    def __new__(
        cls,
        data: Sequence[float | np.floating] | IndexOpsMixin[float] | np_ndarray_float,
        *,
        dtype: Literal["float"] | type_t[float | np.floating] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[float]: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: Literal["float"] | type_t[float | np.floating],
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[float]: ...
    @overload
    def __new__(
        cls,
        data: (
            Sequence[complex | np.complexfloating]
            | IndexOpsMixin[complex]
            | np_ndarray_complex
        ),
        *,
        dtype: Literal["complex"] | type_t[complex | np.complexfloating] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[complex]: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: Literal["complex"] | type_t[complex | np.complexfloating],
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Index[complex]: ...
    # special overloads with dedicated Index-subclasses
    @overload
    def __new__(
        cls,
        data: Sequence[np.datetime64 | datetime] | IndexOpsMixin[datetime],
        *,
        dtype: TimestampDtypeArg = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> DatetimeIndex: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: TimestampDtypeArg,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> DatetimeIndex: ...
    @overload
    def __new__(
        cls,
        data: Sequence[Period] | IndexOpsMixin[Period],
        *,
        dtype: PeriodDtype = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> PeriodIndex: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: PeriodDtype,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> PeriodIndex: ...
    @overload
    def __new__(
        cls,
        data: Sequence[np.timedelta64 | timedelta] | IndexOpsMixin[timedelta],
        *,
        dtype: TimedeltaDtypeArg = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> TimedeltaIndex: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: TimedeltaDtypeArg,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> TimedeltaIndex: ...
    @overload
    def __new__(
        cls,
        data: Sequence[Interval[_OrderableT]] | IndexOpsMixin[Interval[_OrderableT]],
        *,
        dtype: Literal["Interval"] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> IntervalIndex[Interval[_OrderableT]]: ...
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: Literal["Interval"],
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> IntervalIndex[Interval[Any]]: ...
    # generic overloads
    @overload
    def __new__(
        cls,
        data: Iterable[S1] | IndexOpsMixin[S1],
        *,
        dtype: type[S1] = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Self: ...
    @overload
    def __new__(
        cls,
        data: AxesData = ...,
        *,
        dtype: type[S1],
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Self: ...
    # fallback overload
    @overload
    def __new__(
        cls,
        data: AxesData,
        *,
        dtype: Dtype = ...,
        copy: bool = ...,
        name: Hashable = ...,
        tupleize_cols: bool = ...,
    ) -> Self: ...
    @property
    def str(
        self,
    ) -> StringMethods[
        Self,
        MultiIndex,
        np_1darray[np.bool],
        Index[list[_str]],
        Index[int],
        Index[bytes],
        Index[_str],
        Index,
    ]: ...
    @final
    def is_(self, other) -> bool: ...
    def __len__(self) -> int: ...
    def __array__(
        self, dtype: _str | np.dtype = ..., copy: bool | None = ...
    ) -> np_1darray: ...
    def __array_wrap__(self, result, context=...): ...
    @property
    def dtype(self) -> DtypeObj: ...
    @final
    def ravel(self, order: _str = ...): ...
    def view(self, cls=...): ...
    def astype(self, dtype: DtypeArg, copy: bool = True) -> Index: ...
    def take(
        self,
        indices,
        axis: int = 0,
        allow_fill: bool = True,
        fill_value: Scalar | None = None,
        **kwargs,
    ):
        """
Return a new Index of the values selected by the indices.

For internal compatibility with numpy arrays.

Parameters
----------
indices : array-like
    Indices to be taken.
axis : int, optional
    The axis over which to select values, always 0.
allow_fill : bool, default True
fill_value : scalar, default None
    If allow_fill=True and fill_value is not None, indices specified by
    -1 are regarded as NA. If Index doesn't hold NA, raise ValueError.

Returns
-------
Index
    An index formed of elements at the given indices. Will be the same
    type as self, except for RangeIndex.

See Also
--------
numpy.ndarray.take: Return an array formed from the
    elements of a at the given indices.

Examples
--------
>>> idx = pd.Index(['a', 'b', 'c'])
>>> idx.take([2, 2, 1, 2])
Index(['c', 'c', 'b', 'c'], dtype='object')
        """
        pass
    def repeat(self, repeats, axis=...):
        """
Repeat elements of a Index.

Returns a new Index where each element of the current Index
is repeated consecutively a given number of times.

Parameters
----------
repeats : int or array of ints
    The number of repetitions for each element. This should be a
    non-negative integer. Repeating 0 times will return an empty
    Index.
axis : None
    Must be ``None``. Has no effect but is accepted for compatibility
    with numpy.

Returns
-------
Index
    Newly created Index with repeated elements.

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
    def copy(self, name: Hashable = ..., deep: bool = False) -> Self: ...
    @final
    def __copy__(self, **kwargs): ...
    @final
    def __deepcopy__(self, memo=...): ...
    def format(
        self, name: bool = ..., formatter: Callable | None = ..., na_rep: _str = ...
    ) -> list[_str]: ...
    def to_flat_index(self): ...
    def to_series(self, index=..., name: Hashable = ...) -> Series: ...
    def to_frame(self, index: bool = True, name=...) -> DataFrame: ...
    @property
    def name(self) -> Hashable | None: ...
    @name.setter
    def name(self, value: Hashable) -> None: ...
    @property
    def names(self) -> list[Hashable | None]: ...
    @names.setter
    def names(self, names: SequenceNotStr[Hashable | None]) -> None: ...
    def set_names(self, names, *, level=..., inplace: bool = ...): ...
    @overload
    def rename(self, name, *, inplace: Literal[False] = False) -> Self: ...
    @overload
    def rename(self, name, *, inplace: Literal[True]) -> None: ...
    @property
    def nlevels(self) -> int: ...
    def get_level_values(self, level: int | _str) -> Index: ...
    def droplevel(self, level: Level | list[Level] = 0): ...
    @property
    def is_monotonic_increasing(self) -> bool: ...
    @property
    def is_monotonic_decreasing(self) -> bool: ...
    @property
    def is_unique(self) -> bool: ...
    @property
    def has_duplicates(self) -> bool: ...
    @property
    def inferred_type(self) -> _str: ...
    def __reduce__(self): ...
    @property
    def hasnans(self) -> bool: ...
    @final
    def isna(self): ...
    isnull = ...
    @final
    def notna(self): ...
    notnull = ...
    def fillna(self, value=...): ...
    def dropna(self, how: AnyAll = "any") -> Self: ...
    def unique(self, level=...) -> Self: ...
    def drop_duplicates(self, *, keep: DropKeep = ...) -> Self: ...
    def duplicated(self, keep: DropKeep = "first") -> np_1darray[np.bool]: ...
    def __and__(self, other: Never) -> Never: ...
    def __rand__(self, other: Never) -> Never: ...
    def __or__(self, other: Never) -> Never: ...
    def __ror__(self, other: Never) -> Never: ...
    def __xor__(self, other: Never) -> Never: ...
    def __rxor__(self, other: Never) -> Never: ...
    def __neg__(self) -> Self: ...
    @final
    def __nonzero__(self) -> None: ...
    __bool__ = ...
    def union(
        self, other: list[HashableT] | Self, sort: bool | None = None
    ) -> Index: ...
    def intersection(
        self, other: list[S1] | Self, sort: bool | None = False
    ) -> Self: ...
    def difference(self, other: list | Self, sort: bool | None = None) -> Self: ...
    def symmetric_difference(
        self,
        other: list[S1] | Self,
        result_name: Hashable = ...,
        sort: bool | None = None,
    ) -> Self: ...
    def get_loc(self, key: Label) -> int | slice | np_1darray[np.bool]: ...
    def get_indexer(
        self, target, method: ReindexMethod | None = ..., limit=..., tolerance=...
    ): ...
    def reindex(
        self,
        target,
        method: ReindexMethod | None = ...,
        level=...,
        limit=...,
        tolerance=...,
    ): ...
    def join(
        self,
        other,
        *,
        how: _str = ...,
        level=...,
        return_indexers: bool = ...,
        sort: bool = ...,
    ): ...
    @property
    def values(self) -> np_1darray: ...
    @property
    def array(self) -> ExtensionArray:
        """
The ExtensionArray of the data backing this Series or Index.

Returns
-------
ExtensionArray
    An ExtensionArray of the values stored within. For extension
    types, this is the actual array. For NumPy native types, this
    is a thin (no copy) wrapper around :class:`numpy.ndarray`.

    ``.array`` differs from ``.values``, which may require converting
    the data to a different form.

See Also
--------
Index.to_numpy : Similar method that always returns a NumPy array.
Series.to_numpy : Similar method that always returns a NumPy array.

Notes
-----
This table lays out the different array types for each extension
dtype within pandas.

================== =============================
dtype              array type
================== =============================
category           Categorical
period             PeriodArray
interval           IntervalArray
IntegerNA          IntegerArray
string             StringArray
boolean            BooleanArray
datetime64[ns, tz] DatetimeArray
================== =============================

For any 3rd-party extension types, the array type will be an
ExtensionArray.

For all remaining dtypes ``.array`` will be a
:class:`arrays.NumpyExtensionArray` wrapping the actual ndarray
stored within. If you absolutely need a NumPy array (possibly with
copying / coercing data), then use :meth:`Series.to_numpy` instead.

Examples
--------
For regular NumPy types like int, and float, a NumpyExtensionArray
is returned.

>>> pd.Series([1, 2, 3]).array
<NumpyExtensionArray>
[1, 2, 3]
Length: 3, dtype: int64

For extension types, like Categorical, the actual ExtensionArray
is returned

>>> ser = pd.Series(pd.Categorical(['a', 'b', 'a']))
>>> ser.array
['a', 'b', 'a']
Categories (2, object): ['a', 'b']
        """
        pass
    def memory_usage(self, deep: bool = False):
        """
Memory usage of the values.

Parameters
----------
deep : bool, default False
    Introspect the data deeply, interrogate
    `object` dtypes for system-level memory consumption.

Returns
-------
bytes used

See Also
--------
numpy.ndarray.nbytes : Total bytes consumed by the elements of the
    array.

Notes
-----
Memory usage does not include memory consumed by elements that
are not components of the array if deep=False or if used on PyPy

Examples
--------
>>> idx = pd.Index([1, 2, 3])
>>> idx.memory_usage()
24
        """
        pass
    def where(self, cond, other: Scalar | ArrayLike | None = None): ...
    def __contains__(self, key) -> bool: ...
    @final
    def __setitem__(self, key, value) -> None: ...
    @overload
    def __getitem__(
        self,
        idx: slice | np_ndarray_anyint | Sequence[int] | Index | MaskType,
    ) -> Self: ...
    @overload
    def __getitem__(self, idx: int | tuple[np_ndarray_anyint, ...]) -> S1: ...
    @overload
    def append(
        self: Index[C2], other: Index[C2] | Sequence[Index[C2]]
    ) -> Index[C2]: ...
    @overload
    def append(self, other: Index | Sequence[Index]) -> Index: ...
    def putmask(self, mask, value): ...
    def equals(self, other) -> bool: ...
    @final
    def identical(self, other) -> bool: ...
    @final
    def asof(self, label): ...
    def asof_locs(self, where, mask): ...
    def sort_values(
        self,
        *,
        return_indexer: bool = ...,
        ascending: bool = ...,
        na_position: NaPosition = ...,
        key: Callable[[Index], Index] | None = None,
    ): ...
    @final
    def sort(self, *args, **kwargs) -> None: ...
    def argsort(self, *args, **kwargs): ...
    def get_indexer_non_unique(self, target):
        """
Compute indexer and mask for new index given the current index.

The indexer should be then used as an input to ndarray.take to align the
current data to the new index.

Parameters
----------
target : Index

Returns
-------
indexer : np.ndarray[np.intp]
    Integers from 0 to n - 1 indicating that the index at these
    positions matches the corresponding target values. Missing values
    in the target are marked by -1.
missing : np.ndarray[np.intp]
    An indexer into the target of the values not found.
    These correspond to the -1 in the indexer array.

Examples
--------
>>> index = pd.Index(['c', 'b', 'a', 'b', 'b'])
>>> index.get_indexer_non_unique(['b', 'b'])
(array([1, 3, 4, 1, 3, 4]), array([], dtype=int64))

In the example below there are no matched values.

>>> index = pd.Index(['c', 'b', 'a', 'b', 'b'])
>>> index.get_indexer_non_unique(['q', 'r', 't'])
(array([-1, -1, -1]), array([0, 1, 2]))

For this reason, the returned ``indexer`` contains only integers equal to -1.
It demonstrates that there's no match between the index and the ``target``
values at these positions. The mask [0, 1, 2] in the return value shows that
the first, second, and third elements are missing.

Notice that the return value is a tuple contains two items. In the example
below the first item is an array of locations in ``index``. The second
item is a mask shows that the first and third elements are missing.

>>> index = pd.Index(['c', 'b', 'a', 'b', 'b'])
>>> index.get_indexer_non_unique(['f', 'b', 's'])
(array([-1,  1,  3,  4, -1]), array([0, 2]))
        """
        pass
    @final
    def get_indexer_for(self, target, **kwargs): ...
    @final
    def groupby(self, values) -> dict[Hashable, np.ndarray]: ...
    def map(self, mapper, na_action=...) -> Index: ...
    def isin(self, values, level=...) -> np_1darray[np.bool]: ...
    def slice_indexer(
        self,
        start: Label | None = None,
        end: Label | None = None,
        step: int | None = None,
    ): ...
    def get_slice_bound(self, label, side): ...
    def slice_locs(
        self, start: SliceType = None, end: SliceType = None, step: int | None = None
    ): ...
    def delete(self, loc) -> Self: ...
    def insert(self, loc, item) -> Self: ...
    def drop(self, labels, errors: IgnoreRaise = "raise") -> Self: ...
    @property
    def shape(self) -> tuple[int, ...]: ...
    # Extra methods from old stubs
    def __eq__(self, other: object) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def __iter__(self) -> Iterator[S1]: ...
    def __ne__(self, other: object) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def __le__(self, other: Self | S1) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def __ge__(self, other: Self | S1) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def __lt__(self, other: Self | S1) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    def __gt__(self, other: Self | S1) -> np_1darray[np.bool]: ...  # type: ignore[override] # pyright: ignore[reportIncompatibleMethodOverride]
    # overwrite inherited methods from OpsMixin
    @overload
    def __add__(self: Index[Never], other: _str) -> Never: ...
    @overload
    def __add__(self: Index[Never], other: complex | _ListLike | Index) -> Index: ...
    @overload
    def __add__(self, other: Index[Never]) -> Index: ...
    @overload
    def __add__(
        self: Index[bool],
        other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX],
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __add__(self: Index[bool], other: np_ndarray_bool) -> Index[bool]: ...
    @overload
    def __add__(self: Index[bool], other: np_ndarray_anyint) -> Index[int]: ...
    @overload
    def __add__(self: Index[bool], other: np_ndarray_float) -> Index[float]: ...
    @overload
    def __add__(self: Index[bool], other: np_ndarray_complex) -> Index[complex]: ...
    @overload
    def __add__(
        self: Index[int],
        other: (
            bool | Sequence[bool] | np_ndarray_bool | np_ndarray_anyint | Index[bool]
        ),
    ) -> Index[int]: ...
    @overload
    def __add__(
        self: Index[int],
        other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX],
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __add__(self: Index[int], other: np_ndarray_float) -> Index[float]: ...
    @overload
    def __add__(self: Index[int], other: np_ndarray_complex) -> Index[complex]: ...
    @overload
    def __add__(
        self: Index[float],
        other: (
            int
            | Sequence[int]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[T_INT]
        ),
    ) -> Index[float]: ...
    @overload
    def __add__(
        self: Index[float],
        other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX],
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __add__(self: Index[float], other: np_ndarray_complex) -> Index[complex]: ...
    @overload
    def __add__(
        self: Index[complex],
        other: (
            T_COMPLEX
            | Sequence[T_COMPLEX]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | np_ndarray_complex
            | Index[T_COMPLEX]
        ),
    ) -> Index[complex]: ...
    @overload
    def __add__(
        self: Index[_str],
        other: (
            np_ndarray_bool | np_ndarray_anyint | np_ndarray_float | np_ndarray_complex
        ),
    ) -> Never: ...
    @overload
    def __add__(
        self: Index[_str], other: _str | Sequence[_str] | np_ndarray_str | Index[_str]
    ) -> Index[_str]: ...
    @overload
    def __radd__(self: Index[Never], other: _str) -> Never: ...
    @overload
    def __radd__(self: Index[Never], other: complex | _ListLike | Index) -> Index: ...
    @overload
    def __radd__(
        self: Index[bool],
        other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX],
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __radd__(self: Index[bool], other: np_ndarray_bool) -> Index[bool]: ...
    @overload
    def __radd__(self: Index[bool], other: np_ndarray_anyint) -> Index[int]: ...
    @overload
    def __radd__(self: Index[bool], other: np_ndarray_float) -> Index[float]: ...
    @overload
    def __radd__(
        self: Index[int],
        other: (
            bool | Sequence[bool] | np_ndarray_bool | np_ndarray_anyint | Index[bool]
        ),
    ) -> Index[int]: ...
    @overload
    def __radd__(
        self: Index[int], other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX]
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __radd__(self: Index[int], other: np_ndarray_float) -> Index[float]: ...
    @overload
    def __radd__(
        self: Index[float],
        other: (
            int
            | Sequence[int]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[T_INT]
        ),
    ) -> Index[float]: ...
    @overload
    def __radd__(
        self: Index[float], other: T_COMPLEX | Sequence[T_COMPLEX] | Index[T_COMPLEX]
    ) -> Index[T_COMPLEX]: ...
    @overload
    def __radd__(
        self: Index[complex],
        other: (
            T_COMPLEX
            | Sequence[T_COMPLEX]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[T_COMPLEX]
        ),
    ) -> Index[complex]: ...
    @overload
    def __radd__(
        self: Index[T_COMPLEX], other: np_ndarray_complex
    ) -> Index[complex]: ...
    @overload
    def __radd__(
        self: Index[_str],
        other: (
            np_ndarray_bool | np_ndarray_anyint | np_ndarray_float | np_ndarray_complex
        ),
    ) -> Never: ...
    @overload
    def __radd__(
        self: Index[_str], other: _str | Sequence[_str] | np_ndarray_str | Index[_str]
    ) -> Index[_str]: ...
    @overload
    def __sub__(self: Index[Never], other: DatetimeIndex) -> Never: ...
    @overload
    def __sub__(self: Index[Never], other: complex | NumListLike | Index) -> Index: ...
    @overload
    def __sub__(self, other: Index[Never]) -> Index: ...
    @overload
    def __sub__(
        self: Index[bool],
        other: Just[int] | Sequence[Just[int]] | np_ndarray_anyint | Index[int],
    ) -> Index[int]: ...
    @overload
    def __sub__(
        self: Index[bool],
        other: Just[float] | Sequence[Just[float]] | np_ndarray_float | Index[float],
    ) -> Index[float]: ...
    @overload
    def __sub__(
        self: Index[int],
        other: (
            int
            | Sequence[int]
            | np_ndarray_bool
            | np_ndarray_anyint
            | Index[bool]
            | Index[int]
        ),
    ) -> Index[int]: ...
    @overload
    def __sub__(
        self: Index[int],
        other: Just[float] | Sequence[Just[float]] | np_ndarray_float | Index[float],
    ) -> Index[float]: ...
    @overload
    def __sub__(
        self: Index[float],
        other: (
            float
            | Sequence[float]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[bool]
            | Index[int]
            | Index[float]
        ),
    ) -> Index[float]: ...
    @overload
    def __sub__(
        self: Index[complex],
        other: (
            T_COMPLEX
            | Sequence[T_COMPLEX]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[T_COMPLEX]
        ),
    ) -> Index[complex]: ...
    @overload
    def __sub__(
        self: Index[T_COMPLEX],
        other: (
            Just[complex]
            | Sequence[Just[complex]]
            | np_ndarray_complex
            | Index[complex]
        ),
    ) -> Index[complex]: ...
    @overload
    def __rsub__(self: Index[Never], other: DatetimeIndex) -> Never: ...  # type: ignore[misc]
    @overload
    def __rsub__(self: Index[Never], other: complex | NumListLike | Index) -> Index: ...
    @overload
    def __rsub__(self, other: Index[Never]) -> Index: ...
    @overload
    def __rsub__(
        self: Index[bool],
        other: Just[int] | Sequence[Just[int]] | np_ndarray_anyint | Index[int],
    ) -> Index[int]: ...
    @overload
    def __rsub__(
        self: Index[bool],
        other: Just[float] | Sequence[Just[float]] | np_ndarray_float | Index[float],
    ) -> Index[float]: ...
    @overload
    def __rsub__(
        self: Index[int],
        other: (
            int
            | Sequence[int]
            | np_ndarray_bool
            | np_ndarray_anyint
            | Index[bool]
            | Index[int]
        ),
    ) -> Index[int]: ...
    @overload
    def __rsub__(
        self: Index[int],
        other: Just[float] | Sequence[Just[float]] | np_ndarray_float | Index[float],
    ) -> Index[float]: ...
    @overload
    def __rsub__(
        self: Index[float],
        other: (
            float
            | Sequence[float]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[bool]
            | Index[int]
            | Index[float]
        ),
    ) -> Index[float]: ...
    @overload
    def __rsub__(
        self: Index[complex],
        other: (
            T_COMPLEX
            | Sequence[T_COMPLEX]
            | np_ndarray_bool
            | np_ndarray_anyint
            | np_ndarray_float
            | Index[T_COMPLEX]
        ),
    ) -> Index[complex]: ...
    @overload
    def __rsub__(
        self: Index[T_COMPLEX],
        other: (
            Just[complex]
            | Sequence[Just[complex]]
            | np_ndarray_complex
            | Index[complex]
        ),
    ) -> Index[complex]: ...
    @overload
    def __mul__(
        self: Index[int] | Index[float], other: timedelta
    ) -> TimedeltaIndex: ...
    @overload
    def __mul__(self, other: Any) -> Self: ...
    def __floordiv__(
        self,
        other: (
            float
            | IndexOpsMixin[int]
            | IndexOpsMixin[float]
            | Sequence[int]
            | Sequence[float]
        ),
    ) -> Self: ...
    def __rfloordiv__(
        self,
        other: (
            float
            | IndexOpsMixin[int]
            | IndexOpsMixin[float]
            | Sequence[int]
            | Sequence[float]
        ),
    ) -> Self: ...
    def __truediv__(
        self,
        other: (
            float
            | IndexOpsMixin[int]
            | IndexOpsMixin[float]
            | Sequence[int]
            | Sequence[float]
        ),
    ) -> Self: ...
    def __rtruediv__(
        self,
        other: (
            float
            | IndexOpsMixin[int]
            | IndexOpsMixin[float]
            | Sequence[int]
            | Sequence[float]
        ),
    ) -> Self: ...
    def infer_objects(self, copy: bool = True) -> Self: ...

@type_check_only
class _IndexSubclassBase(Index[S1], Generic[S1, GenericT_co]):
    @overload
    def to_numpy(  # pyrefly: ignore
        self,
        dtype: None = None,
        copy: bool = False,
        na_value: Scalar = ...,
        **kwargs,
    ) -> np_1darray[GenericT_co]: ...
    @overload
    def to_numpy(
        self,
        dtype: np.dtype[GenericT] | SupportsDType[GenericT] | type[GenericT],
        copy: bool = False,
        na_value: Scalar = ...,
        **kwargs,
    ) -> np_1darray[GenericT]: ...
    @overload
    def to_numpy(
        self,
        dtype: DTypeLike,
        copy: bool = False,
        na_value: Scalar = ...,
        **kwargs,
    ) -> np_1darray: ...
