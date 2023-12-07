class Todo {
    constructor(result){
      this.result = [];
    }
    
    add(todo){
      this.result.push(todo)
    }
  
    remove(indexOfTodo){
      this.result.splice(indexOfTodo,1)
    }
  
    update(index,updatedTodo){
      if(index<this.result.length){
        this.result.splice(index,1,updatedTodo)
        return this.result
      }
  
      else{
        return this.result
      }
      
    }
  
    getAll(){
      return this.result
      
    }
  
    get(indexOfTodo){
      if(indexOfTodo<this.result.length){
        return this.result[indexOfTodo]
      }
      else{
        return null
      }
      
    }
  
    clear(){
      this.result=[];
    }
  }

const final = new Todo();
final.add("Sanjay");
final.add("")
console.log(final.getAll());
console.log(final.update(3,"surya"));