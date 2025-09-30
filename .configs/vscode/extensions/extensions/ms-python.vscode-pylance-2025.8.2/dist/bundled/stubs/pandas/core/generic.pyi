from builtins import (
    bool as _bool,
    str as _str,
)
from collections.abc import (
    Callable,
    Hashable,
    Iterable,
    Mapping,
    Sequence,
)
import datetime as dt
import sqlite3
from typing import (
    Any,
    ClassVar,
    Literal,
    final,
    overload,
)

import numpy as np
from pandas import Index
import pandas.core.indexing as indexing
from pandas.core.resample import DatetimeIndexResampler
from pandas.core.series import (
    Series,
)
import sqlalchemy.engine
from typing_extensions import (
    Concatenate,
    Self,
)

from pandas._libs.lib import _NoDefaultDoNotUse
from pandas._typing import (
    Axis,
    CompressionOptions,
    CSVQuoting,
    DtypeArg,
    DtypeBackend,
    ExcelWriterMergeCells,
    FilePath,
    FileWriteMode,
    Frequency,
    HashableT1,
    HashableT2,
    HDFCompLib,
    IgnoreRaise,
    IndexLabel,
    Level,
    OpenFileErrors,
    P,
    StorageOptions,
    T,
    TakeIndexer,
    TimedeltaConvertibleTypes,
    TimeGrouperOrigin,
    TimestampConvertibleTypes,
    WriteBuffer,
)

from pandas.io.pytables import HDFStore
from pandas.io.sql import SQLTable

class NDFrame(indexing.IndexingMixin):
    __hash__: ClassVar[None]  # type: ignore[assignment] # pyright: ignore[reportIncompatibleMethodOverride]

    @final
    def set_flags(
        self,
        *,
        copy: _bool = ...,
        allows_duplicate_labels: _bool | None = ...,
    ) -> Self: ...
    @property
    def attrs(self) -> dict[Hashable | None, Any]: ...
    @attrs.setter
    def attrs(self, value: Mapping[Hashable | None, Any]) -> None: ...
    @property
    def shape(self) -> tuple[int, ...]: ...
    @property
    def ndim(self) -> int: ...
    @property
    def size(self) -> int: ...
    def equals(self, other: Series) -> _bool: ...
    @final
    def __neg__(self) -> Self: ...
    @final
    def __pos__(self) -> Self: ...
    @final
    def __nonzero__(self) -> None: ...
    @final
    def bool(self) -> _bool: ...
    def __abs__(self) -> Self: ...
    @final
    def __round__(self, decimals: int = ...) -> Self: ...
    @final
    def __contains__(self, key) -> _bool: ...
    @property
    def empty(self) -> _bool: ...
    __array_priority__: int = ...
    def __array__(self, dtype=...) -> np.ndarray: ...
    @final
    def to_excel(
        self,
        excel_writer,
        sheet_name: _str = "Sheet1",
        na_rep: _str = "",
        float_format: _str | None = ...,
        columns: _str | Sequence[_str] | None = ...,
        header: _bool | list[_str] = True,
        index: _bool = True,
        index_label: _str | Sequence[_str] | None = ...,
        startrow: int = 0,
        startcol: int = 0,
        engine: _str | None = ...,
        merge_cells: ExcelWriterMergeCells = True,
        inf_rep: _str = "inf",
        freeze_panes: tuple[int, int] | None = ...,
    ) -> None:
        """
Write object to an Excel sheet.

To write a single object to an Excel .xlsx file it is only necessary to
specify a target file name. To write to multiple sheets it is necessary to
create an `ExcelWriter` object with a target file name, and specify a sheet
in the file to write to.

Multiple sheets may be written to by specifying unique `sheet_name`.
With all data written to the file it is necessary to save the changes.
Note that creating an `ExcelWriter` object with a file name that already
exists will result in the contents of the existing file being erased.

Parameters
----------
excel_writer : path-like, file-like, or ExcelWriter object
    File path or existing ExcelWriter.
sheet_name : str, default 'Sheet1'
    Name of sheet which will contain DataFrame.
na_rep : str, default ''
    Missing data representation.
float_format : str, optional
    Format string for floating point numbers. For example
    ``float_format="%.2f"`` will format 0.1234 to 0.12.
columns : sequence or list of str, optional
    Columns to write.
header : bool or list of str, default True
    Write out the column names. If a list of string is given it is
    assumed to be aliases for the column names.
index : bool, default True
    Write row names (index).
index_label : str or sequence, optional
    Column label for index column(s) if desired. If not specified, and
    `header` and `index` are True, then the index names are used. A
    sequence should be given if the DataFrame uses MultiIndex.
startrow : int, default 0
    Upper left cell row to dump data frame.
startcol : int, default 0
    Upper left cell column to dump data frame.
engine : str, optional
    Write engine to use, 'openpyxl' or 'xlsxwriter'. You can also set this
    via the options ``io.excel.xlsx.writer`` or
    ``io.excel.xlsm.writer``.

merge_cells : bool, default True
    Write MultiIndex and Hierarchical Rows as merged cells.
inf_rep : str, default 'inf'
    Representation for infinity (there is no native representation for
    infinity in Excel).
freeze_panes : tuple of int (length 2), optional
    Specifies the one-based bottommost row and rightmost column that
    is to be frozen.
storage_options : dict, optional
    Extra options that make sense for a particular storage connection, e.g.
    host, port, username, password, etc. For HTTP(S) URLs the key-value pairs
    are forwarded to ``urllib.request.Request`` as header options. For other
    URLs (e.g. starting with "s3://", and "gcs://") the key-value pairs are
    forwarded to ``fsspec.open``. Please see ``fsspec`` and ``urllib`` for more
    details, and for more examples on storage options refer `here
    <https://pandas.pydata.org/docs/user_guide/io.html?
    highlight=storage_options#reading-writing-remote-files>`_.

    .. versionadded:: 1.2.0
engine_kwargs : dict, optional
    Arbitrary keyword arguments passed to excel engine.

See Also
--------
to_csv : Write DataFrame to a comma-separated values (csv) file.
ExcelWriter : Class for writing DataFrame objects into excel sheets.
read_excel : Read an Excel file into a pandas DataFrame.
read_csv : Read a comma-separated values (csv) file into DataFrame.
io.formats.style.Styler.to_excel : Add styles to Excel sheet.

Notes
-----
For compatibility with :meth:`~DataFrame.to_csv`,
to_excel serializes lists and dicts to strings before writing.

Once a workbook has been saved it is not possible to write further
data without rewriting the whole workbook.

Examples
--------

Create, write to and save a workbook:

>>> df1 = pd.DataFrame([['a', 'b'], ['c', 'd']],
...                    index=['row 1', 'row 2'],
...                    columns=['col 1', 'col 2'])
>>> df1.to_excel("output.xlsx")  # doctest: +SKIP

To specify the sheet name:

>>> df1.to_excel("output.xlsx",
...              sheet_name='Sheet_name_1')  # doctest: +SKIP

If you wish to write to more than one sheet in the workbook, it is
necessary to specify an ExcelWriter object:

>>> df2 = df1.copy()
>>> with pd.ExcelWriter('output.xlsx') as writer:  # doctest: +SKIP
...     df1.to_excel(writer, sheet_name='Sheet_name_1')
...     df2.to_excel(writer, sheet_name='Sheet_name_2')

ExcelWriter can also be used to append to an existing Excel file:

>>> with pd.ExcelWriter('output.xlsx',
...                     mode='a') as writer:  # doctest: +SKIP
...     df1.to_excel(writer, sheet_name='Sheet_name_3')

To set the library that is used to write the Excel file,
you can pass the `engine` keyword (the default engine is
automatically chosen depending on the file extension):

>>> df1.to_excel('output1.xlsx', engine='xlsxwriter')  # doctest: +SKIP
        """
        pass
    @final
    def to_hdf(
        self,
        path_or_buf: FilePath | HDFStore,
        *,
        key: _str,
        mode: Literal["a", "w", "r+"] = ...,
        complevel: int | None = ...,
        complib: HDFCompLib | None = ...,
        append: _bool = ...,
        format: Literal["t", "table", "f", "fixed"] | None = ...,
        index: _bool = ...,
        min_itemsize: int | dict[HashableT1, int] | None = ...,
        nan_rep: _str | None = ...,
        dropna: _bool | None = ...,
        data_columns: Literal[True] | list[HashableT2] | None = ...,
        errors: OpenFileErrors = ...,
        encoding: _str = ...,
    ) -> None: ...
    @overload
    def to_markdown(
        self,
        buf: FilePath | WriteBuffer[str],
        *,
        mode: FileWriteMode = ...,
        index: _bool = ...,
        storage_options: StorageOptions = ...,
        **kwargs: Any,
    ) -> None: ...
    @overload
    def to_markdown(
        self,
        buf: None = ...,
        *,
        mode: FileWriteMode | None = ...,
        index: _bool = ...,
        storage_options: StorageOptions = ...,
        **kwargs: Any,
    ) -> _str: ...
    @final
    def to_sql(
        self,
        name: _str,
        con: str | sqlalchemy.engine.Connectable | sqlite3.Connection,
        schema: _str | None = ...,
        if_exists: Literal["fail", "replace", "append"] = "fail",
        index: _bool = True,
        index_label: IndexLabel = None,
        chunksize: int | None = ...,
        dtype: DtypeArg | None = ...,
        method: (
            Literal["multi"]
            | Callable[
                [SQLTable, Any, list[str], Iterable[tuple[Any, ...]]],
                int | None,
            ]
            | None
        ) = ...,
    ) -> int | None: ...
    @final
    def to_pickle(
        self,
        path: FilePath | WriteBuffer[bytes],
        compression: CompressionOptions = "infer",
        protocol: int = 5,
        storage_options: StorageOptions = ...,
    ) -> None:
        """
Pickle (serialize) object to file.

Parameters
----------
path : str, path object, or file-like object
    String, path object (implementing ``os.PathLike[str]``), or file-like
    object implementing a binary ``write()`` function. File path where
    the pickled object will be stored.
compression : str or dict, default 'infer'
    For on-the-fly compression of the output data. If 'infer' and 'path' is
    path-like, then detect compression from the following extensions: '.gz',
    '.bz2', '.zip', '.xz', '.zst', '.tar', '.tar.gz', '.tar.xz' or '.tar.bz2'
    (otherwise no compression).
    Set to ``None`` for no compression.
    Can also be a dict with key ``'method'`` set
    to one of {``'zip'``, ``'gzip'``, ``'bz2'``, ``'zstd'``, ``'xz'``, ``'tar'``} and
    other key-value pairs are forwarded to
    ``zipfile.ZipFile``, ``gzip.GzipFile``,
    ``bz2.BZ2File``, ``zstandard.ZstdCompressor``, ``lzma.LZMAFile`` or
    ``tarfile.TarFile``, respectively.
    As an example, the following could be passed for faster compression and to create
    a reproducible gzip archive:
    ``compression={'method': 'gzip', 'compresslevel': 1, 'mtime': 1}``.

    .. versionadded:: 1.5.0
        Added support for `.tar` files.
protocol : int
    Int which indicates which protocol should be used by the pickler,
    default HIGHEST_PROTOCOL (see [1]_ paragraph 12.1.2). The possible
    values are 0, 1, 2, 3, 4, 5. A negative value for the protocol
    parameter is equivalent to setting its value to HIGHEST_PROTOCOL.

    .. [1] https://docs.python.org/3/library/pickle.html.

storage_options : dict, optional
    Extra options that make sense for a particular storage connection, e.g.
    host, port, username, password, etc. For HTTP(S) URLs the key-value pairs
    are forwarded to ``urllib.request.Request`` as header options. For other
    URLs (e.g. starting with "s3://", and "gcs://") the key-value pairs are
    forwarded to ``fsspec.open``. Please see ``fsspec`` and ``urllib`` for more
    details, and for more examples on storage options refer `here
    <https://pandas.pydata.org/docs/user_guide/io.html?
    highlight=storage_options#reading-writing-remote-files>`_.

See Also
--------
read_pickle : Load pickled pandas object (or any object) from file.
DataFrame.to_hdf : Write DataFrame to an HDF5 file.
DataFrame.to_sql : Write DataFrame to a SQL database.
DataFrame.to_parquet : Write a DataFrame to the binary parquet format.

Examples
--------
>>> original_df = pd.DataFrame({"foo": range(5), "bar": range(5, 10)})  # doctest: +SKIP
>>> original_df  # doctest: +SKIP
   foo  bar
0    0    5
1    1    6
2    2    7
3    3    8
4    4    9
>>> original_df.to_pickle("./dummy.pkl")  # doctest: +SKIP

>>> unpickled_df = pd.read_pickle("./dummy.pkl")  # doctest: +SKIP
>>> unpickled_df  # doctest: +SKIP
   foo  bar
0    0    5
1    1    6
2    2    7
3    3    8
4    4    9
        """
        pass
    @final
    def to_clipboard(
        self,
        excel: _bool = True,
        sep: _str | None = None,
        *,
        na_rep: _str = ...,
        float_format: _str | Callable[[object], _str] | None = ...,
        columns: list[HashableT1] | None = ...,
        header: _bool | list[_str] = ...,
        index: _bool = ...,
        index_label: Literal[False] | _str | list[HashableT2] | None = ...,
        mode: FileWriteMode = ...,
        encoding: _str | None = ...,
        compression: CompressionOptions = ...,
        quoting: CSVQuoting = ...,
        quotechar: _str = ...,
        lineterminator: _str | None = ...,
        chunksize: int | None = ...,
        date_format: _str | None = ...,
        doublequote: _bool = ...,
        escapechar: _str | None = ...,
        decimal: _str = ...,
        errors: _str = ...,
        storage_options: StorageOptions = ...,
    ) -> None: ...
    @overload
    def to_latex(
        self,
        buf: FilePath | WriteBuffer[str],
        columns: list[_str] | None = ...,
        header: _bool | list[_str] = ...,
        index: _bool = ...,
        na_rep: _str = ...,
        formatters=...,
        float_format=...,
        sparsify: _bool | None = ...,
        index_names: _bool = ...,
        bold_rows: _bool = ...,
        column_format: _str | None = ...,
        longtable: _bool | None = ...,
        escape: _bool | None = ...,
        encoding: _str | None = ...,
        decimal: _str = ...,
        multicolumn: _bool | None = ...,
        multicolumn_format: _str | None = ...,
        multirow: _bool | None = ...,
        caption: _str | tuple[_str, _str] | None = ...,
        label: _str | None = ...,
        position: _str | None = ...,
    ) -> None: ...
    @overload
    def to_latex(
        self,
        buf: None = ...,
        columns: list[_str] | None = ...,
        header: _bool | list[_str] = ...,
        index: _bool = ...,
        na_rep: _str = ...,
        formatters=...,
        float_format=...,
        sparsify: _bool | None = ...,
        index_names: _bool = ...,
        bold_rows: _bool = ...,
        column_format: _str | None = ...,
        longtable: _bool | None = ...,
        escape: _bool | None = ...,
        encoding: _str | None = ...,
        decimal: _str = ...,
        multicolumn: _bool | None = ...,
        multicolumn_format: _str | None = ...,
        multirow: _bool | None = ...,
        caption: _str | tuple[_str, _str] | None = ...,
        label: _str | None = ...,
        position: _str | None = ...,
    ) -> _str: ...
    @overload
    def to_csv(
        self,
        path_or_buf: FilePath | WriteBuffer[bytes] | WriteBuffer[str],
        sep: _str = ...,
        na_rep: _str = ...,
        float_format: _str | Callable[[object], _str] | None = ...,
        columns: list[HashableT1] | None = ...,
        header: _bool | list[_str] = ...,
        index: _bool = ...,
        index_label: Literal[False] | _str | list[HashableT2] | None = ...,
        mode: FileWriteMode = ...,
        encoding: _str | None = ...,
        compression: CompressionOptions = ...,
        quoting: CSVQuoting = ...,
        quotechar: _str = ...,
        lineterminator: _str | None = ...,
        chunksize: int | None = ...,
        date_format: _str | None = ...,
        doublequote: _bool = ...,
        escapechar: _str | None = ...,
        decimal: _str = ...,
        errors: OpenFileErrors = ...,
        storage_options: StorageOptions = ...,
    ) -> None:
        """
Write object to a comma-separated values (csv) file.

Parameters
----------
path_or_buf : str, path object, file-like object, or None, default None
    String, path object (implementing os.PathLike[str]), or file-like
    object implementing a write() function. If None, the result is
    returned as a string. If a non-binary file object is passed, it should
    be opened with `newline=''`, disabling universal newlines. If a binary
    file object is passed, `mode` might need to contain a `'b'`.
sep : str, default ','
    String of length 1. Field delimiter for the output file.
na_rep : str, default ''
    Missing data representation.
float_format : str, Callable, default None
    Format string for floating point numbers. If a Callable is given, it takes
    precedence over other numeric formatting parameters, like decimal.
columns : sequence, optional
    Columns to write.
header : bool or list of str, default True
    Write out the column names. If a list of strings is given it is
    assumed to be aliases for the column names.
index : bool, default True
    Write row names (index).
index_label : str or sequence, or False, default None
    Column label for index column(s) if desired. If None is given, and
    `header` and `index` are True, then the index names are used. A
    sequence should be given if the object uses MultiIndex. If
    False do not print fields for index names. Use index_label=False
    for easier importing in R.
mode : {'w', 'x', 'a'}, default 'w'
    Forwarded to either `open(mode=)` or `fsspec.open(mode=)` to control
    the file opening. Typical values include:

    - 'w', truncate the file first.
    - 'x', exclusive creation, failing if the file already exists.
    - 'a', append to the end of file if it exists.

encoding : str, optional
    A string representing the encoding to use in the output file,
    defaults to 'utf-8'. `encoding` is not supported if `path_or_buf`
    is a non-binary file object.
compression : str or dict, default 'infer'
    For on-the-fly compression of the output data. If 'infer' and 'path_or_buf' is
    path-like, then detect compression from the following extensions: '.gz',
    '.bz2', '.zip', '.xz', '.zst', '.tar', '.tar.gz', '.tar.xz' or '.tar.bz2'
    (otherwise no compression).
    Set to ``None`` for no compression.
    Can also be a dict with key ``'method'`` set
    to one of {``'zip'``, ``'gzip'``, ``'bz2'``, ``'zstd'``, ``'xz'``, ``'tar'``} and
    other key-value pairs are forwarded to
    ``zipfile.ZipFile``, ``gzip.GzipFile``,
    ``bz2.BZ2File``, ``zstandard.ZstdCompressor``, ``lzma.LZMAFile`` or
    ``tarfile.TarFile``, respectively.
    As an example, the following could be passed for faster compression and to create
    a reproducible gzip archive:
    ``compression={'method': 'gzip', 'compresslevel': 1, 'mtime': 1}``.

    .. versionadded:: 1.5.0
        Added support for `.tar` files.

       May be a dict with key 'method' as compression mode
       and other entries as additional compression options if
       compression mode is 'zip'.

       Passing compression options as keys in dict is
       supported for compression modes 'gzip', 'bz2', 'zstd', and 'zip'.
quoting : optional constant from csv module
    Defaults to csv.QUOTE_MINIMAL. If you have set a `float_format`
    then floats are converted to strings and thus csv.QUOTE_NONNUMERIC
    will treat them as non-numeric.
quotechar : str, default '\"'
    String of length 1. Character used to quote fields.
lineterminator : str, optional
    The newline character or character sequence to use in the output
    file. Defaults to `os.linesep`, which depends on the OS in which
    this method is called ('\\n' for linux, '\\r\\n' for Windows, i.e.).

    .. versionchanged:: 1.5.0

        Previously was line_terminator, changed for consistency with
        read_csv and the standard library 'csv' module.

chunksize : int or None
    Rows to write at a time.
date_format : str, default None
    Format string for datetime objects.
doublequote : bool, default True
    Control quoting of `quotechar` inside a field.
escapechar : str, default None
    String of length 1. Character used to escape `sep` and `quotechar`
    when appropriate.
decimal : str, default '.'
    Character recognized as decimal separator. E.g. use ',' for
    European data.
errors : str, default 'strict'
    Specifies how encoding and decoding errors are to be handled.
    See the errors argument for :func:`open` for a full list
    of options.

storage_options : dict, optional
    Extra options that make sense for a particular storage connection, e.g.
    host, port, username, password, etc. For HTTP(S) URLs the key-value pairs
    are forwarded to ``urllib.request.Request`` as header options. For other
    URLs (e.g. starting with "s3://", and "gcs://") the key-value pairs are
    forwarded to ``fsspec.open``. Please see ``fsspec`` and ``urllib`` for more
    details, and for more examples on storage options refer `here
    <https://pandas.pydata.org/docs/user_guide/io.html?
    highlight=storage_options#reading-writing-remote-files>`_.

Returns
-------
None or str
    If path_or_buf is None, returns the resulting csv format as a
    string. Otherwise returns None.

See Also
--------
read_csv : Load a CSV file into a DataFrame.
to_excel : Write DataFrame to an Excel file.

Examples
--------
Create 'out.csv' containing 'df' without indices

>>> df = pd.DataFrame({'name': ['Raphael', 'Donatello'],
...                    'mask': ['red', 'purple'],
...                    'weapon': ['sai', 'bo staff']})
>>> df.to_csv('out.csv', index=False)  # doctest: +SKIP

Create 'out.zip' containing 'out.csv'

>>> df.to_csv(index=False)
'name,mask,weapon\nRaphael,red,sai\nDonatello,purple,bo staff\n'
>>> compression_opts = dict(method='zip',
...                         archive_name='out.csv')  # doctest: +SKIP
>>> df.to_csv('out.zip', index=False,
...           compression=compression_opts)  # doctest: +SKIP

To write a csv file to a new folder or nested folder you will first
need to create it using either Pathlib or os:

>>> from pathlib import Path  # doctest: +SKIP
>>> filepath = Path('folder/subfolder/out.csv')  # doctest: +SKIP
>>> filepath.parent.mkdir(parents=True, exist_ok=True)  # doctest: +SKIP
>>> df.to_csv(filepath)  # doctest: +SKIP

>>> import os  # doctest: +SKIP
>>> os.makedirs('folder/subfolder', exist_ok=True)  # doctest: +SKIP
>>> df.to_csv('folder/subfolder/out.csv')  # doctest: +SKIP
        """
        pass
    @overload
    def to_csv(
        self,
        path_or_buf: None = ...,
        sep: _str = ...,
        na_rep: _str = ...,
        float_format: _str | Callable[[object], _str] | None = ...,
        columns: list[HashableT1] | None = ...,
        header: _bool | list[_str] = ...,
        index: _bool = ...,
        index_label: Literal[False] | _str | list[HashableT2] | None = ...,
        mode: FileWriteMode = ...,
        encoding: _str | None = ...,
        compression: CompressionOptions = ...,
        quoting: CSVQuoting = ...,
        quotechar: _str = ...,
        lineterminator: _str | None = ...,
        chunksize: int | None = ...,
        date_format: _str | None = ...,
        doublequote: _bool = ...,
        escapechar: _str | None = ...,
        decimal: _str = ...,
        errors: OpenFileErrors = ...,
        storage_options: StorageOptions = ...,
    ) -> _str: ...
    @final
    def __delitem__(self, idx: Hashable) -> None: ...
    @overload
    def drop(
        self,
        labels: None = ...,
        *,
        axis: Axis = ...,
        index: Hashable | Sequence[Hashable] | Index = ...,
        columns: Hashable | Iterable[Hashable],
        level: Level | None = ...,
        inplace: Literal[True],
        errors: IgnoreRaise = ...,
    ) -> None: ...
    @overload
    def drop(
        self,
        labels: None = ...,
        *,
        axis: Axis = ...,
        index: Hashable | Sequence[Hashable] | Index,
        columns: Hashable | Iterable[Hashable] = ...,
        level: Level | None = ...,
        inplace: Literal[True],
        errors: IgnoreRaise = ...,
    ) -> None: ...
    @overload
    def drop(
        self,
        labels: Hashable | Sequence[Hashable] | Index,
        *,
        axis: Axis = ...,
        index: None = ...,
        columns: None = ...,
        level: Level | None = ...,
        inplace: Literal[True],
        errors: IgnoreRaise = ...,
    ) -> None: ...
    @overload
    def drop(
        self,
        labels: None = ...,
        *,
        axis: Axis = ...,
        index: Hashable | Sequence[Hashable] | Index = ...,
        columns: Hashable | Iterable[Hashable],
        level: Level | None = ...,
        inplace: Literal[False] = ...,
        errors: IgnoreRaise = ...,
    ) -> Self: ...
    @overload
    def drop(
        self,
        labels: None = ...,
        *,
        axis: Axis = ...,
        index: Hashable | Sequence[Hashable] | Index,
        columns: Hashable | Iterable[Hashable] = ...,
        level: Level | None = ...,
        inplace: Literal[False] = ...,
        errors: IgnoreRaise = ...,
    ) -> Self: ...
    @overload
    def drop(
        self,
        labels: Hashable | Sequence[Hashable] | Index,
        *,
        axis: Axis = ...,
        index: None = ...,
        columns: None = ...,
        level: Level | None = ...,
        inplace: Literal[False] = ...,
        errors: IgnoreRaise = ...,
    ) -> Self: ...
    @overload
    def pipe(
        self,
        func: Callable[Concatenate[Self, P], T],
        *args: P.args,
        **kwargs: P.kwargs,
    ) -> T:
        """
Apply chainable functions that expect Series or DataFrames.

Parameters
----------
func : function
    Function to apply to the Series/DataFrame.
    ``args``, and ``kwargs`` are passed into ``func``.
    Alternatively a ``(callable, data_keyword)`` tuple where
    ``data_keyword`` is a string indicating the keyword of
    ``callable`` that expects the Series/DataFrame.
*args : iterable, optional
    Positional arguments passed into ``func``.
**kwargs : mapping, optional
    A dictionary of keyword arguments passed into ``func``.

Returns
-------
the return type of ``func``.

See Also
--------
DataFrame.apply : Apply a function along input axis of DataFrame.
DataFrame.map : Apply a function elementwise on a whole DataFrame.
Series.map : Apply a mapping correspondence on a
    :class:`~pandas.Series`.

Notes
-----
Use ``.pipe`` when chaining together functions that expect
Series, DataFrames or GroupBy objects.

Examples
--------
Constructing a income DataFrame from a dictionary.

>>> data = [[8000, 1000], [9500, np.nan], [5000, 2000]]
>>> df = pd.DataFrame(data, columns=['Salary', 'Others'])
>>> df
   Salary  Others
0    8000  1000.0
1    9500     NaN
2    5000  2000.0

Functions that perform tax reductions on an income DataFrame.

>>> def subtract_federal_tax(df):
...     return df * 0.9
>>> def subtract_state_tax(df, rate):
...     return df * (1 - rate)
>>> def subtract_national_insurance(df, rate, rate_increase):
...     new_rate = rate + rate_increase
...     return df * (1 - new_rate)

Instead of writing

>>> subtract_national_insurance(
...     subtract_state_tax(subtract_federal_tax(df), rate=0.12),
...     rate=0.05,
...     rate_increase=0.02)  # doctest: +SKIP

You can write

>>> (
...     df.pipe(subtract_federal_tax)
...     .pipe(subtract_state_tax, rate=0.12)
...     .pipe(subtract_national_insurance, rate=0.05, rate_increase=0.02)
... )
    Salary   Others
0  5892.48   736.56
1  6997.32      NaN
2  3682.80  1473.12

If you have a function that takes the data as (say) the second
argument, pass a tuple indicating which keyword expects the
data. For example, suppose ``national_insurance`` takes its data as ``df``
in the second argument:

>>> def subtract_national_insurance(rate, df, rate_increase):
...     new_rate = rate + rate_increase
...     return df * (1 - new_rate)
>>> (
...     df.pipe(subtract_federal_tax)
...     .pipe(subtract_state_tax, rate=0.12)
...     .pipe(
...         (subtract_national_insurance, 'df'),
...         rate=0.05,
...         rate_increase=0.02
...     )
... )
    Salary   Others
0  5892.48   736.56
1  6997.32      NaN
2  3682.80  1473.12
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
    def __finalize__(self, other, method=..., **kwargs) -> Self: ...
    @final
    def __setattr__(self, name: _str, value) -> None: ...
    @final
    def __copy__(self, deep: _bool = ...) -> Self: ...
    @final
    def __deepcopy__(self, memo=...) -> Self: ...
    @final
    def convert_dtypes(
        self,
        infer_objects: _bool = True,
        convert_string: _bool = True,
        convert_integer: _bool = True,
        convert_boolean: _bool = True,
        convert_floating: _bool = True,
        dtype_backend: DtypeBackend = "numpy_nullable",
    ) -> Self: ...
    @final
    def resample(
        self,
        rule: Frequency | dt.timedelta,
        axis: Axis | _NoDefaultDoNotUse = 0,
        closed: Literal["right", "left"] | None = None,
        label: Literal["right", "left"] | None = None,
        on: Level | None = None,
        level: Level | None = None,
        origin: TimeGrouperOrigin | TimestampConvertibleTypes = "start_day",
        offset: TimedeltaConvertibleTypes | None = None,
        group_keys: _bool = False,
    ) -> DatetimeIndexResampler[Self]:
        """
Resample time-series data.

Convenience method for frequency conversion and resampling of time series.
The object must have a datetime-like index (`DatetimeIndex`, `PeriodIndex`,
or `TimedeltaIndex`), or the caller must pass the label of a datetime-like
series/index to the ``on``/``level`` keyword parameter.

Parameters
----------
rule : DateOffset, Timedelta or str
    The offset string or object representing target conversion.
axis : {0 or 'index', 1 or 'columns'}, default 0
    Which axis to use for up- or down-sampling. For `Series` this parameter
    is unused and defaults to 0. Must be
    `DatetimeIndex`, `TimedeltaIndex` or `PeriodIndex`.

    .. deprecated:: 2.0.0
        Use frame.T.resample(...) instead.
closed : {'right', 'left'}, default None
    Which side of bin interval is closed. The default is 'left'
    for all frequency offsets except for 'ME', 'YE', 'QE', 'BME',
    'BA', 'BQE', and 'W' which all have a default of 'right'.
label : {'right', 'left'}, default None
    Which bin edge label to label bucket with. The default is 'left'
    for all frequency offsets except for 'ME', 'YE', 'QE', 'BME',
    'BA', 'BQE', and 'W' which all have a default of 'right'.
convention : {'start', 'end', 's', 'e'}, default 'start'
    For `PeriodIndex` only, controls whether to use the start or
    end of `rule`.

    .. deprecated:: 2.2.0
        Convert PeriodIndex to DatetimeIndex before resampling instead.
kind : {'timestamp', 'period'}, optional, default None
    Pass 'timestamp' to convert the resulting index to a
    `DateTimeIndex` or 'period' to convert it to a `PeriodIndex`.
    By default the input representation is retained.

    .. deprecated:: 2.2.0
        Convert index to desired type explicitly instead.

on : str, optional
    For a DataFrame, column to use instead of index for resampling.
    Column must be datetime-like.
level : str or int, optional
    For a MultiIndex, level (name or number) to use for
    resampling. `level` must be datetime-like.
origin : Timestamp or str, default 'start_day'
    The timestamp on which to adjust the grouping. The timezone of origin
    must match the timezone of the index.
    If string, must be one of the following:

    - 'epoch': `origin` is 1970-01-01
    - 'start': `origin` is the first value of the timeseries
    - 'start_day': `origin` is the first day at midnight of the timeseries

    - 'end': `origin` is the last value of the timeseries
    - 'end_day': `origin` is the ceiling midnight of the last day

    .. versionadded:: 1.3.0

    .. note::

        Only takes effect for Tick-frequencies (i.e. fixed frequencies like
        days, hours, and minutes, rather than months or quarters).
offset : Timedelta or str, default is None
    An offset timedelta added to the origin.

group_keys : bool, default False
    Whether to include the group keys in the result index when using
    ``.apply()`` on the resampled object.

    .. versionadded:: 1.5.0

        Not specifying ``group_keys`` will retain values-dependent behavior
        from pandas 1.4 and earlier (see :ref:`pandas 1.5.0 Release notes
        <whatsnew_150.enhancements.resample_group_keys>` for examples).

    .. versionchanged:: 2.0.0

        ``group_keys`` now defaults to ``False``.

Returns
-------
pandas.api.typing.Resampler
    :class:`~pandas.core.Resampler` object.

See Also
--------
Series.resample : Resample a Series.
DataFrame.resample : Resample a DataFrame.
groupby : Group Series/DataFrame by mapping, function, label, or list of labels.
asfreq : Reindex a Series/DataFrame with the given frequency without grouping.

Notes
-----
See the `user guide
<https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#resampling>`__
for more.

To learn more about the offset strings, please see `this link
<https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#dateoffset-objects>`__.

Examples
--------
Start by creating a series with 9 one minute timestamps.

>>> index = pd.date_range('1/1/2000', periods=9, freq='min')
>>> series = pd.Series(range(9), index=index)
>>> series
2000-01-01 00:00:00    0
2000-01-01 00:01:00    1
2000-01-01 00:02:00    2
2000-01-01 00:03:00    3
2000-01-01 00:04:00    4
2000-01-01 00:05:00    5
2000-01-01 00:06:00    6
2000-01-01 00:07:00    7
2000-01-01 00:08:00    8
Freq: min, dtype: int64

Downsample the series into 3 minute bins and sum the values
of the timestamps falling into a bin.

>>> series.resample('3min').sum()
2000-01-01 00:00:00     3
2000-01-01 00:03:00    12
2000-01-01 00:06:00    21
Freq: 3min, dtype: int64

Downsample the series into 3 minute bins as above, but label each
bin using the right edge instead of the left. Please note that the
value in the bucket used as the label is not included in the bucket,
which it labels. For example, in the original series the
bucket ``2000-01-01 00:03:00`` contains the value 3, but the summed
value in the resampled bucket with the label ``2000-01-01 00:03:00``
does not include 3 (if it did, the summed value would be 6, not 3).

>>> series.resample('3min', label='right').sum()
2000-01-01 00:03:00     3
2000-01-01 00:06:00    12
2000-01-01 00:09:00    21
Freq: 3min, dtype: int64

To include this value close the right side of the bin interval,
as shown below.

>>> series.resample('3min', label='right', closed='right').sum()
2000-01-01 00:00:00     0
2000-01-01 00:03:00     6
2000-01-01 00:06:00    15
2000-01-01 00:09:00    15
Freq: 3min, dtype: int64

Upsample the series into 30 second bins.

>>> series.resample('30s').asfreq()[0:5]   # Select first 5 rows
2000-01-01 00:00:00   0.0
2000-01-01 00:00:30   NaN
2000-01-01 00:01:00   1.0
2000-01-01 00:01:30   NaN
2000-01-01 00:02:00   2.0
Freq: 30s, dtype: float64

Upsample the series into 30 second bins and fill the ``NaN``
values using the ``ffill`` method.

>>> series.resample('30s').ffill()[0:5]
2000-01-01 00:00:00    0
2000-01-01 00:00:30    0
2000-01-01 00:01:00    1
2000-01-01 00:01:30    1
2000-01-01 00:02:00    2
Freq: 30s, dtype: int64

Upsample the series into 30 second bins and fill the
``NaN`` values using the ``bfill`` method.

>>> series.resample('30s').bfill()[0:5]
2000-01-01 00:00:00    0
2000-01-01 00:00:30    1
2000-01-01 00:01:00    1
2000-01-01 00:01:30    2
2000-01-01 00:02:00    2
Freq: 30s, dtype: int64

Pass a custom function via ``apply``

>>> def custom_resampler(arraylike):
...     return np.sum(arraylike) + 5
...
>>> series.resample('3min').apply(custom_resampler)
2000-01-01 00:00:00     8
2000-01-01 00:03:00    17
2000-01-01 00:06:00    26
Freq: 3min, dtype: int64

For DataFrame objects, the keyword `on` can be used to specify the
column instead of the index for resampling.

>>> d = {'price': [10, 11, 9, 13, 14, 18, 17, 19],
...      'volume': [50, 60, 40, 100, 50, 100, 40, 50]}
>>> df = pd.DataFrame(d)
>>> df['week_starting'] = pd.date_range('01/01/2018',
...                                     periods=8,
...                                     freq='W')
>>> df
   price  volume week_starting
0     10      50    2018-01-07
1     11      60    2018-01-14
2      9      40    2018-01-21
3     13     100    2018-01-28
4     14      50    2018-02-04
5     18     100    2018-02-11
6     17      40    2018-02-18
7     19      50    2018-02-25
>>> df.resample('ME', on='week_starting').mean()
               price  volume
week_starting
2018-01-31     10.75    62.5
2018-02-28     17.00    60.0

For a DataFrame with MultiIndex, the keyword `level` can be used to
specify on which level the resampling needs to take place.

>>> days = pd.date_range('1/1/2000', periods=4, freq='D')
>>> d2 = {'price': [10, 11, 9, 13, 14, 18, 17, 19],
...       'volume': [50, 60, 40, 100, 50, 100, 40, 50]}
>>> df2 = pd.DataFrame(
...     d2,
...     index=pd.MultiIndex.from_product(
...         [days, ['morning', 'afternoon']]
...     )
... )
>>> df2
                      price  volume
2000-01-01 morning       10      50
           afternoon     11      60
2000-01-02 morning        9      40
           afternoon     13     100
2000-01-03 morning       14      50
           afternoon     18     100
2000-01-04 morning       17      40
           afternoon     19      50
>>> df2.resample('D', level=0).sum()
            price  volume
2000-01-01     21     110
2000-01-02     22     140
2000-01-03     32     150
2000-01-04     36      90

If you want to adjust the start of the bins based on a fixed timestamp:

>>> start, end = '2000-10-01 23:30:00', '2000-10-02 00:30:00'
>>> rng = pd.date_range(start, end, freq='7min')
>>> ts = pd.Series(np.arange(len(rng)) * 3, index=rng)
>>> ts
2000-10-01 23:30:00     0
2000-10-01 23:37:00     3
2000-10-01 23:44:00     6
2000-10-01 23:51:00     9
2000-10-01 23:58:00    12
2000-10-02 00:05:00    15
2000-10-02 00:12:00    18
2000-10-02 00:19:00    21
2000-10-02 00:26:00    24
Freq: 7min, dtype: int64

>>> ts.resample('17min').sum()
2000-10-01 23:14:00     0
2000-10-01 23:31:00     9
2000-10-01 23:48:00    21
2000-10-02 00:05:00    54
2000-10-02 00:22:00    24
Freq: 17min, dtype: int64

>>> ts.resample('17min', origin='epoch').sum()
2000-10-01 23:18:00     0
2000-10-01 23:35:00    18
2000-10-01 23:52:00    27
2000-10-02 00:09:00    39
2000-10-02 00:26:00    24
Freq: 17min, dtype: int64

>>> ts.resample('17min', origin='2000-01-01').sum()
2000-10-01 23:24:00     3
2000-10-01 23:41:00    15
2000-10-01 23:58:00    45
2000-10-02 00:15:00    45
Freq: 17min, dtype: int64

If you want to adjust the start of the bins with an `offset` Timedelta, the two
following lines are equivalent:

>>> ts.resample('17min', origin='start').sum()
2000-10-01 23:30:00     9
2000-10-01 23:47:00    21
2000-10-02 00:04:00    54
2000-10-02 00:21:00    24
Freq: 17min, dtype: int64

>>> ts.resample('17min', offset='23h30min').sum()
2000-10-01 23:30:00     9
2000-10-01 23:47:00    21
2000-10-02 00:04:00    54
2000-10-02 00:21:00    24
Freq: 17min, dtype: int64

If you want to take the largest Timestamp as the end of the bins:

>>> ts.resample('17min', origin='end').sum()
2000-10-01 23:35:00     0
2000-10-01 23:52:00    18
2000-10-02 00:09:00    27
2000-10-02 00:26:00    63
Freq: 17min, dtype: int64

In contrast with the `start_day`, you can use `end_day` to take the ceiling
midnight of the largest Timestamp as the end of the bins and drop the bins
not containing data:

>>> ts.resample('17min', origin='end_day').sum()
2000-10-01 23:38:00     3
2000-10-01 23:55:00    15
2000-10-02 00:12:00    45
2000-10-02 00:29:00    45
Freq: 17min, dtype: int64
        """
        pass
    @final
    def take(self, indices: TakeIndexer, axis: Axis = 0, **kwargs: Any) -> Self: ...
