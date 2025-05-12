import {Button} from "./Button.tsx";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/Buttons',
    component: Button,
};

export const BaseButton = () => {

    const onClickHandler = action('Button clicked'); // Покажет в панели "Actions" в Storybook

    return <Button title={'MyButton'} onClick={onClickHandler}/>
}

export const DisabledButton = () => {

    const onClickHandler = action('Button clicked'); // Покажет в панели "Actions" в Storybook

    return <Button
        title={'MyButton'}
        onClick={onClickHandler}
        disabled={true}
    />
}