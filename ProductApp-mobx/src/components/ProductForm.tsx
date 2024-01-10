import { View, Grid, Provider, defaultTheme } from '@adobe/react-spectrum'
import { Button, ButtonGroup, Form, TextField } from '@adobe/react-spectrum';
import { ToastContainer, ToastQueue } from '@react-spectrum/toast';
import React from 'react'
export default function ProductForm() {
    let [title, setTitle] = React.useState('');
    let [price, setPrice] = React.useState<number>(0);

    let [category, setCategory] = React.useState<string>('');

    let [description, setDescription] = React.useState<string>('');

    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // axios.post(...)
        ToastQueue.positive('Form Submitted!')
        console.log(title);
    };


    return (
        <Provider theme={defaultTheme}>
            <Grid
                areas={[
                    'header  header',
                    'sidebar content',
                    'footer  footer'
                ]}
                columns={['1fr', '3fr']}
                rows={['size-1000', 'auto', 'size-1000']}
                height="size-6000"
                gap="size-100">
                <View backgroundColor="celery-600" gridArea="header" >
                    <h1>Product Form</h1>
                </View>
                <View backgroundColor="blue-600" gridArea="sidebar" />
                <View backgroundColor="gray-75" gridArea="content">
                    <Form onSubmit={onSubmit} maxWidth="size-3000">
                        <TextField label="Title" value={title} onChange={setTitle} />
                        <TextField label="Price" value={String(price)} onChange={(evt) => setPrice(+evt)} />
                        <TextField label="Category" value={category} onChange={setCategory} />
                        <TextField label="Description" value={description} onChange={setDescription} />


                        <ButtonGroup>
                            <Button type="submit" variant="primary">Submit</Button>
                            <Button type="reset" variant="secondary">Reset</Button>
                        </ButtonGroup>
                    </Form>
                </View>
                <View backgroundColor="magenta-600" gridArea="footer" />
            </Grid>
            <ToastContainer />
        </Provider>
    )
}
