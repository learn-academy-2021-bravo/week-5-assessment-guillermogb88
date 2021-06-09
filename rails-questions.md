# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

structured quary language is a domain specific language which is the language in which some databases is written in.structured quary language 

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT * FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?

$ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails generate model Meal breakfast: string lunch:string diner:string


5. What is a migration? Why would you use one?
A migration is a tool used in rails for chaging the schema. you would use it to update your rails app.


6. What is the command to generate a migration file?
$ rails g migration add_column_to_table 
$ rails db:migrate 

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command? the naming conventions used for a rails model would Pascal casing and the naming convention for a rails table would be snake_case. 



8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
 the schema is what hold the current information in the database. You cant modify the schema directly you would need to use the rails console i believe. 
 could i get some clarification on this? 


9. What is the Rails console?
The rails console is where you go to creat new models,new rows, new colums, and update schema through migrations the command would be 
$ rails c



10. What is the Rails console command to see all the content in a particular table?

Model.all 