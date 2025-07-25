import immo from "@/public/assets/immo.jpg";
import agri from "@/public/assets/agri.jpg";
import pub from "@/public/assets/pub.jpg";
import trans from "@/public/assets/trans.jpg";
import legal from "@/public/assets/legal.jpg";
import tour from "@/public/assets/tour.jpg";
import indus from "@/public/assets/WhatsApp Image 2024-10-10 at 20.35.50.jpeg"

export const services = [
    {service: "Bridge création d’entreprise ", desc: "Avec The Bridge créer votre entreprise en Afrique, où que vous soyez !", image: indus, 
        points:[
            "Idée et étude de marché",
            "Business plan",
            "Choix du statut juridique",
            "Immatriculation",
            "Financement",
            "Mise en place des opérations",
            "Communication et marketing"
        ]
    },
    {service: "Bridge. Immobiliere", desc: "Le service immobilier de The Bridge gère l'achat, la vente, et la location de biens pour la diaspora camerounaise.", image: immo, 
        points: [
            "Vente de biens immobiliers",
            "Location de biens",
            "Gestion locative",
            "Estimation immobilière",
            "Conseils en investissement immobilier"
        ]
    },
    {service: "Bridge. agriculture", desc: "Le service agriculture de The Bridge aide la diaspora à investir dans des projets agricoles au Cameroun, offrant expertise et gestion.", image: agri,
        points:[
            "Production de cultures",
            "Protection des cultures",
            "Récolte",
            "Transformation des produits",
            "Distribution",
            "Recherche et développement agricoles",
            "Services de conseil et de formation",
        ]
    },
    {service: "Bridge. Douane et transit", desc: "Notre service douane et transit gère efficacement les formalités douanières, le dédouanement et le transport international pour un passage fluide.", image: trans,
        points:[
            "Contrôle des marchandises entrant et sortant du pays",
            "Collecte des droits de douane et des taxes",
            "Lutte contre la contrebande et la fraude fiscale",
            "Facilitation du transport des marchandises à travers les frontières en respectant les règles et les procédures douanières",
        ]
    },
    {service: "Bridge. Traveaux  public", desc: "Le service travaux publics de The Bridge supervise la réalisation de projets d'infrastructures au Cameroun, assurant qualité et conformité pour la diaspora.", image: pub,
        points:[
            "Travaux de voirie",
            "Travaux d'assainissement",
            "Travaux d'aménagement urbain",
            "Travaux de construction d'infrastructures",
            "Travaux de terrassement",
        ]
    },
    {service: "Bridge. Autorisation et légalisation des documents", desc: "The Bridge facilite la légalisation et l'obtention de documents officiels pour la diaspora camerounaise.", image: legal,
        points:[
            "Légalisation de signature",
            "Légalisation de documents administratifs",
            "Légalisation de documents notariés",
        ]
    },
    {service: "Bridge. Tourisme", desc: "The Bridge offre des voyages sur mesure, incluant visites guidées, hébergement, et expériences uniques pour des souvenirs inoubliables.", image: tour,
        points:[
            "Visites guidées",
            "Réservation d'hôtels",
            "Organisation de voyages",
            "Services de location de voitures",
        ] 
    },
]