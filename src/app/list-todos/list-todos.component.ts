import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

// Each ts file is javascript module, you can have any number of files created, so we are creating our own class
// to represent the todo object, let's separate out the todo object into a class, moving to structured format than using the
// js object
export class Todo {
    // as soon you declare variables as constructor arguments, they become the member variables of class in ts
    constructor(
        public id: number,
        public name: String,
        public task: String,
        public date: Date,
        public status: boolean
    ) {
    }
}

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

    todos: Todo[];
    successDeleteMessage: String;


    // todos = [
    //             new Todo(1, 'Learn to dance', false, new Date()),
    //             new Todo(2, 'Become an expert at angular', false, new Date()),
    //             new Todo(3, 'Visit India', false, new Date())

    //             // unstructures way
    //             // { id: 1, description: 'Learn to dance' },
    //             // { id: 2, description: 'Become an expert at angular' },
    //             // { id: 3, description: 'Visit India' }
    //        ];

    constructor(private todoDataService: TodoDataService,
                private router: Router) { }

    ngOnInit() {
        this.refreshTodos();
    }

    refreshTodos() {
         this.todoDataService.retrieveAllToDos('in28Minutes').subscribe(
            response => {
                          console.log(response);
                          this.handleSuccessfulResponse(response);
                        },
            errorRes => this.handleErrorResponse(errorRes));
    }

    handleErrorResponse(errorRes: any): any {
        this.todos = errorRes;
    }
    handleSuccessfulResponse(response: Todo[]): any {
        this.todos = response;
    }

    deleteTodo(username, id) {
         console.log(`delete todo() function called ${username} ${id}`);
         this.todoDataService.deleteTodo(username, id).subscribe(
             response => {
                            console.log(response);
                            this.successDeleteMessage = `Todo of ${id} has been successfully deleted`;
                            this.refreshTodos();
                         }
         );
    }

    updateTodo(username, id) {
         console.log(`update todo() function called ${username} ${id}`);
         this.router.navigate(['todos', id]);
    }

}
