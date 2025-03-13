
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  // Define skills with their icons
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { 
          name: "HTML/CSS", 
          level: 5, // 1-5 skill level (5 being expert)
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" className="fill-primary dark:fill-primary">
                  <path d="M41 460L0 0h451l-41 460-185 52" />
                  <path d="M226 472l149-41 35-394H226" />
                  <path fill="#fff" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
                  <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
                </svg>
        },
        { 
          name: "JavaScript", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-yellow-400">
                  <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                </svg>
        },
        { 
          name: "React", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-blue-400">
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                </svg>
        },
        { 
          name: "TypeScript", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-600">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg> 
        },
        { 
          name: "Next.js", 
          level: 3,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="dark:fill-white fill-black">
                  <path d="M18.974 31.5c0-1.425 1.101-2.526 2.526-2.526s2.526 1.101 2.526 2.526-1.101 2.526-2.526 2.526-2.526-1.101-2.526-2.526zm14.76-15.246 3.399 2.334c.321.23.382.659.152.98l-9.248 12.963c-.23.32-.659.382-.98.152l-3.399-2.334c-.321-.23-.382-.659-.152-.98l9.248-12.963c.23-.32.659-.382.98-.152zM24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-10.08 9.125h20.16v.014c5.046 0 9.125 4.079 9.125 9.125v.014a9.113 9.113 0 0 1-2.402 6.225l-16.157 20.66c-.599.752-1.708.81-2.536.105L9.829 36.54a1.792 1.792 0 0 1-.045-2.577L21.92 20.282c.704-.745.678-1.925-.06-2.629s-1.925-.678-2.629.06L7.097 31.406c-.598.634-.598 1.628 0 2.262l1.692 1.799c.324.344.324.886 0 1.23-.344.324-.886.324-1.23 0l-1.692-1.8c-1.23-1.307-1.294-3.336-.195-4.721.018-.023.037-.045.056-.067l12.134-13.693c1.307-1.416 3.512-1.504 4.928-.197.041.038.081.077.12.117h.001c.023.024.046.048.068.072 1.406 1.438 1.387 3.74-.044 5.152l-.068.068L12.11 33.904c-.297.297-.297.779 0 1.076.297.297.779.297 1.076 0l10.759-12.222c.598-.633 1.591-.662 2.224-.064.633.598.662 1.591.64 2.224V35.75c0 .414.336.75.75.75s.75-.336.75-.75V24.918c0-1.018.813-1.849 1.831-1.875 1.048-.027 1.908.811 1.908 1.853l-.001 10.855c0 .414.336.75.75.75s.75-.336.75-.75V25.004c.029-1.82 1.527-3.262 3.349-3.233 1.822.029 3.262 1.527 3.233 3.349l-.001 9.88c0 .414.336.75.75.75s.75-.336.75-.75v-9.673c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25v10.123c0 .414.336.75.75.75s.75-.336.75-.75V25.326c0-2.071-1.679-3.76-3.751-3.75-.7.003-1.354.206-1.9.545-1.069-1.459-3.062-1.922-4.674-.98a3.746 3.746 0 0 0-5.19-.83c-.833-.937-2.149-1.436-3.49-1.184-.95-5.118-5.432-8.983-10.809-8.983h-.017z"/>
               </svg>
        },
      ]
    },
    {
      name: "Backend",
      skills: [
        { 
          name: "Node.js", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-green-600">
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
                </svg>
        },
        { 
          name: "Express", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="dark:fill-white fill-black">
                  <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.975-5.5c.252-1.422 1.16-2.045 2.702-1.953 1.53.09 2.757.32 2.778 1.92.006.5.02 1 .02 1.5l-.012 11.332c.01.2-.164.402-.35.46-1.496.392-1.502.392-1.502-1.05v-8.705l-.052-.023c-.197.632-.402 1.26-.566 1.897-.827 3.18-1.67 6.356-2.47 9.54-.18.74-.693 1.05-1.438.805-.75-.23-.872-.76-.694-1.486.818-3.29 1.67-6.58 2.535-9.86z"/>
                </svg>
        },
        { 
          name: "Python", 
          level: 3,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-blue-500">
                  <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
                </svg>
        },
        { 
          name: "GraphQL", 
          level: 3,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="fill-pink-500">
                  <path d="M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z"/>
                  <path d="M39.8 272.2h320.3v16.6H39.8z"/>
                  <path d="M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z"/>
                  <path d="M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z"/>
                  <path d="M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z"/>
                  <path d="M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z"/>
                  <path d="M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9"/>
                </svg>
        },
        { 
          name: "MongoDB", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="fill-green-600">
                  <path d="M22.25 45.15v-3.22c-7.22-.74-13.1-6.25-13.9-13.38L5.17 28c.93 8.06 8 14.96 16 15.73v2.05l2 .66-1-.74"/>
                  <path d="M24.05 40.28v-3.95c.1-.01.22-.04.22-.04v-3.78c0-2.68-2.14-4.87-4.77-4.97l-.94.04c-2.3.36-4.04 2.29-4.04 4.65v2.48c0 .8-.01 1.5-.01 2.15-.03.47-.08 1.11-.08 1.98 0 .32.01.65.03.98v2.18c-.44 0-.88-.02-1.3-.06v-3.9c-3.28-1.03-5.67-4.08-5.67-7.71 0-4.47 3.7-8.1 8.24-8.1.05 0 .11 0 .16.01h1.4c4.46 0 8.08 3.63 8.08 8.1 0 2.83-1.51 5.41-3.9 6.68v3.87l2.47 1.08v-.71z"/>
                  <path d="M9.79 22.04c-.97-1.17-1.76-2.73-1.93-4.24-.48-3.94 1.25-7.3 4.95-9.31 1.02-.56 2.2-.84 3.44-.84 1.33 0 2.6.35 3.73 1 .14.08.38.24.7.45-1.3-2.66-1.82-5.5-1.3-7.95C20 .7 20.71.25 21.32.25h.01c.34 0 .65.15.86.4.21.26.29.58.23.9-.39 1.98.38 3.85 2.43 5.91 1.25 1.26 1.86 2.41 1.97 3.75.11 1.06-.1 2.33-.64 3.9l.44.26c1.3.79 2.35 1.88 3.12 3.21.5.1.94.3 1.3.58-.4-.8-.7-1.78-.83-3.07-.14-1.4.01-2.92.45-4.6C32 4.92 34.47.68 37.31.68c.41 0 .8.1 1.14.32 1.3.84 1.32 2.68.05 5.17-1.45 2.8-1.8 5.53-1.07 8.1.37 1.33 1.14 2.56 2.31 3.7.74.72 1.31 1.15 3.23 2.29-.16-.32-.26-.67-.29-1.06-.11-1.97.32-3.58 1.33-5.65.92-1.97 2.14-3.21 3.43-3.5.43-.1.87-.16 1.28-.16.34 0 .67.03.96.1.9.22 1.5.81 1.68 1.66.69 3.07-1.66 5.53-3.36 7.55l-.03.04c-1.94 2.26-2.13 3.92-.68 6.08a9.2 9.2 0 0 0 .4.54c.2.24.5.43.85.5 1.13.21 1.72.02 1.76-.05-.44.46-1.55 1.38-3.16 1.38-.3 0-.6-.03-.9-.1-1.1-.23-1.96-.85-2.55-1.84-.55-.93-.75-1.89-.6-2.9l.01-.1c.17-.98 0-1.63-.63-2.42l-.01-.01c-.13-.14-.21-.25-.28-.37-1.1.67-2.17 1.6-3.15 2.8-2.1 2.55-2.86 5.37-2.06 7.67.67 1.93 2.52 3.3 4.54 3.36.07 0 .15.01.22.01 2.1 0 4.33-1.14 5.32-2.34.05-.05.1-.11.14-.16l-.01-.02c-.97-2.05-1.28-4-1.04-6.6.25-2.65 1.11-4.62 2.7-6.16.17-.16.34-.32.5-.48.2-.19.4-.37.63-.55.08-.7.16-.13.25-.2-.07-.08-.13-.16-.22-.23-.16-.15-.34-.3-.52-.44-.04.03-.08.06-.12.1-1.33 1.47-2.82 2.22-4.76 2.41l-.37.02v.13c0 .14.02.27.07.4.09.28.15.5.17.67.03.3-.17.91-1.27 1.83-1.51 1.28-2.9 1.87-4.31 1.87H33c-1.36 0-2.56-.56-3.31-1.51-.84-1.05-1.15-2.42-.98-4.13.03-.27.13-.65.24-1.1.08-.3.16-.66.21-1.28 0-.05 0-.1.02-.15-2.06 2.12-4.95 3.48-8.17 3.48h-.98c-2.33 0-4.89.9-6.74 2.37-2.88 2.3-4.44 5.33-4.39 8.53.03 2.9 1.39 5.6 3.72 7.34.97.73 3.4 2.44 7.6 2.57.6.02 1.23.02 1.86 0V45.7c-.85.08-1.72.12-2.59.12-6.33 0-11.79-1.69-15.22-4.76-2.61-2.32-4.04-5.36-4.04-8.55 0-4.27 2.27-8.14 6.25-10.6l.28-.17z"/>
                  <path d="M23 35.9c.03-.66.04-1.35.04-2.15V31.28c0-2.68-2.14-4.87-4.77-4.97h-.01a4.9 4.9 0 0 0-.93.03c-2.3.36-4.04 2.29-4.04 4.65v2.48c0 .8-.01 1.5-.01 2.15-.03.47-.09 1.11-.09 1.98 0 .33.01.65.03.98v1.96l3.93 1.71v-3.9c2.67-.83 4.8-2.99 5.54-5.71l-.01-.63c-.11 1.66-1.43 3.01-3.07 3.01-.16 0-.33-.02-.49-.04v6.28l3.93 1.71v-5.07z"/>
                  <path d="M10.07 31.32c0-3.44 2.69-6.3 6.22-6.5h.98c3.8 0 6.9-3.1 6.9-6.9 0-.09 0-.18-.01-.26l.01-.06a6.85 6.85 0 0 0-.75-3.48l-1.37-.68c.17.38.28.78.32 1.22.11.95-.1 1.97-.56 3.18-.32.87-.75 1.55-1.2 2.31l-.14.24c-1.3 2.18-2.13 4.51-2.38 6.7-.19 1.51-.12 3.05.18 4.41.2.55.32 1.38.32 2.32 0 .19-.01.38-.03.59-.01.21-.03.43-.06.67 0 .02-.01.05-.01.08-.47 3.4-3.4 6.02-6.94 6.02-3.31 0-6.07-2.31-6.74-5.4l-.02-.07c-.09-.37-.13-.76-.13-1.15 0-.76.15-1.5.41-2.21"/>
                  <path d="M24.17 17.62c-.18.25-.4.54-.67.87.07-.37.12-.76.12-1.15 0-.41-.05-.85-.15-1.31.06-.1.11-.22.17-.34a6.69 6.69 0 0 0-2.3-9.31c-.01-.01-.01-.02-.03-.02-.04-.03-.09-.05-.13-.08 1.12.81 2.36 2.15 2.99 3.81"/>
                </svg>
        },
      ]
    },
    {
      name: "Design",
      skills: [
        { 
          name: "UI/UX Design", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-purple-500">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .342.03.501.09l1.357.675c.245.12.39.369.393.641l.08 7.498c.003.276.141.528.37.651l5.943 3.169c.4.213.87.213 1.27 0l5.943-3.169c.229-.123.367-.375.37-.651l.08-7.498c.003-.272.148-.52.393-.641l1.357-.675c.159-.06.33-.09.501-.09h1.386a.75.75 0 000-1.5H2.25zM7.5 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                </svg>
        },
        { 
          name: "Figma", 
          level: 5,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className="fill-primary">
                  <path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/>
                  <path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/>
                  <path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/>
                  <path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" fill="#ff7262"/>
                  <path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/>
                </svg>
        },
        { 
          name: "Adobe XD", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="fill-pink-500">
                  <path d="M95 1H5a4 4 0 00-4 4v90a4 4 0 004 4h90a4 4 0 004-4V5a4 4 0 00-4-4z"/>
                  <path d="M30.8 31.7l11.6 19.4-12.7 23.5h10.1l8.8-16.3c.5-.7 1-1.6 1.5-2.6.5 1 1 1.9 1.5 2.6l8.4 16.3h10.1l-12.7-23.5 11.6-19.4h-9.8L50.7 47c-.3.5-.5 1-.8 1.7a31 31 0 00-.8-1.7l-8.2-15.3h-10.1z" fill="white"/>
                </svg>
        },
        { 
          name: "Responsive Design", 
          level: 5,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-500">
                  <path d="M8.5 2H4a2 2 0 00-2 2v16a2 2 0 002 2h4.5a2 2 0 002-2V4a2 2 0 00-2-2z" />
                  <path d="M20 8h-7a2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2V10a2 2 0 00-2-2z" />
                </svg>
        },
        { 
          name: "Design Systems", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-purple-500">
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h-8v-4h2v-4h-4V7.5c0-1.925-1.575-3.5-3.5-3.5S3 5.575 3 7.5 4.575 11 6.5 11H8v6H4v4h16z" />
                </svg>
        },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { 
          name: "Git", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-red-500">
                  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                </svg>
        },
        { 
          name: "Docker", 
          level: 3,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-500">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.59.16-1.433.275-2.264.275H.01a.219.219 0 00-.216.213c-.062 1.267-.23 2.53-.534 3.77C-.577 21.7 5.649 23.779 12.004 23.779c6.89 0 12.522-2.978 15.113-9.295.866-.723 1.642-1.558 2.274-2.497.293-.398.264-.17.51-1.12.095-.34.107-.834.202-1.744l-1.17-1.733c-.32.202-.706.303-1.096.303-.72 0-1.399-.183-1.999-.51v.012z"/>
                </svg>
        },
        { 
          name: "CI/CD", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-green-500">
                  <path d="M23.5 17l-5 5-3.5-3.5 1.5-1.5 2 2 3.5-3.5 1.5 1.5z"/>
                  <path d="M9 6.5H7v2h2v-2zM7 2L2 7l5 5 5-5-5-5zm0 8L4 7l3-3 3 3-3 3zm12 8.5h-2v-2h2v2zm-6 0h-2v-2h2v2zm-3-7l2-2 2 2-2 2-2-2zm7-5h-2v-2h2v2zm-3 2l2-2 2 2-2 2-2-2zM19 2l-5 5 5 5 5-5-5-5zm0 8l-3-3 3-3 3 3-3 3z"/>
                  <path d="M2 15l5 5 3.5-3.5-1.5-1.5-2 2L3.5 13.5 2 15z"/>
                </svg>
        },
        { 
          name: "AWS", 
          level: 3,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-yellow-500">
                  <path d="M18.75 10.08L17.22 9.64L16 11.33L14.92 9.64L13.3 10.08L13.8 8.3L12 7.57L13.62 6.92L13.25 5.33L14.92 6L16 4.42L17.22 6.09L18.91 5.33L18.4 6.96L20 7.57L18.41 8.3L18.75 10.08Z"/>
                  <path d="M6.4 10.42L5.18 9.94L4 11.56L2.97 9.94L1.42 10.42L1.92 8.75L0 8.03L1.75 7.41L1.4 5.74L3.06 6.47L4 4.9L5.25 6.47L6.88 5.74L6.4 7.29L8 8.03L6.47 8.75L6.4 10.42Z"/>
                  <path d="M19.42 20.19L12.93 17.67L12.93 12.3L19.42 14.83L19.42 20.19Z"/>
                  <path d="M11.35 12.3L11.35 17.67L4.89 20.19L4.89 14.83L11.35 12.3Z"/>
                  <path d="M12.13 11.59L5.64 14.12L12.13 16.64L18.58 14.12L12.13 11.59Z"/>
                </svg>
        },
        { 
          name: "Agile", 
          level: 4,
          icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-500">
                  <path d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73c.45-.27.74-.76.74-1.3 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .54.29 1.03.74 1.3V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
        },
      ]
    }
  ];

  // Function to render skill level dots (1-5)
  const renderSkillLevel = (level: number) => {
    return (
      <div className="skill-level">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div 
            key={dot} 
            className={cn(
              "skill-dot",
              level >= dot ? "active bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className="glass rounded-xl p-6 dark-transition"
            >
              <h3 className="text-xl font-medium mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={cn(
                      "tech-icon",
                      category.name === "Frontend" && "bg-blue-500/10 border border-blue-500/20",
                      category.name === "Backend" && "bg-purple-500/10 border border-purple-500/20",
                      category.name === "Design" && "bg-pink-500/10 border border-pink-500/20",
                      category.name === "Tools & Others" && "bg-green-500/10 border border-green-500/20"
                    )}
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="tech-icon-name">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
