import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
// import facebook_icon from './facebook_icon.svg'
// import instagram_icon from './instagram_icon.svg'
// import twitter_icon from './twitter_icon.svg'
import github_icon from './github-fill.svg'
import linkedin_icon from './linkedin-fill.svg'
import x_icon from './twitter-x-line.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
// import profile_img_1 from './profile_img_1.png'
// import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import model1 from './Photos/1.png'
import model2 from './Photos/2.jpg'
import model3 from './Photos/3.png'
import model4 from './Photos/4.png'
import model5 from './Photos/5.png'
import model6 from './Photos/6.png'

export const assets = {
    logo,
    logo_icon,
    github_icon,
    linkedin_icon,
    x_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our Clipdrop API will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image: "https://avatars.githubusercontent.com/u/181208182?v=4",
        name:'Arushi',
        role:'Graphic Designer',
        stars:5,
        text:`Imagify has a really clean interface and is easy to use. I was able to generate images from my prompts in just a few clicks, and the overall experience felt smooth.`
    },
    {
        image: "https://avatars.githubusercontent.com/u/131957541?v=4",
        name:'Akshat Trivedi',
        role:'Software Developer',
        stars:5,
        text:`As a developer, I appreciate the polished user experience. Authentication, prompt submission, and image generation are all integrated well, making the app feel reliable and easy to navigate.`
    },
    {
        image: "https://avatars.githubusercontent.com/u/143728374?v=4",
        name:'Zainab Shujat',
        role:'Content Creator',
        stars:5,
        text:`I liked how simple the workflow is. The credit system is straightforward, and generating images doesn't require any technical knowledge. It's a great tool for quickly visualizing ideas.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]

  export const models = [
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
];