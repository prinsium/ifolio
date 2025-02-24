import { contactData } from "@/app/data/contactData";
import Link from "next/link";

export default function Contact(){
    return(
        <div>
            <h1>lets build something amazing together</h1>
            <p>****************</p>
            <p>my socials</p>
            <p>****************</p>

            {contactData.map((contact, index) => (
                            <Link key={contact.id} href={contact.url}>
                        <h5>{contact.name}</h5>
                            </Link>
                                ))}

        </div>
    )
}