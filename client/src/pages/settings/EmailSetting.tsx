import React, { useState } from 'react'

const EmailSetting: React.FC = () => {

    const [email, setEmail] = useState("rawatadii060@gmail.com");
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <div className="min-h-screen w-full text-white">
            <h1 className="text-3xl font-semibold mb-2">Email Settings</h1>
            <p className="text-gray-400 mb-8">Manage your email and notification preferences</p>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold mb-4">Email notifications include:</h2>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <span className="h-2 w-2 mt-2 rounded-full bg-theme"></span>
                        <p>
                            <span className="font-semibold">Post reviews</span> - Get notified when your posts are reviewed by our curators
                        </p>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="h-2 w-2 mt-2 rounded-full bg-theme"></span>
                        <p>
                            <span className="font-semibold">Comments</span> - Stay updated when someone comments on your posts
                        </p>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="h-2 w-2 mt-2 rounded-full bg-theme"></span>
                        <p>
                            <span className="font-semibold">New challenges</span> - Discover exciting new challenges that match your interests
                        </p>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="h-2 w-2 mt-2 rounded-full bg-theme"></span>
                        <p>
                            <span className="font-semibold">Social media features</span> - Know when we share your amazing work on our social media
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <label className="block mb-2 text-sm font-medium">Email address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-md bg-zinc-900 text-white border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-theme"
                />
                <p className="text-gray-500 text-sm mt-1">
                    We respect your privacy and will never share your email with third parties or send you marketing emails.
                </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-theme rounded-full peer peer-checked:bg-theme relative">
                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></span>
                    </div>
                </label>
                <span className="text-white font-medium">Receive email notifications</span>
            </div>

            <button className="bg-theme text-white px-6 py-2 rounded font-semibold transition">
                Save changes
            </button>
        </div>
    );
}

export default EmailSetting