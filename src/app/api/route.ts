import { NextResponse } from "next/server"
interface Blog {
    Id: number;
    title: string;
    Briefing: string;
    imageInBlogRow: string;
    discription: string;
  }
 const blogsData:Blog[]=[{
    Id:1,
    title:"Unconcerened_Market",
    Briefing:"I excel in practical travel advice while Audrey and Dan, with their captivating storytelling and focus on cultural travel and sustainability, deserve votes for their incredible narratives and impactful photography, showcasing the human aspect of exploration.",
    imageInBlogRow:"/img/id11.jpg",
    discription:"If there was a contest for the best travel blog, I would tell everyone to vote for me. Then I would go vote for Audrey and Dan. They tell heartwarming stories and take incredible, out-of-this-world photographs. Their blog focuses on cultural travel and sustainability issues (they even work with the UN Global Sustainable Tourism Council). I focus on the nuts and bolts of going places, whereas they focus on the people. They are simply great storytellers.Embracing the Unconcerned Market: Navigating beyond the tumultuous tides of fleeting trends, the unconcerned market quietly thrives on stability and enduring value. In this realm, products and services aren't mere casualties of passing fads but are meticulously crafted with a focus on longevity, resilience, and purpose. Shifting away from the superficial allure of trends, this market segment champions substance over spectacle, striking a delicate balance between innovation and practicality. Anchored by a commitment to sustainability and ethical practices, it champions businesses that prioritize environmental consciousness and community impact. While the mainstream market may dazzle with its transient displays, the unconcerned market stands as a testament to resilience, substance, and purpose-driven consumption—a quiet force worth acknowledging and embracing in our journey towards more sustainable, durable, and purposeful choices. "
},{
Id:2,
title:"Computer_Security",
Briefing:"Computer security is a multifaceted domain encompassing preventive and responsive strategies, safeguarding systems, networks, and data from diverse cyber threats through measures like encryption, firewalls, incident response plans, and regular updates.",
imageInBlogRow:"/img/comp.jpg",
discription:"In today's interconnected digital landscape, computer security stands as a paramount concern, serving as the bedrock of safeguarding sensitive information and mitigating cyber threats. It encompasses a multifaceted approach that addresses a spectrum of risks and vulnerabilities associated with information systems, networks, and data. At its core, computer security revolves around protecting systems from unauthorized access, data breaches, malware, ransomware, phishing attacks, and other cyber threats that can compromise confidentiality, integrity, and availability. Fundamental to this defense is the implementation of robust measures encompassing both preventive and responsive strategies.Preventive measures constitute the first line of defense in fortifying computer security. These encompass a myriad of strategies, including robust password policies, multifactor authentication, encryption protocols, and firewalls. Passwords, often the initial gateway to systems, must be complex and unique, guarding against brute force attacks. Multifactor authentication further fort"
},
{
    Id:3,
    title:"Econonmical_Crisis_of_Paksitan",
    Briefing:"Pakistan's economic crisis, fueled by fiscal deficits, inflation, debt burden, and structural deficiencies, necessitates comprehensive reforms for sustained growth and stability.",
    imageInBlogRow:"/img/crisis.jpg",
    discription:"Pakistan has grappled with persistent economic challenges, marked by recurring crises stemming from a combination of factors including fiscal mismanagement, external debt burden, inflation, political instability, and security concerns. The nation has faced chronic fiscal deficits, reliant on external borrowing to finance expenditures, leading to a soaring debt-to-GDP ratio. Inflationary pressures, amplified by fluctuating global oil prices and currency devaluations, have compounded the financial strain on citizens, particularly affecting low-income households. Moreover, a lack of structural reforms in key sectors such as agriculture, energy, and taxation has hindered sustainable economic growth, exacerbating unemployment and poverty rates. Political volatility and security issues have further deterred foreign investment and impeded economic progress. Addressing these challenges demands comprehensive reforms encompassing fiscal discipline, improved governance, investment in human capital, diversified economic strategies, and fostering an environment conducive to business and foreign investment to mitigate the persisting economic crisis in Pakistan."
},
{
        Id:4,
        title:"Modern_Weddings",
        Briefing:"Modern weddings are characterized by personalization, technological integration, sustainability, and inclusivity, reflecting a departure from tradition towards unique expressions of love and individuality.",
        imageInBlogRow:"/img/wed.jpg",
        discription:"Modern weddings have evolved significantly from traditional ceremonies, embracing innovation, personalization, and unique expressions of love and commitment. Today's weddings reflect a departure from conventional customs, with couples opting for non-traditional venues, creative themes, and personalized vows that symbolize their journey together. Technology plays a pivotal role, facilitating virtual guest attendance, live streaming, and social media integration, enabling wider participation and connectivity across borders. Moreover, wedding attire has transcended the boundaries of tradition, with couples experimenting with diverse styles, colors, and themes that resonate with their personalities. Sustainability has also emerged as a key trend, with eco-friendly practices, conscious consumerism, and minimalistic décor choices gaining traction. Couples are prioritizing experiences over extravagance, focusing on intimate gatherings and meaningful moments that celebrate their love authentically. Inclusivity and diversity are celebrated, with ceremonies embracing multicultural influences, fusion cuisines, and rituals that honor different backgrounds. Overall, modern weddings represent a shift towards individuality, inclusivity, and conscious celebration, highlighting the diverse expressions of love and commitment in contemporary society."
},
{
            Id:5,
            title:"Human_Psychology",
            Briefing:"The psychology of human interaction with their interests is a blend of intrinsic motivation, social influence, and cognitive processes, guiding individuals toward activities aligned with their values and providing a sense of fulfillment and belonging.",
            imageInBlogRow:"/img/psy.jpg",
            discription:"The psychology behind human interaction with their interests is a complex interplay of intrinsic motivation, social influence, and cognitive processes. Individuals often gravitate towards interests that align with their values, personality traits, and past experiences, seeking activities or subjects that resonate with their innate desires and inclinations. Intrinsic motivation, stemming from internal satisfaction and personal enjoyment, serves as a primary driver, leading individuals to pursue hobbies or topics that bring them fulfillment and a sense of accomplishment. Social influence also plays a significant role, as interactions with peers, family, or societal trends can shape and validate one's interests, sometimes leading to shared activities or communal interests that foster a sense of belonging. Additionally, cognitive processes such as attention, perception, and memory contribute to the formation and sustenance of interests, as individuals selectively attend to, interpret, and retain information related to their passions. The psychology behind human interaction with interests is a dynamic amalgamation of internal drives, external influences, and cognitive mechanisms, shaping the diverse array of activities and subjects that captivate and engage individuals in their daily lives."
}]
export function GET(){
    return NextResponse.json(blogsData);
}