import React from 'react'

function Pagination(){
    return (
      <>
      <h1>Pagination</h1>
      <nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-link" href="#">2</li>
    <li class="page-link" href="#">3</li>
  </ul>
</nav>
 </>

    );
}

export default Pagination;