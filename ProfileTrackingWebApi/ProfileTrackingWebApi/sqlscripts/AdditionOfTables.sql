CREATE TABLE Users (
    Id int Identity(1,1) Primary Key,
    Email varchar(255),
    Password varchar(255),
    jwt varchar(Max)
);
select * from Users

CREATE TABLE Profile_Status (
    Id int Identity(1,1) Primary Key,
    Status varchar(255)
);
insert into Profile_Status (Status) values ('New'),('Shotlisted'),('Interviewed'),('Position Offered') 
select * from Profile_Status

CREATE TABLE Job_Details (
    Id int Identity(1,1) Primary Key,
    Role varchar(255),
	SalaryMin int,
	SalaryMax int,
	Location varchar(255),
	Skills nvarchar(Max)
);
select * from Job_Details

CREATE TABLE Profiles (
    Id int Identity(1,1) Primary Key,
    Name varchar(255),
	ProfileImageUrl nvarchar(Max),
	CurrentRole nvarchar(Max),
	Skills nvarchar(Max),
	Status int
);
select * from Profiles

CREATE TABLE Comments (
    Id int Identity(1,1) Primary Key,
    Comment nvarchar(Max),
	CommentBy varchar(255),
	CommentDate datetime2,
	CommentOn int
);
select * from Comments