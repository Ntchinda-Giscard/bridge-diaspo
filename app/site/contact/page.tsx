"use client"
import { Button, Group, Stack, TextInput, Textarea, rem } from "@mantine/core";
import TopBanner from "../components/topBanner";
import { IconPhone, IconMail, IconMapPin} from '@tabler/icons-react';
import MyGoogleMap from "./components/maps";
import { useForm } from '@mantine/form';
import classes from './contact.module.css'




function Contact() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: '',
          message: '',
          telephone: '',
          name: '',
          surname: ''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          message: (value) => ((value.length <= 6) ? "" : null),
          name: (value) => ((value.length <= 6) ? "" : null),
          telephone: (value) => ((value.length <= 6) ? "" : null),
          surname: (value) => ((value.length <= 6) ? "" : null),
        },
      });
    return ( <>
        <TopBanner 
            title="Nous Contacter"
            links="Home  / Contact"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{background: "#F8F5F5", padding: "10%"}}>
            <form 
                onSubmit={form.onSubmit((values) => console.log(values))}
                // className={classes.form}
                className="md:col-span-3 col-span-1" style={{background: "#FFF", padding: 24}}
            >
            
                    <h1 className="text-xl font-bold"> Formulaire de contact </h1>
                    <div style={{width: 50, height: 5, background: "#0B8F23", marginBlock: 5, borderRadius: 8}}></div>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <TextInput 
                            w="100%"
                            placeholder="Nom"
                            label="Nom"
                            withAsterisk
                            key={form.key('name')}
                            {...form.getInputProps('name')}
                            styles={{
                                required:{
                                    color: "#0B8F23"
                                }
                            }}
                            variant="filled"
                        />
                        <TextInput
                            w="100%" 
                            placeholder="Prenom"
                            label="Prenom"
                            withAsterisk
                            key={form.key('surname')}
                            {...form.getInputProps('surname')}
                            styles={{
                                required:{
                                    color: "#0B8F23"
                                }
                            }}
                            variant="filled"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <TextInput 
                            w="100%"
                            placeholder="Email"
                            label="Email"
                            withAsterisk
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                            styles={{
                                required:{
                                    color: "#0B8F23"
                                }
                            }}
                            variant="filled"
                        />
                        <TextInput
                            w="100%" 
                            placeholder="Téléphone"
                            label="Téléphone"
                            withAsterisk
                            key={form.key('telephone')}
                            {...form.getInputProps('telephone')}
                            styles={{
                                required:{
                                    color: "#0B8F23"
                                }
                            }}
                            variant="filled"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <Textarea
                            size="lg"
                            w="100%"
                            placeholder="Message"
                            variant={"filled"}
                            // w={"100%"}
                            label="Message"
                            key={form.key('message')}
                            {...form.getInputProps('message')}
                            withAsterisk
                            styles={{
                                required:{
                                    color: "#0B8F23"
                                }
                            }}
                            mt={20}
                            
                        />
                    </div>

                    <Group justify="right">
                        <Button color="#0B8F23" type="submit" mt={10} > Envoyer </Button>
                    </Group>
                {/* </div> */}
            </form>
            

            <div className="md:col-span-2 col-span-1" style={{background: "#FFF", height: 'fit-content', padding: 24}}>
                <h1 className="text-xl font-bold"> Nos coordonnées </h1>
                <div style={{width: 50, height: 5, background: "#0B8F23", marginBlock: 5, borderRadius: 8}}></div>
                <Stack gap={10} mt={10}>
                    <Group> 
                        <IconPhone style={{width: rem(16), height: rem(16)}}  stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: 'small', }}>+237686824548</p>
                    </Group>

                    <Group> 
                        <IconMail style={{width: rem(16), height: rem(16)}} stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: 'small', }}>Thebridgesrlc@gmail.com</p>
                    </Group>

                    <Group> 
                        <IconMapPin style={{width: rem(16), height: rem(16)}} stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: "small", }}>Douala, Cameroun</p>
                    </Group>
                </Stack>
                

            </div>
        </div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8498476948694!2d9.6962285!3d4.0510336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061130022963bd9%3A0xb0e0033f21291824!2sTHE%20bridge%20sarl!5e0!3m2!1sfr!2scm!4v1751537791623!5m2!1sfr!2scm" 
        // width="600" 
        // height="450" 
        style={{ border: 20, borderRadius: 8, width: "100%", height: "400px", marginTop: 20 }} 
        allowFullScreen 
        loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"></iframe>

    </> );
}

export default Contact;