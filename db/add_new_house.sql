insert into sim_2_houses (propertyname, 
                          address, 
                          city, 
                          state, 
                          zipcode, 
                          imageurl)
values (
${propertyName},
${address},
${city},
${stateIN},
${zipcode},
${imageURL}
);

select * from sim_2_houses