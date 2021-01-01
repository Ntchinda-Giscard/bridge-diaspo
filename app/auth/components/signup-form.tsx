"use client"
import { Button, Text, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '../login/css/login.module.css';
import Link from 'next/link'

function SignUpForm(){
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
            password: (value) => ((value.length <= 6) ? "Short password" : null),
            confirmPassword: (value) => ((value !== "") ? "Short password" : null),
        },
    });
    return(
        <>
            <form
                onSubmit={form.onSubmit((values) => console.log(values))}
                className={classes.form}
            >
                <TextInput
                    withAsterisk
                    w={"100%"}
                    variant="filled"
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                    styles={{
                        required:{
                            color: "#0B8F23"
                        }
                    }}
                />

                <PasswordInput
                    mt={20}
                    mb={15}
                    withAsterisk
                    variant="filled"
                    label="Mot de Passe"
                    placeholder="********"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                    styles={{
                        required:{
                            color: "#0B8F23"
                        }
                    }}
                />

                <PasswordInput
                    mt={20}
                    mb={15}
                    withAsterisk
                    variant="filled"
                    label="Confirmer le mot de Passe"
                    placeholder="********"
                    key={form.key('confirmPassword')}
                    {...form.getInputProps('confirmPassword')}
                    styles={{
                        required:{
                            color: "#0B8F23"
                        }
                    }}
                />

                <Group grow mt="md">
                    <Button bg="#0B8F23" type="submit">{"S'inscrire"}</Button>
                </Group>
                <Group justify='center' gap={2}>
                    <p style={{ color: "#00000099" }}> {"Vous avez deja un compte ?"} </p>
                    <Text component={Link} href={'/auth/login'} style={{ color: "#0B8F23", cursor: 'pointer' }}> {"Se connecter"} </Text>
                </Group>
            </form>
        </>
    )
}

export default SignUpForm;