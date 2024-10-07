import { Group, Stack, TextInput, Textarea } from "@mantine/core";
import TopBanner from "../components/topBanner";
import { IconPhone, IconMail, IconMapPin} from '@tabler/icons-react';
import MyGoogleMap from "./components/maps";


function Contact() {
    return ( <>
        <TopBanner 
            title="Nous Contacter"
            links="Home  / Contact"
        />
        <div className="grid grid-cols-5 gap-4" style={{background: "#F8F5F5", padding: 50}}>
            <div className="col-span-3" style={{background: "#FFF", padding: 24}}>
                <h1 className="text-xl font-bold"> Formulaire de contact </h1>
                <div style={{width: 50, height: 5, background: "#0B8F23", marginBlock: 5, borderRadius: 8}}></div>
                <Group mb={20} grow>
                    <TextInput 
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
                </Group>
                <Group grow>
                    <TextInput 
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
                </Group>
                <Group grow>
                    <Textarea
                        size="lg"
                        placeholder="Message"
                        variant={"filled"}
                        w={"100%"}
                        label="Message"
                        withAsterisk
                        styles={{
                            required:{
                                color: "#0B8F23"
                            }
                        }}
                        mt={20}
                         
                    />
                </Group>
                
            </div>
            <div className="col-span-2" style={{background: "#FFF", height: 'fit-content', padding: 24}}>
                <h1 className="text-xl font-bold"> Nos coordonnées </h1>
                <div style={{width: 50, height: 5, background: "#0B8F23", marginBlock: 5, borderRadius: 8}}></div>
                <Stack gap={10} mt={10}>
                    <Group> 
                        <IconPhone stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: 16, }}>78 317 40 21</p>
                    </Group>

                    <Group> 
                        <IconMail stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: 16, }}>contact@bridgesa.com</p>
                    </Group>

                    <Group> 
                        <IconMapPin stroke={1}  />
                        <p style={{fontWeight: 500,fontSize: 16, }}>Douala, Cameroun</p>
                    </Group>
                </Stack>
                

            </div>
        </div>
        <MyGoogleMap />
    </> );
}

export default Contact;