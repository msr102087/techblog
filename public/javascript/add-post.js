
document.querySelector('.new-post').addEventListener('submit', newFormHandler);

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-url"]').value;
    const token = localStorage.getItem('token')


  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${token}`
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {

      alert(response.statusText);
    }
  };
