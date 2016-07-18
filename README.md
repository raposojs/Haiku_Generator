Haiku Generator

By Bruno Raposo

==============================================================================

What is Haiku?

Haiku (俳句) (plural haiku) is a very short form of Japanese poetry. 


It is typically characterised by three qualities:

o The essence of haiku is "cutting" (kiru). This is often represented by the juxtaposition of two images or ideas and a kireji ("cutting word") between them, a kind of verbal punctuation mark which signals the moment of separation and colours the manner in which the juxtaposed elements are related.

o Traditional haiku consist of 17 on (also known as morae though often loosely translated as "syllables"), in three phrases of 5, 7, and 5 on respectively.

o A kigo (seasonal reference), usually drawn from a saijiki, an extensive but defined list of such words.

    
Modern Japanese haiku (現代俳句 gendai-haiku?) are increasingly unlikely to follow the tradition of 17 on or
to take nature as their subject, but the use of juxtaposition continues to be honored in both
traditional and modern haiku. There is a common, although relatively recent, perception that the images
juxtaposed must be directly observed everyday objects or occurrences.

==============================================================================

How to use program

The "Haiku Generator" was written using JavaScript in conjunction with Node.js to make use of the I/O functionality. The I/O functionality was necessary to fetch data from the "library" (CMUDICT.txt).
To generate your own Haiku, all that is necessary is to input an array as a property of the function createHaiku.

For example:

    createHaiku([[5],[7],[5]])

        returns --> DIGUGLIELMO
                    FEBRUARY
                    PROMISCUITY

    createHaiku([[2,3],[1,2,3,2],[1,1,2,1]])
                   ^-5-----^-7-------^-5

        returns --> CULTURE WARSHAUER
                    BORTZ DOMINGUE CENTURIES WILDMAN
                    GUNN FLIES KNIPPER BEARE

Keep in mind that Haikus have a "5 - 7 - 5" syllable structure.

==============================================================================


If any bug/glitch is encountered, feel free to contact me!

Enjoy!
