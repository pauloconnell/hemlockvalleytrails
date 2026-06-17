import { useEffect, useRef } from "react";

export function TrailforksMapWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadWidget = () => {
      const w = window as typeof window & {
        __trailforksWidgetPromise?: Promise<void>;
        check_widget_map?: () => void;
      };

      if (w.__trailforksWidgetPromise) return w.__trailforksWidgetPromise;
      if (typeof w.check_widget_map === "function") return Promise.resolve();

      w.__trailforksWidgetPromise = new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src =
          "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js";
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      return w.__trailforksWidgetPromise;
    };

    loadWidget().then(() => {
      if (container && !container.querySelector("iframe")) {
        (window as { check_widget_map?: () => void }).check_widget_map?.();
      }
    });
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="TrailforksWidgetMap"
        data-w="900px"
        data-h="400px"
        data-rid="1"
        data-activitytype="0"
        data-maptype="trailforks"
        data-trailstyle="random"
        data-controls="1"
        data-list="1"
        data-dml="1"
        data-layers="labels,poi,polygon,directory,region"
        data-z="12.960111490368357"
        data-lat="49.381343111188414"
        data-lon="-121.92644071979873"
        data-hideunsanctioned="0"
        data-basicmap="0"
      />
      <a
        href="https://www.trailforks.com/"
        className="inline-block mt-3 text-xs text-muted-foreground hover:text-primary"
      >
        Trailforks.com
      </a>
    </div>
  );
}
