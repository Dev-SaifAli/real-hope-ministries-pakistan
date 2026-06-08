export interface Project {
  id: number
  title: string
  description: string
  image: string
  images?: string[] // Optional array for carousel
  alt: string
  date?: string
  suggestedAmounts?: number[]
  isUrgent?: boolean
  goal?: number
  raised?: number
  isOngoing?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Clean Water Ministry',
    description:
      'We aim to install 100 water pumps, each costing $700, to ensure long-term access to water.',
    image: '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
    images: [
      '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
      'Gemini_Generated_Image_zckniczckniczckn_pacsn6',
      'Gemini_Generated_Image_zfpz43zfpz43zfpz_rbkpcx'
    ],
    alt: 'Children playing with clean water',
    suggestedAmounts: [100, 350, 700, 1400],
    goal: 70000,
    raised: 25000,
    isOngoing: true
  },
  {
    id: 2,
    title: 'Food Ministry',
    description:
      'Supporting 700 families with essential food supplies, at $100 per family.',
    image: 'food_vzy14n',
    images: ['food_vzy14n', 'IMG_0663_otmahe', 'photo-4_racfz6'],
    alt: 'Food distribution',
    suggestedAmounts: [50, 100, 200, 500],
    goal: 70000,
    raised: 0,
    isOngoing: true
  },
  {
    id: 3,
    title: 'Free People Ministry',
    description:
      'Helping families rebuild their lives, with an estimated $5,000 per family for complete support.',
    image: 'free-people_qtiqyy',
    images: [
      'free-people_qtiqyy',
      'primary_d1yylj',
      'Gemini_Generated_Image_xbfu3lxbfu3lxbfu_bfd8jd'
    ],
    alt: 'Family standing together',
    suggestedAmounts: [500, 1000, 2500, 5000],
    goal: 250000,
    raised: 0,
    isOngoing: true
  },
  {
    id: 4,
    title: 'Orphanage Ministry',
    description: `70 orphan children in brick areas need support. Orphanage fund: $500,000.$100 per child for food and essentials.`,
    image: 'orphanage_b3ciwu',
    images: ['orphanage_b3ciwu', 'DSC_7679_1_hjzlhk', 'DSC_7820_1_qda3pj'],
    alt: 'Young man holding toys for children',
    suggestedAmounts: [100, 300, 500, 1000],
    isUrgent: false,
    goal: 500000,
    raised: 0,
    isOngoing: false // This is a fund/building project
  },
  {
    id: 5,
    title: 'Prayer Center',
    description:
      'Building a prayer center for the community. We aim to raise $800,000 for its construction.',
    image: 'db44c20156648c910870664dfe10a96b2fddbfe9_sxrgj0',
    images: ['db44c20156648c910870664dfe10a96b2fddbfe9_sxrgj0'],
    alt: 'Women sitting together',
    suggestedAmounts: [500, 1000, 2000, 5000],
    goal: 800000,
    raised: 0,
    isOngoing: false // Building project
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:
      'Over 500 families are trapped in brick kiln slavery. $4,000 is needed to free each family.',
    image: 'slavery_qyj1zw',
    images: [
      'slavery_qyj1zw',
      'Gemini_Generated_Image_rjhjvurjhjvurjhj_fzjcqw',
      'Gemini_Generated_Image_pfgahepfgahepfga_khptms'
    ],
    alt: 'Person working at brick kiln',
    suggestedAmounts: [500, 1000, 2000, 4000],
    isUrgent: false,
    goal: 2000000,
    raised: 0,
    isOngoing: true // Recurring need to free families
  },
  {
    id: 7,
    title: 'Widows Ministry',
    description:
      'Supporting 60+ widows in need.\n$1,000 per widow for essential care and support.',
    image: 'Gemini_Generated_Image_ae8wsfae8wsfae8w_kwjkio',
    images: [
      'Gemini_Generated_Image_ae8wsfae8wsfae8w_kwjkio',
      'Gemini_Generated_Image_b4dvcib4dvcib4dv_iskim4'
    ],
    alt: 'Women and children gathering',
    suggestedAmounts: [100, 250, 500, 1000],
    goal: 70000,
    raised: 0,
    isOngoing: true
  },
  {
    id: 8,
    title: 'Bibel Distribution Ministry',
    description:
      'Each Bible costs $50, and we need many more to spreading hope and reaching communities in need.',
    image: 'youth_uwafof',
    images: ['youth_uwafof', 'Gemini_Generated_Image_i29l56i29l56i29l_mjisvw'],
    alt: 'Hands joined in prayer',
    suggestedAmounts: [50, 100, 250, 500],
    goal: 70000,
    raised: 0,
    isOngoing: true
  },
  {
    id: 9,
    title: 'Old Age Home',
    description:
      'Dedicated to providing a safe, comfortable, and loving environment for our elderly community members through the establishment of a $1,000,000 Old Age Home Fund.',
    image: 'DSC_3082_1_lfvubr',
    images: ['DSC_3082_1_lfvubr'],
    alt: 'Elderly care support',
    suggestedAmounts: [100, 250, 500, 1000],
    goal: 150000,
    raised: 0,
    isOngoing: true
  },
  {
    id: 10,
    title: 'Medical Center',
    description:
      'We want to build a medical centre for an needed people we need a fund of medical camp dollar $10,000',
    image: 'primary_d1yylj',
    images: ['primary_d1yylj'],
    alt: 'Medical healthcare services',
    suggestedAmounts: [50, 150, 500, 1000],
    goal: 300000,
    raised: 0,
    isOngoing: true
  }
]
