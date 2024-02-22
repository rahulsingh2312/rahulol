// Import font files (assuming they are located in the public folder)
// Ensure that the paths to the font files are correct
import argesFontPath from '/public/arges-variable-wght-wdth-slnt.ttf';
import ppmoriFontPath from '/PPMori-Regular.otf';

// Define font constants
export const argesFont = {
  fontFamily: 'Arges', // Font family name
  fontWeight: 'normal', // Font weight
  fontStyle: 'normal', // Font style
  src: `url(${argesFontPath})`, // URL to the font file
};

export const ppmoriFont = {
  fontFamily: 'PPMori', // Font family name
  fontWeight: 'normal', // Font weight
  fontStyle: 'normal', // Font style
  src: `url(${ppmoriFontPath})`, // URL to the font file
};

// Define CSS classes to apply font styles
export const styles = {
  argesText: {
    fontFamily: argesFont.fontFamily,
    fontWeight: argesFont.fontWeight,
    fontStyle: argesFont.fontStyle,
  },
  ppmoriText: {
    fontFamily: ppmoriFont.fontFamily,
    fontWeight: ppmoriFont.fontWeight,
    fontStyle: ppmoriFont.fontStyle,
  },
};
