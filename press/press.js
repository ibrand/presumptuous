import { ProsePlay } from "proseplay";

const poem = `Press(ure|ing juice| |ume)[1]


(Absently|Anxiously| |Patiently)[1] waiting for (cracks to show through|you to come through.| |me to come to)[1]

(Pressure creates the environment for the rarest jewels|Pressing distances me from you| |Presume that we each had a story that was true)[1]
(but I was long checked out of our hotel room|but fuck it I set the table for two| |that sometimes it takes years for softness to bloom)[1]

(Pl| Oranges fall to the ground as I rel| |Back then, I folded flower after flower, found myself in each cr)[1]ease (Do Not Disturb| | | e)[1]`;

const container = document.querySelector(".text");
const pp = new ProsePlay(container);
pp.parse(poem);