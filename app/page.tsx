'use client';

import { useState } from 'react';

const questions = [
  "1. Turned in an assignment minutes before the deadline?",
  "2. Forgot to click submit on bCourses and missed the deadline?",
  "3. Wore Berkeley merch to the airport?",
  "4. Took a class because it fit your schedule, not because you were interested in it?",
  "5. Pet a dog on Sproul during finals week therapy sessions?",
  "6. Saw a Berkeley squirrel steal someone's food?",
  "7. Never stepped on the Berkeley seal?",
  "8. Helped a tourist find Sather Gate when they were lost?",
  "9. Took an Instagram photo at the Campanile during sunset?",
  "10. Fell asleep during a lecture?",
  "11. Forgot to bring ID to Moffit?",
  "12. Avoided Sproul tablers by pretending to be on a phone call?",
  "13. Lost your Cal ID more than once and had to replace it?",
  "14. Heard a professor roast Stanford during a lecture?",
  "15. Rubbed the 4.0 Ball before finals?",
  "16. Sat on the 4.0 Hill hoping for good grades?",
  "17. Been to a concert at the Greek Theater?",
  "18. Finished a class without going to any lectures?",
  "19. Dropped a class after the first lecture?",
  "20. Gone to a Big Game?",
  "21. Got food poisoning from Asian Ghetto?",
  "22. Took a nap on the Glade?",
  "23. Got rejected by a consulting club?",
  "24. Changed your major at least once?",
  "25. Got below 50% on a midterm or final exam?",
  "26. Argued with a GSI over partial credit on a test?",
  "27. Took a class Pass/No Pass to avoid hurting your GPA?",
  "28. Did a coffee chat at Strada?",
  "29. Participated in a protest or rally on Sproul Plaza?",
  "30. Googled \"how to drop out of college\" after a midterm?",
  "31. Had a lab partner crush and flirted during experiments?",
  "32. Tried every boba place on Telegraph and ranked them?",
  "33. Waited an hour in line for a club's boba fundraiser?",
  "34. Found a random bike wheel locked up without the bike?",
  "35. Played chess at the Chess Club tables on Telegraph?",
  "36. Went to the Berkeley Botanical Garden for date vibes?",
  "37. Went on a date at Cheeseboard Pizza or Berkeley Marina?",
  "38. Saw a deer northside?",
  "39. Hit by an electric skateboard, scooter, or bike?",
  "40. Ridden an electric skateboard or scooter?",
  "41. Been harassed by a homeless person?",
  "42. Got locked out of your dorm or apartment in pajamas?",
  "43. Enrolled in a class just for the grade curve?",
  "44. Had your Stanford application rejected?",
  "45. Dropped or withdrew from a class after Week 10?",
  "46. Talked to Billie, known as the \"X man\", on Sproul?",
  "47. Had a confession approved and posted to Calfessions?",
  "48. Took free leftovers from a club event and called it dinner?",
  "49. Switched discussion sections just to get an easier GSI?",
  "50. Studied abroad?",
  "51. Pulled an all-nighter studying at Moffitt Library?",
  "52. Got stood up at a Telegraph boba date?",
  "53. Left a party just to eat at Taco Bell Cantina?",
  "54. Took a party bus to SF?",
  "55. Dated someone from another UC campus?",
  "56. Been in a situationship for an entire semester?",
  "57. Took a selfie with Oski?",
  "58. Watched someone try to tightrope walk between trees at the glade?",
  "59. Participated in 4/20 festivities?",
  "60. Debated or argued with a conspiracy theorist on Sproul?",
  "61. Been walked in on by a roommate or suitemate?",
  "62. Had a dormcest relationship?",
  "63. Got caught with a fake ID?",
  "64. Pre-gamed too hard and missed the party entirely?",
  "65. Been to the Tang Center to test for an STD?",
  "66. Been to the Tang Center to be diagnosed with depression or anxiety?",
  "67. Ran from a noise complaint before UCPD showed up?",
  "68. Got rejected from a frat party because it was \"brothers-only\"?",
  "69. Pregamed at a frat house on Channing or Piedmont?",
  "70. Befriended someone just to use them for homeworks?",
  "71. Used Chegg, CourseHero, or Slader to finish homework?",
  "72. Missed a midterm or final due to oversleeping or forgetting?",
  "73. Accidentally joined a graduate-level seminar and didn't realize until halfway?",
  "74. Rushed the field after a Big Game?",
  "75. Joined a fraternity or sorority?",
  "76. Dated someone in AFX?  ",
  "77. Got kicked out of a bar in Downtown Berkeley?",
  "78. Hooked up with someone from your study group?",
  "79. Had a study buddy turn into a romantic partner?",
  "80. Got into an argument over politics on the first date?",
  "81. Touched the Stanford Axe?",
  "82. Got caught cheating and played innocent?",
  "83. Walked home barefoot or lost your shoes after a party?",
  "84. Sneaked out a Tupperware full of food from a Dining Hall?",
  "85. Stolen food from a dining hall?",
  "86. Took someone else's DoorDash/GrubHub order from the lobby?",
  "87. Dated someone purely because they were in a tech consulting club?",
  "88. Got recruited for a startup idea during a tabling event?",
  "89. Ghosted someone you met in a DeCal?",
  "90. Broke something valuable at a frat party and ran?",
  "91. Participated in the naked run?",
  "92. Committed an act of vandalism on university property?",
  "93. Explored the Steam Tunnels?",
  "94. Shotgunned a beer at the Campanile?",
  "95. Hooked up with someone in a co-op or dorm lounge?",
  "96. Hooked up with someone at a Theta Chi or Zete party?",
  "97. Took a Berkeley Bar Crawl (e.g., Raleigh's, Kip's, Tap Haus)?",
  "98. Matched with a classmate or GSI on Hinge or Tinder?",
  "99. Hooked up with someone while their roommate was asleep nearby?",
  "100. Committed an act of vandalism on university property?"
];

export default function Home() {
  const [score, setScore] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const calculateScore = () => {
    const checked = checkedItems.filter(item => item).length;
    const purityScore = 100 - Math.round((checked / questions.length) * 100);
    setScore(purityScore);
    setShowResults(true);
  };

  const resetTest = () => {
    setCheckedItems(new Array(questions.length).fill(false));
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <main className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-6">Berkeley Purity Test</h1>
          
          <p className="mb-3 text-xl">
            Inspired by the Rice Purity Test and the <a href="https://berkeleypuritytest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Berkeley Purity Test</a> from 2021, this is an updated version of the test. No more kiwi bots, 
            People's Park, but same old stupid ass clubs and X man on Sproul. Reflect on your Berkeley journey so far and start making that bucket list to finish all these experiences
             before you get finally get that piece of paper you've clearly worked so hard for.
          </p>

          <p className="mb-6 italic text-xl font-bold">
            Caution: This is not a bucket list. Completion of all items on this test may result in becoming a campus legend.
          </p>

          <p className="font-bold text-xl">
            Click on every item you have done.
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`question-${index}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheck(index)}
                    className="w-5 h-5"
                  />
                  <label htmlFor={`question-${index}`} className="text-xl font-medium">
                    {question}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={calculateScore}
              className="mt-8 w-1/2 mx-auto block bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition font-bold text-xl"
            >
              Calculate My Score
            </button>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Your Berkeley Purity Score:</h2>
            <p className="text-6xl font-bold text-blue-600">{score}%</p>
            <p className="text-lg">
              {score > 90 ? "You're practically a Berkeley virgin!" :
               score > 70 ? "You're a typical Berkeley student!" :
               score > 50 ? "You've had quite the Berkeley experience!" :
               "You're a Berkeley legend (or menace)!"}
            </p>
            <button
              onClick={resetTest}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Take Test Again
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
