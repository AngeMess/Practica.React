import React from 'react'

function Popovers(){
    return (
      <>
      <h1>Popovers</h1>
      <button type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">
  Custom popover
</button>
 </>

    );
}

export default Popovers;