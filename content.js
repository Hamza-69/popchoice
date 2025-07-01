// import { openai, supabase } from './config.js';
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// /*
//   Challenge: Text Splitters, Embeddings, and Vector Databases!
//     1. Use LangChain to split the content in movies.txt into smaller chunks.
//     2. Use OpenAI's Embedding model to create an embedding for each chunk.
//     3. Insert all text chunks and their corresponding embedding
//        into a Supabase database table.
//  */

// /* Split movies.txt into text chunks.
// Return LangChain's "output" – the array of Document objects. */
// async function splitDocument() {
//   let data = `Oppenheimer (2023) | R | 3h | 8.6 rating  
// Epic biographical drama about J. Robert Oppenheimer and the development of the atomic bomb. Directed by Christopher Nolan, starring Cillian Murphy, Emily Blunt, Robert Downey Jr.

// Top Gun: Maverick (2022) | PG-13 | 2h 10m | 8.3 rating  
// Action drama about naval aviator Pete "Maverick" Mitchell training graduates for a dangerous mission. Directed by Joseph Kosinski, starring Tom Cruise, Jennifer Connelly.

// Everything Everywhere All at Once (2022) | R | 2h 19m | 8.1 rating  
// Sci-fi multiverse adventure about a laundromat owner saving reality. Directed by Daniels, starring Michelle Yeoh, Stephanie Hsu.

// Spider-Man: No Way Home (2021) | PG-13 | 2h 28m | 8.2 rating  
// Spider-Man's identity is revealed, bringing villains from other dimensions. Directed by Jon Watts, starring Tom Holland, Zendaya.

// CODA (2021) | PG-13 | 1h 51m | 8.0 rating  
// Coming-of-age drama about a hearing teenager in a deaf family. Directed by Sian Heder, starring Emilia Jones, Marlee Matlin.

// Dune (2021) | PG-13 | 2h 35m | 8.0 rating  
// Epic sci-fi about a noble family caught in a war for a desert planet. Directed by Denis Villeneuve, starring Timothée Chalamet, Rebecca Ferguson.

// The Batman (2022) | PG-13 | 2h 56m | 7.8 rating  
// Dark detective story of Batman pursuing the Riddler through Gotham. Directed by Matt Reeves, starring Robert Pattinson, Zoë Kravitz.

// Drive My Car (2021) | NR | 3h | 7.6 rating  
// Japanese drama about a theater director and his chauffeur. Directed by Ryusuke Hamaguchi, starring Hidetoshi Nishijima.

// No Time to Die (2021) | PG-13 | 2h 43m | 7.3 rating  
// James Bond faces a mysterious villain armed with dangerous technology. Directed by Cary Joji Fukunaga, starring Daniel Craig, Rami Malek.

// Barbie (2023) | PG-13 | 1h 54m | 7.2 rating  
// Adventure comedy about Barbie's journey into the real world. Directed by Greta Gerwig, starring Margot Robbie, Ryan Gosling.

// The Menu (2022) | R | 1h 47m | 7.2 rating  
// Comedy thriller about an exclusive restaurant with shocking surprises. Directed by Mark Mylod, starring Ralph Fiennes, Anya Taylor-Joy.

// Encanto (2021) | PG | 1h 42m | 7.2 rating  
// Animated musical about a magical Colombian family. Directed by Jared Bush, Byron Howard, starring Stephanie Beatriz.

// Belfast (2021) | PG-13 | 1h 38m | 7.2 rating  
// Semi-autobiographical drama about a boy's childhood in 1960s Belfast. Directed by Kenneth Branagh, starring Jude Hill, Caitríona Balfe.

// Glass Onion (2022) | PG-13 | 2h 19m | 7.1 rating  
// Mystery comedy featuring detective Benoit Blanc investigating a murder game gone wrong. Directed by Rian Johnson, starring Daniel Craig, Edward Norton.

// West Side Story (2021) | PG-13 | 2h 36m | 7.1 rating  
// Steven Spielberg's adaptation of the Broadway musical. Starring Ansel Elgort, Rachel Zegler.

// The French Dispatch (2021) | R | 1h 47m | 7.1 rating  
// Anthology film about journalists at an American magazine in France. Directed by Wes Anderson, starring Bill Murray, Frances McDormand.

// Licorice Pizza (2021) | R | 2h 13m | 7.1 rating  
// Coming-of-age comedy-drama set in 1970s San Fernando Valley. Directed by Paul Thomas Anderson, starring Alana Haim, Cooper Hoffman.

// The Super Mario Bros. Movie (2023) | PG | 1h 32m | 7.1 rating  
// Animated adventure about Brooklyn plumbers transported to a magical world. Directed by Aaron Horvath, voiced by Chris Pratt, Anya Taylor-Joy.

// Elemental (2023) | PG | 1h 41m | 7.0 rating  
// Animated adventure about fire and water residents discovering they have more in common than expected. Directed by Peter Sohn, starring Leah Lewis, Mamoudou Athie.

// The Power of the Dog (2021) | R | 2h 6m | 6.8 rating  
// Psychological western drama about toxic masculinity. Directed by Jane Campion, starring Benedict Cumberbatch, Kirsten Dunst.

// A Haunting in Venice (2023) | PG-13 | 1h 43m | 6.8 rating  
// Post-WWII crime drama set in Venice about a retired detective at a deadly séance. Directed by Kenneth Branagh, starring Kenneth Branagh, Michelle Yeoh.

// Blue Beetle (2023) | PG-13 | 2h 7m | 6.7 rating  
// Action-adventure about a teenager bonded with alien biotechnology. Directed by Angel Manuel Soto, starring Xolo Maridueña, Bruna Marquezine.

// Asteroid City (2023) | PG-13 | 1h 45m | 6.6 rating  
// Comedy-drama about a mourning father at a junior stargazing competition. Directed by Wes Anderson, starring Jason Schwartzman, Scarlett Johansson.

// M3GAN (2022) | PG-13 | 1h 42m | 6.4 rating  
// Horror/sci-fi about a life-like doll that becomes dangerous. Directed by Gerard Johnstone, starring Allison Williams, Violet McGraw.

// Dune: Part Two (2024) | PG-13 | 2h 46m | 8.5 rating  
// Continuation of Paul Atreides' mythic journey as he unites with Chani and the Fremen. Directed by Denis Villeneuve, starring Timothée Chalamet, Zendaya.

// Inside Out 2 (2024) | PG | 1h 36m | 7.6 rating  
// Animated sequel exploring Riley's teenage emotions as she navigates high school. Directed by Kelsey Mann, voiced by Amy Poehler, Maya Hawke.

// Wicked (2024) | PG | 2h 40m | 7.1 rating  
// Musical adaptation telling the untold story of the witches of Oz. Directed by Jon M. Chu, starring Cynthia Erivo, Ariana Grande.

// Anora (2024) | R | 2h 19m | 7.2 rating  
// Comedy-drama about a Brooklyn sex worker who marries a Russian oligarch's son. Directed by Sean Baker, starring Mikey Madison.

// The Brutalist (2024) | R | 3h 35m | 8.1 rating  
// Epic drama about a visionary architect who flees post-war Europe for America. Directed by Brady Corbet, starring Adrien Brody, Felicity Jones.

// Challengers (2024) | R | 2h 11m | 7.1 rating  
// Tennis drama about a former prodigy turned coach caught in a love triangle. Directed by Luca Guadagnino, starring Zendaya, Josh O'Connor.

// Conclave (2024) | PG | 2h | 6.8 rating  
// Thriller about the secretive process of selecting a new Pope. Directed by Edward Berger, starring Ralph Fiennes, Stanley Tucci.

// A Complete Unknown (2024) | R | 2h 21m | 7.0 rating  
// Biographical drama about Bob Dylan's rise to fame in 1960s New York. Directed by James Mangold, starring Timothée Chalamet, Elle Fanning.

// Emilia Pérez (2024) | R | 2h 12m | 6.8 rating  
// Musical crime comedy about a cartel leader who undergoes gender-affirming surgery. Directed by Jacques Audiard, starring Karla Sofía Gascón, Zoe Saldaña.

// The Substance (2024) | R | 2h 21m | 7.3 rating  
// Body horror satire about aging and beauty standards in Hollywood. Directed by Coralie Fargeat, starring Demi Moore, Margaret Qualley.

// Nosferatu (2024) | R | 2h 12m | 6.9 rating  
// Gothic horror remake of the vampire classic. Directed by Robert Eggers, starring Bill Skarsgård, Lily-Rose Depp.

// Moana 2 (2024) | PG | 1h 40m | 6.7 rating  
// Animated sequel following Moana's new oceanic adventure. Directed by David Derrick Jr., voiced by Auli'i Cravalho, Dwayne Johnson.

// Mufasa: The Lion King (2024) | PG | 1h 58m | 6.4 rating  
// Prequel exploring the origin story of Mufasa. Directed by Barry Jenkins, voiced by Aaron Pierre, Kelvin Harrison Jr.

// The Wild Robot (2024) | PG | 1h 42m | 8.3 rating  
// Animated film about a robot stranded on an island who adopts an orphaned gosling. Directed by Chris Sanders, voiced by Lupita Nyong'o.

// Sonic the Hedgehog 3 (2024) | PG | 1h 49m | 6.8 rating  
// Third installment of the video game adaptation featuring Shadow. Directed by Jeff Fowler, starring Jim Carrey, Ben Schwartz.

// The Dark Knight (2008) | PG-13 | 2h 32m | 9.0 rating  
// Batman faces his greatest challenge in the Joker. Directed by Christopher Nolan, starring Christian Bale, Heath Ledger.

// WALL-E (2008) | G | 1h 38m | 8.4 rating  
// Animated film about a lonely robot left to clean Earth. Directed by Andrew Stanton, voiced by Ben Burtt.

// Slumdog Millionaire (2008) | R | 2h | 8.0 rating  
// A Mumbai teenager's life experiences help him win a game show. Directed by Danny Boyle, starring Dev Patel, Freida Pinto.

// Iron Man (2008) | PG-13 | 2h 6m | 7.9 rating  
// Billionaire inventor Tony Stark creates a powered suit of armor. Directed by Jon Favreau, starring Robert Downey Jr., Gwyneth Paltrow.

// In Bruges (2008) | R | 1h 47m | 7.9 rating  
// Two hitmen hide out in Belgium after a job goes wrong. Directed by Martin McDonagh, starring Colin Farrell, Brendan Gleeson.

// The Wrestler (2008) | R | 1h 49m | 7.9 rating  
// An aging wrestler tries to reconnect with his daughter. Directed by Darren Aronofsky, starring Mickey Rourke, Marisa Tomei.

// Frost/Nixon (2008) | R | 2h 2m | 7.7 rating  
// The story behind the historic interviews between David Frost and Richard Nixon. Directed by Ron Howard, starring Michael Sheen, Frank Langella.

// Milk (2008) | R | 2h 8m | 7.5 rating  
// Biographical drama about gay rights activist Harvey Milk. Directed by Gus Van Sant, starring Sean Penn, Josh Brolin.

// The Curious Case of Benjamin Button (2008) | PG-13 | 2h 46m | 7.8 rating  
// Fantasy drama about a man who ages in reverse. Directed by David Fincher, starring Brad Pitt, Cate Blanchett.

// Gran Torino (2008) | R | 1h 56m | 8.1 rating  
// A Korean War veteran confronts his prejudices. Directed by Clint Eastwood, starring Clint Eastwood, Bee Vang.

// The Reader (2008) | R | 2h 4m | 7.6 rating  
// Post-WWII drama about a young man's affair with an older woman. Directed by Stephen Daldry, starring Kate Winslet, Ralph Fiennes.

// Doubt (2008) | PG-13 | 1h 44m | 7.5 rating  
// A nun suspects a priest of improper relations with a student. Directed by John Patrick Shanley, starring Meryl Streep, Philip Seymour Hoffman.

// The Hurt Locker (2008) | R | 2h 7m | 7.5 rating  
// A bomb disposal team in Iraq faces psychological warfare. Directed by Kathryn Bigelow, starring Jeremy Renner, Anthony Mackie.

// Taken (2008) | PG-13 | 1h 30m | 7.8 rating  
// A former CIA operative searches for his kidnapped daughter. Directed by Pierre Morel, starring Liam Neeson, Maggie Grace.

// Quantum of Solace (2008) | PG-13 | 1h 46m | 6.6 rating  
// James Bond seeks revenge for Vesper's betrayal. Directed by Marc Forster, starring Daniel Craig, Olga Kurylenko.

// Tropic Thunder (2008) | R | 1h 47m | 7.1 rating  
// Comedy about actors making a war movie who get caught in real combat. Directed by Ben Stiller, starring Ben Stiller, Robert Downey Jr.

// Pineapple Express (2008) | R | 1h 51m | 6.9 rating  
// Stoner comedy about a process server and his dealer on the run. Directed by David Gordon Green, starring Seth Rogen, James Franco.

// Step Brothers (2008) | R | 1h 38m | 6.9 rating  
// Comedy about two middle-aged men who become stepbrothers. Directed by Adam McKay, starring Will Ferrell, John C. Reilly.

// Mamma Mia! (2008) | PG-13 | 1h 48m | 6.5 rating  
// Musical romantic comedy featuring ABBA songs. Directed by Phyllida Lloyd, starring Meryl Streep, Amanda Seyfried.

// The Social Network (2010) | PG-13 | 2h | 7.7 rating  
// The founding of Facebook and the lawsuits that followed. Directed by David Fincher, starring Jesse Eisenberg, Andrew Garfield.

// Inception (2010) | PG-13 | 2h 28m | 8.8 rating  
// A thief who steals corporate secrets through dream-sharing technology. Directed by Christopher Nolan, starring Leonardo DiCaprio, Marion Cotillard.

// Toy Story 3 (2010) | G | 1h 43m | 8.2 rating  
// Andy's toys face their fate when he leaves for college. Directed by Lee Unkrich, voiced by Tom Hanks, Tim Allen.

// The King's Speech (2010) | R | 1h 58m | 8.0 rating  
// King George VI overcomes a speech impediment. Directed by Tom Hooper, starring Colin Firth, Geoffrey Rush.

// Black Swan (2010) | R | 1h 48m | 8.0 rating  
// A ballerina's quest for perfection descends into madness. Directed by Darren Aronofsky, starring Natalie Portman, Mila Kunis.

// 127 Hours (2010) | R | 1h 34m | 7.5 rating  
// True story of a hiker trapped by a boulder in Utah. Directed by Danny Boyle, starring James Franco.

// The Fighter (2010) | R | 1h 56m | 7.8 rating  
// Boxer Micky Ward's rise to fame with his troubled half-brother as trainer. Directed by David O. Russell, starring Mark Wahlberg, Christian Bale.

// True Grit (2010) | PG-13 | 1h 50m | 7.6 rating  
// A teenage girl hires a U.S. Marshal to track her father's murderer. Directed by Joel Coen, Ethan Coen, starring Jeff Bridges, Hailee Steinfeld.

// Winter's Bone (2010) | R | 1h 40m | 7.1 rating  
// A teenage girl searches for her missing father in the Ozarks. Directed by Debra Granik, starring Jennifer Lawrence, John Hawkes.

// The Town (2010) | R | 2h 5m | 7.5 rating  
// A Boston bank robber falls for a bank manager. Directed by Ben Affleck, starring Ben Affleck, Rebecca Hall.

// Shutter Island (2010) | R | 2h 18m | 8.2 rating  
// A U.S. Marshal investigates a psychiatric facility. Directed by Martin Scorsese, starring Leonardo DiCaprio, Mark Ruffalo.

// Iron Man 2 (2010) | PG-13 | 2h 4m | 7.0 rating  
// Tony Stark faces new threats while dealing with his mortality. Directed by Jon Favreau, starring Robert Downey Jr., Gwyneth Paltrow.

// Kick-Ass (2010) | R | 1h 57m | 7.6 rating  
// A teenager decides to become a real-life superhero. Directed by Matthew Vaughn, starring Aaron Taylor-Johnson, Chloë Grace Moretz.

// How to Train Your Dragon (2010) | PG | 1h 38m | 8.1 rating  
// A young Viking befriends a dragon instead of fighting it. Directed by Dean DeBlois, Chris Sanders, voiced by Jay Baruchel, Gerard Butler.

// Scott Pilgrim vs. The World (2010) | PG-13 | 1h 52m | 7.6 rating  
// A slacker must defeat his girlfriend's seven evil exes. Directed by Edgar Wright, starring Michael Cera, Mary Elizabeth Winstead.

// Tangled (2010) | PG | 1h 40m | 7.7 rating  
// Disney's animated retelling of Rapunzel. Directed by Nathan Greno, Byron Howard, voiced by Mandy Moore, Zachary Levi.

// The Other Guys (2010) | PG-13 | 1h 47m | 6.7 rating  
// Two mismatched NYPD detectives get their chance at glory. Directed by Adam McKay, starring Will Ferrell, Mark Wahlberg.

// Despicable Me (2010) | PG | 1h 35m | 7.6 rating  
// A supervillain adopts three orphaned girls. Directed by Pierre Coffin, Chris Renaud, voiced by Steve Carell, Kristen Wiig.

// The Karate Kid (2010) | PG | 2h 20m | 6.2 rating  
// Remake of the 1984 film set in China. Directed by Harald Zwart, starring Jaden Smith, Jackie Chan.

// Alice in Wonderland (2010) | PG | 1h 48m | 6.4 rating  
// Tim Burton's dark take on Lewis Carroll's classic. Directed by Tim Burton, starring Mia Wasikowska, Johnny Depp.

// The Wolfman (2010) | R | 1h 43m | 5.8 rating  
// Remake of the 1941 horror classic. Directed by Joe Johnston, starring Benicio del Toro, Anthony Hopkins.

// Green Zone (2010) | R | 1h 55m | 6.8 rating  
// A U.S. Army officer searches for WMDs in Iraq. Directed by Paul Greengrass, starring Matt Damon, Greg Kinnear.

// The Artist (2011) | PG-13 | 1h 40m | 7.9 rating  
// Silent black-and-white film about Hollywood's transition to talkies. Directed by Michel Hazanavicius, starring Jean Dujardin, Bérénice Bejo.

// Hugo (2011) | PG | 2h 6m | 7.5 rating  
// An orphan boy living in a Paris train station discovers a mystery. Directed by Martin Scorsese, starring Asa Butterfield, Chloë Grace Moretz.

// The Descendants (2011) | R | 1h 55m | 7.3 rating  
// A Hawaiian land baron deals with his wife's coma and infidelity. Directed by Alexander Payne, starring George Clooney, Shailene Woodley.

// Moneyball (2011) | PG-13 | 2h 13m | 7.6 rating  
// Oakland A's general manager uses statistics to build a competitive team. Directed by Bennett Miller, starring Brad Pitt, Jonah Hill.

// Midnight in Paris (2011) | PG-13 | 1h 34m | 7.7 rating  
// A writer in Paris mysteriously travels back to the 1920s every night. Directed by Woody Allen, starring Owen Wilson, Rachel McAdams.

// The Help (2011) | PG-13 | 2h 26m | 8.1 rating  
// A young woman writes a book about African-American maids in 1960s Mississippi. Directed by Tate Taylor, starring Emma Stone, Viola Davis.

// War Horse (2011) | PG-13 | 2h 26m | 7.2 rating  
// The bond between a boy and his horse during World War I. Directed by Steven Spielberg, starring Jeremy Irvine, Emily Watson.

// The Girl with the Dragon Tattoo (2011) | R | 2h 38m | 7.8 rating  
// A journalist and a hacker investigate a wealthy family's dark secrets. Directed by David Fincher, starring Daniel Craig, Rooney Mara.

// Extremely Loud & Incredibly Close (2011) | PG-13 | 2h 9m | 6.9 rating  
// A boy searches New York for clues left by his father who died in 9/11. Directed by Stephen Daldry, starring Tom Hanks, Sandra Bullock.

// Drive (2011) | R | 1h 40m | 7.8 rating  
// A Hollywood stunt driver moonlights as a getaway driver. Directed by Nicolas Winding Refn, starring Ryan Gosling, Carey Mulligan.

// Rise of the Planet of the Apes (2011) | PG-13 | 1h 45m | 7.6 rating  
// A scientist's experiments with apes lead to their evolution. Directed by Rupert Wyatt, starring James Franco, Andy Serkis.

// X-Men: First Class (2011) | PG-13 | 2h 11m | 7.7 rating  
// The origin story of Professor X and Magneto. Directed by Matthew Vaughn, starring James McAvoy, Michael Fassbender.

// Captain America: The First Avenger (2011) | PG-13 | 2h 4m | 6.9 rating  
// Steve Rogers becomes the first Avenger during World War II. Directed by Joe Johnston, starring Chris Evans, Hayley Atwell.

// Thor (2011) | PG-13 | 1h 55m | 7.0 rating  
// The Norse god is banished to Earth and must prove his worth. Directed by Kenneth Branagh, starring Chris Hemsworth, Natalie Portman.

// Fast Five (2011) | PG-13 | 2h 10m | 7.3 rating  
// Dom and Brian assemble a team to steal from a corrupt businessman. Directed by Justin Lin, starring Vin Diesel, Paul Walker.

// Transformers: Dark of the Moon (2011) | PG-13 | 2h 34m | 6.2 rating  
// The Autobots learn of a Cybertronian spacecraft on the moon. Directed by Michael Bay, starring Shia LaBeouf, Rosie Huntington-Whiteley.

// Pirates of the Caribbean: On Stranger Tides (2011) | PG-13 | 2h 17m | 6.6 rating  
// Jack Sparrow searches for the Fountain of Youth. Directed by Rob Marshall, starring Johnny Depp, Penélope Cruz.

// Harry Potter and the Deathly Hallows – Part 2 (2011) | PG-13 | 2h 10m | 8.1 rating  
// The final confrontation between Harry Potter and Voldemort. Directed by David Yates, starring Daniel Radcliffe, Emma Watson.

// The Hangover Part II (2011) | R | 1h 42m | 6.4 rating  
// The gang wakes up in Thailand with no memory of the night before. Directed by Todd Phillips, starring Bradley Cooper, Ed Helms.

// Bridesmaids (2011) | R | 2h 5m | 6.8 rating  
// A woman struggles with her duties as maid of honor. Directed by Paul Feig, starring Kristen Wiig, Maya Rudolph.

// Super 8 (2011) | PG-13 | 1h 52m | 7.0 rating  
// Kids making a movie witness a train crash and alien activity. Directed by J.J. Abrams, starring Joel Courtney, Elle Fanning.

// Source Code (2011) | PG-13 | 1h 33m | 7.5 rating  
// A soldier repeatedly experiences the last 8 minutes of another person's life. Directed by Duncan Jones, starring Jake Gyllenhaal, Michelle Monaghan.

// Rango (2011) | PG | 1h 47m | 7.2 rating  
// An ordinary chameleon becomes sheriff of a frontier town. Directed by Gore Verbinski, voiced by Johnny Depp, Isla Fisher.

// Rio (2011) | G | 1h 36m | 6.9 rating  
// A domesticated macaw travels to Rio de Janeiro. Directed by Carlos Saldanha, voiced by Jesse Eisenberg, Anne Hathaway.

// Limitless (2011) | PG-13 | 1h 45m | 7.4 rating  
// A writer gains superhuman abilities from a mysterious drug. Directed by Neil Burger, starring Bradley Cooper, Abbie Cornish.

// Contagion (2011) | PG-13 | 1h 46m | 6.8 rating  
// A deadly virus spreads around the globe. Directed by Steven Soderbergh, starring Marion Cotillard, Matt Damon.

// The Tree of Life (2011) | PG-13 | 2h 19m | 6.8 rating  
// A family in 1950s Texas contemplates existence and loss. Directed by Terrence Malick, starring Brad Pitt, Sean Penn.

// We Need to Talk About Kevin (2011) | R | 1h 52m | 7.5 rating  
// A mother deals with her sociopathic teenage son. Directed by Lynne Ramsay, starring Tilda Swinton, John C. Reilly.

// Melancholia (2011) | R | 2h 16m | 7.2 rating  
// Two sisters deal with depression as a planet threatens Earth. Directed by Lars von Trier, starring Kirsten Dunst, Charlotte Gainsbourg.

// Tinker Tailor Soldier Spy (2011) | R | 2h 7m | 7.0 rating  
// A retired spy is brought back to find a Soviet mole. Directed by Tomas Alfredson, starring Gary Oldman, Colin Firth.

// The Ides of March (2011) | R | 1h 41m | 7.1 rating  
// A political thriller about a presidential campaign. Directed by George Clooney, starring Ryan Gosling, George Clooney.

// 50/50 (2011) | R | 1h 40m | 7.6 rating  
// A young man deals with a cancer diagnosis. Directed by Jonathan Levine, starring Joseph Gordon-Levitt, Seth Rogen.

// Shame (2011) | NC-17 | 1h 41m | 7.2 rating  
// A sex addict's life is disrupted by his sister's visit. Directed by Steve McQueen, starring Michael Fassbender, Carey Mulligan.

// The Avengers (2012) | PG-13 | 2h 23m | 8.0 rating  
// Earth's mightiest heroes assemble to stop an alien invasion. Directed by Joss Whedon, starring Robert Downey Jr., Chris Evans.

// Argo (2012) | R | 2h | 7.7 rating  
// CIA agent creates fake film production to rescue hostages in Iran. Directed by Ben Affleck, starring Ben Affleck, Bryan Cranston.

// Life of Pi (2012) | PG | 2h 7m | 7.9 rating  
// A young man survives a shipwreck with a Bengal tiger. Directed by Ang Lee, starring Suraj Sharma, Irrfan Khan.

// Lincoln (2012) | PG-13 | 2h 30m | 7.3 rating  
// Abraham Lincoln fights to pass the 13th Amendment. Directed by Steven Spielberg, starring Daniel Day-Lewis, Sally Field.

// Silver Linings Playbook (2012) | R | 2h 2m | 7.7 rating  
// A man with bipolar disorder meets a widow with problems of her own. Directed by David O. Russell, starring Bradley Cooper, Jennifer Lawrence.

// Zero Dark Thirty (2012) | R | 2h 37m | 7.4 rating  
// The decade-long hunt for Osama bin Laden. Directed by Kathryn Bigelow, starring Jessica Chastain, Joel Edgerton.

// Les Misérables (2012) | PG-13 | 2h 38m | 7.5 rating  
// Musical adaptation of Victor Hugo's novel set in 19th-century France. Directed by Tom Hooper, starring Hugh Jackman, Russell Crowe.

// Django Unchained (2012) | R | 2h 45m | 8.4 rating  
// A freed slave teams up with a bounty hunter. Directed by Quentin Tarantino, starring Jamie Foxx, Christoph Waltz.

// Amour (2012) | PG-13 | 2h 7m | 7.8 rating  
// An elderly couple faces the challenges of aging and illness. Directed by Michael Haneke, starring Jean-Louis Trintignant, Emmanuelle Riva.

// Beasts of the Southern Wild (2012) | PG-13 | 1h 33m | 7.2 rating  
// A young girl faces a storm threatening her bayou community. Directed by Benh Zeitlin, starring Quvenzhané Wallis, Dwight Henry.

// The Master (2012) | R | 2h 18m | 7.1 rating  
// A World War II veteran becomes involved with a religious movement. Directed by Paul Thomas Anderson, starring Joaquin Phoenix, Philip Seymour Hoffman.

// Skyfall (2012) | PG-13 | 2h 23m | 7.8 rating  
// James Bond's loyalty to M is tested when her past comes back to haunt her. Directed by Sam Mendes, starring Daniel Craig, Judi Dench.

// The Dark Knight Rises (2012) | PG-13 | 2h 44m | 8.4 rating  
// Batman faces his most formidable adversary yet in Bane. Directed by Christopher Nolan, starring Christian Bale, Tom Hardy.

// The Amazing Spider-Man (2012) | PG-13 | 2h 16m | 6.9 rating  
// Peter Parker's origin story retold with The Lizard as the villain. Directed by Marc Webb, starring Andrew Garfield, Emma Stone.

// The Hunger Games (2012) | PG-13 | 2h 22m | 7.2 rating  
// A teenage girl volunteers to take her sister's place in a deadly competition. Directed by Gary Ross, starring Jennifer Lawrence, Josh Hutcherson.

// Madagascar 3: Europe's Most Wanted (2012) | PG | 1h 33m | 6.8 rating  
// The zoo animals join a traveling circus to get back to New York. Directed by Eric Darnell, Conrad Vernon, voiced by Ben Stiller, Chris Rock.

// Brave (2012) | PG | 1h 33m | 7.1 rating  
// A Scottish princess defies tradition and unleashes chaos in her kingdom. Directed by Mark Andrews, Brenda Chapman, voiced by Kelly Macdonald, Billy Connolly.

// Prometheus (2012) | R | 2h 4m | 7.0 rating  
// A team of explorers discovers a clue to the origins of mankind. Directed by Ridley Scott, starring Noomi Rapace, Michael Fassbender.

// Looper (2012) | R | 1h 59m | 7.4 rating  
// A hitman from the future must kill his older self. Directed by Rian Johnson, starring Joseph Gordon-Levitt, Bruce Willis.

// Cloud Atlas (2012) | R | 2h 52m | 7.4 rating  
// Six interconnected stories spanning centuries explore how actions impact the future. Directed by Lana Wachowski, Tom Tykwer, starring Tom Hanks, Halle Berry.

// End of Watch (2012) | R | 1h 49m | 7.6 rating  
// Two LAPD officers patrol the streets of South Central Los Angeles. Directed by David Ayer, starring Jake Gyllenhaal, Michael Peña.

// The Cabin in the Woods (2012) | R | 1h 35m | 7.0 rating  
// Horror meta-film about five friends at a remote cabin. Directed by Drew Goddard, starring Kristen Connolly, Chris Hemsworth.

// Moonrise Kingdom (2012) | PG-13 | 1h 34m | 7.8 rating  
// Two young lovers run away together on a New England island. Directed by Wes Anderson, starring Jared Gilman, Kara Hayward.

// The Hobbit: An Unexpected Journey (2012) | PG-13 | 2h 49m | 7.8 rating  
// Bilbo Baggins joins a quest to reclaim the lost Dwarf Kingdom. Directed by Peter Jackson, starring Martin Freeman, Ian McKellen.

// Ted (2012) | R | 1h 46m | 6.9 rating  
// A man's childhood teddy bear comes to life and refuses to leave. Directed by Seth MacFarlane, starring Mark Wahlberg, Mila Kunis.

// Magic Mike (2012) | R | 1h 50m | 6.1 rating  
// A male stripper teaches a younger performer about the business. Directed by Steven Soderbergh, starring Channing Tatum, Alex Pettyfer.

// 21 Jump Street (2012) | R | 1h 49m | 7.2 rating  
// Two cops go undercover as high school students. Directed by Phil Lord, Christopher Miller, starring Jonah Hill, Channing Tatum.

// The Perks of Being a Wallflower (2012) | PG-13 | 1h 43m | 7.9 rating  
// An introverted teenager finds his group of friends. Directed by Stephen Chbosky, starring Logan Lerman, Emma Watson.

// The Grey (2012) | R | 1h 57m | 6.7 rating  
// Survivors of a plane crash fight wolves in the Alaskan wilderness. Directed by Joe Carnahan, starring Liam Neeson, Frank Grillo.

// Chronicle (2012) | PG-13 | 1h 24m | 7.0 rating  
// Three teenagers gain superpowers and document their experience. Directed by Josh Trank, starring Dane DeHaan, Alex Russell.

// Wreck-It Ralph (2012) | PG | 1h 41m | 7.7 rating  
// A video game villain wants to be a hero. Directed by Rich Moore, voiced by John C. Reilly, Sarah Silverman.

// ParaNorman (2012) | PG | 1h 32m | 7.0 rating  
// A boy who can speak to the dead must save his town from zombies. Directed by Chris Butler, Sam Fell, voiced by Kodi Smit-McPhee.

// Frankenweenie (2012) | PG | 1h 27m | 6.9 rating  
// A boy resurrects his beloved dog using science. Directed by Tim Burton, voiced by Charlie Tahan, Winona Ryder.

// 12 Years a Slave (2013) | R | 2h 14m | 8.1 rating  
// A free black man is kidnapped and sold into slavery. Directed by Steve McQueen, starring Chiwetel Ejiofor, Michael Fassbender.

// Gravity (2013) | PG-13 | 1h 31m | 7.7 rating  
// Astronauts struggle to survive after debris destroys their shuttle. Directed by Alfonso Cuarón, starring Sandra Bullock, George Clooney.

// Her (2013) | R | 2h 6m | 8.0 rating  
// A man develops a relationship with an AI operating system. Directed by Spike Jonze, starring Joaquin Phoenix, Scarlett Johansson.

// The Wolf of Wall Street (2013) | R | 3h | 8.2 rating  
// The rise and fall of stockbroker Jordan Belfort. Directed by Martin Scorsese, starring Leonardo DiCaprio, Jonah Hill.

// Captain Phillips (2013) | PG-13 | 2h 14m | 7.8 rating  
// The true story of a cargo ship hijacked by Somali pirates. Directed by Paul Greengrass, starring Tom Hanks, Barkhad Abdi.

// Dallas Buyers Club (2013) | R | 1h 57m | 8.0 rating  
// An AIDS patient fights the system to help other patients get treatment. Directed by Jean-Marc Vallée, starring Matthew McConaughey, Jared Leto.

// Inside Llewyn Davis (2013) | R | 1h 44m | 7.4 rating  
// A week in the life of a struggling folk singer in 1960s Greenwich Village. Directed by Joel Coen, Ethan Coen, starring Oscar Isaac, Carey Mulligan.

// Blue Jasmine (2013) | PG-13 | 1h 38m | 7.3 rating  
// A former New York socialite falls on hard times. Directed by Woody Allen, starring Cate Blanchett, Alec Baldwin.

// Philomena (2013) | PG-13 | 1h 38m | 7.6 rating  
// A woman searches for her son given away for adoption 50 years earlier. Directed by Stephen Frears, starring Judi Dench, Steve Coogan.

// Nebraska (2013) | R | 1h 55m | 7.7 rating  
// A father and son travel to Nebraska to claim a sweepstakes prize. Directed by Alexander Payne, starring Bruce Dern, Will Forte.

// American Hustle (2013) | R | 2h 18m | 7.2 rating  
// A con man and his partner are forced to work for an FBI agent. Directed by David O. Russell, starring Christian Bale, Amy Adams.

// Rush (2013) | R | 2h 3m | 8.1 rating  
// The rivalry between Formula 1 drivers James Hunt and Niki Lauda. Directed by Ron Howard, starring Chris Hemsworth, Daniel Brühl.

// Prisoners (2013) | R | 2h 33m | 8.1 rating  
// A father searches for his missing daughter when police hit dead ends. Directed by Denis Villeneuve, starring Hugh Jackman, Jake Gyllenhaal.

// Elysium (2013) | R | 1h 49m | 6.6 rating  
// In 2154, the wealthy live on a space station while Earth is overpopulated. Directed by Neill Blomkamp, starring Matt Damon, Jodie Foster.

// Pacific Rim (2013) | PG-13 | 2h 11m | 6.9 rating  
// Giant robots fight alien monsters emerging from the ocean. Directed by Guillermo del Toro, starring Charlie Hunnam, Idris Elba.

// Man of Steel (2013) | PG-13 | 2h 23m | 7.0 rating  
// The origin story of Superman. Directed by Zack Snyder, starring Henry Cavill, Amy Adams.

// Iron Man 3 (2013) | PG-13 | 2h 10m | 7.1 rating  
// Tony Stark faces the Mandarin and his own inner demons. Directed by Shane Black, starring Robert Downey Jr., Gwyneth Paltrow.

// Thor: The Dark World (2013) | PG-13 | 1h 52m | 6.8 rating  
// Thor must save the Nine Realms from an ancient enemy. Directed by Alan Taylor, starring Chris Hemsworth, Natalie Portman.

// The Hunger Games: Catching Fire (2013) | PG-13 | 2h 26m | 7.5 rating  
// Katniss becomes a symbol of rebellion against the Capitol. Directed by Francis Lawrence, starring Jennifer Lawrence, Josh Hutcherson.

// Frozen (2013) | PG | 1h 42m | 7.4 rating  
// A princess with ice powers accidentally traps her kingdom in winter. Directed by Chris Buck, Jennifer Lee, voiced by Kristen Bell, Idina Menzel.

// Monsters University (2013) | G | 1h 44m | 7.2 rating  
// Prequel showing how Mike and Sulley became friends in college. Directed by Dan Scanlon, voiced by Billy Crystal, John Goodman.

// Despicable Me 2 (2013) | PG | 1h 38m | 7.3 rating  
// Gru teams up with agent Lucy to stop a new villain. Directed by Pierre Coffin, Chris Renaud, voiced by Steve Carell, Kristen Wiig.

// Fast & Furious 6 (2013) | PG-13 | 2h 10m | 7.0 rating  
// Dom's crew helps Hobbs take down an organization of drivers. Directed by Justin Lin, starring Vin Diesel, Paul Walker.

// Star Trek Into Darkness (2013) | PG-13 | 2h 12m | 7.7 rating  
// The Enterprise crew faces a terrorist threat from within Starfleet. Directed by J.J. Abrams, starring Chris Pine, Zachary Quinto.

// World War Z (2013) | PG-13 | 1h 56m | 7.0 rating  
// A UN investigator searches for the source of a zombie pandemic. Directed by Marc Forster, starring Brad Pitt, Mireille Enos.

// The Conjuring (2013) | R | 1h 52m | 7.5 rating  
// Paranormal investigators help a family terrorized by a dark presence. Directed by James Wan, starring Patrick Wilson, Vera Farmiga.

// This Is the End (2013) | R | 1h 47m | 6.6 rating  
// Actors play themselves during the apocalypse. Directed by Evan Goldberg, Seth Rogen, starring James Franco, Jonah Hill.

// The Heat (2013) | R | 1h 57m | 6.6 rating  
// An FBI agent teams up with a Boston cop to take down a drug lord. Directed by Paul Feig, starring Sandra Bullock, Melissa McCarthy.

// Now You See Me (2013) | PG-13 | 2h 5m | 7.2 rating  
// Four magicians rob banks during their performances. Directed by Louis Leterrier, starring Jesse Eisenberg, Mark Ruffalo.

// The Great Gatsby (2013) | PG-13 | 2h 23m | 7.2 rating  
// Baz Luhrmann's adaptation of F. Scott Fitzgerald's novel. Starring Leonardo DiCaprio, Carey Mulligan.

// Spring Breakers (2012) | R | 1h 34m | 5.3 rating  
// College girls get involved with a criminal during spring break. Directed by Harmony Korine, starring James Franco, Selena Gomez.

// Stoker (2013) | R | 1h 39m | 6.8 rating  
// A teenage girl becomes suspicious of her mysterious uncle. Directed by Park Chan-wook, starring Mia Wasikowska, Matthew Goode.

// Side Effects (2013) | R | 1h 46m | 7.1 rating  
// A young woman's world unravels when a drug prescribed by her psychiatrist has unexpected side effects. Directed by Steven Soderbergh, starring Rooney Mara, Channing Tatum.

// Mud (2012) | PG-13 | 2h 10m | 7.4 rating  
// Two teenage boys help a fugitive evade bounty hunters. Directed by Jeff Nichols, starring Matthew McConaughey, Tye Sheridan.

// The Place Beyond the Pines (2012) | R | 2h 20m | 7.3 rating  
// A motorcycle stunt rider turns to bank robbery to provide for his family. Directed by Derek Cianfrance, starring Ryan Gosling, Bradley Cooper.

// Birdman (2014) | R | 1h 59m | 7.7 rating  
// A washed-up actor tries to revive his career with a Broadway play. Directed by Alejandro G. Iñárritu, starring Michael Keaton, Emma Stone.

// Boyhood (2014) | R | 2h 45m | 7.9 rating  
// A boy's journey from childhood to college filmed over 12 years. Directed by Richard Linklater, starring Ellar Coltrane, Patricia Arquette.

// Whiplash (2014) | R | 1h 46m | 8.5 rating  
// A young drummer faces an abusive instructor at a prestigious music conservatory. Directed by Damien Chazelle, starring Miles Teller, J.K. Simmons.

// The Grand Budapest Hotel (2014) | R | 1h 39m | 8.1 rating  
// The adventures of a legendary concierge and his protégé. Directed by Wes Anderson, starring Ralph Fiennes, F. Murray Abraham.

// The Theory of Everything (2014) | PG-13 | 2h 3m | 7.7 rating  
// The relationship between Stephen Hawking and his first wife. Directed by James Marsh, starring Eddie Redmayne, Felicity Jones.

// The Imitation Game (2014) | PG-13 | 1h 54m | 8.0 rating  
// Alan Turing helps crack the Enigma code during World War II. Directed by Morten Tyldum, starring Benedict Cumberbatch, Keira Knightley.

// Selma (2014) | PG-13 | 2h 8m | 7.5 rating  
// Martin Luther King Jr. leads a campaign for voting rights. Directed by Ava DuVernay, starring David Oyelowo, Carmen Ejogo.

// American Sniper (2014) | R | 2h 14m | 7.3 rating  
// The story of Navy SEAL sniper Chris Kyle. Directed by Clint Eastwood, starring Bradley Cooper, Sienna Miller.

// Foxcatcher (2014) | R | 2h 14m | 7.0 rating  
// Wrestler Mark Schultz forms a relationship with sponsor John du Pont. Directed by Bennett Miller, starring Steve Carell, Channing Tatum.

// Still Alice (2014) | PG-13 | 1h 41m | 7.5 rating  
// A linguistics professor struggles with early-onset Alzheimer's disease. Directed by Richard Glatzer, Wash Westmoreland, starring Julianne Moore.

// Interstellar (2014) | PG-13 | 2h 49m | 8.6 rating  
// A team of explorers travel through a wormhole in space. Directed by Christopher Nolan, starring Matthew McConaughey, Anne Hathaway.

// Guardians of the Galaxy (2014) | PG-13 | 2h 1m | 8.0 rating  
// A group of intergalactic criminals become unlikely heroes. Directed by James Gunn, starring Chris Pratt, Zoe Saldana.

// Captain America: The Winter Soldier (2014) | PG-13 | 2h 16m | 7.7 rating  
// Steve Rogers faces a new threat from within S.H.I.E.L.D. Directed by Anthony Russo, Joe Russo, starring Chris Evans, Scarlett Johansson.

// X-Men: Days of Future Past (2014) | PG-13 | 2h 12m | 7.9 rating  
// The X-Men send Wolverine back in time to prevent a dystopian future. Directed by Bryan Singer, starring Hugh Jackman, James McAvoy.

// Dawn of the Planet of the Apes (2014) | PG-13 | 2h 10m | 7.6 rating  
// Caesar's ape colony conflicts with human survivors. Directed by Matt Reeves, starring Andy Serkis, Jason Clarke.

// Edge of Tomorrow (2014) | PG-13 | 1h 53m | 7.9 rating  
// A soldier gets caught in a time loop during an alien invasion. Directed by Doug Liman, starring Tom Cruise, Emily Blunt.

// The LEGO Movie (2014) | PG | 1h 40m | 7.7 rating  
// An ordinary LEGO figure is mistakenly identified as the Special. Directed by Phil Lord, Christopher Miller, voiced by Chris Pratt, Elizabeth Banks.

// How to Train Your Dragon 2 (2014) | PG | 1h 42m | 7.8 rating  
// Hiccup and Toothless discover a secret ice cave with hundreds of dragons. Directed by Dean DeBlois, voiced by Jay Baruchel, Cate Blanchett.

// Big Hero 6 (2014) | PG | 1h 42m | 7.8 rating  
// A boy genius and his robot form a superhero team. Directed by Don Hall, Chris Williams, voiced by Ryan Potter, Scott Adsit.

// The Fault in Our Stars (2014) | PG-13 | 2h 6m | 7.7 rating  
// Two teenagers with cancer fall in love. Directed by Josh Boone, starring Shailene Woodley, Ansel Elgort.

// Gone Girl (2014) | R | 2h 29m | 8.1 rating  
// A man becomes the prime suspect when his wife disappears. Directed by David Fincher, starring Ben Affleck, Rosamund Pike.

// Nightcrawler (2014) | R | 1h 57m | 7.8 rating  
// A driven man enters the world of crime journalism in LA. Directed by Dan Gilroy, starring Jake Gyllenhaal, Rene Russo.

// John Wick (2014) | R | 1h 41m | 7.4 rating  
// A retired hitman seeks vengeance for the killing of his dog. Directed by Chad Stahelski, starring Keanu Reeves, Michael Nyqvist.

// Mad Max: Fury Road (2015) | R | 2h | 8.1 rating  
// In a post-apocalyptic wasteland, Max helps Furiosa escape a tyrant. Directed by George Miller, starring Tom Hardy, Charlize Theron.

// Spotlight (2015) | R | 2h 9m | 8.1 rating  
// Journalists investigate widespread child abuse in the Catholic Church. Directed by Tom McCarthy, starring Mark Ruffalo, Michael Keaton.

// The Revenant (2015) | R | 2h 36m | 8.0 rating  
// A frontiersman seeks revenge after being left for dead. Directed by Alejandro G. Iñárritu, starring Leonardo DiCaprio, Tom Hardy.

// Room (2015) | R | 1h 58m | 8.1 rating  
// A woman and her son escape from captivity. Directed by Lenny Abrahamson, starring Brie Larson, Jacob Tremblay.

// Brooklyn (2015) | PG-13 | 1h 51m | 7.5 rating  
// A young Irish woman immigrates to Brooklyn in the 1950s. Directed by John Crowley, starring Saoirse Ronan, Emory Cohen.

// The Big Short (2015) | R | 2h 10m | 7.8 rating  
// The story of the 2008 financial crisis. Directed by Adam McKay, starring Christian Bale, Steve Carell.

// Bridge of Spies (2015) | PG-13 | 2h 22m | 7.6 rating  
// A lawyer negotiates prisoner exchanges during the Cold War. Directed by Steven Spielberg, starring Tom Hanks, Mark Rylance.

// Carol (2015) | R | 1h 58m | 7.2 rating  
// A romance develops between two women in 1950s New York. Directed by Todd Haynes, starring Cate Blanchett, Rooney Mara.

// Ex Machina (2014) | R | 1h 48m | 7.7 rating  
// A programmer tests an android with artificial intelligence. Directed by Alex Garland, starring Domhnall Gleeson, Alicia Vikander.

// Inside Out (2015) | PG | 1h 35m | 8.1 rating  
// The emotions inside a young girl's mind navigate her move to a new city. Directed by Pete Docter, voiced by Amy Poehler, Phyllis Smith.

// Star Wars: The Force Awakens (2015) | PG-13 | 2h 18m | 7.8 rating  
// A new generation faces the First Order thirty years after the Empire's defeat. Directed by J.J. Abrams, starring Daisy Ridley, John Boyega.

// Avengers: Age of Ultron (2015) | PG-13 | 2h 21m | 7.3 rating  
// The Avengers face an artificial intelligence bent on human extinction. Directed by Joss Whedon, starring Robert Downey Jr., Chris Evans.

// Jurassic World (2015) | PG-13 | 2h 4m | 7.0 rating  
// A new theme park with genetically modified dinosaurs goes wrong. Directed by Colin Trevorrow, starring Chris Pratt, Bryce Dallas Howard.

// Ant-Man (2015) | PG-13 | 1h 57m | 7.3 rating  
// A thief becomes a superhero with the ability to shrink in size. Directed by Peyton Reed, starring Paul Rudd, Evangeline Lilly.

// Mission: Impossible – Rogue Nation (2015) | PG-13 | 2h 11m | 7.4 rating  
// Ethan Hunt faces off against a rogue organization. Directed by Christopher McQuarrie, starring Tom Cruise, Rebecca Ferguson.

// Spectre (2015) | PG-13 | 2h 28m | 6.8 rating  
// James Bond uncovers a sinister organization called SPECTRE. Directed by Sam Mendes, starring Daniel Craig, Christoph Waltz.

// The Martian (2015) | PG-13 | 2h 24m | 8.0 rating  
// An astronaut stranded on Mars fights to survive. Directed by Ridley Scott, starring Matt Damon, Jessica Chastain.

// Sicario (2015) | R | 2h 1m | 7.6 rating  
// An FBI agent joins a government task force fighting drug cartels. Directed by Denis Villeneuve, starring Emily Blunt, Benicio del Toro.

// Steve Jobs (2015) | R | 2h 2m | 7.2 rating  
// Three iconic product launches define the life of Steve Jobs. Directed by Danny Boyle, starring Michael Fassbender, Kate Winslet.

// The Danish Girl (2015) | R | 1h 59m | 7.1 rating  
// The story of one of the first known recipients of gender reassignment surgery. Directed by Tom Hooper, starring Eddie Redmayne, Alicia Vikander.

// Creed (2015) | PG-13 | 2h 13m | 7.6 rating  
// Apollo Creed's son trains with Rocky Balboa. Directed by Ryan Coogler, starring Michael B. Jordan, Sylvester Stallone.

// The Hateful Eight (2015) | R | 3h 7m | 7.8 rating  
// Eight strangers seek refuge from a blizzard in a stagecoach stopover. Directed by Quentin Tarantino, starring Samuel L. Jackson, Kurt Russell.

// Straight Outta Compton (2015) | R | 2h 27m | 7.8 rating  
// The rise and fall of rap group N.W.A. Directed by F. Gary Gray, starring O'Shea Jackson Jr., Corey Hawkins.

// Minions (2015) | PG | 1h 31m | 6.4 rating  
// The yellow creatures search for a new evil master. Directed by Kyle Balda, Pierre Coffin, voiced by Sandra Bullock, Jon Hamm.

// Pitch Perfect 2 (2015) | PG-13 | 1h 55m | 6.4 rating  
// The Barden Bellas compete in an international competition. Directed by Elizabeth Banks, starring Anna Kendrick, Rebel Wilson.

// Trainwreck (2015) | R | 2h 5m | 6.2 rating  
// A magazine writer who doesn't believe in monogamy falls for a sports doctor. Directed by Judd Apatow, starring Amy Schumer, Bill Hader.

// Moonlight (2016) | R | 1h 51m | 7.4 rating  
// A young black man grapples with identity and sexuality. Directed by Barry Jenkins, starring Mahershala Ali, Naomie Harris.

// La La Land (2016) | PG-13 | 2h 8m | 8.0 rating  
// A jazz musician and an actress pursue their dreams in Los Angeles. Directed by Damien Chazelle, starring Ryan Gosling, Emma Stone.

// Manchester by the Sea (2016) | R | 2h 17m | 7.8 rating  
// A man returns to his hometown after his brother's death. Directed by Kenneth Lonergan, starring Casey Affleck, Michelle Williams.

// Arrival (2016) | PG-13 | 1h 56m | 7.9 rating  
// A linguist works to communicate with extraterrestrial visitors. Directed by Denis Villeneuve, starring Amy Adams, Jeremy Renner.

// Hell or High Water (2016) | R | 1h 42m | 7.6 rating  
// Two brothers rob banks to save their family ranch. Directed by David Mackenzie, starring Chris Pine, Ben Foster.

// Fences (2016) | PG-13 | 2h 19m | 7.2 rating  
// A working-class African-American man struggles with family and disappointment. Directed by Denzel Washington, starring Denzel Washington, Viola Davis.

// Hacksaw Ridge (2016) | R | 2h 19m | 8.1 rating  
// A conscientious objector serves as a medic in World War II. Directed by Mel Gibson, starring Andrew Garfield, Sam Worthington.

// Lion (2016) | PG-13 | 1h 58m | 8.0 rating  
// A man searches for his birth family in India using Google Earth. Directed by Garth Davis, starring Dev Patel, Nicole Kidman.

// Hidden Figures (2016) | PG | 2h 7m | 7.8 rating  
// African-American women mathematicians help NASA during the Space Race. Directed by Theodore Melfi, starring Taraji P. Henson, Octavia Spencer.

// Captain America: Civil War (2016) | PG-13 | 2h 27m | 7.8 rating  
// Political pressure mounts to control the Avengers. Directed by Anthony Russo, Joe Russo, starring Chris Evans, Robert Downey Jr.

// Doctor Strange (2016) | PG-13 | 1h 55m | 7.5 rating  
// A neurosurgeon discovers the hidden world of magic and alternate dimensions. Directed by Scott Derrickson, starring Benedict Cumberbatch, Chiwetel Ejiofor.

// Rogue One: A Star Wars Story (2016) | PG-13 | 2h 13m | 7.8 rating  
// Rebels attempt to steal the Death Star plans. Directed by Gareth Edwards, starring Felicity Jones, Diego Luna.

// Deadpool (2016) | R | 1h 48m | 8.0 rating  
// A wisecracking mercenary gets superhuman healing powers. Directed by Tim Miller, starring Ryan Reynolds, Morena Baccarin.

// X-Men: Apocalypse (2016) | PG-13 | 2h 24m | 6.9 rating  
// The X-Men face their most powerful enemy yet. Directed by Bryan Singer, starring James McAvoy, Michael Fassbender.`

//   const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 200,
//     chunkOverlap: 20,
//   })
//   data = await splitter.createDocuments([data])
//   return data
// }
// /* Create an embedding from each text chunk.
// Store all embeddings and corresponding text in Supabase. */
// async function createAndStoreEmbeddings() {
//   let chunkData = await splitDocument();
//   console.log(chunkData)
//   chunkData = await Promise.all(chunkData.map(async (d) => {
//     const embedding = await openai.embeddings.create({
//       model: "text-embedding-ada-002", 
//       input: d.pageContent,
//     });
    
//     return {
//       content: d.pageContent,
//       embedding: embedding.data[0].embedding
//     }
//   }))
//   console.log(chunkData)
//   await supabase.from("movies").insert(chunkData)
// }

// createAndStoreEmbeddings()
// console.log("done")