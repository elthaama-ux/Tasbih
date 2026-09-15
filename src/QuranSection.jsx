
import React, { useState, useEffect, useRef } from 'react';
import './QuranSection.css';

export default function QuranSection({ isDarkMode, onBack }) {
  const [surahs, setSurahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [currentAudioSurah, setCurrentAudioSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const [readingSurah, setReadingSurah] = useState(null);
  const [ayahsText, setAyahsText] = useState([]);
  const [loadingText, setLoadingText] = useState(false);

  const audioRef = useRef(null);

  // جلب قائمة السور مع دعم Offline كلياً
  useEffect(() => {
    const localSurahs = localStorage.getItem('quran_surahs_list');
    if (localSurahs) {
      setSurahs(JSON.parse(localSurahs));
    }

    fetch('https://api.alquran.cloud/v1/surah')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setSurahs(data.data);
          localStorage.setItem('quran_surahs_list', JSON.stringify(data.data));
        }
      })
      .catch((err) => console.log('Working offline mode for surahs list'));
  }, []);

  const getAudioUrl = (surahNumber) => {
    const formattedNum = String(surahNumber).padStart(3, '0');
    return `https://server8.mp3quran.net/afs/${formattedNum}.mp3`;
  };

  useEffect(() => {
    if (!currentAudioSurah || !audioRef.current) return;

    const audio = audioRef.current;
    const url = getAudioUrl(currentAudioSurah.number);

    setIsBuffering(true);
    audio.src = url;
    audio.load();

    audio.play()
      .then(() => {
        setIsPlaying(true);
        setIsBuffering(false);
      })
      .catch(() => {
        setIsPlaying(false);
        setIsBuffering(false);
      });
  }, [currentAudioSurah]);

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.includes(searchTerm) ||
      surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.number.toString() === searchTerm
  );

  const handlePlayAudio = (surah, e) => {
    e.stopPropagation();
    if (currentAudioSurah && currentAudioSurah.number === surah.number) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentAudioSurah(surah);
    }
  };

  // قراءة السورة مع حفظ النص أوفلاين
  const handleReadSurah = (surah, e) => {
    e.stopPropagation();
    setReadingSurah(surah);
    
    const cachedAyahs = localStorage.getItem(`surah_text_${surah.number}`);
    if (cachedAyahs) {
      setAyahsText(JSON.parse(cachedAyahs));
      setLoadingText(false);
      return;
    }

    setLoadingText(true);
    fetch(`https://api.alquran.cloud/v1/surah/${surah.number}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.ayahs) {
          setAyahsText(data.data.ayahs);
          localStorage.setItem(`surah_text_${surah.number}`, JSON.stringify(data.data.ayahs));
        }
        setLoadingText(false);
      })
      .catch(() => {
        setLoadingText(false);
      });
  };

  return (
    <div className={`qs-wrapper ${isDarkMode ? 'dark' : 'light'}`} dir="rtl">
      <section className="qs-section">
        <div style={{ textAlign: 'right', marginBottom: '15px' }}>
          <button 
            onClick={onBack}
            className="qs-back-btn"
            style={{
              backgroundColor: '#ff7f11',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.95rem'
            }}
          >
            ← العودة للسبحة الإلكترونية
          </button>
        </div>

        <div className="qs-section-title">
          <span>المصحف الصوتي والشريف</span>
          <h2>القرآن الكريم كاملاً - قراءة واستماع 📖🎧</h2>
        </div>

        <div className="qs-search-box">
          <input
            type="text"
            className="qs-input"
            placeholder="🔍 ابحث عن اسم السورة أو رقمها..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {currentAudioSurah && (
          <div className="qs-player-bar">
            <div className="qs-player-info">
              <span className="qs-player-badge">
                {isBuffering 
                  ? '⚡ جاري التحميل...' 
                  : isPlaying ? 'جاري التشغيل 🎧' : 'متوقف مؤقتاً ⏸️'}
              </span>
              <h4>{currentAudioSurah.name}</h4>
              <p>القارئ: الشيخ مشاري العفاسي | عدد الآيات: {currentAudioSurah.numberOfAyahs}</p>
            </div>
            
            <audio
              ref={audioRef}
              controls
              preload="metadata"
              className="qs-audio-element"
              onWaiting={() => setIsBuffering(true)}
              onPlaying={() => {
                setIsPlaying(true);
                setIsBuffering(false);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        )}

        <div className="qs-grid">
          {filteredSurahs.map((surah) => {
            const isAudioActive = currentAudioSurah && currentAudioSurah.number === surah.number;
            return (
              <div key={surah.number} className={`qs-card ${isAudioActive ? 'active-surah' : ''}`}>
                <div className="qs-card-header">
                  <span className="qs-surah-num">{surah.number}</span>
                  <span className="qs-surah-type">
                    {surah.revelationType === 'Meccan' ? 'مكية 🕋' : 'مدنية 🕌'}
                  </span>
                </div>
                <div className="qs-card-body">
                  <h3>{surah.name}</h3>
                  <p>{surah.numberOfAyahs} آية</p>
                </div>
                
                <div className="qs-card-actions-row">
                  <button 
                    className={`qs-btn-listen ${isAudioActive && isPlaying ? 'playing' : ''}`}
                    onClick={(e) => handlePlayAudio(surah, e)}
                  >
                    {isAudioActive && isBuffering
                      ? '⚡ تشغيل...'
                      : isAudioActive && isPlaying
                      ? '⏸️ إيقاف'
                      : '🎧 استماع'}
                  </button>
                  <button 
                    className="qs-btn-read"
                    onClick={(e) => handleReadSurah(surah, e)}
                  >
                    📖 قراءة
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {readingSurah && (
        <div className="qs-modal-overlay" onClick={() => setReadingSurah(null)}>
          <div className="qs-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="qs-modal-header">
              <h2>{readingSurah.name}</h2>
              <button className="qs-close-btn" onClick={() => setReadingSurah(null)}>✕</button>
            </div>
            
            {loadingText ? (
              <div className="qs-loading">جاري تحميل الآيات المباركة... ⏳</div>
            ) : (
              <div className="qs-surah-full-text">
                {readingSurah.number !== 1 && readingSurah.number !== 9 && (
                  <div className="qs-basmala">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                )}
                <div className="qs-ayahs-container">
                  {ayahsText.map((ayah) => (
                    <span key={ayah.numberInSurah} className="qs-single-ayah">
                      {ayah.text} <span className="qs-ayah-num">﴿{ayah.numberInSurah}﴾</span>{' '}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}