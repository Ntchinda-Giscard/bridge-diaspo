"use client"
import { Button, Text, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '../login/css/login.module.css';
import Link from "next/link"
import { useLazyQuery, useQuery } from '@apollo/client';
import { LOGIN_QUERY } from '../login/query';

function LoginForm(){
    
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => ((value.length <= 6) ? "Short password" : null),
        },
      });

      const [login, {data, loading, error}] = useLazyQuery(LOGIN_QUERY);
    return(
        <>
            <form 
                onSubmit={form.onSubmit((values) => {
                    login({
                        variables: {
                            _eq: values.email,
                            _eq1: values.password
                        },
                        onCompleted: (data) => {
                            if (data.users.length > 0) {
                                console.log("Login successful", data);
                                alert("Login successful! Welcome back.");
                                form.reset();
                            } else {
                                console.error("Invalid credentials");
                                alert("Invalid credentials. Please try again.");
                            }
                        }
                    })
                })}
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

                <Group grow mt="md">
                    <Button bg="#0B8F23" type="submit">Se Connecter</Button>
                </Group>
                <Group justify='center' gap={2}>
                        <p style={{ color: "#00000099" }}> {"Vous n'avez pas de compte ?"} </p>
                        <Text component={Link} href={'/auth/signup'} style={{ color: "#0B8F23", cursor: 'pointer' }}> {"S'inscrire"} </Text>
                </Group>
            </form>
        </>
    )
}

export default LoginForm;