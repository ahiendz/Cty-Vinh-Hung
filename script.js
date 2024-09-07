document.addEventListener('DOMContentLoaded', function() {
    // Xử lý dropdown trên desktop
    const dropdowns = document.querySelectorAll('.dropdown, .sub-dropdown');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-content, .sub-dropdown-content').style.display = 'block';
      });
      
      dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-content, .sub-dropdown-content').style.display = 'none';
      });
    });
  
    // Xử lý dropdown trên mobile
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Đóng tất cả dropdown khi click bên ngoài
    document.addEventListener('click', function(e) {
      if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content, .sub-dropdown-content');
        dropdowns.forEach(dropdown => {
          dropdown.style.display = 'none';
        });
      }
    });
  
    // Đảm bảo rằng bạn đã liên kết file script.js trong HTML của bạn
    const dropdownsMobile = document.querySelectorAll('.dropdown');
    
    dropdownsMobile.forEach(dropdown => {
      dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          this.classList.toggle('active');
        }
      });
    });
});
