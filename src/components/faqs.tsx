import * as React from 'react';

class Faqs extends React.Component<any, any> {
  render() {
    return (
      <section id="Faqs">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>Do I have to share my location while creating a profile?
              <p>Spotter is a location based social networking app. It uses current location to create SpottCards. It also helps you to find out SpottCards created near that location. So yes, you have to share your location while creating a profile as the theme is essentially travel-based.</p>
            </li>
            <li>What is the privacy filter?
              <p>It allows you to decide whether you want to share your location with your SpottBuddies or not. You can either turn it on or off, at any given time.</p>
            </li>
            <li>What happens when the privacy filter is on?
              <p>Once you turn on the privacy filter, your SpottBuddies cannot call you, email you or share your SpottCards. It safely hides your current location. It also prevents people from seeing your SpottBuddies list as well as your SpottCard updates on their SpottFeed.</p>
            </li>
            <li>Who are SpottBuddies?
              <p>People added in each other's phonebook are the only ones eligible to become SpottBuddies, your trusted friends on Spotter. No one-sided friendships here, thereby keeping stalkers at bay.</p>
            </li>
            <li>Who can see my Spotter profile?
              <p>The Spotter app has an up-to-date security system that ensures you have a stalker-free interface. Only those people who have your number saved in their contact list, with you having their number in yours as well, will be able to see and contact you on Spotter. We call them SpottBuddies.</p>
            </li>
            <li>How do I prevent someone from seeing my updates?
              <p>Go to Profile>Edit Profile>Privacy On, this will turn on your privacy  OR  you could simply delete the person from your phone's contact list, this way they can no longer access your profile or contact you in any way on Spotter.</p>
            </li>
            <li>Where do I change my Spotter status?
              <p>Open your profile and tap the 'edit' option. Scroll down to the status text field and change the 'I am on spotter' to whatever you wish to write.</p>
            </li>
            <li>What is Buzz?
              <p>When you like an activity, to show that you like it, you Buzz it.</p>
            </li>
            <li>How do I create a SpottCard? 
              <p>Go to Profile>SpottCards>Plus icon on top right. Select location>Enter Title>Enter Keywords>Select either a picture/video/Spotticon/voice-note/web-link or text>Done</p>
            </li>
            <li>What is a Spotticon?
              <p>It is a type of SpottCard where you can select an emoji and post it as a whole card, you can also call it your mood card. For example, if you are feeling goofy then simply select a goofy card and the rest of the procedure remains the same as any other SpottCard.</p>
            </li>
            <li>Can I tag friends in my SpottCard?
              <p>Yes, when creating a SpottCard, just tap the "add-buddies" option to add all the friends that you want to share it with.</p>
            </li>
            <li>Can I edit my SpottCard once it is shared?
              <p>No. You can only delete a SpottCard and create a fresh one. SpottCards cannot be edited, once shared.</p>
            </li>
            <li>Why can't I call my friend on Spotter?
              <p>It means that their privacy filter is on.</p>
            </li>
            <li>Can I call from Spotter for free?
              <p>No. Normal call charges shall apply while making calls via Spotter.</p>
            </li>
            <li>I received a Spottification! What does this mean?
              <p>Spottification is the name given to your Spotter notifications. Whenever a Spottbuddy buzzes your SpottCard, tags you in one or in a trail, the app sends you a Spottification. It is basically any moment that is directly shared with you!</p>
            </li>
            <li>How is a Spottification different from a SpottFeed?
              <p>A SpottFeed is a general, collective and constant update of all the SpottCards that you and your SpottBuddies create on Spotter, whereas a Spottification is sent when a post is directly shared with you, it is more one to one.</p>
            </li>
            <li>What is a Trail?
              <p>This is an overview of an entire journey, from start to end. It shows all the marked locations from your trip, wherever you shared an activity from, in a sequence of SpottCards. It serves as a trip log that can be viewed by your SpottBuddies too.</p>
            </li>
            <li>Can I edit my trail?
              <p>Yes. You can always edit an existing trail. However, you cannot delete one.</p>
            </li>
            <li>Where do I view the Spotts?
              <p>All your shared Spotts are available for you to view in the 'Spotts' option. This can be accessed once you open your profile>Explore> and click on the Spotter icon on the right.</p>
            </li>
            <li>What does the Nearby feature do?
              <p>The Nearby option allows you to view SpottCards created close to your current location! However, when you view a SpottBuddies' Nearby option, it shows you SpottCards near their current location, created by your friends.</p>
            </li>
            <li>Why doesn’t Spotter show my accurate current location?
              <p>Spotter doesn’t pull your location continuously. It only changes your location when it has changed substantially.</p>
            </li>
            <li>How can I send feedback?
              <p>You can send an email to <a href="mailto:info@spotter.buzz">info@spotter.buzz</a></p>
            </li>
            <li>Can I report inappropriate content on Spotter?
              <p>You can and you must! Spotter is all for a safe, secure and comfortable experience for its users. To report an activity, tap on the menu on top right, in the SpottCard details.</p>
            </li>
          </ul>      
        </div>
      </section>
    );    
  }
}

export default Faqs;
