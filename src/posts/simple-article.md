---
title: "123"
date: "2024/11/18"
author: "The FontEnd Team of TIC"
---
## 简要说明

- 响应式布局主要用于适应不同设备的屏幕，进一步完善用户体验

- 以下代码使用 bootstrap 实现 H5 原生页面的响应式布局

- 后续学习 nodejs，推荐使用 tailwind 实现原子化 css 以及响应式布局

# 123

```html
<!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html> -->
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">bootstrap</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <div class="nav-link">前端知识</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">后端知识</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">数据库知识</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="p-5 bg-dark text-light text-center text-lg-start">
    <div class="container">
      <div class="d-flex">
        <div>
          <h1>立志成为<span class="text-warning">全栈工程师</span></h1>
          <p class="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nobis placeat, vitae, eos ex, aliquam
            inventore sunt pariatur optio iure earum! Animi, recusandae magnam odio facere autem sint repellat hic.
            Praesentium provident dolor sunt quo maxime, repellat repellendus quos temporibus maiores illo voluptatibus,
          </p>
          <button class="btn btn-primary btn-lg">学！！！</button>
        </div>
        <img src="https://github.com/madaoQ/picgo-picture/blob/main/images/20241120184149.png?raw=true" alt="优秀程序员" class="w-50 d-none d-lg-block">
      </div>
    </div>
  </section>


  <section class="p-5 bg-primary text-light">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center">
        <h3 class="mb-3">开始学习</h3>
        <div class="input-group news-input">
          <input type="text" class="form-control" placeholder="输入邮箱">
          <button class="btn btn-dark btn-lg">注册</button>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md">
          <div class="card bg-dark text-light">
            <div class="card-body text-center">
              <div class="card-title ">前端知识</div>
              <div class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat fugiat
                vitae impedit quo cum </div>
              <a href="#" class="btn btn-primary mt-2">学习前端</a>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-secondary text-light">
            <div class="card-body  text-center">
              <div class="card-title">前端知识</div>
              <div class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat fugiat
                vitae impedit quo cum </div>
              <a href="#" class="btn btn-dark mt-2">学习前端</a>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-dark text-light">
            <div class="card-body  text-center">
              <div class="card-title">前端知识</div>
              <div class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat fugiat
                vitae impedit quo cum </div>
              <a href="#" class="btn btn-primary mt-2">学习前端</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md">
          <img src="https://github.com/madaoQ/picgo-picture/blob/main/images/20241120184205.png?raw=true" alt="图片1" class="img-fluid">
        </div>
        <div class="col-md p-5">
          <h2>课程介绍</h2>
          <p class="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis accusantium et illo labore
            libero!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, doloremque. Similique consectetur dolor
            voluptatibus cumque temporibus minima ab vero dicta quidem? Perspiciatis dolorum accusamus in!
          </p>
          <a href="" class="btn btn-dark">查看更多</a>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5 bg-dark text-light">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md p-5">
          <h2>课程介绍</h2>
          <p class="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis accusantium et illo labore
            libero!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, doloremque. Similique consectetur dolor
            voluptatibus cumque temporibus minima ab vero dicta quidem? Perspiciatis dolorum accusamus in!
          </p>
          <a href="" class="btn btn-light">查看更多</a>
        </div>
        <div class="col-md">
          <img src="https://github.com/madaoQ/picgo-picture/blob/main/images/20241120184205.png?raw=true" alt="图片1" class="img-fluid">
        </div>
      </div>
    </div>
  </section>

  <section class="p-5">
    <div class="container">
      <h2 class="text-center">常见问题</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
              filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
              happening here in terms of content, but just filling up the space to make it look, at least at first
              glance, a bit more representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="p-5 bg-primary">
    <div class="container">
      <h2 class="text-center text-light">讲师介绍</h2>
      <p class="lead text-center text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        deleniti.
      </p>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="../code2.png" alt="pic1" class="mb-3 img-fluid rounded-circle profile-image">
              <h3 class="card-title">张三</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quis?
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="../code3.png" alt="pic1" class="mb-3 img-fluid rounded-circle profile-image">
              <h3 class="card-title">张三</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quis?
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="../code2.png" alt="pic1" class="mb-3 img-fluid rounded-circle profile-image">
              <h3 class="card-title">张三</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quis?
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card bg-light">
            <div class="card-body text-center">
              <img src="../code3.png" alt="pic1" class="mb-3 img-fluid rounded-circle profile-image">
              <h3 class="card-title">张三</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quis?
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="p-5">
    <div class="container">
      <h2 class="text-center mb-4">联系我们</h2>
      <ul class="list-group list-group-flush text-center">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </section>

  <footer class="p-5 bg-dark text-white text-center">
    <div class="container">
      <p class="lead">Copyright &copy; Q</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>

```