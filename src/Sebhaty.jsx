

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

const generalDuas = [
  { id: 1, title: 'دعاء الثبات والإعانة', text: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', repeat: 3 },
  { id: 2, title: 'دعاء صلاح الشأن', text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', repeat: 1 },
  { id: 3, title: 'دعاء الهدى والعفاف', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى', repeat: 3 },
  { id: 4, title: 'دعاء تفريج الهم والحزن', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجَبَنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', repeat: 1 },
  { id: 5, title: 'دعاء طلب العفو', text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', repeat: 3 },
  { id: 6, title: 'دعاء خير الدارين', text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', repeat: 3 }
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

export default function Sebhaty({ onNavigateToQuran }) {
  const [selectedDhikr, setSelectedDhikr] = useState('الْحَمْدُ لِلَّهِ');
  const [adhkarMode, setAdhkarMode] = useState('evening');
  const [theme, setTheme] = useState('dark');
  const [visitorsCount, setVisitorsCount] = useState(120);

  const [countsMap, setCountsMap] = useState(() => {
    try {
      const savedCounts = localStorage.getItem('sebhaty_counts');
      return savedCounts ? JSON.parse(savedCounts) : INITIAL_COUNTS;
    } catch (e) {
      return INITIAL_COUNTS;
    }
  });

  const [isMuted, setIsMuted] = useState(false);
  const count = countsMap[selectedDhikr] || 0;

  useEffect(() => {
    try {
      const storedVisits = localStorage.getItem('sebhaty_visitors_count');
      const initialCount = storedVisits ? parseInt(storedVisits, 10) : 120;
      const updatedCount = initialCount + 1;
      localStorage.setItem('sebhaty_visitors_count', updatedCount.toString());
      setVisitorsCount(updatedCount);
    } catch (e) {
      setVisitorsCount(120);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sebhaty_counts', JSON.stringify(countsMap));
    } catch (e) {}
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

          {/* Interactive Counter Ring */}
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

        {/* General Duas Section */}
        <section className="sb-section sb-scroll-reveal" style={{ marginTop: '40px' }}>
          <div className="sb-section-title">
            <span>قسم الأدعية الجامِعة</span>
            <h2>أدعية مأثورة ومستجابة 🤲</h2>
          </div>

          <div className="sb-adhkar-list">
            {generalDuas.map((item) => (
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
                      title="استماع الدعاء"
                      onClick={(e) => speakText(item.text, e)}
                    >
                      📢
                    </button>
                    <span className="sb-num-badge">{item.id}</span>
                  </div>
                </div>
                <p className="sb-adhkar-text">{item.text}</p>
                <div className="sb-adhkar-footer">
                  <span className="sb-repeat-tag">يكرر {item.repeat} {item.repeat === 1 ? 'مرة' : 'مرات'}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* زر الانتقال إلى قسم القرآن الكريم */}
        <section className="sb-section sb-scroll-reveal" style={{ marginTop: '50px', textAlign: 'center' }}>
          <div className="sb-card sb-quran-banner-card">
            <h2>المصحف الصوتي والقراءة الكامل 📖</h2>
            <p>استمع إلى القرآن الكريم كاملاً بصوت الشيخ حسن صالح</p>
            <button 
              className="sb-goto-quran-btn"
              onClick={() => {
                playClickSound();
                if (onNavigateToQuran) onNavigateToQuran();
              }}
            >
              انقر هنا للقرآن الكريم 📖
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sb-footer sb-scroll-reveal">
        <div className="sb-footer-phrases">
          <span className="sb-phrase-1">سبحان الله • الحمد لله</span>
          <span>•</span>
          <span className="sb-phrase-2">الله أكبر</span>
        </div>

        {/* عداد الزوار */}
        <div className="sb-visitors-badge">
          👁️ عدد زوار الموقع: <span>{visitorsCount !== null ? visitorsCount : 'جاري التحميل...'}</span>
        </div>

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
            <div className="sb-feedback-hint">
              <svg className="sb-wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.332 5.006L2 22l5.127-1.343c1.472.803 3.136 1.227 4.881 1.227 5.507 0 9.989-4.478 9.989-9.984 0-2.668-1.039-5.176-2.928-7.063C17.18 2.951 14.673 2 12.012 2zm0 18.163c-1.492 0-2.952-.401-4.225-1.157l-.303-.18-3.137.822.837-3.058-.198-.314c-.832-1.325-1.272-2.865-1.272-4.444 0-4.502 3.663-8.163 8.166-8.163 2.181 0 4.233.849 5.776 2.393 1.543 1.544 2.392 3.596 2.392 5.778 0 4.502-3.664 8.163-8.163 8.163z"/>
              </svg>
              اضغط هنا للدردشة مع الدعم الفني وتنسيق التعديلات
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}