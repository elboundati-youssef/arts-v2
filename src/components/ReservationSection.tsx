import { useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from "framer-motion";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import darkTexture from "@/assets/dark-texture.jpg"; 

// ==========================================
// 1. إضافة profession إلى Zod Schema
// ==========================================
const schema = z.object({
  name: z.string().min(2, "الاسم الكامل مطلوب"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  profession: z.string().optional(), // 🔴 تمت إضافة المهنة هنا
});

type FormData = z.infer<typeof schema>;

const ReservationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [ticketData, setTicketData] = useState<any>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {}
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('http://localhost/conceptify/backend-arts-exposition/api/reserve.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          profession: data.profession, // 🔴 إرسال المهنة للباك اند
        }),
      });

      const result = await response.json();

      if (result.success) {
        setTicketData(result.ticket); 
        setIsSubmitted(true); 

        setTimeout(() => {
          downloadPDF(data.name);
        }, 500);

      } else {
        setServerError(result.message || "حدث خطأ أثناء التسجيل.");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setServerError("تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadPDF = async (visitorName: string) => {
    const element = document.getElementById('ticket-pdf-template');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a5'); 
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Ticket_VIP_${visitorName}.pdf`);
    } catch (err) {
      console.error("Erreur lors de la génération du PDF", err);
    }
  };

  return (
    <section id="reservation" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden font-komomken">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={darkTexture} 
          alt="" 
          className="w-full h-full object-cover" 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0a1628]/90" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12 sm:mb-20" dir="rtl">
                <span className="text-sm tracking-widest text-white/80 mb-3 sm:mb-4 block">
                  حجز خاص
                </span>
             <h2 className="font-heading text-[#d4af37] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
                  تجربة حصرية
                </h2>
                <p className="text-white/90 text-base sm:text-lg max-w-lg mx-auto">
                  احجز مقعدك في أمسية الافتتاح الحصرية واستمتع بتجربة فنية لا تُنسى
                </p>

                {serverError && (
                  <div className="mt-6 p-3 bg-red-500/10 border border-red-500/50 rounded text-[#ff4444] text-sm text-center">
                    {serverError}
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 sm:space-y-12"
                dir="rtl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  
                  {/* حقل الاسم */}
                  <div className="flex flex-col gap-1">
                    <label className="block text-sm sm:text-base text-white/90 mb-1">الاسم الكامل</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                  </div>

                  {/* حقل البريد الإلكتروني */}
                  <div className="flex flex-col gap-1">
                    <label className="block text-sm sm:text-base text-white/90 mb-1">البريد الإلكتروني</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                      placeholder="email@example.com"
                      dir="ltr"
                      // 🔴 أضفنا هذا السطر لإجبار الحقل على استخدام خط النظام العادي
                      style={{ fontFamily: 'system-ui, sans-serif' }}
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                  </div>

                  {/* حقل رقم الهاتف */}
                  <div className="flex flex-col gap-1">
                    <label className="block text-sm sm:text-base text-white/90 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg"
                      placeholder="+212 600 000 000"
                      dir="ltr"
                      // 🔴 وأضفنا نفس السطر هنا أيضاً
                      style={{ fontFamily: 'system-ui, sans-serif' }}
                    />
                    {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                  </div>

                  {/* ========================================== */}
                  {/* 🔴 حقل المهنة / المجال الجديد (Select) */}
                  {/* ========================================== */}
                  <div className="flex flex-col gap-1">
                    <label className="block text-sm sm:text-base text-white/90 mb-1">المهنة / المجال</label>
                    <select
                      {...register('profession')}
                      // كلاسات متناسقة مع باقي الحقول + تمييز الـ options بخلفية داكنة
                      className="w-full bg-transparent border-0 border-b border-white/40 px-0 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-0 transition-colors duration-300 text-base sm:text-lg cursor-pointer [&>option]:bg-[#0a1628]"
                    >
                      <option value="">اختر المجال (اختياري)</option>
                      <option value="Architecture">معمار</option>
                      <option value="Design">تصميم داخلي</option>
                      <option value="Affaires">أعمال</option>
                      <option value="Art">فن</option>
                      <option value="Autre">أخرى</option>
                    </select>
                  </div>
                  
                </div>

                <div className="text-center pt-6 sm:pt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`inline-flex items-center justify-center px-10 py-3.5 sm:px-16 sm:py-4 font-medium text-[15px] sm:text-lg transition-all duration-300 shadow-lg rounded-full ${
                      isSubmitting 
                        ? 'bg-gray-500 text-white cursor-not-allowed' 
                        : 'bg-[#d4af37] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                    }`}
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الحجز'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="flex flex-col items-center text-center gap-6 py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              dir="rtl"
            >
              <h2 className="font-heading text-4xl sm:text-5xl text-white">تم تأكيد الحجز بنجاح ✨</h2>
              <p className="text-lg sm:text-xl text-[#d4af37] italic">
                ننتظر حضوركم الاستثنائي في قصر الفنون والثقافة
              </p>
              <p className="text-white/80 mt-4">
                جاري تحميل تذكرة الخاصة بك...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* التذكرة المخفية للـ PDF */}
      <div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
        {ticketData && (
          <div 
            id="ticket-pdf-template" 
            className="w-[600px] p-10 border-4" 
            style={{ direction: 'rtl', backgroundColor: '#0a1628', color: '#ffffff', borderColor: '#d4af37', fontFamily: 'serif' }}
          >
            <div className="text-center border-b-2 border-dashed pb-6 mb-8" style={{ borderColor: '#d4af37' }}>
              <h1 className="text-5xl m-0" style={{ color: '#d4af37' }}>تقاطعات الرؤى</h1>
              <p className="mt-3 text-sm" style={{ color: '#cccccc' }}>تذكرة حصرية</p>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>الاسم الكامل:</span>
                <span className="font-bold">{ticketData.name}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>رقم الهاتف:</span>
                <span dir="ltr">{ticketData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>المهنة / المجال:</span>
                <span>{ticketData.profession || 'غير محدد'}</span>
              </div>
              <div className="flex justify-between mt-6 pt-6 border-t" style={{ borderColor: '#d4af37' }}>
                <span style={{ color: '#d4af37' }}>التاريخ:</span>
                <span>11 - 13 أبريل 2026</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#d4af37' }}>المكان:</span>
                <span>قصر الفنون والثقافة، طنجة</span>
              </div>
            </div>

            {ticketData.qrCodeUrl && (
              <div className="mt-10 text-center flex flex-col items-center justify-center">
                <div style={{ padding: '5px', backgroundColor: '#ffffff', borderRadius: '4px', display: 'inline-block', marginBottom: '8px' }}>
                  <img src={ticketData.qrCodeUrl} alt="QR Code" crossOrigin="anonymous" className="w-32 h-32" />
                </div>
                <p className="text-xs tracking-widest mt-2 uppercase" style={{ color: '#888888', letterSpacing: '2px' }}>
                  {ticketData.ticketNumber}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

    </section>
  );
};

export default ReservationSection;