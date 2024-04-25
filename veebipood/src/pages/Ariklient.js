import React from 'react'
import Tingimused from '../components/Tingimused'
import Aeg from '../components/Aeg'
import EiKuulu from '../components/EiKuulu'
import Oigused from '../components/Oigused'
import Defekt from '../components/Defekt'
import Teostamine from '../components/Teostamine'

function Ariklient() {
  return (
    <div>

Garantii tingimused
<br />
GARANTII TINGIMUSED:
<br />
Salvesta .pdf kujul siit

<Tingimused/>
<Aeg/>
<Teostamine/>
<EiKuulu/>
<Oigused/>
<Defekt/>

    </div>
  )
}

export default Ariklient