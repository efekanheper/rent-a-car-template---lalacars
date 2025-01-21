"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react"; // Sağ ok ikonu kaldırıldı
import { headerData } from "@/constans"; // Header verilerini içe aktar

const StaggeredDropDown = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="p-8 flex items-center justify-center bg-transparent">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center justify-center p-3 rounded-full bg-btncolor text-whitetext transition-colors lg:hidden"
        >
          <motion.div
            animate={{ scale: open ? 1.2 : 1 }} // Sade bir scale animasyonu
            transition={{ duration: 0.4 }} // Geçiş süresi eklendi
          >
            {/* open durumuna göre ikon değiştiriliyor */}
            {open ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </motion.div>
        </button>

        {open && (
          <motion.ul
            initial={wrapperVariants.closed}
            animate={wrapperVariants.open}
            exit={wrapperVariants.closed}
            style={{
              originY: "top",
              translateX: "-70%",
              translateY: "5%",
              position: "fixed",
              top: "80px",
              zIndex: 50,
            }}
            className="flex flex-col gap-4 p-8 rounded-xl bg-btncolor text-whitetext shadow-xl w-48 sm:w-64 overflow-hidden"
          >
            {headerData.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                onClick={() => setOpen(false)}
                className="p-4 text-lg font-medium rounded-xl text-whitetext transition-colors cursor-pointer"
              >
                <a href={item.href} className="block w-full">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
