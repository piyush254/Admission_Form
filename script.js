const colleges = [{}, {}, {}, {}, {}, {}];

colleges.forEach((college) => {
  let collegesdiv = document.querySelector(".colleges")
  collegesdiv.innerHTML  +=`<div class="college">
  <div class="collegePhoto">
  </div>
  <p>80% of students are from outside Tamil Nadu, with students from Europe</p>
</div>`
})


let checkbox = document.querySelectorAll(".checkbox-round");

checkbox[0].checked = true


checkbox.forEach(checkedbox => {
    checkedbox.checked = true;
})