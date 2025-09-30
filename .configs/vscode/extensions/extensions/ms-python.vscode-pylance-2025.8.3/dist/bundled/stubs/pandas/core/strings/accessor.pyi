# pyright: strict
from builtins import slice as _slice
from collections.abc import (
    Callable,
    Hashable,
    Mapping,
    Sequence,
)
import re
from typing import (
    Generic,
    Literal,
    TypeVar,
    overload,
)

import numpy as np
import numpy.typing as npt
import pandas as pd
from pandas import (
    DataFrame,
    Index,
    MultiIndex,
    Series,
)
from pandas.core.base import NoNewAttributesMixin

from pandas._libs.tslibs.nattype import NaTType
from pandas._typing import (
    AlignJoin,
    DtypeObj,
    Scalar,
    T,
    np_1darray,
)

# Used for the result of str.split with expand=True
_T_EXPANDING = TypeVar("_T_EXPANDING", bound=DataFrame | MultiIndex)
# Used for the result of str.split with expand=False
_T_LIST_STR = TypeVar("_T_LIST_STR", bound=Series[list[str]] | Index[list[str]])
# Used for the result of str.match
_T_BOOL = TypeVar("_T_BOOL", bound=Series[bool] | np_1darray[np.bool])
# Used for the result of str.index / str.find
_T_INT = TypeVar("_T_INT", bound=Series[int] | Index[int])
# Used for the result of str.encode
_T_BYTES = TypeVar("_T_BYTES", bound=Series[bytes] | Index[bytes])
# Used for the result of str.decode
_T_STR = TypeVar("_T_STR", bound=Series[str] | Index[str])
# Used for the result of str.partition
_T_OBJECT = TypeVar("_T_OBJECT", bound=Series | Index)

class StringMethods(
    NoNewAttributesMixin,
    Generic[T, _T_EXPANDING, _T_BOOL, _T_LIST_STR, _T_INT, _T_BYTES, _T_STR, _T_OBJECT],
):
    def __init__(self, data: T) -> None: ...
    def __getitem__(self, key: _slice | int) -> _T_STR: ...
    def __iter__(self) -> _T_STR: ...
    @overload
    def cat(
        self,
        others: None = None,
        sep: str | None = None,
        na_rep: str | None = None,
        join: AlignJoin = "left",
    ) -> str: ...
    @overload
    def cat(
        self,
        others: (
            Series[str] | Index[str] | pd.DataFrame | npt.NDArray[np.str_] | list[str]
        ),
        sep: str | None = None,
        na_rep: str | None = None,
        join: AlignJoin = "left",
    ) -> _T_STR: ...
    @overload
    def split(
        self,
        pat: str | re.Pattern[str] | None = None,
        *,
        n: int = -1,
        expand: Literal[True],
        regex: bool | None = None,
    ) -> _T_EXPANDING:
        """
Split strings around given separator/delimiter.

Splits the string in the Series/Index from the beginning,
at the specified delimiter string.

Parameters
----------
pat : str or compiled regex, optional
    String or regular expression to split on.
    If not specified, split on whitespace.
n : int, default -1 (all)
    Limit number of splits in output.
    ``None``, 0 and -1 will be interpreted as return all splits.
expand : bool, default False
    Expand the split strings into separate columns.

    - If ``True``, return DataFrame/MultiIndex expanding dimensionality.
    - If ``False``, return Series/Index, containing lists of strings.

regex : bool, default None
    Determines if the passed-in pattern is a regular expression:

    - If ``True``, assumes the passed-in pattern is a regular expression
    - If ``False``, treats the pattern as a literal string.
    - If ``None`` and `pat` length is 1, treats `pat` as a literal string.
    - If ``None`` and `pat` length is not 1, treats `pat` as a regular expression.
    - Cannot be set to False if `pat` is a compiled regex

    .. versionadded:: 1.4.0

Returns
-------
Series, Index, DataFrame or MultiIndex
    Type matches caller unless ``expand=True`` (see Notes).

                  Raises
                  ------
                  ValueError
                      * if `regex` is False and `pat` is a compiled regex

See Also
--------
Series.str.split : Split strings around given separator/delimiter.
Series.str.rsplit : Splits string around given separator/delimiter,
    starting from the right.
Series.str.join : Join lists contained as elements in the Series/Index
    with passed delimiter.
str.split : Standard library version for split.
str.rsplit : Standard library version for rsplit.

Notes
-----
The handling of the `n` keyword depends on the number of found splits:

- If found splits > `n`,  make first `n` splits only
- If found splits <= `n`, make all splits
- If for a certain row the number of found splits < `n`,
  append `None` for padding up to `n` if ``expand=True``

If using ``expand=True``, Series and Index callers return DataFrame and
MultiIndex objects, respectively.

Use of `regex =False` with a `pat` as a compiled regex will raise an error.

Examples
--------
>>> s = pd.Series(
...     [
...         "this is a regular sentence",
...         "https://docs.python.org/3/tutorial/index.html",
...         np.nan
...     ]
... )
>>> s
0                       this is a regular sentence
1    https://docs.python.org/3/tutorial/index.html
2                                              NaN
dtype: object

In the default setting, the string is split by whitespace.

>>> s.str.split()
0                   [this, is, a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

Without the `n` parameter, the outputs of `rsplit` and `split`
are identical.

>>> s.str.rsplit()
0                   [this, is, a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

The `n` parameter can be used to limit the number of splits on the
delimiter. The outputs of `split` and `rsplit` are different.

>>> s.str.split(n=2)
0                     [this, is, a regular sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

>>> s.str.rsplit(n=2)
0                     [this is a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

The `pat` parameter can be used to split by other characters.

>>> s.str.split(pat="/")
0                         [this is a regular sentence]
1    [https:, , docs.python.org, 3, tutorial, index...
2                                                  NaN
dtype: object

When using ``expand=True``, the split elements will expand out into
separate columns. If NaN is present, it is propagated throughout
the columns during the split.

>>> s.str.split(expand=True)
                                               0     1     2        3         4
0                                           this    is     a  regular  sentence
1  https://docs.python.org/3/tutorial/index.html  None  None     None      None
2                                            NaN   NaN   NaN      NaN       NaN

For slightly more complex use cases like splitting the html document name
from a url, a combination of parameter settings can be used.

>>> s.str.rsplit("/", n=1, expand=True)
                                    0           1
0          this is a regular sentence        None
1  https://docs.python.org/3/tutorial  index.html
2                                 NaN         NaN

Remember to escape special characters when explicitly using regular expressions.

>>> s = pd.Series(["foo and bar plus baz"])
>>> s.str.split(r"and|plus", expand=True)
    0   1   2
0 foo bar baz

Regular expressions can be used to handle urls or file names.
When `pat` is a string and ``regex=None`` (the default), the given `pat` is compiled
as a regex only if ``len(pat) != 1``.

>>> s = pd.Series(['foojpgbar.jpg'])
>>> s.str.split(r".", expand=True)
           0    1
0  foojpgbar  jpg

>>> s.str.split(r"\.jpg", expand=True)
           0 1
0  foojpgbar

When ``regex=True``, `pat` is interpreted as a regex

>>> s.str.split(r"\.jpg", regex=True, expand=True)
           0 1
0  foojpgbar

A compiled regex can be passed as `pat`

>>> import re
>>> s.str.split(re.compile(r"\.jpg"), expand=True)
           0 1
0  foojpgbar

When ``regex=False``, `pat` is interpreted as the string itself

>>> s.str.split(r"\.jpg", regex=False, expand=True)
               0
0  foojpgbar.jpg
        """
        pass
    @overload
    def split(
        self,
        pat: str | re.Pattern[str] | None = None,
        *,
        n: int = -1,
        expand: Literal[False] = False,
        regex: bool | None = None,
    ) -> _T_LIST_STR: ...
    @overload
    def rsplit(
        self, pat: str | None = None, *, n: int = -1, expand: Literal[True]
    ) -> _T_EXPANDING:
        """
Split strings around given separator/delimiter.

Splits the string in the Series/Index from the end,
at the specified delimiter string.

Parameters
----------
pat : str, optional
    String to split on.
    If not specified, split on whitespace.
n : int, default -1 (all)
    Limit number of splits in output.
    ``None``, 0 and -1 will be interpreted as return all splits.
expand : bool, default False
    Expand the split strings into separate columns.

    - If ``True``, return DataFrame/MultiIndex expanding dimensionality.
    - If ``False``, return Series/Index, containing lists of strings.

Returns
-------
Series, Index, DataFrame or MultiIndex
    Type matches caller unless ``expand=True`` (see Notes).

See Also
--------
Series.str.split : Split strings around given separator/delimiter.
Series.str.rsplit : Splits string around given separator/delimiter,
    starting from the right.
Series.str.join : Join lists contained as elements in the Series/Index
    with passed delimiter.
str.split : Standard library version for split.
str.rsplit : Standard library version for rsplit.

Notes
-----
The handling of the `n` keyword depends on the number of found splits:

- If found splits > `n`,  make first `n` splits only
- If found splits <= `n`, make all splits
- If for a certain row the number of found splits < `n`,
  append `None` for padding up to `n` if ``expand=True``

If using ``expand=True``, Series and Index callers return DataFrame and
MultiIndex objects, respectively.

Examples
--------
>>> s = pd.Series(
...     [
...         "this is a regular sentence",
...         "https://docs.python.org/3/tutorial/index.html",
...         np.nan
...     ]
... )
>>> s
0                       this is a regular sentence
1    https://docs.python.org/3/tutorial/index.html
2                                              NaN
dtype: object

In the default setting, the string is split by whitespace.

>>> s.str.split()
0                   [this, is, a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

Without the `n` parameter, the outputs of `rsplit` and `split`
are identical.

>>> s.str.rsplit()
0                   [this, is, a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

The `n` parameter can be used to limit the number of splits on the
delimiter. The outputs of `split` and `rsplit` are different.

>>> s.str.split(n=2)
0                     [this, is, a regular sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

>>> s.str.rsplit(n=2)
0                     [this is a, regular, sentence]
1    [https://docs.python.org/3/tutorial/index.html]
2                                                NaN
dtype: object

The `pat` parameter can be used to split by other characters.

>>> s.str.split(pat="/")
0                         [this is a regular sentence]
1    [https:, , docs.python.org, 3, tutorial, index...
2                                                  NaN
dtype: object

When using ``expand=True``, the split elements will expand out into
separate columns. If NaN is present, it is propagated throughout
the columns during the split.

>>> s.str.split(expand=True)
                                               0     1     2        3         4
0                                           this    is     a  regular  sentence
1  https://docs.python.org/3/tutorial/index.html  None  None     None      None
2                                            NaN   NaN   NaN      NaN       NaN

For slightly more complex use cases like splitting the html document name
from a url, a combination of parameter settings can be used.

>>> s.str.rsplit("/", n=1, expand=True)
                                    0           1
0          this is a regular sentence        None
1  https://docs.python.org/3/tutorial  index.html
2                                 NaN         NaN
        """
        pass
    @overload
    def rsplit(
        self, pat: str | None = None, *, n: int = -1, expand: Literal[False] = False
    ) -> _T_LIST_STR: ...
    @overload  # expand=True
    def partition(
        self, sep: str = " ", expand: Literal[True] = True
    ) -> _T_EXPANDING:
        """
Split the string at the first occurrence of `sep`.

This method splits the string at the first occurrence of `sep`,
and returns 3 elements containing the part before the separator,
the separator itself, and the part after the separator.
If the separator is not found, return 3 elements containing the string itself, followed by two empty strings.

Parameters
----------
sep : str, default whitespace
    String to split on.
expand : bool, default True
    If True, return DataFrame/MultiIndex expanding dimensionality.
    If False, return Series/Index.

Returns
-------
DataFrame/MultiIndex or Series/Index of objects

See Also
--------
rpartition : Split the string at the last occurrence of `sep`.
Series.str.split : Split strings around given separators.
str.partition : Standard library version.

Examples
--------

>>> s = pd.Series(['Linda van der Berg', 'George Pitt-Rivers'])
>>> s
0    Linda van der Berg
1    George Pitt-Rivers
dtype: object

>>> s.str.partition()
        0  1             2
0   Linda     van der Berg
1  George      Pitt-Rivers

To partition by the last space instead of the first one:

>>> s.str.rpartition()
               0  1            2
0  Linda van der            Berg
1         George     Pitt-Rivers

To partition by something different than a space:

>>> s.str.partition('-')
                    0  1       2
0  Linda van der Berg
1         George Pitt  -  Rivers

To return a Series containing tuples instead of a DataFrame:

>>> s.str.partition('-', expand=False)
0    (Linda van der Berg, , )
1    (George Pitt, -, Rivers)
dtype: object

Also available on indices:

>>> idx = pd.Index(['X 123', 'Y 999'])
>>> idx
Index(['X 123', 'Y 999'], dtype='object')

Which will create a MultiIndex:

>>> idx.str.partition()
MultiIndex([('X', ' ', '123'),
            ('Y', ' ', '999')],
           )

Or an index with tuples with ``expand=False``:

>>> idx.str.partition(expand=False)
Index([('X', ' ', '123'), ('Y', ' ', '999')], dtype='object')
        """
        pass
    @overload  # expand=False (positional argument)
    def partition(self, sep: str, expand: Literal[False]) -> _T_OBJECT: ...
    @overload  # expand=False (keyword argument)
    def partition(self, sep: str = " ", *, expand: Literal[False]) -> _T_OBJECT: ...
    @overload  # expand=True
    def rpartition(
        self, sep: str = " ", expand: Literal[True] = True
    ) -> _T_EXPANDING:
        """
Split the string at the last occurrence of `sep`.

This method splits the string at the last occurrence of `sep`,
and returns 3 elements containing the part before the separator,
the separator itself, and the part after the separator.
If the separator is not found, return 3 elements containing two empty strings, followed by the string itself.

Parameters
----------
sep : str, default whitespace
    String to split on.
expand : bool, default True
    If True, return DataFrame/MultiIndex expanding dimensionality.
    If False, return Series/Index.

Returns
-------
DataFrame/MultiIndex or Series/Index of objects

See Also
--------
partition : Split the string at the first occurrence of `sep`.
Series.str.split : Split strings around given separators.
str.partition : Standard library version.

Examples
--------

>>> s = pd.Series(['Linda van der Berg', 'George Pitt-Rivers'])
>>> s
0    Linda van der Berg
1    George Pitt-Rivers
dtype: object

>>> s.str.partition()
        0  1             2
0   Linda     van der Berg
1  George      Pitt-Rivers

To partition by the last space instead of the first one:

>>> s.str.rpartition()
               0  1            2
0  Linda van der            Berg
1         George     Pitt-Rivers

To partition by something different than a space:

>>> s.str.partition('-')
                    0  1       2
0  Linda van der Berg
1         George Pitt  -  Rivers

To return a Series containing tuples instead of a DataFrame:

>>> s.str.partition('-', expand=False)
0    (Linda van der Berg, , )
1    (George Pitt, -, Rivers)
dtype: object

Also available on indices:

>>> idx = pd.Index(['X 123', 'Y 999'])
>>> idx
Index(['X 123', 'Y 999'], dtype='object')

Which will create a MultiIndex:

>>> idx.str.partition()
MultiIndex([('X', ' ', '123'),
            ('Y', ' ', '999')],
           )

Or an index with tuples with ``expand=False``:

>>> idx.str.partition(expand=False)
Index([('X', ' ', '123'), ('Y', ' ', '999')], dtype='object')
        """
        pass
    @overload  # expand=False (positional argument)
    def rpartition(self, sep: str, expand: Literal[False]) -> _T_OBJECT: ...
    @overload  # expand=False (keyword argument)
    def rpartition(self, sep: str = " ", *, expand: Literal[False]) -> _T_OBJECT: ...
    def get(self, i: int | Hashable) -> _T_STR: ...
    def join(self, sep: str) -> _T_STR: ...
    def contains(
        self,
        pat: str | re.Pattern[str],
        case: bool = True,
        flags: int = 0,
        na: Scalar | NaTType | None = ...,
        regex: bool = True,
    ) -> _T_BOOL: ...
    def match(
        self,
        pat: str | re.Pattern[str],
        case: bool = True,
        flags: int = 0,
        na: Scalar | NaTType | None = ...,
    ) -> _T_BOOL: ...
    def fullmatch(
        self,
        pat: str | re.Pattern[str],
        case: bool = True,
        flags: int = 0,
        na: Scalar | NaTType | None = ...,
    ) -> _T_BOOL: ...
    def replace(
        self,
        pat: str | re.Pattern[str],
        repl: str | Callable[[re.Match[str]], str],
        n: int = -1,
        case: bool | None = None,
        flags: int = 0,
        regex: bool = False,
    ) -> _T_STR: ...
    def repeat(self, repeats: int | Sequence[int]) -> _T_STR: ...
    def pad(
        self,
        width: int,
        side: Literal["left", "right", "both"] = "left",
        fillchar: str = " ",
    ) -> _T_STR: ...
    def center(self, width: int, fillchar: str = " ") -> _T_STR:
        """
Pad left and right side of strings in the Series/Index.

Equivalent to :meth:`str.center`.

Parameters
----------
width : int
    Minimum width of resulting string; additional characters will be filled
    with ``fillchar``.
fillchar : str
    Additional character for filling, default is whitespace.

Returns
-------
Series/Index of objects.

Examples
--------
For Series.str.center:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.center(8, fillchar='.')
0   ..dog...
1   ..bird..
2   .mouse..
dtype: object

For Series.str.ljust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.ljust(8, fillchar='.')
0   dog.....
1   bird....
2   mouse...
dtype: object

For Series.str.rjust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.rjust(8, fillchar='.')
0   .....dog
1   ....bird
2   ...mouse
dtype: object
        """
        pass
    def ljust(self, width: int, fillchar: str = " ") -> _T_STR:
        """
Pad right side of strings in the Series/Index.

Equivalent to :meth:`str.ljust`.

Parameters
----------
width : int
    Minimum width of resulting string; additional characters will be filled
    with ``fillchar``.
fillchar : str
    Additional character for filling, default is whitespace.

Returns
-------
Series/Index of objects.

Examples
--------
For Series.str.center:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.center(8, fillchar='.')
0   ..dog...
1   ..bird..
2   .mouse..
dtype: object

For Series.str.ljust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.ljust(8, fillchar='.')
0   dog.....
1   bird....
2   mouse...
dtype: object

For Series.str.rjust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.rjust(8, fillchar='.')
0   .....dog
1   ....bird
2   ...mouse
dtype: object
        """
        pass
    def rjust(self, width: int, fillchar: str = " ") -> _T_STR:
        """
Pad left side of strings in the Series/Index.

Equivalent to :meth:`str.rjust`.

Parameters
----------
width : int
    Minimum width of resulting string; additional characters will be filled
    with ``fillchar``.
fillchar : str
    Additional character for filling, default is whitespace.

Returns
-------
Series/Index of objects.

Examples
--------
For Series.str.center:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.center(8, fillchar='.')
0   ..dog...
1   ..bird..
2   .mouse..
dtype: object

For Series.str.ljust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.ljust(8, fillchar='.')
0   dog.....
1   bird....
2   mouse...
dtype: object

For Series.str.rjust:

>>> ser = pd.Series(['dog', 'bird', 'mouse'])
>>> ser.str.rjust(8, fillchar='.')
0   .....dog
1   ....bird
2   ...mouse
dtype: object
        """
        pass
    def zfill(self, width: int) -> _T_STR: ...
    def slice(
        self, start: int | None = None, stop: int | None = None, step: int | None = None
    ) -> T: ...
    def slice_replace(
        self, start: int | None = None, stop: int | None = None, repl: str | None = None
    ) -> _T_STR: ...
    def decode(
        self, encoding: str, errors: str = "strict", dtype: str | DtypeObj | None = None
    ) -> _T_STR: ...
    def encode(self, encoding: str, errors: str = "strict") -> _T_BYTES: ...
    def strip(self, to_strip: str | None = None) -> _T_STR:
        """
Remove leading and trailing characters.

Strip whitespaces (including newlines) or a set of specified characters
from each string in the Series/Index from left and right sides.
Replaces any non-strings in Series with NaNs.
Equivalent to :meth:`str.strip`.

Parameters
----------
to_strip : str or None, default None
    Specifying the set of characters to be removed.
    All combinations of this set of characters will be stripped.
    If None then whitespaces are removed.

Returns
-------
Series or Index of object

See Also
--------
Series.str.strip : Remove leading and trailing characters in Series/Index.
Series.str.lstrip : Remove leading characters in Series/Index.
Series.str.rstrip : Remove trailing characters in Series/Index.

Examples
--------
>>> s = pd.Series(['1. Ant.  ', '2. Bee!\n', '3. Cat?\t', np.nan, 10, True])
>>> s
0    1. Ant.
1    2. Bee!\n
2    3. Cat?\t
3          NaN
4           10
5         True
dtype: object

>>> s.str.strip()
0    1. Ant.
1    2. Bee!
2    3. Cat?
3        NaN
4        NaN
5        NaN
dtype: object

>>> s.str.lstrip('123.')
0    Ant.
1    Bee!\n
2    Cat?\t
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.rstrip('.!? \n\t')
0    1. Ant
1    2. Bee
2    3. Cat
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.strip('123.!? \n\t')
0    Ant
1    Bee
2    Cat
3    NaN
4    NaN
5    NaN
dtype: object
        """
        pass
    def lstrip(self, to_strip: str | None = None) -> _T_STR:
        """
Remove leading characters.

Strip whitespaces (including newlines) or a set of specified characters
from each string in the Series/Index from left side.
Replaces any non-strings in Series with NaNs.
Equivalent to :meth:`str.lstrip`.

Parameters
----------
to_strip : str or None, default None
    Specifying the set of characters to be removed.
    All combinations of this set of characters will be stripped.
    If None then whitespaces are removed.

Returns
-------
Series or Index of object

See Also
--------
Series.str.strip : Remove leading and trailing characters in Series/Index.
Series.str.lstrip : Remove leading characters in Series/Index.
Series.str.rstrip : Remove trailing characters in Series/Index.

Examples
--------
>>> s = pd.Series(['1. Ant.  ', '2. Bee!\n', '3. Cat?\t', np.nan, 10, True])
>>> s
0    1. Ant.
1    2. Bee!\n
2    3. Cat?\t
3          NaN
4           10
5         True
dtype: object

>>> s.str.strip()
0    1. Ant.
1    2. Bee!
2    3. Cat?
3        NaN
4        NaN
5        NaN
dtype: object

>>> s.str.lstrip('123.')
0    Ant.
1    Bee!\n
2    Cat?\t
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.rstrip('.!? \n\t')
0    1. Ant
1    2. Bee
2    3. Cat
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.strip('123.!? \n\t')
0    Ant
1    Bee
2    Cat
3    NaN
4    NaN
5    NaN
dtype: object
        """
        pass
    def rstrip(self, to_strip: str | None = None) -> _T_STR:
        """
Remove trailing characters.

Strip whitespaces (including newlines) or a set of specified characters
from each string in the Series/Index from right side.
Replaces any non-strings in Series with NaNs.
Equivalent to :meth:`str.rstrip`.

Parameters
----------
to_strip : str or None, default None
    Specifying the set of characters to be removed.
    All combinations of this set of characters will be stripped.
    If None then whitespaces are removed.

Returns
-------
Series or Index of object

See Also
--------
Series.str.strip : Remove leading and trailing characters in Series/Index.
Series.str.lstrip : Remove leading characters in Series/Index.
Series.str.rstrip : Remove trailing characters in Series/Index.

Examples
--------
>>> s = pd.Series(['1. Ant.  ', '2. Bee!\n', '3. Cat?\t', np.nan, 10, True])
>>> s
0    1. Ant.
1    2. Bee!\n
2    3. Cat?\t
3          NaN
4           10
5         True
dtype: object

>>> s.str.strip()
0    1. Ant.
1    2. Bee!
2    3. Cat?
3        NaN
4        NaN
5        NaN
dtype: object

>>> s.str.lstrip('123.')
0    Ant.
1    Bee!\n
2    Cat?\t
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.rstrip('.!? \n\t')
0    1. Ant
1    2. Bee
2    3. Cat
3       NaN
4       NaN
5       NaN
dtype: object

>>> s.str.strip('123.!? \n\t')
0    Ant
1    Bee
2    Cat
3    NaN
4    NaN
5    NaN
dtype: object
        """
        pass
    def removeprefix(self, prefix: str) -> _T_STR:
        """
Remove a prefix from an object series.

If the prefix is not present, the original string will be returned.

Parameters
----------
prefix : str
    Remove the prefix of the string.

Returns
-------
Series/Index: object
    The Series or Index with given prefix removed.

See Also
--------
Series.str.removesuffix : Remove a suffix from an object series.

Examples
--------
>>> s = pd.Series(["str_foo", "str_bar", "no_prefix"])
>>> s
0    str_foo
1    str_bar
2    no_prefix
dtype: object
>>> s.str.removeprefix("str_")
0    foo
1    bar
2    no_prefix
dtype: object

>>> s = pd.Series(["foo_str", "bar_str", "no_suffix"])
>>> s
0    foo_str
1    bar_str
2    no_suffix
dtype: object
>>> s.str.removesuffix("_str")
0    foo
1    bar
2    no_suffix
dtype: object
        """
        pass
    def removesuffix(self, suffix: str) -> _T_STR:
        """
Remove a suffix from an object series.

If the suffix is not present, the original string will be returned.

Parameters
----------
suffix : str
    Remove the suffix of the string.

Returns
-------
Series/Index: object
    The Series or Index with given suffix removed.

See Also
--------
Series.str.removeprefix : Remove a prefix from an object series.

Examples
--------
>>> s = pd.Series(["str_foo", "str_bar", "no_prefix"])
>>> s
0    str_foo
1    str_bar
2    no_prefix
dtype: object
>>> s.str.removeprefix("str_")
0    foo
1    bar
2    no_prefix
dtype: object

>>> s = pd.Series(["foo_str", "bar_str", "no_suffix"])
>>> s
0    foo_str
1    bar_str
2    no_suffix
dtype: object
>>> s.str.removesuffix("_str")
0    foo
1    bar
2    no_suffix
dtype: object
        """
        pass
    def wrap(
        self,
        width: int,
        *,
        # kwargs passed to textwrap.TextWrapper
        expand_tabs: bool = True,
        replace_whitespace: bool = True,
        drop_whitespace: bool = True,
        break_long_words: bool = True,
        break_on_hyphens: bool = True,
    ) -> _T_STR: ...
    def get_dummies(self, sep: str = "|") -> _T_EXPANDING: ...
    def translate(self, table: Mapping[int, int | str | None] | None) -> _T_STR: ...
    def count(self, pat: str, flags: int = 0) -> _T_INT: ...
    def startswith(
        self, pat: str | tuple[str, ...], na: Scalar | NaTType | None = ...
    ) -> _T_BOOL: ...
    def endswith(
        self, pat: str | tuple[str, ...], na: Scalar | NaTType | None = ...
    ) -> _T_BOOL: ...
    def findall(self, pat: str | re.Pattern[str], flags: int = 0) -> _T_LIST_STR: ...
    @overload  # expand=True
    def extract(
        self, pat: str | re.Pattern[str], flags: int = 0, expand: Literal[True] = True
    ) -> pd.DataFrame: ...
    @overload  # expand=False (positional argument)
    def extract(
        self, pat: str | re.Pattern[str], flags: int, expand: Literal[False]
    ) -> _T_OBJECT: ...
    @overload  # expand=False (keyword argument)
    def extract(
        self, pat: str | re.Pattern[str], flags: int = 0, *, expand: Literal[False]
    ) -> _T_OBJECT: ...
    def extractall(
        self, pat: str | re.Pattern[str], flags: int = 0
    ) -> pd.DataFrame: ...
    def find(self, sub: str, start: int = 0, end: int | None = None) -> _T_INT:
        """
Return lowest indexes in each strings in the Series/Index.

Each of returned indexes corresponds to the position where the
substring is fully contained between [start:end]. Return -1 on
failure. Equivalent to standard :meth:`str.find`.

Parameters
----------
sub : str
    Substring being searched.
start : int
    Left edge index.
end : int
    Right edge index.

Returns
-------
Series or Index of int.

See Also
--------
rfind : Return highest indexes in each strings.

Examples
--------
For Series.str.find:

>>> ser = pd.Series(["cow_", "duck_", "do_ve"])
>>> ser.str.find("_")
0   3
1   4
2   2
dtype: int64

For Series.str.rfind:

>>> ser = pd.Series(["_cow_", "duck_", "do_v_e"])
>>> ser.str.rfind("_")
0   4
1   4
2   4
dtype: int64
        """
        pass
    def rfind(self, sub: str, start: int = 0, end: int | None = None) -> _T_INT:
        """
Return highest indexes in each strings in the Series/Index.

Each of returned indexes corresponds to the position where the
substring is fully contained between [start:end]. Return -1 on
failure. Equivalent to standard :meth:`str.rfind`.

Parameters
----------
sub : str
    Substring being searched.
start : int
    Left edge index.
end : int
    Right edge index.

Returns
-------
Series or Index of int.

See Also
--------
find : Return lowest indexes in each strings.

Examples
--------
For Series.str.find:

>>> ser = pd.Series(["cow_", "duck_", "do_ve"])
>>> ser.str.find("_")
0   3
1   4
2   2
dtype: int64

For Series.str.rfind:

>>> ser = pd.Series(["_cow_", "duck_", "do_v_e"])
>>> ser.str.rfind("_")
0   4
1   4
2   4
dtype: int64
        """
        pass
    def normalize(self, form: Literal["NFC", "NFKC", "NFD", "NFKD"]) -> _T_STR: ...
    def index(self, sub: str, start: int = 0, end: int | None = None) -> _T_INT:
        """
Return lowest indexes in each string in Series/Index.

Each of the returned indexes corresponds to the position where the
substring is fully contained between [start:end]. This is the same
as ``str.find`` except instead of returning -1, it raises a
ValueError when the substring is not found. Equivalent to standard
``str.index``.

Parameters
----------
sub : str
    Substring being searched.
start : int
    Left edge index.
end : int
    Right edge index.

Returns
-------
Series or Index of object

See Also
--------
rindex : Return highest indexes in each strings.

Examples
--------
For Series.str.index:

>>> ser = pd.Series(["horse", "eagle", "donkey"])
>>> ser.str.index("e")
0   4
1   0
2   4
dtype: int64

For Series.str.rindex:

>>> ser = pd.Series(["Deer", "eagle", "Sheep"])
>>> ser.str.rindex("e")
0   2
1   4
2   3
dtype: int64
        """
        pass
    def rindex(self, sub: str, start: int = 0, end: int | None = None) -> _T_INT:
        """
Return highest indexes in each string in Series/Index.

Each of the returned indexes corresponds to the position where the
substring is fully contained between [start:end]. This is the same
as ``str.rfind`` except instead of returning -1, it raises a
ValueError when the substring is not found. Equivalent to standard
``str.rindex``.

Parameters
----------
sub : str
    Substring being searched.
start : int
    Left edge index.
end : int
    Right edge index.

Returns
-------
Series or Index of object

See Also
--------
index : Return lowest indexes in each strings.

Examples
--------
For Series.str.index:

>>> ser = pd.Series(["horse", "eagle", "donkey"])
>>> ser.str.index("e")
0   4
1   0
2   4
dtype: int64

For Series.str.rindex:

>>> ser = pd.Series(["Deer", "eagle", "Sheep"])
>>> ser.str.rindex("e")
0   2
1   4
2   3
dtype: int64
        """
        pass
    def len(self) -> _T_INT: ...
    def lower(self) -> _T_STR:
        """
Convert strings in the Series/Index to lowercase.

Equivalent to :meth:`str.lower`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def upper(self) -> _T_STR:
        """
Convert strings in the Series/Index to uppercase.

Equivalent to :meth:`str.upper`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def title(self) -> _T_STR:
        """
Convert strings in the Series/Index to titlecase.

Equivalent to :meth:`str.title`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def capitalize(self) -> _T_STR:
        """
Convert strings in the Series/Index to be capitalized.

Equivalent to :meth:`str.capitalize`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def swapcase(self) -> _T_STR:
        """
Convert strings in the Series/Index to be swapcased.

Equivalent to :meth:`str.swapcase`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def casefold(self) -> _T_STR:
        """
Convert strings in the Series/Index to be casefolded.

Equivalent to :meth:`str.casefold`.

Returns
-------
Series or Index of object

See Also
--------
Series.str.lower : Converts all characters to lowercase.
Series.str.upper : Converts all characters to uppercase.
Series.str.title : Converts first character of each word to uppercase and
    remaining to lowercase.
Series.str.capitalize : Converts first character to uppercase and
    remaining to lowercase.
Series.str.swapcase : Converts uppercase to lowercase and lowercase to
    uppercase.
Series.str.casefold: Removes all case distinctions in the string.

Examples
--------
>>> s = pd.Series(['lower', 'CAPITALS', 'this is a sentence', 'SwApCaSe'])
>>> s
0                 lower
1              CAPITALS
2    this is a sentence
3              SwApCaSe
dtype: object

>>> s.str.lower()
0                 lower
1              capitals
2    this is a sentence
3              swapcase
dtype: object

>>> s.str.upper()
0                 LOWER
1              CAPITALS
2    THIS IS A SENTENCE
3              SWAPCASE
dtype: object

>>> s.str.title()
0                 Lower
1              Capitals
2    This Is A Sentence
3              Swapcase
dtype: object

>>> s.str.capitalize()
0                 Lower
1              Capitals
2    This is a sentence
3              Swapcase
dtype: object

>>> s.str.swapcase()
0                 LOWER
1              capitals
2    THIS IS A SENTENCE
3              sWaPcAsE
dtype: object
        """
        pass
    def isalnum(self) -> _T_BOOL: ...
    def isalpha(self) -> _T_BOOL: ...
    def isdigit(self) -> _T_BOOL: ...
    def isspace(self) -> _T_BOOL: ...
    def islower(self) -> _T_BOOL: ...
    def isupper(self) -> _T_BOOL: ...
    def istitle(self) -> _T_BOOL: ...
    def isnumeric(self) -> _T_BOOL: ...
    def isdecimal(self) -> _T_BOOL: ...
