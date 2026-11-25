/* Travel maps for the "fun" page: highlights visited regions with ECharts.
   Edit the VISITED lists below to add new places. */
(function () {
  const VISITED = {
    china: {
      江苏省: "Jiangsu",
      上海市: "Shanghai",
      北京市: "Beijing",
      福建省: "Fujian",
      新疆维吾尔自治区: "Xinjiang",
      贵州省: "Guizhou",
      山东省: "Shandong",
      香港特别行政区: "Hong Kong",
      安徽省: "Anhui",
      浙江省: "Zhejiang",
      广西壮族自治区: "Guangxi",
      湖北省: "Hubei",
      云南省: "Yunnan",
    },
    world: ["China", "United States of America", "Singapore", "Turkey", "South Korea", "Japan"],
    usa: ["California", "Pennsylvania", "New York", "Massachusetts", "New Jersey", "Florida", "Georgia", "North Carolina", "Missouri", "Kentucky"],
  };

  // Pins: [lon, lat, label]
  const PINS = {
    china: [
      [120.86, 32.01, "Nantong · where I was born"],
      [120.98, 31.39, "Suzhou (Kunshan) · undergrad at Duke Kunshan"],
      [114.17, 22.32, "Hong Kong"],
    ],
    world: [
      [103.82, 1.35, "Singapore"],
      [120.6, 31.3, "Home: Jiangsu, China"],
      [-79.99, 40.44, "Now: Pittsburgh, USA"],
    ],
    usa: [
      [-79.99, 40.44, "Pittsburgh · CMU, now"],
      [-78.9, 35.99, "Durham · Duke"],
      [-71.06, 42.36, "Boston"],
      [-74.0, 40.71, "New York City"],
      [-80.19, 25.76, "Miami"],
      [-84.39, 33.75, "Atlanta"],
      [-90.2, 38.63, "St. Louis"],
    ],
  };

  const CHINA_EN = {
    新疆维吾尔自治区: "Xinjiang", 西藏自治区: "Tibet", 内蒙古自治区: "Inner Mongolia", 青海省: "Qinghai", 四川省: "Sichuan",
    黑龙江省: "Heilongjiang", 甘肃省: "Gansu", 云南省: "Yunnan", 广西壮族自治区: "Guangxi", 湖南省: "Hunan", 陕西省: "Shaanxi",
    广东省: "Guangdong", 吉林省: "Jilin", 河北省: "Hebei", 湖北省: "Hubei", 贵州省: "Guizhou", 山东省: "Shandong", 江西省: "Jiangxi",
    河南省: "Henan", 辽宁省: "Liaoning", 山西省: "Shanxi", 安徽省: "Anhui", 福建省: "Fujian", 浙江省: "Zhejiang", 江苏省: "Jiangsu",
    重庆市: "Chongqing", 宁夏回族自治区: "Ningxia", 海南省: "Hainan", 台湾省: "Taiwan", 北京市: "Beijing", 天津市: "Tianjin",
    上海市: "Shanghai", 香港特别行政区: "Hong Kong", 澳门特别行政区: "Macau",
  };

  const MAPS = {
    china: { file: "china.json", visited: Object.keys(VISITED.china), center: [104, 36], zoom: 1.15 },
    world: { file: "world.json", visited: VISITED.world, zoom: 1.1, center: [20, 25] },
    usa: { file: "usa.json", visited: VISITED.usa, special: true, zoom: 1.15 },
  };

  const charts = {};
  const loaded = {};

  function css(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function optionFor(key) {
    const cfg = MAPS[key];
    const theme = css("--global-theme-color", "#b509ac");
    const text = css("--global-text-color", "#333");
    const land = isDark() ? "#2b2f36" : "#eceef1";
    const border = isDark() ? "#4b5160" : "#ffffff";
    const visited = new Set(cfg.visited);

    const nameOf = (n) => (key === "china" ? `${CHINA_EN[n] || n} · ${n.replace(/(省|市|壮族自治区|维吾尔自治区|回族自治区|自治区|特别行政区)$/, "")}` : n);

    return {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        formatter: (p) => {
          if (p.seriesType === "effectScatter") return p.data.label;
          const v = visited.has(p.name);
          return `${nameOf(p.name)}${v ? " ✓" : ""}`;
        },
      },
      geo: {
        map: key,
        roam: false,
        zoom: cfg.zoom || 1,
        center: cfg.center,
        selectedMode: false,
        label: { show: false },
        itemStyle: { areaColor: land, borderColor: border, borderWidth: 0.8 },
        emphasis: { label: { show: false }, itemStyle: { areaColor: isDark() ? "#3a404b" : "#d9dce1" } },
        regions: cfg.visited.map((name) => ({
          name,
          itemStyle: { areaColor: theme, borderColor: border, opacity: 0.9 },
          emphasis: { itemStyle: { areaColor: theme, opacity: 1 } },
        })),
      },
      series: [
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: PINS[key].map(([lon, lat, label]) => ({ value: [lon, lat], label })),
          symbolSize: 9,
          rippleEffect: { scale: 3.5, brushType: "stroke" },
          itemStyle: { color: isDark() ? "#fbbf24" : "#f59e0b", shadowBlur: 6, shadowColor: "rgba(0,0,0,0.3)" },
          label: { show: false },
          textStyle: { color: text },
          zlevel: 2,
        },
      ],
    };
  }

  function render(key) {
    const el = document.getElementById(`map-${key}`);
    if (!el || !loaded[key]) return;
    if (charts[key]) charts[key].dispose();
    charts[key] = echarts.init(el, null, { renderer: "canvas" });
    charts[key].setOption(optionFor(key));
  }

  function loadMap(key, base) {
    const cfg = MAPS[key];
    return fetch(base + cfg.file)
      .then((r) => r.json())
      .then((geo) => {
        const special = cfg.special
          ? {
              Alaska: { left: -131, top: 25, width: 15 },
              Hawaii: { left: -110, top: 28, width: 5 },
            }
          : undefined;
        echarts.registerMap(key, geo, special);
        loaded[key] = true;
        render(key);
      })
      .catch((e) => {
        const el = document.getElementById(`map-${key}`);
        if (el) el.innerHTML = '<p class="text-muted">Map failed to load.</p>';
        console.error(e);
      });
  }

  function init() {
    if (typeof echarts === "undefined") return;
    const root = document.querySelector("[data-map-base]");
    if (!root) return;
    const base = root.getAttribute("data-map-base");
    Object.keys(MAPS).forEach((k) => loadMap(k, base));

    window.addEventListener("resize", () => Object.values(charts).forEach((c) => c.resize()));
    new MutationObserver(() => Object.keys(charts).forEach(render)).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  if (document.readyState === "complete") init();
  else window.addEventListener("load", init);
})();
