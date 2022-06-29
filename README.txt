###########################################################
# Horse's HTML form-fillable Power Scaler character sheet #
###########################################################

Author: Stephen, Will
The Power Scaler system belongs to Owen
Created 31/5/22
Version 1.31

Welcome to my first ever functional HTML, CSS, & JavaScript project. This sheet can be used to keep track of your character's stats, equipment, and other features. Using the save button, you can save any changes you've made. These changes are saved to your browser like a cookie, so if you clear your cache/cookies, you will lose the information you've loaded into this sheet. I plan to fix that at a later date.

How to use:
1) Type in your Name, Codename, Body Type
2) Set your rank and reputation (if applicable)
3) Set your Strands
4) Fill in any Equipment, your Power Description, Kicked Proficiencies, and your Body Feature
5) CLICK SAVE! IF YOU DO NOT CLICK SAVE, THE DATA WILL BE STORED

To customise your character's profile image:
1) Choose an image that has a 1:1 aspect ratio. This is important so it fits in the element.
2) Add the image to the same folder as sheet.html
3) Open sheet.html in your text editor (notepad, notepad++, etc.)
   You will see <img id="headerImg" width="100%" src="defaultpfp.jpg" alt="Character Icon" />
4) Change src="defaultpfp.jpg" to src="filenamehere.png"
5) Save, reload your sheet
    
NEW! How to use the dice:
1) If you are using your kicker(s), click the "Use Kicker?" checkbox
2) Click the strand related to your roll (ex. Brain)
3) The bot will roll and display your result to the right.
   If your output has a ★, you have applied your +1 kicker bonus

Changelog
v1.31 29/6/22: Streamlined JavaScript code, 
v1.3   4/6/22: Changed Strand labels to buttons, implemented a digital dice roller that logs to a list to the right, as well as a kicker proficiency toggle.
v1.2  31/5/22: Fixed a bug where HEAL would wipe the entire document, not just the hitboxes
v1.1  31/5/22: Implemented save to localStorage features.
v1.0  28/4/22: Created HTML layout, created non-saving fillable forms

Future Plans
Clean up HTML & perform general orc-bodge removal
Fix the dice roller output so it doesn't sort weirdly
Change how input data is saved to prevent data loss
Implement better graphics to sheet, maybe customisability
Mobile app?


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣷⣶⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⡟⠁⣰⣿⣿⣿⡿⠿⠻⠿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠏⠀⣴⣿⣿⣿⠉⠀⠀⠀⠀⠀⠈⢻⣿⣿⣇⠀⠀⠀
⠀⠀⠀⠀⢀⣠⣼⣿⣿⡏⠀⢠⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⡀⠀⠀
⠀⠀⠀⣰⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀
⠀⠀⢰⣿⣿⡿⣿⣿⣿⡇⠀⠘⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢀⣸⣿⣿⣿⠁⠀⠀
⠀⠀⣿⣿⣿⠁⣿⣿⣿⡇⠀⠀⠻⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⠃⠀⠀⠀
⠀⢰⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀
⠀⢸⣿⣿⡇⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠉⢉⣿⣿⠀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣇⠀⣿⣿⣿⠀⠀⠀⠀⠀⢀⣤⣤⣤⡀⠀⠀⢸⣿⣿⣿⣷⣦⠀⠀⠀
⠀⠀⢻⣿⣿⣶⣿⣿⣿⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣦⡀⠀⠉⠉⠻⣿⣿⡇⠀⠀
⠀⠀⠀⠛⠿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠈⠹⣿⣿⣇⣀⠀⣠⣾⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣦⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⠿⠋⠉⠛⠋⠉⠉⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁
