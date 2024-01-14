mqsql> CREATE TABLE USER_INFO (
    USER_ID int,
    LAST_NAME varchar(255),
    FIRST_NAME varchar(255),
     MIDDLE_NAME varchar(255),
     FULL_NAME varchar(255),	
     ADDRESS varchar(255),
     STATE varchar(255),
      PINCODE varchar(255),
      MOBILE_NUMBER varchar(255),
      EMAIL varchar(255),
      PASSWORD varchar(255),
      CREATE_DATE varchar(255)	
);

INSERT INTO USER_INFO VALUES(1,'M','sudhan','reddy','sudhan reddy m','hyderabad','Telangana','50072','9754321314','sudhan@gmail.com','testnodejs','2024-01-06 16:01:44')
INSERT INTO USER_INFO VALUES(2,'F','shreyanshi','reddy','shreyanshi reddy m','hyderabad','Telangana','50072','9754321315','sudhan@gmail.com','testnodejs','2024-01-06 16:01:44')
INSERT INTO USER_INFO VALUES(3,'M','ashvik','reddy','ashvik reddy m','hyderabad','Telangana','50072','9754321316','sudhan@gmail.com','testnodejs','2024-01-06 16:01:44')


mqsql> CREATE TABLE PRODUCT_INFO (
    PRODUCT_ID varchar(255),
    PRODUCT_CATEGORY varchar(255),
    PRODUCT_NAME varchar(255),
    PRODUCT_DESC varchar(255),
    PRODUCT_PRICE varchar(255),	
    PRODUCT_DISCOUNT varchar(255),
    PRODUCT_IMAGE varchar(255)
);

INSERT INTO PRODUCT_INFO VALUES(1001,'101','water bottle','100% pure water','200','0','');
INSERT INTO PRODUCT_INFO VALUES(1002,'102','laptop','100% pure water','200','0','');
INSERT INTO PRODUCT_INFO VALUES(1003,'103','mobile','100% pure water','200','0','');
INSERT INTO PRODUCT_INFO VALUES(1004,'104','tv','100% pure water','200','0','');
