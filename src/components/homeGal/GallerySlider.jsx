import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { getAll } from "../../features/gallery/gallerySlice";

const GallerySlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const galleryState = useSelector((state) => state?.gallery?.gallery || []);

  // Split images into two rows for the slider
  const midIndex = Math.ceil(galleryState.length / 2);
  const row1 = galleryState.slice(0, midIndex);
  const row2 = galleryState.slice(midIndex);

  // Fallback to ensure we have content in both rows if possible
  const firstRow = row1.length > 0 ? row1 : galleryState;
  const secondRow = row2.length > 0 ? row2 : galleryState;

  const SliderRow = ({ items, reverse = false }) => {
    const baseX = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    // Calculate width of one set of items (300px width + 24px gap)
    const itemWidth = 300;
    const gap = 24;
    const contentWidth = items.length * (itemWidth + gap);

    useAnimationFrame((t, delta) => {
      if (!isDragging && contentWidth > 0) {
        // Adjust speed here (0.04 is slow and smooth)
        const speed = 0.04 * delta;
        const moveBy = reverse ? speed : -speed;

        let newX = baseX.get() + moveBy;

        // Wrap logic to keep x within [-contentWidth, 0] for seamless looping
        while (newX <= -contentWidth) {
          newX += contentWidth;
        }
        while (newX > 0) {
          newX -= contentWidth;
        }

        baseX.set(newX);
      }
    });

    return (
    <div className="flex overflow-hidden w-full mb-6 cursor-grab active:cursor-grabbing">
      <motion.div
        className="flex gap-6"
        style={{ x: baseX, width: "max-content", willChange: "transform" }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {/* Repeat items 4 times to ensure seamless loop on wide screens */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg relative group"
          >
            <img
              src={item?.images[0]?.url}
              alt={item?.title || "Gallery"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
        ))}
      </motion.div>
    </div>
  )};

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <motion.h3
          className="text-lg text-[#00AFAD] font-semibold mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h3>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Moments of Impact and Joy
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4">
        {firstRow.length > 0 && <SliderRow items={firstRow} />}
        {secondRow.length > 0 && <SliderRow items={secondRow} reverse={true} />}
      </div>
    </div>
  );
};

export default GallerySlider;
