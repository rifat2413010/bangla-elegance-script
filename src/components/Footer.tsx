import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-10 bg-primary relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-1/2 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            className="text-primary-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold">
              UR <motion.span 
                className="text-gold"
                animate={{ 
                  textShadow: ["0 0 0px hsl(38 75% 55%)", "0 0 10px hsl(38 75% 55%)", "0 0 0px hsl(38 75% 55%)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >Media</motion.span>
            </span>
          </motion.div>
          
          <motion.div 
            className="text-primary-foreground/60 text-sm text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>© {new Date().getFullYear()} UR Media। সর্বস্বত্ব সংরক্ষিত।</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4 text-primary-foreground/60 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ x: 5 }}
          >
            <motion.span
              className="flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              ১০০% অরিজিনাল প্রোডাক্ট
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;