export const colors = [
    {
      title: "Blue",
      rgb: "RGB(0, 0, 255)",
      description: "Blue is often associated with a sense of tranquility, calmness, trust, and relaxation. It is a popular color choice for many tech companies, social media platforms, financial institutions, healthcare, and wellness-related apps and websites.",
      backgroundColor: 'rgba(0, 0, 255, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Red",
      rgb: "RGB(255, 0, 0)",
      description: "Red is often associated with passion, energy, and urgency. It is commonly used for warning messages and error notifications.",
      backgroundColor: 'rgba(255, 0, 0, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Green",
      rgb: "RGB(0, 255, 0)",
      description: "Green is often associated with growth, harmony, and nature. It conveys stability and growth in financial and environmental websites.",
      backgroundColor: 'rgba(0, 255, 0, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Purple",
      rgb: "RGB(128, 0, 128)",
      description: "Purple is often associated with luxury, creativity, and spirituality. It conveys a sense of elegance and is used in fashion and beauty websites.",
      backgroundColor: 'rgba(128, 0, 128, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Orange",
      rgb: "RGB(255, 165, 0)",
      description: "Orange evokes feelings of joy, creativity, and innovation. It is vibrant and often used in entertainment and social media platforms.",
      backgroundColor: 'rgba(255, 165, 0, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Yellow",
      rgb: "RGB(255, 255, 0)",
      description: "Yellow creates a sense of energy and is commonly used in branding related to children and positivity.",
      backgroundColor: 'rgba(255, 255, 0, 0.7)',
      textColor: '#000',
    },
    {
      title: "Brown",
      rgb: "RGB(165, 42, 42)",
      description: "Brown is used in designs related to nature, outdoor activities, and organic products, conveying a sense of grounding and authenticity.",
      backgroundColor: 'rgba(165, 42, 42, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Grey",
      rgb: "RGB(128, 128, 128)",
      description: "Grey conveys professionalism and reliability, often used as a background color in tech and corporate designs.",
      backgroundColor: 'rgba(128, 128, 128, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Black",
      rgb: "RGB(0, 0, 0)",
      description: "Black is associated with luxury, exclusivity, and power. It is often used in high-end brands and minimalist designs.",
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      textColor: '#fff',
    },
    {
      title: "Pink",
      rgb: "RGB(255, 192, 203)",
      description: "Pink evokes feelings of nurturing and warmth. It is often seen in beauty, fashion, and wellness apps.",
      backgroundColor: 'rgba(255, 192, 203, 0.7)',
      textColor: '#fff',
    },
    {
      title: "White",
      rgb: "RGB(255, 255, 255)",
      description: "White is commonly used as a background color, conveying simplicity and purity. It allows other elements to stand out.",
      backgroundColor: 'rgba(255, 255, 255)',
      textColor: '#000',
    },
  ];

export let colorTitle = []

for (let i = 0; i < colors.length; i++) {
    for (const [key, val] of Object.entries(colors[i])) {    
        if(key == "title") {
            colorTitle.push(val);
        }
    }
}

