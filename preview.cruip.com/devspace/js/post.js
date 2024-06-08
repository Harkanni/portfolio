// app.js

const form = document.getElementById('content-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const content = document.querySelector('.upload-area').value;
  const author = document.querySelector('.upload-author').value;

  const formData = {
    content: content,
    author: author
  };

  console.log(formData);


  try {
   const response = await fetch('http://localhost:5000/api/post/submit', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
   });

   if (response.ok) {
       console.log('Form submitted successfully');
       alert('Form submitted successfully');
       form.reset();
   } else {
       console.error('Failed to submit form:', response.statusText);
       alert('Failed to submit form');
   }
} catch (error) {
   console.error('Failed to submit form:', error);
   alert('Failed to submit form');
}
});

function Preview(value) {
   // Get the preview container and update its content with the input value
   const previewContainer = document.getElementById('preview');
   previewContainer.innerHTML = value;
   hljs.highlightAll();
}

