# RESTful Routing
* REST - A mapping between HTTP and CRUD
* It is a patericular pattern and a converntion for routes
* There are 7 RESTful Routes

## Diffrent REST Routes
| Name    | PATH      | http Verb | Purpose                                          |   |
|---------|-----------|----------:|--------------------------------------------------|---|
| Index   | /dogs     | GET       | List all dogs                                    |   |
| New     | /dogs/new | GET       | Show new Dog form                                |   |
| Create  | /dogs     | POST      | Create a new dog and then redirect somewhere     |   |
| Show    | /dogs/:id | GET       | Show info of the specific dog                    |   |
| Edit    | /dogs/:id | GET       | Show edit form for a specific dog                |   |
| Update  | /dogs/:id | GET       | Show edit form for one dog                       |   |
| Destroy | /dogs/:id | DELETE    | Delete a particular dog, then redirect somewhere |   |

## CRUD
CREATE
READ        
UPDATE     
DESTROY     