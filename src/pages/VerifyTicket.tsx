import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import darkTexture from "@/assets/dark-texture.jpg"; 

const VerifyTicket = () => {
  const [status, setStatus] = useState<'loading' | 'valid' | 'invalid'>('loading');
  const [guestData, setGuestData] = useState<any>(null);

  useEffect(() => {
    // استخراج رقم التذكرة من الرابط
    const params = new URLSearchParams(window.location.search);
    const ticketId = params.get('ticket');

    if (!ticketId) {
      setStatus('invalid');
      return;
    }

    // 🔴 الاتصال بالباك اند (غيّر هذا الرابط عند رفع الموقع)
    const API_URL = `http://localhost/conceptify/backend-arts-exposition/api/verify.php?ticket=${ticketId}`;

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        if (data.valid) {
          setGuestData(data.guest);
          setStatus('valid');
        } else {
          setStatus('invalid');
        }
      })
      .catch((error) => {
        console.error("Verification Error:", error);
        setStatus('invalid');
      });
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 font-komomken" dir="rtl">
      
      {/* ========================================= */}
      {/* 🔴 الخلفية الداكنة الفخمة */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src={darkTexture} 
          alt="" 
          className="w-full h-full object-cover" 
          aria-hidden="true" 
        />
        <div className="absolute inset-0 bg-[#0a1628]/95" />
      </div>

      {/* ========================================= */}
      {/* 🔴 بطاقة التحقق المضيئة */}
      {/* ========================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#0a1628]/80 backdrop-blur-md border border-[#d4af37]/30 p-10 max-w-md w-full rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center"
      >
        
        {/* حالة التحميل */}
        {status === 'loading' && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin" />
            <div className="text-[#d4af37] text-xl font-heading animate-pulse mt-4">
              جاري التحقق من التذكرة...
            </div>
          </div>
        )}

        {/* حالة التذكرة الصالحة */}
        {status === 'valid' && guestData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading text-white mb-2">تذكرة صالحة</h2>
            <p className="text-green-400/80 mb-8 tracking-widest text-xs sm:text-sm uppercase">تم التحقق بنجاح</p>
            
            <div className="bg-[#060e1a] p-5 border border-[#d4af37]/20 rounded-md text-right space-y-5">
              <div>
                <span className="text-[#d4af37]/70 text-xs tracking-wider block mb-1">الاسم الكامل</span>
                <span className="font-bold text-xl text-white block">{guestData.name}</span>
              </div>
              
              {/* 🔴 تم إزالة الشبكة (Grid) وعدد المدعوين والإبقاء على المهنة فقط */}
              <div className="border-t border-[#d4af37]/10 pt-4">
                <span className="text-[#d4af37]/70 text-xs tracking-wider block mb-1">المهنة / المجال</span>
                <span className="text-white/90 font-medium block">{guestData.profession || 'غير محدد'}</span>
              </div>

              <div className="border-t border-[#d4af37]/10 pt-4">
                <span className="text-[#d4af37]/70 text-xs tracking-wider block mb-1">رقم الهاتف</span>
                <span className="text-white/90 font-medium block" dir="ltr" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  {guestData.phone}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* حالة التذكرة المزيفة أو غير الصالحة */}
        {status === 'invalid' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="w-20 h-20 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading text-white mb-3">تذكرة غير صالحة</h2>
            <p className="text-white/60 text-sm leading-relaxed mt-4 bg-red-500/10 p-4 rounded border border-red-500/20">
              عذراً، هذا الرقم غير مسجل في قاعدة بيانات المعرض، أو أنه قد تم استخدام التذكرة مسبقاً.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyTicket;