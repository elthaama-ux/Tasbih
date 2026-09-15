
// import React, { useState, useEffect } from 'react';
// import './Sebhaty.css';

// const adhkarList = [
//   'سُبْحَانَ اللَّهِ',
//   'الْحَمْدُ لِلَّهِ',
//   'لَا إِلَهَ إِلَّا اللَّهُ',
//   'اللَّهُ أَكْبَرُ',
//   'أَسْتَغْفِرُ اللَّهَ',
//   'الصَّلَاةُ عَلَى النَّبِيِّ',
//   'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
//   'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ'
// ];

// const morningAdhkar = [
//   { id: 1, title: 'آية الكرسي', text: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', repeat: 1 },
//   { id: 2, title: 'سورة الإخلاص', text: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', repeat: 3 },
//   { id: 3, title: 'سورة الفلق', text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', repeat: 3 },
//   { id: 4, title: 'سورة الناس', text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ', repeat: 3 },
//   { id: 5, title: 'دعاء الصباح', text: 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير...', repeat: 1 },
//   { id: 6, title: 'دعاء الصباح الثاني', text: 'اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور', repeat: 1 },
//   { id: 7, title: 'الرضا بالرب والإسلام والنبي', text: 'رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا', repeat: 3 },
//   { id: 8, title: 'الحماية من الضرر', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم', repeat: 3 },
//   { id: 9, title: 'الاستعاذة بكلمات الله', text: 'أعوذ بكلمات الله التامات من شر ما خلق', repeat: 3 },
//   { id: 10, title: 'الاستكفاء بالله', text: 'حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم', repeat: 7 },
//   { id: 11, title: 'سيد الاستغفار', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليَّ، وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت', repeat: 1 },
//   { id: 12, title: 'التسبيح والحمد', text: 'سبحان الله وبحمده', repeat: 100 }
// ];

// const eveningAdhkar = [
//   { id: 1, title: 'آية الكرسي', text: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', repeat: 1 },
//   { id: 2, title: 'سورة الإخلاص', text: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', repeat: 3 },
//   { id: 3, title: 'سورة الفلق', text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', repeat: 3 },
//   { id: 4, title: 'سورة الناس', text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ', repeat: 3 },
//   { id: 5, title: 'دعاء المساء', text: 'أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. ربِّ أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، ربِّ أعوذ بك من الكسل وسوء الكِبَر، ربِّ أعوذ بك من عذاب في النار وعذاب في القبر', repeat: 1 },
//   { id: 6, title: 'دعاء المساء الثاني', text: 'اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير', repeat: 1 },
//   { id: 7, title: 'الرضا بالرب والإسلام والنبي', text: 'رضيت بالله ربًّا، وبالإسلام دينًا، وبمحمد ﷺ نبيًّا', repeat: 3 },
//   { id: 8, title: 'الحماية من الضرر', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم', repeat: 3 },
//   { id: 9, title: 'الاستعاذة بكلمات الله', text: 'أعوذ بكلمات الله التامات من شر ما خلق', repeat: 3 },
//   { id: 10, title: 'الاستكفاء بالله', text: 'حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم', repeat: 7 },
//   { id: 11, title: 'سيد الاستغفار', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليَّ، وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت', repeat: 1 },
//   { id: 12, title: 'التسبيح والحمد', text: 'سبحان الله وبحمده', repeat: 100 }
// ];

// export default function Sebhaty() {
//   const [selectedDhikr, setSelectedDhikr] = useState('الْحَمْدُ لِلَّهِ');
//   const [adhkarMode, setAdhkarMode] = useState('evening');
//   const [theme, setTheme] = useState('dark');
//   const [countsMap, setCountsMap] = useState({
//     'سُبْحَانَ اللَّهِ': 0,
//     'الْحَمْدُ لِلَّهِ': 0,
//     'لَا إِلَهَ إِلَّا اللَّهُ': 0,
//     'اللَّهُ أَكْبَرُ': 0,
//     'أَسْتَغْفِرُ اللَّهَ': 0,
//     'الصَّلَاةُ عَلَى النَّبِيِّ': 0,
//     'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ': 0,
//     'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ': 0
//   });

//   const [isMuted, setIsMuted] = useState(false);
//   const target = 33;
//   const count = countsMap[selectedDhikr] || 0;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//           } else {
//             entry.target.classList.remove('show');
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const hiddenElements = document.querySelectorAll('.sb-scroll-reveal');
//     hiddenElements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [adhkarMode]);

//   // دالة نطق النصوص باستخدام Web Speech API
//   const speakText = (text, e) => {
//     if (e) e.stopPropagation(); // منع التضارب مع نقرات الزر الخارجي
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel(); // إيقاف أي قراءة سابقة
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = 'ar-SA';
//       utterance.rate = 0.9; // سرعة القراءة
//       window.speechSynthesis.speak(utterance);
//     }
//   };

//   const playClickSound = () => {
//     if (isMuted) return;
//     try {
//       const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//       const osc = audioCtx.createOscillator();
//       const gain = audioCtx.createGain();

//       osc.type = 'sine';
//       osc.frequency.setValueAtTime(600, audioCtx.currentTime);
//       osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.04);

//       gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
//       gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);

//       osc.connect(gain);
//       gain.connect(audioCtx.destination);

//       osc.start();
//       osc.stop(audioCtx.currentTime + 0.04);
//     } catch (e) {}
//   };

//   const handleIncrement = () => {
//     playClickSound();
//     if (count < target) {
//       setCountsMap(prev => ({
//         ...prev,
//         [selectedDhikr]: (prev[selectedDhikr] || 0) + 1
//       }));
//     }
//   };

//   const handleDecrement = () => {
//     playClickSound();
//     if (count > 0) {
//       setCountsMap(prev => ({
//         ...prev,
//         [selectedDhikr]: prev[selectedDhikr] - 1
//       }));
//     }
//   };

//   const handleReset = () => {
//     playClickSound();
//     setCountsMap(prev => ({
//       ...prev,
//       [selectedDhikr]: 0
//     }));
//   };

//   const toggleSound = () => setIsMuted(prev => !prev);
//   const toggleTheme = () => {
//     playClickSound();
//     setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   const toggleAdhkarMode = () => {
//     playClickSound();
//     setAdhkarMode(prev => (prev === 'evening' ? 'morning' : 'evening'));
//   };

//   const progressPercent = Math.min(Math.round((count / target) * 100), 100);
//   const remaining = Math.max(target - count, 0);
//   const currentSectionAdhkar = adhkarMode === 'morning' ? morningAdhkar : eveningAdhkar;

//   const whatsappNumber = '201055407049';
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('السلام عليكم، لدي اقتراح/تعديل بخصوص السبحة الإلكترونية')}`;

//   return (
//     <div className={`sb-root ${theme}`} dir="rtl">
//       {/* Header */}
//       <header className="sb-header">
//         <div className="sb-header-inner">
//           <button className={`sb-icon-btn ${isMuted ? 'muted' : ''}`} onClick={toggleSound}>
//             {isMuted ? '🔇' : '🔊'}
//           </button>
//           <div className="sb-brand">
//             <h1 className="sb-main-title">السبحة الإلكترونية</h1>
//           </div>
//           <button className="sb-icon-btn sb-theme-btn" onClick={toggleTheme}>
//             {theme === 'dark' ? '☀️' : '🌙'}
//           </button>
//         </div>
//       </header>

//       <main className="sb-container">
//         {/* Hero Section */}
//         <section className="sb-hero sb-scroll-reveal">
//           <span className="sb-subtitle">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</span>
//           <h2>اجعل لسانك عامرًا بالذكر</h2>
//         </section>

//         {/* Counter Card */}
//         <div className="sb-card sb-counter-card sb-scroll-reveal">
//           <div className="sb-counter-head">
//             <div className="sb-dhikr-badge">
//               <small>الذكر الحالي</small>
//               <div className="sb-dhikr-title-speak">
//                 <h3>{selectedDhikr}</h3>
//                 <button 
//                   className="sb-speak-btn" 
//                   title="استماع" 
//                   onClick={(e) => speakText(selectedDhikr, e)}
//                 >
//                   📢
//                 </button>
//               </div>
//             </div>
//             <div className="sb-target-box">
//               <small>الهدف</small>
//               <strong>{target}</strong>
//             </div>
//           </div>

//           {/* Big Interactive Counter Ring */}
//           <div className="sb-ring-wrapper" onClick={handleIncrement}>
//             <div className="sb-pulse-glow"></div>
//             <svg className="sb-ring-svg">
//               <circle className="sb-ring-bg" cx="100" cy="100" r="85" />
//               <circle
//                 className="sb-ring-val"
//                 cx="100"
//                 cy="100"
//                 r="85"
//                 style={{
//                   strokeDasharray: 534,
//                   strokeDashoffset: 534 - (534 * progressPercent) / 100
//                 }}
//               />
//             </svg>
//             <div className="sb-ring-center">
//               <small>عدد التسبيحات</small>
//               <span key={count} className="sb-count-num sb-pop">{count}</span>
//               <p>اضغط للتسبيح</p>
//             </div>
//           </div>

//           {/* Progress Bar Info */}
//           <div className="sb-progress-info">
//             <span>متبقي {remaining}</span>
//             <span>{progressPercent}%</span>
//           </div>
//           <div className="sb-progress-bar">
//             <div className="sb-progress-fill" style={{ width: `${progressPercent}%` }}></div>
//           </div>

//           {/* Quick Select Buttons */}
//           <div className="sb-dhikr-grid">
//             {adhkarList.map((item, idx) => (
//               <div 
//                 key={idx}
//                 className={`sb-dhikr-btn-wrapper ${selectedDhikr === item ? 'active' : ''}`}
//                 onClick={() => {
//                   playClickSound();
//                   setSelectedDhikr(item);
//                 }}
//               >
//                 <button className="sb-dhikr-btn">
//                   {item}
//                   {countsMap[item] > 0 && <span className="sb-saved-count"> ({countsMap[item]})</span>}
//                 </button>
//                 <button 
//                   className="sb-speak-mini-btn" 
//                   title="استماع" 
//                   onClick={(e) => speakText(item, e)}
//                 >
//                   📢
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Controls */}
//           <div className="sb-controls">
//             <button className="sb-ctrl-btn" onClick={handleIncrement}>+</button>
//             <button className="sb-reset-btn" onClick={handleReset}>↺ تصفير العداد</button>
//             <button className="sb-ctrl-btn" onClick={handleDecrement}>-</button>
//           </div>
//         </div>

//         {/* Dynamic Adhkar Section */}
//         <section className="sb-section sb-scroll-reveal">
//           <div className="sb-section-title">
//             <span>قسم الأذكار اليومية</span>
//             <div className="sb-toggle-header">
//               <h2>{adhkarMode === 'morning' ? 'أذكار الصباح ☀️' : 'أذكار المساء 🌆'}</h2>
//               <button className="sb-toggle-btn" onClick={toggleAdhkarMode}>
//                 الانتقال إلى {adhkarMode === 'morning' ? 'أذكار المساء 🌆' : 'أذكار الصباح ☀️'}
//               </button>
//             </div>
//           </div>

//           <div key={adhkarMode} className="sb-adhkar-list">
//             {currentSectionAdhkar.map((item) => (
//               <div 
//                 className="sb-card sb-adhkar-card sb-scroll-reveal" 
//                 key={item.id}
//                 onClick={playClickSound}
//               >
//                 <div className="sb-adhkar-header">
//                   <h3>{item.title}</h3>
//                   <div className="sb-adhkar-header-actions">
//                     <button 
//                       className="sb-speak-btn" 
//                       title="استماع الذكر"
//                       onClick={(e) => speakText(item.text, e)}
//                     >
//                       📢
//                     </button>
//                     <span className="sb-num-badge">{item.id}</span>
//                   </div>
//                 </div>
//                 <p className="sb-adhkar-text">{item.text}</p>
//                 <div className="sb-adhkar-footer">
//                   <span className="sb-repeat-tag">تقرأ {item.repeat} {item.repeat === 1 ? 'مرة' : 'مرات'}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="sb-footer sb-scroll-reveal">
//         <p>سبحان الله • الحمد لله • الله أكبر</p>
//         <div className="sb-dev-credits">
//           Developed by{' '}
//           <a 
//             href={whatsappLink} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="sb-wa-link"
//           >
//             ENG AHMED YOUSEF
//           </a>
//           <a 
//             href={whatsappLink} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="sb-feedback-hint-link"
//           >
//             <div className="sb-feedback-hint">اضغط هنا لمن لديه أي اقتراح أو تعديل</div>
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import './Sebhaty.css';

const adhkarList = [
  'سُبْحَانَ اللَّهِ',
  'الْحَمْدُ لِلَّهِ',
  'لَا إِلَهَ إِلَّا اللَّهُ',
  'اللَّهُ أَكْبَرُ',
  'أَسْتَغْفِرُ اللَّهَ',
  'الصَّلَاةُ عَلَى النَّبِيِّ',
  'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
  'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ'
];

const morningAdhkar = [
  { id: 1, title: 'آية الكرسي', text: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', repeat: 1 },
  { id: 2, title: 'سورة الإخلاص', text: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', repeat: 3 },
  { id: 3, title: 'سورة الفلق', text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', repeat: 3 },
  { id: 4, title: 'سورة الناس', text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ', repeat: 3 },
  { id: 5, title: 'دعاء الصباح', text: 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير...', repeat: 1 },
  { id: 6, title: 'دعاء الصباح الثاني', text: 'اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور', repeat: 1 },
  { id: 7, title: 'الرضا بالرب والإسلام والنبي', text: 'رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا', repeat: 3 },
  { id: 8, title: 'الحماية من الضرر', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم', repeat: 3 },
  { id: 9, title: 'الاستعاذة بكلمات الله', text: 'أعوذ بكلمات الله التامات من شر ما خلق', repeat: 3 },
  { id: 10, title: 'الاستكفاء بالله', text: 'حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم', repeat: 7 },
  { id: 11, title: 'سيد الاستغفار', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليَّ، وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت', repeat: 1 },
  { id: 12, title: 'التسبيح والحمد', text: 'سبحان الله وبحمده', repeat: 100 }
];

const eveningAdhkar = [
  { id: 1, title: 'آية الكرسي', text: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...', repeat: 1 },
  { id: 2, title: 'سورة الإخلاص', text: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', repeat: 3 },
  { id: 3, title: 'سورة الفلق', text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', repeat: 3 },
  { id: 4, title: 'سورة الناس', text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ', repeat: 3 },
  { id: 5, title: 'دعاء المساء', text: 'أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير. ربِّ أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، ربِّ أعوذ بك من الكسل وسوء الكِبَر، ربِّ أعوذ بك من عذاب في النار وعذاب في القبر', repeat: 1 },
  { id: 6, title: 'دعاء المساء الثاني', text: 'اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير', repeat: 1 },
  { id: 7, title: 'الرضا بالرب والإسلام والنبي', text: 'رضيت بالله ربًّا، وبالإسلام دينًا، وبمحمد ﷺ نبيًّا', repeat: 3 },
  { id: 8, title: 'الحماية من الضرر', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء، وهو السميع العليم', repeat: 3 },
  { id: 9, title: 'الاستعاذة بكلمات الله', text: 'أعوذ بكلمات الله التامات من شر ما خلق', repeat: 3 },
  { id: 10, title: 'الاستكفاء بالله', text: 'حسبي الله لا إله إلا هو، عليه توكلت، وهو رب العرش العظيم', repeat: 7 },
  { id: 11, title: 'سيد الاستغفار', text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليَّ، وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت', repeat: 1 },
  { id: 12, title: 'التسبيح والحمد', text: 'سبحان الله وبحمده', repeat: 100 }
];

const INITIAL_COUNTS = {
  'سُبْحَانَ اللَّهِ': 0,
  'الْحَمْدُ لِلَّهِ': 0,
  'لَا إِلَهَ إِلَّا اللَّهُ': 0,
  'اللَّهُ أَكْبَرُ': 0,
  'أَسْتَغْفِرُ اللَّهَ': 0,
  'الصَّلَاةُ عَلَى النَّبِيِّ': 0,
  'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ': 0,
  'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ': 0
};

export default function Sebhaty() {
  const [selectedDhikr, setSelectedDhikr] = useState('الْحَمْدُ لِلَّهِ');
  const [adhkarMode, setAdhkarMode] = useState('evening');
  const [theme, setTheme] = useState('dark');

  // استرجاع العدادات المحفوظة من localStorage أو استخدام القيم الأولية
  const [countsMap, setCountsMap] = useState(() => {
    const savedCounts = localStorage.getItem('sebhaty_counts');
    return savedCounts ? JSON.parse(savedCounts) : INITIAL_COUNTS;
  });

  const [isMuted, setIsMuted] = useState(false);
  const count = countsMap[selectedDhikr] || 0;

  // حفظ العدادات في localStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('sebhaty_counts', JSON.stringify(countsMap));
  }, [countsMap]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const hiddenElements = document.querySelectorAll('.sb-scroll-reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [adhkarMode]);

  const speakText = (text, e) => {
    if (e) e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const playClickSound = () => {
    if (isMuted) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}
  };

  // تعديل الزيادة لتعمل إلى ما لا نهاية
  const handleIncrement = () => {
    playClickSound();
    setCountsMap(prev => ({
      ...prev,
      [selectedDhikr]: (prev[selectedDhikr] || 0) + 1
    }));
  };

  const handleDecrement = () => {
    playClickSound();
    if (count > 0) {
      setCountsMap(prev => ({
        ...prev,
        [selectedDhikr]: prev[selectedDhikr] - 1
      }));
    }
  };

  const handleReset = () => {
    playClickSound();
    setCountsMap(prev => ({
      ...prev,
      [selectedDhikr]: 0
    }));
  };

  const toggleSound = () => setIsMuted(prev => !prev);
  const toggleTheme = () => {
    playClickSound();
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleAdhkarMode = () => {
    playClickSound();
    setAdhkarMode(prev => (prev === 'evening' ? 'morning' : 'evening'));
  };

  const currentSectionAdhkar = adhkarMode === 'morning' ? morningAdhkar : eveningAdhkar;

  const whatsappNumber = '201055407049';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('السلام عليكم، لدي اقتراح/تعديل بخصوص السبحة الإلكترونية')}`;

  return (
    <div className={`sb-root ${theme}`} dir="rtl">
      {/* Header */}
      <header className="sb-header">
        <div className="sb-header-inner">
          <button className={`sb-icon-btn ${isMuted ? 'muted' : ''}`} onClick={toggleSound}>
            {isMuted ? '🔇' : '🔊'}
          </button>
          <div className="sb-brand">
            <h1 className="sb-main-title">السبحة الإلكترونية</h1>
          </div>
          <button className="sb-icon-btn sb-theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="sb-container">
        {/* Hero Section */}
        <section className="sb-hero sb-scroll-reveal">
          <span className="sb-subtitle">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</span>
          <h2>اجعل لسانك عامرًا بالذكر</h2>
        </section>

        {/* Counter Card */}
        <div className="sb-card sb-counter-card sb-scroll-reveal">
          <div className="sb-counter-head">
            <div className="sb-dhikr-badge">
              <small>الذكر الحالي</small>
              <div className="sb-dhikr-title-speak">
                <h3>{selectedDhikr}</h3>
                <button 
                  className="sb-speak-btn" 
                  title="استماع" 
                  onClick={(e) => speakText(selectedDhikr, e)}
                >
                  📢
                </button>
              </div>
            </div>
            <div className="sb-target-box">
              <small>الإجمالي</small>
              <strong>{count}</strong>
            </div>
          </div>

          {/* Big Interactive Counter Ring */}
          <div className="sb-ring-wrapper" onClick={handleIncrement}>
            <div className="sb-pulse-glow"></div>
            <svg className="sb-ring-svg">
              <circle className="sb-ring-bg" cx="100" cy="100" r="85" />
              <circle
                className="sb-ring-val"
                cx="100"
                cy="100"
                r="85"
                style={{
                  strokeDasharray: 534,
                  strokeDashoffset: 0
                }}
              />
            </svg>
            <div className="sb-ring-center">
              <small>عدد التسبيحات</small>
              <span key={count} className="sb-count-num sb-pop">{count}</span>
              <p>اضغط للتسبيح</p>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="sb-dhikr-grid">
            {adhkarList.map((item, idx) => (
              <div 
                key={idx}
                className={`sb-dhikr-btn-wrapper ${selectedDhikr === item ? 'active' : ''}`}
                onClick={() => {
                  playClickSound();
                  setSelectedDhikr(item);
                }}
              >
                <button className="sb-dhikr-btn">
                  {item}
                  {countsMap[item] > 0 && <span className="sb-saved-count"> ({countsMap[item]})</span>}
                </button>
                <button 
                  className="sb-speak-mini-btn" 
                  title="استماع" 
                  onClick={(e) => speakText(item, e)}
                >
                  📢
                </button>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="sb-controls">
            <button className="sb-ctrl-btn" onClick={handleIncrement}>+</button>
            <button className="sb-reset-btn" onClick={handleReset}>↺ تصفير العداد</button>
            <button className="sb-ctrl-btn" onClick={handleDecrement}>-</button>
          </div>
        </div>

        {/* Dynamic Adhkar Section */}
        <section className="sb-section sb-scroll-reveal">
          <div className="sb-section-title">
            <span>قسم الأذكار اليومية</span>
            <div className="sb-toggle-header">
              <h2>{adhkarMode === 'morning' ? 'أذكار الصباح ☀️' : 'أذكار المساء 🌆'}</h2>
              <button className="sb-toggle-btn" onClick={toggleAdhkarMode}>
                الانتقال إلى {adhkarMode === 'morning' ? 'أذكار المساء 🌆' : 'أذكار الصباح ☀️'}
              </button>
            </div>
          </div>

          <div key={adhkarMode} className="sb-adhkar-list">
            {currentSectionAdhkar.map((item) => (
              <div 
                className="sb-card sb-adhkar-card sb-scroll-reveal" 
                key={item.id}
                onClick={playClickSound}
              >
                <div className="sb-adhkar-header">
                  <h3>{item.title}</h3>
                  <div className="sb-adhkar-header-actions">
                    <button 
                      className="sb-speak-btn" 
                      title="استماع الذكر"
                      onClick={(e) => speakText(item.text, e)}
                    >
                      📢
                    </button>
                    <span className="sb-num-badge">{item.id}</span>
                  </div>
                </div>
                <p className="sb-adhkar-text">{item.text}</p>
                <div className="sb-adhkar-footer">
                  <span className="sb-repeat-tag">تقرأ {item.repeat} {item.repeat === 1 ? 'مرة' : 'مرات'}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sb-footer sb-scroll-reveal">
        <p>سبحان الله • الحمد لله • الله أكبر</p>
        <div className="sb-dev-credits">
          Developed by{' '}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="sb-wa-link"
          >
            ENG AHMED YOUSEF
          </a>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sb-feedback-hint-link"
          >
            <div className="sb-feedback-hint">اضغط هنا لمن لديه أي اقتراح أو تعديل</div>
          </a>
        </div>
      </footer>
    </div>
  );
}