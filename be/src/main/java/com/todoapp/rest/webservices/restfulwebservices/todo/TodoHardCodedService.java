package com.todoapp.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static Long idCounter = 0L;
	
	static {
		todos.add(new Todo(++idCounter, "admin", "Learn ReactJS", new Date(), false));
		todos.add(new Todo(++idCounter, "admin", "Learn Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "admin", "Learn Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "admin", "Crack interveiew", new Date(), false));
	}
	
	public List<Todo> findAll(){
		Comparator<Todo> sorted = (t1, t2) -> t1.getId().intValue() - t2.getId().intValue();
		return todos.stream().sorted(sorted).collect(Collectors.toList());
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo!=null)
			todos.remove(todo);
		return todo;
	}

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
}
