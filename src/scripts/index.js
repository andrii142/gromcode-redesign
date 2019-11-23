document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.modal');
    const options = {
        preventScrolling: true,
    };
    M.Modal.init(elems, options);
    M.AutoInit();
  });