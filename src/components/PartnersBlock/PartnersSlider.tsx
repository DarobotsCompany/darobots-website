'use client';

import { useEffect, useMemo, useState } from 'react';

import LoaderSpinner from '@/components/ui/Loader/LoaderSpinner';

import { Slider } from 'react-tech-slider';

import useMediaQuery from '@/hooks/useMediaQuery';

import { MOBILE_PARTNERS_LOGOS, PARTNERS_LOGOS } from '@/constants/partners-logos';

import { MOBILE_MEDIA_QUERY_WIDTH } from '@/constants';

export default function PartnersSlider() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MEDIA_QUERY_WIDTH})`);

  const cards = useMemo(
    () => (isMobile ? MOBILE_PARTNERS_LOGOS : PARTNERS_LOGOS),
    [isMobile],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoaderSpinner />;
  }

  return (
    <Slider
      className="techSlider"
      brandsList={cards}
      borderWidth={0}
      backgroundColor="transparent"
      iconWidth={4}
      isPlay={true}
      pauseOnHoverActive={true}
      durationMs={20000}
    />
  );
}
