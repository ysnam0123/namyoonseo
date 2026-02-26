'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          {(eyebrow || title) && (
            <div className="space-y-2">
              {eyebrow && (
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                  {title}
                </h2>
              )}
            </div>
          )}
          <div className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            {children}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

