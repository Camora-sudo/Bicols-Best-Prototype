const URL = '..';

function getRole() {
    return localStorage.getItem('role');
}

function logout() {
    localStorage.removeItem('role');
    window.location.href = `${URL}/public/login.html`; 
}

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;

    const role = getRole();
    let navLinks = '';
    let badge = '';

    // Build links and badges based on role
    if (role === 'reseller') {
        badge = `<span class="badge bg-warning text-dark ms-2 align-middle fs-6" style="vertical-align: text-bottom;">Reseller</span>`;
        navLinks = `
            <a href="${URL}/customer/productCatalogue.html" class="nav-link text-white mx-3">Products</a>
            <a href="${URL}/customer/userProfile.html" class="nav-link text-white mx-3">Profile</a>
            <a href="${URL}/customer/contactPage.html" class="nav-link text-white mx-3">Contact Us</a>
            <a href="#" id="logout-link" class="nav-link text-white mx-3 me-4">Logout</a>
            <a href="${URL}/customer/shoppingCart.html" class="text-white fs-3"><i class="ri-shopping-cart-2-line"></i></a>
        `;
    } else if (role === 'admin') {
        badge = `<span class="badge bg-info text-dark ms-2 align-middle fs-6" style="vertical-align: text-bottom;">Admin</span>`;
        navLinks = `
            <a href="${URL}/admin/orderManagement.html" class="nav-link text-white mx-3">Orders</a>
            <a href="${URL}/admin/productManagement.html" class="nav-link text-white mx-3">Products</a>
            <a href="${URL}/admin/staffManagement.html" class="nav-link text-white mx-3">Staff</a>
            <a href="${URL}/admin/userManagement.html" class="nav-link text-white mx-3">Users</a>
            <a href="#" id="logout-link" class="nav-link text-white mx-3">Logout</a>
        `;
    } else if (role === 'user') {
        navLinks = `
            <a href="${URL}/customer/productCatalogue.html" class="nav-link text-white mx-3">Products</a>
            <a href="${URL}/customer/userProfile.html" class="nav-link text-white mx-3">Profile</a>
            <a href="${URL}/customer/contactPage.html" class="nav-link text-white mx-3">Contact Us</a>
            <a href="#" id="logout-link" class="nav-link text-white mx-3 me-4">Logout</a>
            <a href="${URL}/customer/shoppingCart.html" class="text-white fs-3"><i class="ri-shopping-cart-2-line"></i></a>
        `;
    } else {

        navLinks = `
            <a href="${URL}/customer/productCatalogue.html" class="nav-link text-white mx-3">Products</a>
            <a href="${URL}/public/login.html" class="text-white fs-3"><i class="ri-login-box-line"></i></a>
        `;
    }

    // Combine into final HTML
    const navHTML = `
        <header class="py-3 sticky-top" style="background-color:#821b16;">
          <div class="container-fluid px-4">
            <div class="d-flex justify-content-between align-items-center" id="navbar-content">
                <div class="d-flex align-items-center">
                  <a href="${URL}/customer/productCatalogue.html" class="d-flex align-items-center text-white text-decoration-none">
                    <img src="${URL}/images/logo.png" width="130" class="d-inline-block align-text-top" alt="Bicol's Best" onerror="this.src='https://via.placeholder.com/130x50?text=Logo'">
                    <span class="fw-bold fs-5 d-none d-md-inline mx-3">Bicol's Best Served Online ${badge}</span>
                  </a>
                </div>
                <div class="d-flex align-items-center">
                  <nav class="d-none d-md-flex align-items-center me-4">
                    ${navLinks}
                  </nav>
                </div>
            </div>
          </div>
          <style>
            #navbar-content .nav-link { transition: color 0.2s ease, opacity 0.2s ease; }
            #navbar-content .nav-link:hover { opacity: 0.8; }
            #navbar-content .nav-link.active { font-weight: 700; }
          </style>
        </header>
    `;

    // Inject into the page
    placeholder.innerHTML = navHTML;

    // Attach Logout functionality
    const logoutBtn = document.getElementById('logout-link');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('#navbar-content .nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage && currentPage !== '') {
            link.classList.add('active');
        }
    });
});