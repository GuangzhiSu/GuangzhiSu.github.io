/* Interactive 3D travel globe for the "fun" page.
   A flat map with visited places highlighted is drawn off-screen with ECharts,
   then wrapped around an echarts-gl globe as its texture.
   To add a place, add its name to VISITED (and a pin to PINS if you like). */
(function () {
  const ECHARTS_GL = "https://cdn.jsdelivr.net/npm/echarts-gl@2.0.9/dist/echarts-gl.min.js";

  // Region names as they appear in assets/json/maps/globe.json
  const VISITED = [
    // China, by province
    "CN-江苏省", "CN-上海市", "CN-北京市", "CN-福建省", "CN-新疆维吾尔自治区", "CN-贵州省", "CN-山东省",
    "CN-香港特别行政区", "CN-安徽省", "CN-浙江省", "CN-广西壮族自治区", "CN-湖北省", "CN-云南省",
    // United States, by state
    "US-California", "US-Pennsylvania", "US-New York", "US-Massachusetts", "US-New Jersey", "US-Florida",
    "US-Georgia", "US-North Carolina", "US-Missouri", "US-Kentucky",
    // Other countries
    "Singapore", "Turkey", "South Korea", "Japan",
  ];

  // [lon, lat, label, isHome]
  const PINS = [
    [120.86, 32.01, "Nantong · born here", true],
    [120.98, 31.39, "Suzhou · undergrad at Duke Kunshan", true],
    [121.47, 31.23, "Shanghai"],
    [116.4, 39.9, "Beijing"],
    [114.17, 22.32, "Hong Kong"],
    [103.82, 1.35, "Singapore"],
    [28.98, 41.01, "Türkiye"],
    [126.98, 37.57, "South Korea"],
    [139.69, 35.69, "Japan"],
    [-79.99, 40.44, "Pittsburgh · CMU, now", true],
    [-78.9, 35.99, "Durham · Duke", true],
    [-71.06, 42.36, "Boston"],
    [-74.0, 40.71, "New York City"],
    [-80.19, 25.76, "Miami"],
    [-84.39, 33.75, "Atlanta"],
    [-90.2, 38.63, "St. Louis"],
    [-119.4, 36.8, "California"],
  ];

  const VIEWS = {
    world: { coord: [100, 25], distance: 170 },
    china: { coord: [108, 33], distance: 135 },
    usa: { coord: [-92, 38], distance: 135 },
  };

  let chart, textureChart, geoLoaded = false;

  function css(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

  function palette() {
    return isDark()
      ? { ocean: "#0e1622", land: "#3a4252", border: "#56607a", visited: css("--global-theme-color", "#2698ba"), pin: "#fbbf24", text: "#e5e7eb" }
      : { ocean: "#9fc3e3", land: "#f6f3ec", border: "#bdb6a6", visited: css("--global-theme-color", "#b509ac"), pin: "#f59e0b", text: "#1f2937" };
  }

  function buildTexture() {
    const p = palette();
    if (textureChart) textureChart.dispose();
    const canvas = document.createElement("canvas");
    textureChart = echarts.init(canvas, null, { width: 4096, height: 2048 });
    textureChart.setOption({
      backgroundColor: p.ocean,
      animation: false,
      geo: {
        map: "travel-globe",
        roam: false,
        silent: true,
        aspectScale: 1,
        boundingCoords: [[-180, 90], [180, -90]],
        left: 0, top: 0, width: "100%", height: "100%",
        label: { show: false },
        itemStyle: { areaColor: p.land, borderColor: p.border, borderWidth: 1.2 },
        regions: VISITED.map((name) => ({
          name,
          itemStyle: { areaColor: p.visited, borderColor: p.border, borderWidth: 1.2 },
        })),
      },
    });
    return textureChart;
  }

  function render(keepView) {
    const el = document.getElementById("travel-globe");
    if (!el || !geoLoaded) return;
    const p = palette();
    let view = VIEWS.world;
    if (keepView && chart) {
      const vc = chart.getOption().globe[0].viewControl;
      view = { coord: vc.targetCoord || view.coord, distance: vc.distance || view.distance };
    }
    if (!chart) chart = echarts.init(el);
    chart.setOption(
      {
        backgroundColor: "transparent",
        tooltip: { show: true, formatter: (x) => x.data && x.data.label },
        globe: {
          baseTexture: buildTexture(),
          shading: "lambert",
          light: { ambient: { intensity: isDark() ? 0.75 : 0.8 }, main: { intensity: isDark() ? 0.6 : 0.3, alpha: 30, beta: 40 } },
          atmosphere: { show: true, offset: 6, color: isDark() ? "#4aa8ff" : "#7fb3e0", glowPower: isDark() ? 6 : 8, innerGlowPower: isDark() ? 2 : 1 },
          viewControl: {
            autoRotate: true,
            autoRotateSpeed: 6,
            autoRotateAfterStill: 4,
            targetCoord: view.coord,
            distance: view.distance,
            minDistance: 80,
            maxDistance: 320,
            animationDurationUpdate: 1200,
          },
        },
        series: [
          {
            type: "scatter3D",
            coordinateSystem: "globe",
            blendMode: "source-over",
            symbolSize: (d, params) => (params.data.home ? 13 : 9),
            itemStyle: { color: p.pin, opacity: 1, borderColor: "#fff", borderWidth: 1 },
            label: {
              show: false,
              formatter: (x) => x.data.label,
              textStyle: { color: p.text, backgroundColor: isDark() ? "rgba(17,24,39,0.85)" : "rgba(255,255,255,0.9)", padding: [4, 8], borderRadius: 4, fontSize: 13 },
            },
            emphasis: { label: { show: true } },
            data: PINS.map(([lon, lat, label, home]) => ({ value: [lon, lat, 0], label, home: !!home })),
          },
        ],
      },
      true
    );
  }

  function flyTo(key) {
    if (!chart) return;
    const v = VIEWS[key];
    chart.setOption({ globe: { viewControl: { targetCoord: v.coord, distance: v.distance, autoRotate: key === "world" } } });
    document.querySelectorAll(".globe-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === key));
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function fail(msg) {
    const el = document.getElementById("travel-globe");
    if (el) el.innerHTML = `<p class="globe-error">${msg}</p>`;
  }

  function init() {
    const root = document.querySelector("[data-map-base]");
    if (!root) return;
    if (typeof echarts === "undefined") return fail("The globe couldn't load. Try refreshing the page.");
    const base = root.getAttribute("data-map-base");

    Promise.all([loadScript(ECHARTS_GL), fetch(base + "globe.json").then((r) => r.json())])
      .then(([, geo]) => {
        echarts.registerMap("travel-globe", geo);
        geoLoaded = true;
        render(false);
        document.querySelectorAll(".globe-btn").forEach((b) => b.addEventListener("click", () => flyTo(b.dataset.view)));
      })
      .catch((e) => {
        console.error(e);
        fail("The globe couldn't load. Try refreshing the page.");
      });

    window.addEventListener("resize", () => chart && chart.resize());
    new MutationObserver(() => render(true)).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }

  if (document.readyState === "complete") init();
  else window.addEventListener("load", init);
})();
