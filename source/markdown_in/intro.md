# React Enigma Simulator

This project is meant to simulate an Enigma machine, a World War II-era machine that could decode and encode messages, with the machine's functions repicated in JavaScript and an interface built in React.

## What's an Enigma machine?

In a nutshell, an Enigma machine creates a substitution cipher -- one letter takes the place of another -- except the substitution changes every time a character in the message is entered.

The machine itself looked a bit like an an oversized portable typewriter and included a keyboard. However, actuating a key caused a letter on the letterboard to light up rather than to print a letter on paper.

The encoding mechanism was both electrical and mechanical, with three slots into which a user could place a rotor with all 26 letters on the rim. These rotors crosswired one letter to another -- eg. it might enter the rotor as a *a* and exit the rotor as a *k*. 

A signal created by a keypress would trace a circuit path through the three rotors and be assigned a new, randomized value on enter and exit, six times total. 

Further randomization occurred each time a letter was entered. The first rotor would rotate one position. A full rotation would move the second rotor one notch. Likewise for the second and third rotors, like an odometer.

Additionally, a plugboard allowed the user to specifically cross connect letters. The result was more than 500 trillion possible machine setups. To decode a message, the user would need to set up their machine the same as the machine on which the message was encoded. 

Code books contained a setup for each day's messages. They were encoded with this setup and sent out to users to be decoded using the same setup. Capturing a code book did little good without a machine. 

A detailed explanation of an Engima machine and how it works can be found [here][1].

## How do I use this?

This step is to set up the machine. Setups included: 
* Which of six unique rotors were to be used and the slot they were placed
* The starting position of the rotors 
* The locking ring position of the rotors, which advanced or de-advanced the rotor values and set the rotation point for the adjacent rotor.
* Which letters were crosswired on the plugboard.

Likewise, this simulator requires these setups. To best see how an Engima machine encoded and decoded, 
* Set up the rotors and the plugboard values
* Save the machine settings
* Encode your message and capture the encoded result
* Load your saved machine settings
* Enter your coded message 

A few caveats. It's not an exact simulation in that the "crosswiring" of the rotors, while random, are not the same values as the orginal machines. 

[1]:https://www.cryptomuseum.com/crypto/enigma/working.htm

## Why did I make it?

The Enigma machine was used by the Germans -- let's just be honest here, Nazis -- to handle coded messages on the battlefield and was a key factor in their ability to quickly mobilize and coordinate their attacks. So, there's that.

I'm not passing moral judgment by making this. The Enigma was a pioneering computing device in and of itself. More importantly, the Allied effort to decode Enigma messages, led by Alan Turing, led to the creation of the first true computer, Colossus and laid the groundwork for modern computing.

As student of history and technology, the Enigma has long facinated me. As a student of React, it was a coding challenge beyond the notes apps that I had been making. 

