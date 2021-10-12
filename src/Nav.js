import React from 'react'

export default function Nav(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Block-Chain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Get_Block number</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Get_Transaction Details</a>
        </li>

      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">{props.block}</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
