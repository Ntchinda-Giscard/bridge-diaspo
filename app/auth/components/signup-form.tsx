"use client"
import { Button, Text, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '../login/css/login.module.css';
import Link from 'next/link'
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../signup/mutation';

function SignUpForm(){
    const [signin, { data, loading, error }] = useMutation(SIGNUP_MUTATION);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            country: '',
            name: '',
            surname: '',
            telephone: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
            password: (value) => ((value.length <= 6) ? "Short password" : null),
            confirmPassword: (value) => ((value.length <= 6)  ? "Short password" : null),
            country: (value) => ((value.length <= 2) ? "Invalid country" : null),
            telephone: (value) => ((value.length <= 6)  ? "Invalid telephone" : null),
            name: (value) => ((value.length <= 2) ? "Invalid name" : null),
            surname: (value) => ((value.length <= 2)  ? "Invalid surname" : null),


        },
    });
    return(
        <>
            <form
                onSubmit={form.onSubmit((values) => {console.log(values)
                    signin({
                        variables: {
                            nom: values.name,
                            prenom: values.surname,
                            telephone: values.telephone,
                            email: values.email,
                            mot_passe: values.password,
                            country: values.country
                        }
                    }).then(response => {
                        console.log("Sign up successful", response);
                        alert("Sign up successful! Welcome aboard.");
                        form.reset();
                    }).catch(error => {
                        console.error("Error signing up", error);
                        alert("An error occurred during sign up. Please try again.");
                    });
                }
                )}
                className={classes.form}
            >
                <div className='flex md:flex-row flex-col gap-5'>

                    <TextInput
                        withAsterisk
                        w={"100%"}
                        variant="filled"
                        label="Nom"
                        placeholder=""
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                    />
                    <TextInput
                        withAsterisk
                        w={"100%"}
                        variant="filled"
                        label="Prénom"
                        placeholder=""
                        key={form.key('surname')}
                        {...form.getInputProps('surname')}
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                    />
                </div>

                <div className='flex md:flex-row flex-col gap-5'>

                    <TextInput
                        withAsterisk
                        w={"100%"}
                        variant="filled"
                        label="Pays"
                        placeholder=""
                        key={form.key('country')}
                        {...form.getInputProps('country')}
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                    />
                    <TextInput
                        withAsterisk
                        w={"100%"}
                        variant="filled"
                        label="Téléphone"
                        placeholder=""
                        key={form.key('telephone')}
                        {...form.getInputProps('telephone')}
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                    />
                </div>

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
                    <Button bg="#0B8F23" loading={loading} type="submit">{"S'inscrire"}</Button>
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