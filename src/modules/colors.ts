class gColor {
  label: string;
  hex: string;
  item?: string;

  constructor(label: string, hex: string, item?: string) {
    this.label = label;
    this.hex = hex;
    this.item = item;
  }

  get RGB() {
    return {
      red: parseInt(this.hex.substr(1, 2), 16),
      green: parseInt(this.hex.substr(3, 2), 16),
      blue: parseInt(this.hex.substr(5, 2), 16),
    }
  }

  get HSL() {
    const r = this.RGB.red / 255,
      g = this.RGB.green / 255,
      b = this.RGB.blue / 255,
      cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;

    let h = 0,
      s = 0,
      l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { hue: h, saturation: s, lightness: l };
  }

  get hsl() {
    return `hsl(${this.HSL.hue}, ${this.HSL.saturation}%, ${this.HSL.lightness}%)`;
  }

  get rgb() {
    return `rgb(${this.RGB.red}, ${this.RGB.green}, ${this.RGB.blue})`;
  }

  get spinalCase() {
    return this.label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "-")
      .toLowerCase();
  }
}

export const gColorsDB = [
  new gColor('Shamrock', '#34ce7e'),
  new gColor('Emerald', '#5acf57'),
  new gColor('Laurel', '#328538'),
  new gColor('Green Pea', '#20723b'),
  new gColor('Elf Green', '#198663'),
  new gColor('Lake', '#257d93'),
  new gColor('Mariner', '#3876cc'),
  new gColor('Denim', '#116ec4'),
  new gColor('Cobalt Blue', '#0B4EAB'),
  new gColor('Royal Purple', '#64429c'),
  new gColor('Purple Heart', '#7d32b0'),
  new gColor('Blue Violet', '#994aed'),
  new gColor('Fuchsia', '#AF08AA'),
  new gColor('Razzmatazz', '#da0040'),
  new gColor('Alizarin', '#e72113'),
  new gColor('Fire Brick', '#a5213a'),
  new gColor('Persian Red', '#d73333'),
  new gColor('Blush', '#bf4a67'),
  new gColor('Desert', '#a0613d'),
  new gColor('Rust', '#c84d11'),
  new gColor('Sepia', '#704d16'),
  new gColor('Golden Brown', '#9e6710'),
  new gColor('Yukon Gold', '#8c741d'),
  new gColor('Burn Orange', '#f9722e'),
  new gColor('Sunglow', '#ffcf25'),
  new gColor('Gold Tips', '#e6b031'),
  new gColor('Milk Punch', '#f4e7c4'),
  new gColor('Silver', '#c0c0c0'),
  new gColor('Gravel', '#6e6e6e'),
  new gColor('Charcoal', '#444444'),
  new gColor('Cod Grey', '#1b1b1b'),
];