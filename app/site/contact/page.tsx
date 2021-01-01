import { Group, Stack, TextInput, Textarea, rem } from "@mantine/core";
import TopBanner from "../components/topBanner";
import { IconPhone, IconMail, IconMapPin} from '@tabler/icons-react';
import MyGoogleMap from "./components/maps";


function Contact() {
    return ( <>
        <TopBanner 
            title="Nous Contacter"
            links="Home  / Contact"
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{background: "#F8F5F5", padding: "10%"}}>
            <div className="md:col-span-3 col-span-1" style={{background: "#FFF", padding: 24}}>
                <h1 className="text-xl font-bold"> Formulaire de contact </h1>
                <div style={{width: 50, height: 5, background: "#0B8F23", marginBlock: 5, borderRadius: 8}}></div>
                <div className="flex flex-col md:flex-row w-full gap-4">
                    <TextInput 
                        w="100%"
                        placeholder="Nom"
                        label="Nom"
                        withAsterisk
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
                        withAsterisk
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                        mt={20}
                         
                    />
                </div>
            </div>

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
                        <p style={{fontWeight: 500,fontSize: 'small', }}>Dinistamwa7@gmail.com</p>
                    </Group>

                    <Group> 
                        <IconMapPin style={{width: rem(16), height: rem(16)}} stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: "small", }}>Douala, Cameroun</p>
                    </Group>
                </Stack>
                

            </div>
        </div>
        <MyGoogleMap />
    </> );
}

export default Contact;