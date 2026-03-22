CREATE TABLE LOCATION (
    LocationID INT PRIMARY KEY,
    LocationName VARCHAR(25) NOT NULL,
    LocationStreet VARCHAR(25),
    LocationCity VARCHAR(15),
    LocationProvince VARCHAR(15),
    LocationPostCode CHAR(6)
);

CREATE TABLE CONDO_OWNER (
    OwnerID INT PRIMARY KEY,
    OwnerStreet VARCHAR(25),
    OwnerCity VARCHAR(15),
    OwnerProvince VARCHAR(15),
    OwnerPostCode CHAR(6),
    OwnerPhone CHAR(10),
    OwnerType CHAR(1) CHECK (OwnerType IN ('C','S')) NOT NULL
);

CREATE TABLE SINGLE_OWNER (
    OwnerID INT PRIMARY KEY,
    OwnerFirstName VARCHAR (20) NOT NULL,
    OwnerLastName VARCHAR(20) NOT NULL,
    FOREIGN KEY (OwnerID) REFERENCES CONDO_OWNER(OwnerID)
);

CREATE TABLE COUPLE_OWNER (
    OwnerID INT PRIMARY KEY,
    Owner1FIrstName VARCHAR (20) NOT NULL,
    Owner1FIrstName VARCHAR (20) NOT NULL,
    Owner2FIrstName VARCHAR (20) NOT NULL,
    Owner2FIrstName VARCHAR (20) NOT NULL,
    FOREIGN KEY (OwnerID) REFERENCES CONDO_OWNER(OwnerID)
);

CREATE TABLE UNIT (
    UnitNo INT PRIMARY KEY,
    AptArea VARCHAR (20),
    NumBedrooms INT,
    NumbBathrooms INT,
    CondoFee VARCHAR (10),
    OwnerID INT,
    LocationID INT,
    FOREIGN KEY (OwnerID) REFERENCES CONDO_OWNER (OwnerID),
    FOREIGN KEY (LocationID) REFERENCES LOCATION (LocationID)
);

CREATE TABLE INVOICE (
    InvoiceNo INT PRIMARY KEY,
    InvoiceDate DATE NOT NULL,
    OwnerID INT,
    LocationID INT,
    FOREIGN KEY (OwnerID) REFERENCES CONDO_OWNER (OwnerID),
    FOREIGN KEY (LocationID) REFERENCES LOCATION (LocationID)
);

CREATE TABLE SERVICE_CATEGORY(
    ServiceCategoryID INT PRIMARY KEY,
    ServiceCategoryName VARCHAR (25) NOT NULL
);

CREATE TABLE SERVICE_INVOICE(
    InvoiceNo INT,
    ServiceCategoryID INT,
    PRIMARY KEY (InvoiceNo, ServiceCategoryID),
    FOREIGN KEY (InvoiceNo) REFERENCES INVOICE (InvoiceNo),
    FOREIGN KEY (ServiceCategoryID) REFERENCES SERVICE_CATEGORY (ServiceCategoryID)
);

CREATE TABLE CONTRACTOR (
    ContractorID INT PRIMARY KEY,
    ContractorName VARCHAR (20) NOT NULL,
    ContractorPhone CHAR(10) NOT NULL,
);

CREATE TABLE SERVICE (
    ServiceID INT PRIMARY KEY,
    ContractorID INT,
    ServiceCategoryID INT,
    HourlyFree DECIMAL (10,2),
    MaterialCost DECIMAL (10,2),
    LabourCost DECIMAL (10,2),
    ServiceFee DECIMAL (10,2),
    FOREIGN KEY (ContractorID) REFERENCES CONTRACTOR (ContractorID),
    FOREIGN KEY (ServiceCategoryID) REFERENCES SERVICE_CATEGORY (ServiceCategoryID)
);

CREATE TABLE SERVICE_SCHEDULE (
    UnitNo INT,
    ContractorID INT,
    ServiceDescription VARCHAR (100),
    ServiceStatus VARCHAR (50),
    EstimatedHours DECIMAL(5,2),
    HoursSpent DECIMAL(5,2),
    ServiceDATE DATE,
    FOREIGN KEY (UnitNo) REFERENCES UNIT(UnitNo)
    FOREIGN KEY (ContractorID) REFERENCES CONTRACTOR(ContractorID)
);
