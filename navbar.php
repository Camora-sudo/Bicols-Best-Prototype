<?php $URL = '/Bicols-Best-Prototype';  ?>

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Remix Icon -->
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
<!-- Bootstrap js -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>

<header class="py-3" style="background-color:#821b16;">
  <div class="container-fluid px-4">
    <div class="d-flex justify-content-between align-items-center">

    <?php
      // PANG TEST
      // setcookie('role', 'user', time() + 86400, '/'); 

      // unset($_COOKIE['role']);
    ?>


      <?php if(isset($_COOKIE['role']) && $_COOKIE['role'] == 'user'): ?>
      <!-- Logo -->
      <div class="d-flex align-items-center">
        <a href="<?php echo $URL ?>/customer/productCatalogue.html" class="d-flex align-items-center text-white text-decoration-none">
          <img src="<?php echo $URL ?>/images/logo.png" width="130" class="d-inline-block align-text-top" alt="Bicol's Best">
          <span class="fw-bold fs-5 d-none d-md-inline mx-3">Bicol's Best Served Online</span>
        </a>
      </div>

      <!-- Right Section -->
      <div class="d-flex align-items-center">

      <!-- USER NAV -->
        <nav class="d-none d-md-flex align-items-center me-4">
          <a href="<?php echo $URL ?>/customer/productCatalogue.html" class="nav-link text-white mx-3">Products</a>
          <a href="<?php echo $URL ?>/customer/userProfile.php" class="nav-link text-white mx-3">Profile</a>
          <a href="<?php echo $URL ?>/customer/contactPage.html" class="nav-link text-white mx-3">Contact Us</a>
          <a href="<?php echo $URL ?>/customer/shoppingCart.html" class="text-white fs-3">
            <i class="ri-shopping-cart-2-line"></i>
          </a>
        </nav>
      </div>

      <?php elseif($_COOKIE['role'] == 'admin'): ?>
      <!-- Logo -->
      <div class="d-flex align-items-center">
        <a href="<?php echo $URL ?>/admin/dashboard.html" class="d-flex align-items-center text-white text-decoration-none">
          <img src="<?php echo $URL ?>/images/logo.png" width="130" class="d-inline-block align-text-top" alt="Bicol's Best">
          <span class="fw-bold fs-5 d-none d-md-inline mx-3">Bicol's Best Served Online</span>
        </a>
      </div>

      <!-- Right Section -->
      <div class="d-flex align-items-center">
      <!-- ADMIN NAV -->
        <nav class="d-none d-md-flex me-4">
          <a href="<?php echo $URL ?>/admin/orderManagement.html" class="nav-link text-white mx-3">Orders</a>
          <a href="<?php echo $URL ?>/admin/productManagement.php" class="nav-link text-white mx-3">Products</a>
          <a href="<?php echo $URL ?>/admin/staffManagement.html" class="nav-link text-white mx-3">Staff</a>
          <a href="<?php echo $URL ?>/admin/userManagement.html" class="nav-link text-white mx-3">Users</a>
          <a href="<?php echo $URL ?>/logout.php" class="nav-link text-white mx-3">Logout</a>
        </nav>
      </div>

      <?php endif ?>
    </div>
  </div>
</header>