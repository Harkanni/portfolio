const activeClass = 'cxmc9 cgygf cg0ht cnp10 ch63g chipd cen0e tab-head active';
const oldClass = 'cts6h cb9ru cxslc c2bb0 chipd cen0e tab-head';

document.querySelectorAll('.tab-head').forEach((tabHead) => {
  tabHead.addEventListener('click', function () {
    // Remove active class from all tabs and apply oldClass
    document.querySelectorAll('.tab-head').forEach((tab) => {
      tab.className = oldClass;
    });

    // Add active class to the clicked tab
    this.className = activeClass;

    // Hide all tab contents
    const tabBody = document.querySelector('#tab-body').children;
    Array.from(tabBody).forEach((content) => {
      content.style.display = 'none';
    });

    // Show the content corresponding to the clicked tab
    const filterItem = this.getAttribute('id');
    Array.from(tabBody).forEach((content) => {
      if (content.getAttribute('id').includes(filterItem)) {
        content.style.display = 'block';
      }
    });
  });
});

fetch('http://localhost:5000/api/post')
  .then((response) => response.json())
  .then((data) => {
    const post = data.data; // Assuming the response is directly the post object

    console.log('This is data: ', post);

    post.forEach((key) => {
      const tabBody = document.getElementById('tab-body');
      console.log('This is tab-body: ', tabBody);
      console.log('This is key: ', key);

      let article = `<article class="cg3vi crdpf c8z7y c3bdg" id="all coding">
      <div class="c9noy cfwvb">
         <div class="container">
         <div class="image-container">
         <img class="c906c cr6xl c8c2x c9xwx ccj8i co6sp c5zj3"
               src="images/me.jpg" width="88" height="88" alt="Post 01">
         </div>
         <div>
            <div class="c2bb0 cd99g ck5r6 c0kco" id="post-date">
               <span class="chugl" style="margin-right: 0.5rem">—</span> 
               ${new Date(key.createdAt).toLocaleDateString()}
            </div>
            <h3 class="cpynq c670g c5rvt c0kco">
               <a class="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cofma cz5kb c5c77 cn2yf"
                  href="post.html" id="post-title">${key.title}</a>
            </h3>
            <div class="cfwvb">
               <div class="cxslc c2bb0 cme8e c4a0m" id="post-description">
                  ${key.description}.
                  </div>
                  <a class="cfup8 c5a0p chugl csb3e c86uy cw2lf cpnf3 cgej2" href="post.html"
                  tabindex="-1">
                  <svg class="cqlhq cjnrq cofma chtu4" xmlns="http://www.w3.org/2000/svg"
                  width="14" height="12">
                  <path
                        d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z">
                        </path>
                        </svg>
                        </a>
                        </div>
                        </div>
                        </div>
                        </div>
                        </article>`;

      tabBody.innerHTML += article;

      // document.getElementById('post-title').innerText = key.title;
      // document.getElementById('post-description').innerText = key.description;
      // document.getElementById('post-date').innerText = new Date(
      //   key.createdAt
      // ).toLocaleDateString();
    });
  })
  .catch((error) => console.error('Error fetching post:', error));
