import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    id: number;
    todo: Todo;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.todo = new Todo(1, '' , '',  new Date() , false);

      this.todoDataService.retrieveTodo('in28Minutes', this.id).subscribe(
          data => {
                    this.todo = data;
                    console.log(this.todo);
                  }
      );
}

  submit(f){
     console.log(f);
  }

}
