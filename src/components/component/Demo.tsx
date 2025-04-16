import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Link } from "react-router-dom"
import image from "@/assets/image.png"
export default function Demo() {
    
  return (
    
    <div className="flex flex-col w-full min-h-[99vh] bg-background text-foreground">
      <header className="sticky top-0 z-30 flex h-30 items-center border-b bg-card px-4 sm:px-6"
       
      style={{

        backgroundImage: `url('https://www.freewebheaders.com/wp-content/gallery/other-business/law-firm-header-5248.jpg')`,
    
        backgroundRepeat: "no-repeat",
         

            backgroundColor: '#FFD700', // Chroma yellow
            
           
        backgroundSize: "100% 100%",
    
      }}
     >
        <div className="flex items-center justify-left flex-1">
          <span className="flex items-center gap-2 text-lg font-semibold" >
          <img src={image} alt="" className="h-32 w-32"/>
            <span style={{ fontFamily: 'Roboto' }} className="text-3xl font-extrabold">NYAAY</span>
            <div className="flex justify-center mt-2 ms-2">
  <span style={{ fontFamily: 'Raleway', fontStyle: 'bold-italic', fontWeight: '500' }} className="text-xl">Department of Law & Justice</span>
</div>
            
          </span>
        </div>
        <nav  className="ml-auto flex items-center gap-4">
          <a href="https://doj.gov.in/" 

style={{ 

  fontFamily: 'Raleway',  

  borderRadius: '8px', 

  padding: '8px 16px', 

  backgroundColor: '#000000', 

  color: '#fff', 

  textDecoration: 'none' 

}} 

className="text-sm font-bold hover:bg-green-700 transition duration-300 ease-in-out">

DoJ

</a>
          <a href="https://www.sci.gov.in/judgements-case-no/" 
   style={{ 
     fontFamily: 'Raleway',  
     borderRadius: '8px', 
     padding: '8px 16px', 
     backgroundColor: '#000000', 
     color: '#fff', 
     textDecoration: 'none' 
   }} 
   className="text-sm font-bold hover:bg-gray-700 transition duration-300 ease-in-out">
  Judgements
</a>
         
          <a href="https://ecourts.gov.in/ecourts_home/" 
   style={{ 
     fontFamily: 'Raleway', 
     borderRadius: '8px', 
     padding: '8px 16px', 
     backgroundColor: '#000000', 
     color: '#fff', 
     textDecoration: 'none' 
   }} 
   className="text-sm font-bold hover:bg-gray-700 transition duration-300 ease-in-out">
  E-Courts
</a>
        
          <a href="https://www.indiacode.nic.in/" 
   style={{ 
     fontFamily: 'Raleway', 
     borderRadius: '8px', 
     padding: '8px 16px', 
     backgroundColor: '#000000', 
     color: '#fff', 
     textDecoration: 'none' 
   }} 
   className="text-sm font-bold hover:bg-gray-700 transition duration-300 ease-in-out">
  India Code
</a>
        </nav>
      </header>
      <main className="flex-1 px-4 py-8 sm:px-6 md:py-12">
        <section id="divisions" className="mb-12">
          <div className="flex justify-center">
            <a href="https://www.india.gov.in/topics/law-justice" target="_blank" rel="noopener noreferrer">

          <h2 className="mb-4 text-2xl font-bold hover:text-gray-600 transition duration-300 ease-in-out">

            Indian Law Divisions

          </h2>
          </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card 
  style={{
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#FFD7BE', // light gray background
  }}
>
  <CardHeader>
    <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Constitutional Law</CardTitle>
  </CardHeader>
  <CardContent>
    <p>
      This branch deals with the interpretation and implementation of the Constitution of India, 
      which is the supreme law of the land. It outlines the structure of government, 
      the division of powers, and the rights and duties of citizens.
    </p>
  </CardContent>
</Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Criminal Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                Criminal law governs crimes and their punishments. It includes provisions 
                for dealing with various criminal offenses.
                IPC,CrPC,Indian Evidence Act,POCSO Act
                </p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Civil Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                Civil law deals with disputes between individuals, organizations, 
                or between the two, in which compensation may be awarded to the victim.
                </p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Taxation Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Tax Division represents India in all civil and criminal litigation related to the
                  internal revenue laws.
                </p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Natural Resources Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Natural Resources Division enforces federal environmental and natural resource laws.</p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Human Rights Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Civil Rights Division enforces federal statutes prohibiting discrimination on the basis of race,
                  color, gender, disability, and religion.Protects and promotes the basic rights and 
                  freedoms to which all humans are entitled.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="judges" className="mb-12">
          <div className="flex justify-center">
            <h2 className="mb-4 text-2xl font-bold">Courts & Judges</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#ADD8E6', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">Supreme Court</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Supreme Court of India is the highest judicial authority and the final court of appeal in the country. 
                    Established on January 28, 1950, it functions as the guardian of the Constitution and ensures the rule of law in India.
                    The Supreme Court of India currently has 33 Judges and 1 chief Justice.
                    Hon'ble Dr Justice Dhananjaya Y Chandrachud, The Chief Justice of India</p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#ADD8E6', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">State High Courts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>There are 25 High Courts in India, six having control over more than one State/UT. 
                    Delhi has a High Court of its own among the Union Territories. 
                    Each High Court shall consist of a Chief Justice and such other judges as appointed by the President of India.
                    The number of total judges sanctioned in these high courts are 1114 
                    of which 840 judges are permanent and remaining 274 sanctioned for additional judges. 
                    As of 1 September 2024, 365 of the seats, about 33% are vacant.</p>
              </CardContent>
            </Card>
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#ADD8E6', // light gray background
              }}>
              <CardHeader>
                <CardTitle className="mb-4 text-2xl font-semibold hover:text-gray-600 transition duration-300 ease-in-out">District Courts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>District Courts of India are the primary courts of original civil jurisdiction within each district.
                They handle a wide range of civil and criminal cases, including disputes over property, contracts, 
                and family matters, as well as criminal offenses. As of 2023, India has approximately 800 district courts, 
                staffed by a total of over 25,000 judges. These judges include district judges, additional district judges, 
                and civil judges. The exact number of judges in each district varies depending on the population and workload.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="cases" className="mb-12">
          <div className="flex justify-center">
            <h2 className="mb-4 text-2xl font-bold">Cases</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#C6F4D6', // light gray background
              }}>
              <CardHeader>
                <CardTitle>National Judicial Data Grid</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                The National Judicial Data Grid (NJDG) is an online platform developed by the eCourts project in India to provide real-time data related to the judiciary. 
                It serves as a comprehensive database of case information across the country and aims to improve transparency, efficiency, and 
                accountability in the judicial process.Case Pendency Data,Case Disposal Rates,High Court Data,District Court Data etc.
                </p>
                <a href="https://njdg.ecourts.gov.in" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">View Data</Button>
                </a>
              </CardContent>
            </Card>
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#C6F4D6', // light gray background
              }}>
              <CardHeader>
                <CardTitle>Live Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Selected court proceedings are live-streamed for public viewing.</p>
                <a href="https://www.sci.gov.in/live-streaming/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Watch Live</Button>
                </a>
                <a href="https://www.sci.gov.in/previous-sessions/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 ms-4">See Archieve</Button>
                </a>
              </CardContent>
            </Card>
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#C6F4D6', // light gray background
              }}>
              <CardHeader>
                <CardTitle>Fast-Track Courts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fast-track courts have been established to expedite the resolution of certain types of cases.</p>
                <a href="https://dashboard.doj.gov.in/fast-track-court/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Learn More</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="services" className="mb-12">
          <div className="flex justify-center">
            <h2 className="mb-4 text-2xl font-bold">Services</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
            style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle>Pay Traffic Fines</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Easily pay your traffic violation fines online through our secure payment portal.</p>
                <a href="https://echallan.parivahan.gov.in/index/accused-challan" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Pay Now</Button>
                </a>
              </CardContent>
            </Card>
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle>eCourts Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download the eCourts Services mobile app to access court information and services on the go.</p>
                <a href="https://play.google.com/store/apps/details?id=in.gov.ecourts.eCourtsServices&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Download App</Button>
                </a>
              </CardContent>
            </Card>
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle>Tele Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tele Law provides free legal advice and assistance through video conferencing.</p>
                <a href="https://www.tele-law.in/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Access Tele Law</Button>
                </a>
              </CardContent>
            </Card>
            <Card style={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#FFD7BE', // light gray background
              }}>
              <CardHeader>
                <CardTitle>E-Filing and E-Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>File court documents and make payments electronically for faster and more convenient service.</p>
                <a href="https://efiling.sci.gov.in/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Pay Now</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-bold">Made For India</h3> 
          </div>
        </div>
      </footer>
      
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 shadow-lg">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12 rounded-full border-2 border-gray-300">
        <AvatarImage src="/placeholder-user.jpg" alt="Nyaay" />
        <AvatarFallback>Made By Sattwik</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium text-gray-200">Nyaay</h4>
        <p className="text-sm text-gray-400">Hi! I am your ai chatbot friend! Ask me anything related to Indian Judiciary...</p>
      </div>
    </div>
    <a href="https://cdn.botpress.cloud/webchat/v2.1/shareable.html?botId=2c100010-0123-4183-9bcb-82eb8070818c" target="_blank" rel="noopener noreferrer">
    <Button 
      variant="outline" 
      size="sm" 
      className="hover:bg-gray-700 hover:text-gray-200 transition duration-300"
    
    >
      Chat with Nyaay
    </Button>
    </a>
  </div>
</div>
</div>
  );
}