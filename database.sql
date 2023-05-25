/*
create table Alkohol (
Alko_Id smallint unique not null primary key,
Alko_Type varchar(50) unique not null,
Alko_CO2e decimal (10,5) not null
);

create table Madvarer(
Mad_Id smallint unique not null primary key,
Mad_Type varchar(50) unique not null,
Mad_CO2e decimal (10,5) not null
);

create table Streaming (
Stream_Id smallint unique not null primary key,
Stream_Type varchar(50) unique not null,
Stream_CO2e decimal (10,5) not null
);

create table Transport (
Trans_Id smallint unique not null primary key,
Trans_Type varchar(50) unique not null,
Trans_CO2e decimal (10,5) not null
);
*/
/*
insert into Alkohol ("alko_id","alko_type","alko_co2e")
values (1,'Øl Pilsner',0.6),
(2,'Sodavand',0.55),
(3,'Rødvin',1.87),
(4,'Vodka',2.04),
(5,'Hvidvin',1.87),
(6,'Cognac',8.22),
(7,'Energidrik',0.53);
*/
/*
insert into Madvarer("mad_id","mad_type","mad_co2e")
values (1,'Kylling',2.22),
(2,'Hakket Oksekød',32.19),
(3,'Æbleskiver',1.32),
(4,'Grillpølser',1.81);
*/
/*
insert into Streaming ("stream_id","stream_type","stream_co2e")
values (1,'Instagram',0.063),
(2,'Tiktok',0.158),
(3,'Youtube',0.028);
*/
/*
insert into Transport ("trans_id","trans_type","trans_co2e")
values (1,'Bus',0.027),
(2,'Tog',0.037),
(3,'Benzin Bil',0.160),
(4,'Færge',0.170),
(5,'Fly',0.223);



CREATE table Gennemsnit(
	Gem_Id smallint not null unique primary key,
	Gem_Øl smallint,
	Gem_Vin smallint,
	Gem_Drinks smallint
);

insert into Gennemsnit ("gem_id","gem_Øl","gem_vin","gem_drinks")
values (1,4,6,1),
(2,5,1,1),
(3,0,0,12),
(4,15,0,1),
(5,4,0,10),
(6,0,0,3),
(7,4,0,2),
(8,10,0,5),
(9,5,0,0);

*/ 
