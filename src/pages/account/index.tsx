import Layout from '@/layouts/_layout';
import React, { useState } from 'react';

interface SocialMediaChannel {
  name: string;
  connected: boolean;
  accountId: string;
}

const Account: React.FC = () => {
  const [socialMediaChannels, setSocialMediaChannels] = useState<SocialMediaChannel[]>([
    { name: 'Instagram', connected: false, accountId: '' },
    { name: 'Facebook', connected: false, accountId: '' },
    { name: 'Twitter', connected: false, accountId: '' },
  ]);

  const handleConnection = async (channelName: string) => {
    const channel = socialMediaChannels.find(ch => ch.name === channelName);
    if (!channel) return;

    if (channel.connected) {
      // Handle disconnect logic
      console.log(`Disconnecting from ${channelName}`);
      setSocialMediaChannels(prevChannels =>
        prevChannels.map(ch =>
          ch.name === channelName ? { ...ch, connected: false, accountId: '' } : ch
        )
      );
    } else {
      try {
        // Call the API to prompt the user to log in
        const response = await loginToSocialMedia(channelName); // Replace with actual API call
        // If login is successful, update the state
        if (response.success) {
          console.log(`Connecting to ${channelName}`);
          setSocialMediaChannels(prevChannels =>
            prevChannels.map(ch =>
              ch.name === channelName ? { ...ch, connected: true, accountId: response.accountId } : ch
            )
          );
        } else {
          // Handle failed login attempt
          console.log(`Failed to connect to ${channelName}`);
        }
      } catch (error) {
        console.error(`Error connecting to ${channelName}:`, error);
      }
    }
  };


  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-4 text-white">
          {/* Profile Icon */}
          <div className="flex items-center justify-center w-full max-w-4xl p-4 mx-4 rounded-full">
            {/* Replace this div with an actual profile icon */}
            <div className="w-16 h-16 border-2 border-white rounded-full"></div>
          </div>

          <hr className="my-4 w-full max-w-4xl border-t border-gray-300" />

          <div className="w-full max-w-4xl p-4 mx-4">
            <h1 className="mb-14 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-10 sm:text-2xl">Profile</h1>
            <div className="flex items-center my-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-grow px-4">Aleo Accounts</div>
              <a href="/edit-profile" className="flex-shrink-0">Edit</a>
            </div>
            <div className='py-4'>
              {socialMediaChannels.map((channel, index) => (
                <div key={index} className="flex justify-between items-center my-2 py-1">
                  <div>
                    <h2>{channel.name}</h2>
                    <p>{channel.connected ? 'Connected' : 'Not Connected'}</p>
                  </div>
                  <button
                    className={`py-2 px-4 rounded ${channel.connected ? 'bg-white text-black' : 'bg-transparent border border-white text-white'}`}
                    onClick={() => handleConnection(channel.name)}
                  >
                    {channel.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>


          <button  className="bg-transparent border border-white text-white py-2 px-4 rounded">
            Log out & Disconnect Wallet
          </button>

        </div>
        <div className="flex flex-col items-center justify-center min-h-screen py-4 text-white">
        </div>
      </Layout>

    </>
  );
};

async function loginToSocialMedia(channelName: string) {
  // Mock API call to simulate login process
  // Replace this with your actual API call logic
  console.log(`Logging in to ${channelName}`);
  return new Promise<{ success: boolean; accountId: string }>(resolve => {
    setTimeout(() => {
      resolve({ success: true, accountId: `account-${channelName}` });
    }, 1000);
  });
}

export default Account;

