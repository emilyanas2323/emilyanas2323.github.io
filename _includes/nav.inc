<nav id="site-nav" class="navbar navbar-expand-md sticky-top navbar-light {% if page.url == "/" %}navbar-home{% endif %}">
    <a class="navbar-brand" href="/" id="nav-brand">Emily Anas</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/projects/">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/experience/">Experience</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact/">Contact</a>
            </li>
            <li class="nav-item" id="attribution-link">
                <a class="nav-link" data-toggle="modal" data-target="#attributionModal">Attribution</a>
            </li>
        </ul>
    </div>
</nav>

<!-- Attribution Modal -->
<div class="modal fade" id="attributionModal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" id="modal-container" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title text-centre" id="exampleModalCenterTitle">Attribution</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="modal-body-title">Photos</p>
        <p>Taken by <a href="https://unsplash.com/@esteejanssens" target="_blank">Estée Janssens</a>, <a href="https://unsplash.com/@donovan_valdivia" target="_blank">Donovan Valdivia</a>, and <a href="https://unsplash.com/@natanja" target="_blank">Natanja Grün</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a>.</p>
        <p class="modal-body-title">Icons</p>
        <p>Made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank">Pixel perfect</a> from <a href="http://www.flaticon.com/" target="_blank">www.flaticon.com</a>.</p>
        <p class="modal-body-title">Website</p>
        <p>Designed and developed by Emily Anas.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

