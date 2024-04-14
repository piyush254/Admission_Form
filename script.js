const colleges = [
  {
    picture: "https://images.pexels.com/photos/4778669/pexels-photo-4778669.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "India No.1 university with Incredible Placement Record of 1.1cr in Amazon",
  },
  {
    picture: "https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Diversity of Students – 70% of students are from outside Tamil Nadu, with students from USA, Europe, China and other countries",
  },
  {
    picture: "https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Rated for Excellence in Learning, Discovery and Innovation",
  },
  {
    picture: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Placement in the Fortune 500 Companies",
  },
  {
    picture: "https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "State- of- the- Art Infrastructure and fully Equipped Hostel Facilities",
  },
  {
    picture: "https://images.pexels.com/photos/5530476/pexels-photo-5530476.jpeg?auto=compress&cs=tinysrgb&w=600",
    content:
      "Minor Certifications in Addition to Majors",
  },
];

colleges.forEach((college) => {
  let collegesdiv = document.querySelector(".colleges");
  collegesdiv.innerHTML += `<div class="college">
  <div class="collegePhoto" style="background-image: url(${college.picture});">
  </div>
  <p>${college.content}</p>
</div>`;
});


let checkbox = document.querySelectorAll(".checkbox-round");

checkbox[0].checked = true;

checkbox.forEach((checkedbox) => {
  checkedbox.checked = true;
});
