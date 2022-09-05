import { useState } from "react";
import { Switch } from "@headlessui/react";


const MySwitch = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch checked={enabled} onChange={setEnabled} className={`${enabled ? 'switch-on ' : 'switch-off '}switch`} >
            <span aria-hidden="true" className={`${enabled ? 'switch-btn-on ' : 'switch-btn-off '}switch-btn`} />
        </Switch>
    )
}


export default MySwitch;