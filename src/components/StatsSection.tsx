import { motion } from "framer-motion";

const stats = [
  { value: "+50", label: "عمل فني", labelFr: "عمل فني" },
  { value: "+20", label: "فنانين", labelFr: "فنانين" },
  { value: "3", label: "أيام", labelFr: "أيام" },
  { value: "خاص", label: "حدث حصري", labelFr: "حدث حصري" },
];

const StatsSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelFr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              {/* 🔴 التعديل هنا: استخدام خط sans-serif أساسي وإضافة dir="ltr" */}
              <span 
                className="text-3xl sm:text-4xl md:text-5xl text-foreground block font-bold"
                style={{ fontFamily: 'system-ui, sans-serif' }}
                dir="ltr"
              >
                {stat.value}
              </span>
              
             <span className="font-body text-[15px] sm:text-sm lg:text-base tracking-[0.2em] text-muted-foreground mt-2 sm:mt-3 lg:mt-4 block uppercase">
    {stat.labelFr}
  </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;