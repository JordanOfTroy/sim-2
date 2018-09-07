drop table if exists sim_2_houses;

create table sim_2_houses (
ID serial primary key,
propertyname varchar(50),
address text,
city text,
state char(2),
zipcode integer,
imageURL text
);
