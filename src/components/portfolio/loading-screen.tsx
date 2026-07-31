import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            className="h-12 w-12 rounded-full border-2 border-muted border-t-accent"
          />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
            Divyanshu Pandey
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
