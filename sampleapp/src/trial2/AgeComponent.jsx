import { memo } from "react";

function AgeComponent(props) {

    console.log("Age renders...")
    return (
        <div>
            Age in AgeComponent: {props.age}
            <button type="button" onClick={() => props.updateAgeCb(props.age + 1)}>
                Change Age
            </button>
        </div>
    )
}

export default memo(AgeComponent);