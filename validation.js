(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  const imgUrl = document.querySelector('.imgUrl')
  const textPost =document.querySelector('.textPost')
  const postUrl = 'https://mysterious-anchorage-86539.herokuapp.com/posts/addPost'
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {

    form.addEventListener('submit',function (event) {
      
        console.log(form.checkValidity())
        if (!form.checkValidity()) {
          event.stopPropagation();
          event.preventDefault();
        }else{
          event.preventDefault();
          let data ={
            "userId":"628a5742a5610200dcd86273",
            "content" : textPost.value,
            "image": imgUrl.value,
          }
          axios.post(postUrl,data)
            .then((res)=>{
              console.log(res)
              
              window.location='./wall.html'
            })
        }
      },
      false
    );
  });
})();
