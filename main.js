// importing the id=form from index.html
let form=document.getElementById("form")
let input=document.getElementById("input")
let msg=document.getElementById("msg")
let mainPost=document.getElementById("Mainpost")

form.addEventListener('submit',(e)=>{
    // preventDefault saves the page from gettin refreshed.....
    e.preventDefault();
    console.log("button clicked")
    // formValidation function i have called here because every time i click button it should be called.if i take it outside the addeventlistner funtion it will work only once...
    formValidation();
})

// after the button is clicked what the button will do,that we will decide by creating the function...
let formValidation=()=>{
    if(input.value===""){
        // if input value in the textarea is empty then print failure
        console.log("failure")
        msg.innerHTML="Post Cannot be blank"
    }else{
        console.log("success")
        msg.innerHTML=" "
        acceptData()
    }

}

// Storing Data.......
let data={}

let acceptData=()=>{
    data["text"]=input.value
    console.log(data)
    createPost()
}

// Displaying Data.....
let createPost=()=>{
    mainPost.innerHTML+=
    `<div>
    <p>${data.text}</p>
    <!-- Span tag is used to group element to provide styling -->
    <span class="options">
      <i onClick="editPost(this)" class="fa-solid fa-user-pen"></i>
      <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
  </div>`
// This input will make the textarea blank once the data got submitted...
  input.value=''
};
// // called the deletePost function inside the delete icon because when the icon is pressed it should delete the content.This is passed as argument so that only that data gets deleted on which the delete button is clicked.......

// Deleting data..........
let deletePost=(e)=>{
  e.parentElement.parentElement.remove()
  // parentElement for delete icon is span tag and for span tag the parent element is div.we have used two parentElement because we want to delete the whole post....
}

// Update Post...
let editPost=(e)=>{
  input.value=e.parentElement.previousElementSibling.innerHTML
  e.parentElement.parentElement.remove()
}