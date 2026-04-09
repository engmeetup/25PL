// A collection of mathematical/physics/chemistry problem generators
// These functions use random parameters to generate INFINITE variations of questions continually.
const questionGenerators = [
    // 1. Projectile Motion (Physics)
    () => {
        const vOptions = [20, 30, 40, 50, 60, 80, 100];
        const v = vOptions[Math.floor(Math.random() * vOptions.length)];
        const correctTime = v / 10;
        return {
            en: {
                question: `What is the time of flight of an object projected at an angle of 30° to the horizontal with a velocity of ${v} m s⁻¹? (Assume g = 10 m s⁻²)`,
                answers: [
                    { text: `${correctTime} s`, correct: true },
                    { text: `${correctTime + 1} s`, correct: false },
                    { text: `${correctTime - 1 > 0 ? correctTime - 1 : correctTime + 2} s`, correct: false }
                ]
            },
            si: {
                question: `තිරසට 30° ක කෝණයකින් ${v} m s⁻¹ ප්‍රවේගයෙන් ප්‍රක්ෂේපණය කළ වස්තුවක පියාසර කාලය කොපමණද? (g = 10 m s⁻² යැයි සලකන්න)`,
                answers: [
                    { text: `තත්පර ${correctTime} යි`, correct: true },
                    { text: `තත්පර ${correctTime + 1} යි`, correct: false },
                    { text: `තත්පර ${correctTime - 1 > 0 ? correctTime - 1 : correctTime + 2} යි`, correct: false }
                ]
            },
            ta: {
                question: `கிடைக்கு 30° கோணத்தில் ${v} m s⁻¹ வேகத்துடன் வீசப்பட்ட ஒரு பொருளின் பறக்கும் நேரம் என்ன? (g = 10 m s⁻² எனக்கொள்க)`,
                answers: [
                    { text: `${correctTime} வினாடிகள்`, correct: true },
                    { text: `${correctTime + 1} வினாடிகள்`, correct: false },
                    { text: `${correctTime - 1 > 0 ? correctTime - 1 : correctTime + 2} வினாடிகள்`, correct: false }
                ]
            }
        };
    },
    // 2. Turning points (Combined Maths)
    () => {
        const h = Math.floor(Math.random() * 5) + 1; // 1 to 5
        const c = Math.floor(Math.random() * 10) + 1;
        const correctRoot = 2 * h;
        return {
            en: {
                question: `What are the x-coordinates of the turning points of the curve y = x³ - ${3*h}x² + ${c}?`,
                answers: [
                    { text: `0 and ${correctRoot}`, correct: true },
                    { text: `0 and -${correctRoot}`, correct: false },
                    { text: `1 and ${correctRoot + 1}`, correct: false }
                ]
            },
            si: {
                question: `y = x³ - ${3*h}x² + ${c} වක්‍රයේ හැරුම් ලක්ෂ්‍ය වල x ඛණ්ඩාංක මොනවාද?`,
                answers: [
                    { text: `0 සහ ${correctRoot}`, correct: true },
                    { text: `0 සහ -${correctRoot}`, correct: false },
                    { text: `1 සහ ${correctRoot + 1}`, correct: false }
                ]
            },
            ta: {
                question: `y = x³ - ${3*h}x² + ${c} என்ற வளைவரையின் திருப்பப் புள்ளிகளின் x-ஆள்கூறுகள் யாவை?`,
                answers: [
                    { text: `0 மற்றும் ${correctRoot}`, correct: true },
                    { text: `0 மற்றும் -${correctRoot}`, correct: false },
                    { text: `1 மற்றும் ${correctRoot + 1}`, correct: false }
                ]
            }
        };
    },
    // 3. Moles at STP (Chemistry)
    () => {
        const mulOptions = [0.25, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0, 5.0];
        const moles = mulOptions[Math.floor(Math.random() * mulOptions.length)];
        const volume = (moles * 22.4).toFixed(2).replace(".00", "");
        return {
            en: {
                question: `What is the number of moles contained in ${volume} dm³ of an ideal gas at STP? (Assume molar volume at STP is 22.4 dm³ mol⁻¹)`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles + 0.5} mol`, correct: false },
                    { text: `${moles > 1 ? (moles - 0.5) : (moles + 1.0)} mol`, correct: false }
                ]
            },
            si: {
                question: `STP හිදී පරිපූර්ණ වායුවක් ${volume} dm³ පරිමාවක් තුළ අඩංගු මවුල ගණන කොපමණද? (STP හිදී මවුලික පරිමාව 22.4 dm³ mol⁻¹ යැයි සලකන්න)`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles + 0.5} mol`, correct: false },
                    { text: `${moles > 1 ? (moles - 0.5) : (moles + 1.0)} mol`, correct: false }
                ]
            },
            ta: {
                question: `STP இல் ஒரு இலட்சிய வாயுவின் ${volume} dm³ கனஅளவில் உள்ள மோல்களின் எண்ணிக்கை என்ன? (STP இல் மோலார் கனஅளவு 22.4 dm³ mol⁻¹ எனக்கொள்க)`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles + 0.5} mol`, correct: false },
                    { text: `${moles > 1 ? (moles - 0.5) : (moles + 1.0)} mol`, correct: false }
                ]
            }
        };
    },
    // 4. Force, Mass, Acceleration (Physics)
    () => {
        const mass = Math.floor(Math.random() * 10 + 2); // 2 to 11
        const acc = Math.floor(Math.random() * 8 + 2); // 2 to 9
        const force = mass * acc;
        return {
            en: {
                question: `What is the force required to accelerate a mass of ${mass} kg from rest to an acceleration of ${acc} m s⁻²?`,
                answers: [
                    { text: `${force} N`, correct: true },
                    { text: `${force + mass} N`, correct: false },
                    { text: `${Math.abs(force - acc) > 0 ? Math.abs(force - acc) : force + acc + 5} N`, correct: false }
                ]
            },
            si: {
                question: `${mass} kg ස්කන්ධයක් මත නිශ්චලතාවයේ සිට නියත බලයක් යෙදූ විට, එයට ${acc} m s⁻² ක ත්වරණයක් ලබාදීමට නම්, යෙදිය යුතු බලය කොපමණද?`,
                answers: [
                    { text: `${force} N`, correct: true },
                    { text: `${force + mass} N`, correct: false },
                    { text: `${Math.abs(force - acc) > 0 ? Math.abs(force - acc) : force + acc + 5} N`, correct: false }
                ]
            },
            ta: {
                question: `ஓய்வில் உள்ள ${mass} kg திணிவுடைய ஒரு பொருளுக்கு ${acc} m s⁻² ஆர்முடுகலை வழங்க, பிரயோகிக்க வேண்டிய மாறா விசை என்ன?`,
                answers: [
                    { text: `${force} N`, correct: true },
                    { text: `${force + mass} N`, correct: false },
                    { text: `${Math.abs(force - acc) > 0 ? Math.abs(force - acc) : force + acc + 5} N`, correct: false }
                ]
            }
        };
    },
    // 5. AP Series (Maths)
    () => {
        const a = Math.floor(Math.random() * 5) + 2; 
        const d = Math.floor(Math.random() * 5) + 2;
        const n = Math.floor(Math.random() * 10) + 10; // 10 to 19
        const tn = a + (n - 1) * d;
        return {
            en: {
                question: `What is the ${n}th term of an arithmetic progression with first term ${a} and common difference ${d}?`,
                answers: [
                    { text: `${tn}`, correct: true },
                    { text: `${tn + d}`, correct: false },
                    { text: `${tn - d}`, correct: false }
                ]
            },
            si: {
                question: `මුල් පදය ${a} සහ පොදු අන්තරය ${d} වූ සමාන්තර ශ්‍රේඪියක ${n} වන පදය කොපමණද?`,
                answers: [
                    { text: `${tn}`, correct: true },
                    { text: `${tn + d}`, correct: false },
                    { text: `${tn - d}`, correct: false }
                ]
            },
            ta: {
                question: `முதல் உறுப்பு ${a} மற்றும் பொது வித்தியாசம் ${d} கொண்ட ஒரு கூட்டல் விருத்தியின் ${n} வது உறுப்பு என்ன?`,
                answers: [
                    { text: `${tn}`, correct: true },
                    { text: `${tn + d}`, correct: false },
                    { text: `${tn - d}`, correct: false }
                ]
            }
        };
    },
    // 6. Concentration (Chemistry)
    () => {
        const moldm3 = [0.1, 0.2, 0.4, 0.5, 1.0, 2.0];
        const conc = moldm3[Math.floor(Math.random() * moldm3.length)];
        const vol = 500; // cm3
        const moles = (conc * vol) / 1000;
        return {
            en: {
                question: `What is the number of moles of NaOH in a ${vol} cm³ aqueous solution with a concentration of ${conc} mol dm⁻³?`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles * 10} mol`, correct: false },
                    { text: `${(moles / 2).toFixed(2).replace(".00","")} mol`, correct: false }
                ]
            },
            si: {
                question: `${vol} cm³ ක පරිමාවක් ඇති ජලීය ද්‍රාවණයක, NaOH සාන්ද්‍රණය ${conc} mol dm⁻³ වේ නම්, එහි ඇති NaOH මවුල ගණන කොපමණද?`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles * 10} mol`, correct: false },
                    { text: `${(moles / 2).toFixed(2).replace(".00","")} mol`, correct: false }
                ]
            },
            ta: {
                question: `${vol} cm³ கனஅளவுள்ள நீர்க்கரைசலில், NaOH செறிவானது ${conc} mol dm⁻³ ஆக இருந்தால், அதில் உள்ள NaOH மோல்களின் எண்ணிக்கை என்ன?`,
                answers: [
                    { text: `${moles} mol`, correct: true },
                    { text: `${moles * 10} mol`, correct: false },
                    { text: `${(moles / 2).toFixed(2).replace(".00","")} mol`, correct: false }
                ]
            }
        };
    },
    // 7. Kinetic Energy (Physics)
    () => {
        const mass = Math.floor(Math.random() * 4 + 1) * 2; // 2, 4, 6, 8
        const v = Math.floor(Math.random() * 5 + 2); // 2 to 6
        const ke = 0.5 * mass * v * v;
        return {
            en: {
                question: `What is the kinetic energy of an object of mass ${mass} kg moving with a constant velocity of ${v} m s⁻¹?`,
                answers: [
                    { text: `${ke} J`, correct: true },
                    { text: `${ke * 2} J`, correct: false },
                    { text: `${0.5 * mass * (v + 1) * (v + 1)} J`, correct: false }
                ]
            },
            si: {
                question: `ස්කන්ධය ${mass} kg වන වස්තුවක් ${v} m s⁻¹ ක නියත ප්‍රවේගයෙන් ගමන් කරයි නම්, එහි චාලක ශක්තිය කොපමණද?`,
                answers: [
                    { text: `${ke} J`, correct: true },
                    { text: `${ke * 2} J`, correct: false },
                    { text: `${0.5 * mass * (v + 1) * (v + 1)} J`, correct: false }
                ]
            },
            ta: {
                question: `${mass} kg திணிவுள்ள ஒரு பொருள் ${v} m s⁻¹ என்ற நிலையான வேகத்தில் நகரும் போது, அதன் இயக்கச் சக்தி என்ன?`,
                answers: [
                    { text: `${ke} J`, correct: true },
                    { text: `${ke * 2} J`, correct: false },
                    { text: `${0.5 * mass * (v + 1) * (v + 1)} J`, correct: false }
                ]
            }
        };
    },
    // 8. Roots of Quadratic Equation (Maths)
    () => {
        const a = Math.floor(Math.random() * 5) + 1; // 1 to 5
        const b = Math.floor(Math.random() * 5) + 6; // 6 to 10
        const sum = a + b;
        const prod = a * b;
        return {
            en: {
                question: `What are the roots of the quadratic equation x² - ${sum}x + ${prod} = 0?`,
                answers: [
                    { text: `${a} and ${b}`, correct: true },
                    { text: `${a} and -${b}`, correct: false },
                    { text: `-${a} and ${b}`, correct: false }
                ]
            },
            si: {
                question: `x² - ${sum}x + ${prod} = 0 වර්ගජ සමීකරණයේ මූලයන් මොනවාද?`,
                answers: [
                    { text: `${a} සහ ${b}`, correct: true },
                    { text: `${a} සහ -${b}`, correct: false },
                    { text: `-${a} සහ ${b}`, correct: false }
                ]
            },
            ta: {
                question: `x² - ${sum}x + ${prod} = 0 என்ற இருபடிச் சமன்பாட்டின் மூலங்கள் யாவை?`,
                answers: [
                    { text: `${a} மற்றும் ${b}`, correct: true },
                    { text: `${a} மற்றும் -${b}`, correct: false },
                    { text: `-${a} மற்றும் ${b}`, correct: false }
                ]
            }
        };
    },
    // 9. Work Done (Physics)
    () => {
        const force = Math.floor(Math.random() * 5 + 2) * 10; // 20 to 60
        const dist = Math.floor(Math.random() * 5 + 2); // 2 to 6
        const work = force * dist;
        return {
            en: {
                question: `When a constant force of ${force} N displaces an object by ${dist} m in the direction of the force, the work done is:`,
                answers: [
                    { text: `${work} J`, correct: true },
                    { text: `${work + force} J`, correct: false },
                    { text: `${(force / dist).toFixed(0)} J`, correct: false }
                ]
            },
            si: {
                question: `${force} N ක නියත බලයක් යෙදීමෙන් වස්තුවක් බලයේ දිශාවට ${dist} m දුරක් විස්ථාපනය කළ විට, කළ කාර්යය වනුයේ,`,
                answers: [
                    { text: `${work} J`, correct: true },
                    { text: `${work + force} J`, correct: false },
                    { text: `${(force / dist).toFixed(0)} J`, correct: false }
                ]
            },
            ta: {
                question: `${force} N மாறா விசையைப் பிரயோகித்து, ஒரு பொருளை விசையின் திசையிலேயே ${dist} m இடப்பெயர்ச்சி அடையச் செய்தால், செய்யப்பட்ட வேலை:`,
                answers: [
                    { text: `${work} J`, correct: true },
                    { text: `${work + force} J`, correct: false },
                    { text: `${(force / dist).toFixed(0)} J`, correct: false }
                ]
            }
        };
    },
    // 10. Limits (Maths)
    () => {
        const a = Math.floor(Math.random() * 6) + 2; // 2 to 7
        return {
            en: {
                question: `What is the limit of (x² - ${a * a}) / (x - ${a}) as x ⟶ ${a}?`,
                answers: [
                    { text: `${2 * a}`, correct: true },
                    { text: `${a * a}`, correct: false },
                    { text: `${a}`, correct: false }
                ]
            },
            si: {
                question: `x ⟶ ${a} වන විට, (x² - ${a * a}) / (x - ${a}) හි සීමාව (limit) කොපමණද?`,
                answers: [
                    { text: `${2 * a}`, correct: true },
                    { text: `${a * a}`, correct: false },
                    { text: `${a}`, correct: false }
                ]
            },
            ta: {
                question: `x ⟶ ${a} ஆகும்போது, (x² - ${a * a}) / (x - ${a}) இன் எல்லை (limit) என்ன?`,
                answers: [
                    { text: `${2 * a}`, correct: true },
                    { text: `${a * a}`, correct: false },
                    { text: `${a}`, correct: false }
                ]
            }
        };
    }
];

let selectedQuestion;
let currentLang = 'si';

const translations = {
    en: {
        title: "Polonnaruwa Engineering Meetup 2025",
        subtitle: "Test your knowledge and find the venue",
        challenge: "CHALLENGE",
        wrongAns: "Incorrect answer. Please try again!",
        wrongAnsReload: "Incorrect answer. You will be given a new question...",
        successTitle: "Excellent!",
        successMsg: "Answer is correct. Click the button below to view the venue of our meetup.",
        viewVenue: "View Venue",
        fontClass: "font-sans"
    },
    si: {
        title: "පොළොන්නරුව ඉංජිනේරු හමුව 2025",
        subtitle: "ඔබගේ දැනුම උරගා බලා ස්ථානය දැනගන්න",
        challenge: "CHALLENGE",
        wrongAns: "පිළිතුර වැරදියි. කරුණාකර නැවත උත්සාහ කරන්න!",
        wrongAnsReload: "පිළිතුර වැරදියි. ඔබට වෙනත් ප්‍රශ්නයක් ලබාදේවි...",
        successTitle: "විශිෂ්ටයි!",
        successMsg: "පිළිතුර නිවැරදියි. පහත බොත්තම ඔබා අපගේ හමුව පැවැත්වෙන ස්ථානයට පිවිසෙන්න.",
        viewVenue: "ස්ථානය බලන්න",
        fontClass: "font-sinhala"
    },
    ta: {
        title: "பொலன்னறுவை பொறியியல் சந்திப்பு 2025",
        subtitle: "உங்கள் அறிவைச் சோதித்து இடத்தைக் கண்டறியவும்",
        challenge: "CHALLENGE",
        wrongAns: "தவறான பதில். தயவுசெய்து மீண்டும் முயற்சிக்கவும்!",
        wrongAnsReload: "தவறான பதில். உங்களுக்கு புதிய கேள்வி வழங்கப்படும்...",
        successTitle: "மிகச் சிறப்பு!",
        successMsg: "பதில் சரியானது. சந்திப்பு இடத்தை காண கீழே உள்ள பொத்தானைக் கிளிக் செய்யவும்.",
        viewVenue: "இடத்தைக் காண்க",
        fontClass: "font-sans"
    }
};

function selectLanguage(lang) {
    currentLang = lang;
    
    // Apply translations to UI elements
    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('main-subtitle').innerText = translations[lang].subtitle;
    document.getElementById('challenge-text').innerText = translations[lang].challenge;
    document.getElementById('error-msg').innerText = translations[lang].wrongAns;
    document.getElementById('success-title').innerText = translations[lang].successTitle;
    document.getElementById('success-msg').innerText = translations[lang].successMsg;
    document.getElementById('btn-text').innerText = translations[lang].viewVenue;
    
    // Switch fonts based on language
    const elementsToUpdateFont = [
        'main-title', 'main-subtitle', 'question-text', 
        'error-msg', 'success-title', 'success-msg', 'btn-text'
    ];
    elementsToUpdateFont.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.classList.remove('font-sinhala', 'font-sans');
            el.classList.add(translations[lang].fontClass);
        }
    });

    document.getElementById('options-container').className = `flex flex-col gap-3 ${translations[lang].fontClass}`;

    // Hide lang selection, show main app
    document.getElementById('lang-selection-container').classList.add('hidden');
    document.getElementById('main-app-container').classList.remove('hidden');
    
    // Generate the first quiz question with the selected language
    initQuiz();
}

function initQuiz() {
    // Pick a random generator to dynamically create a new question
    const randomGen = questionGenerators[Math.floor(Math.random() * questionGenerators.length)];
    const questionObj = randomGen();
    selectedQuestion = questionObj[currentLang] || questionObj['en']; // default to en if missing

    // Shuffle answers so they don't appear in the same order
    selectedQuestion.answers.sort(() => Math.random() - 0.5);

    // Display Question
    document.getElementById('question-text').innerText = selectedQuestion.question;
    
    // Display Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    selectedQuestion.answers.forEach((answer) => {
        const btn = document.createElement('button');
        // Advanced styling with hover and active states
        btn.className = 'option-btn w-full text-left bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/5 rounded-xl p-4 transition-all duration-200 text-slate-200 group flex items-center justify-between shadow-sm focus:outline-none';
        
        btn.innerHTML = `
            <span class="text-base md:text-lg font-medium drop-shadow-sm">${answer.text}</span>
            <div class="indicator w-6 h-6 rounded-full border-2 border-slate-500/50 group-hover:border-cyan-400 bg-transparent transition-colors duration-300 flex items-center justify-center shrink-0 ml-2">
                <div class="inner-dot w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-0 transition-opacity duration-300"></div>
            </div>
        `;
        
        btn.onclick = () => checkAnswer(answer.correct, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(isCorrect, btnElement) {
    const errorMsg = document.getElementById('error-msg');
    const container = document.getElementById('quiz-container');
    const successContainer = document.getElementById('success-container');
    
    // Reset styling for all buttons
    document.querySelectorAll('.option-btn').forEach(el => {
        el.classList.remove('border-red-500/50', 'bg-red-500/10', 'border-green-500/50', 'bg-green-500/10', 'text-white', 'pointer-events-none');
        
        const ind = el.querySelector('.indicator');
        if (ind) {
            ind.classList.remove('border-red-500', 'border-green-500');
        }
        
        const dot = el.querySelector('.inner-dot');
        if (dot) {
            dot.classList.remove('opacity-100', 'bg-red-500', 'bg-green-500');
        }
    });

    const ind = btnElement.querySelector('.indicator');
    const dot = btnElement.querySelector('.inner-dot');

    if (isCorrect) {
        // Handle correct answer
        errorMsg.classList.add('hidden');
        
        // Add success styles
        btnElement.classList.add('border-green-500/50', 'bg-green-500/10', 'text-white');
        ind.classList.add('border-green-500');
        ind.classList.remove('group-hover:border-cyan-400');
        dot.classList.add('bg-green-500', 'opacity-100');
        dot.classList.remove('bg-cyan-400');
        
        // Disable other buttons temporarily
        document.querySelectorAll('.option-btn').forEach(el => {
            el.classList.add('pointer-events-none');
        });

        // Trigger confetti effect
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#06b6d4', '#8b5cf6', '#22c55e']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#06b6d4', '#8b5cf6', '#22c55e']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
        
        // Fade out quiz and show success view
        setTimeout(() => {
            container.style.opacity = '0';
            setTimeout(() => {
                container.classList.add('hidden');
                successContainer.classList.remove('hidden');
                successContainer.classList.add('flex');
            }, 300);
        }, 1000);

    } else {
        // Handle wrong answer
        btnElement.classList.add('border-red-500/50', 'bg-red-500/10');
        ind.classList.add('border-red-500');
        ind.classList.remove('group-hover:border-cyan-400');
        dot.classList.add('bg-red-500', 'opacity-100');
        dot.classList.remove('bg-cyan-400');
        
        errorMsg.innerText = translations[currentLang].wrongAnsReload;
        errorMsg.classList.remove('hidden');
        
        // Trigger shake effect
        container.classList.remove('shake');
        void container.offsetWidth; // Trigger DOM reflow
        container.classList.add('shake');

        // Disable all buttons so user cannot try again on this question
        document.querySelectorAll('.option-btn').forEach(el => {
            el.classList.add('pointer-events-none');
        });

        // Load new question after 2 seconds
        setTimeout(() => {
            errorMsg.classList.add('hidden');
            // reset error message text for any future UI needs
            errorMsg.innerText = translations[currentLang].wrongAns;
            
            // Generate entirely new question
            initQuiz();
            
            // reset shake
            container.classList.remove('shake');
        }, 2000);
    }
}

// Function to generate floating engineering icons
function createFloatingIcons() {
    const icons = [
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
        '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>'
    ];

    const container = document.createElement('div');
    container.className = 'fixed inset-0 overflow-hidden pointer-events-none z-0';
    document.body.prepend(container);

    const iconCount = 20;
    
    for (let i = 0; i < iconCount; i++) {
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'absolute text-cyan-400 floating-icon';
        
        const iconSVG = icons[Math.floor(Math.random() * icons.length)];
        iconWrapper.innerHTML = iconSVG;
        
        const size = Math.floor(Math.random() * 35) + 20;
        iconWrapper.style.width = `${size}px`;
        iconWrapper.style.height = `${size}px`;
        
        iconWrapper.style.left = `${Math.random() * 100}vw`;
        iconWrapper.style.bottom = `-100px`;
        
        const duration = Math.random() * 40 + 30; // 30s to 70s
        const delay = Math.random() * -70; // Negative delay for immediate distribution
        
        iconWrapper.style.animation = `floatUp ${duration}s linear ${delay}s infinite`;
        container.appendChild(iconWrapper);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Only load background animations first
    createFloatingIcons();
    // Do NOT call initQuiz() immediately. We wait for user to select a language.
});
