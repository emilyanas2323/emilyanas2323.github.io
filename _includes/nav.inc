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
        </ul>
    </div>
</nav>

{% comment %}{% if page.url == '/projects/' %}bg-light{% endif %}{% endcomment %}
