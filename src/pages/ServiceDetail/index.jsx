import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaSortDown } from "react-icons/fa";
import atomIcon from "@assets/images/atom.png";
import { useParams } from "react-router-dom";
import { useInView } from "../../utils/hooks/useInView";

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  margin: 120px 0;
`;

const Detail = styled.div``;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto 86px auto;

  h1 {
    font-family: "Graphik-Regular400";
    font-size: 72px;
  }
`;

const Icon = styled.div`
  width: 100px;
  margin-bottom: 30px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  width: 96%;
  margin: 0 auto;
  border-top: 1px solid #dbe0e4;

  h3 {
    margin: 86px 0;
    font-family: "Graphik-Regular400";
    font-size: 46px;
    letter-spacing: -1;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  border-top: 1px solid #dbe0e4;
  padding: 28px 0;
  width: 100%;
  height: ${({ active }) => (active ? "auto" : "93.6px")};
  transition: all 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => (visible ? fadeIn : "none")} 0.8s ease forwards;
`;

const WrapperLine = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.span`
  font-size: 20px;
  font-family: "Graphik-Regular400";
  color: rgb(127, 129, 133);
  line-height: 35px;
`;

const Name = styled.span`
  font-size: 28px;
  font-family: "Graphik-Medium500";
  letter-spacing: -0.5px;
  padding-left: 100px;
  flex-grow: 1;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 50px !important;
  }
`;

const DropdownIcon = styled.span`
  font-size: 25px;
  margin-right: 15px;
  transition: all 0.2s ease;
  font-family: "Graphik-Regular400";
  transform: ${({ active }) => (active ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const Description = styled.div`
  text-align: left;
  padding-top: 1.3rem;
  margin-left: 125px;
  font-size: 18px;
  font-family: "Graphik-Regular400";
  display: ${({ active }) => (active ? "block" : "none")};
  animation: ${({ active }) => (active ? fadeSlideIn : "none")} 0.3s ease
    forwards;
`;

const Branding = [
  {
    title: "Start with Research",
    description:
      "Understanding your audience is key. This means looking at trends, customer behavior, and what competitors are doing. Tools like Google Trends, surveys, and market data help define who you're talking to and what they care about.",
  },
  {
    title: "Define Your Brand Strategy",
    description:
      "Every brand needs a clear direction. This includes your mission, long-term goals, and core values—like honesty, quality, or innovation. It’s also important to define how you want to be seen: are you professional, friendly, minimalistic, or bold?",
  },
  {
    title: "Create a Visual Identity",
    description:
      "A memorable name, consistent colors, and fonts all shape how people see your brand. Your logo, images, and design elements should all reflect your personality. Colors, for example, have psychological effects—blue can convey trust, red can signal energy.",
  },
  {
    title: "Develop a Unique Voice",
    description:
      "Your tone of voice should match your brand. Whether it’s sincere, professional, or fun, this voice should be consistent across your website, social media, and any content you publish.",
  },
  {
    title: "Prepare for Online Presence",
    description:
      "Once the brand is clear, the website becomes its digital home. With everything in place—from visuals to messaging—it’s easier to design a site that not only looks good but also communicates the right message to the right people.",
  },
  {
    title: "Evolve with Time",
    description:
      "Branding doesn’t stop at launch. As your business grows and trends change, you’ll need to adapt—monitoring feedback, tracking engagement, and updating your strategy when needed.",
  },
  {
    title: "Need help turning your brand into a website?",
    description:
      "That’s where we come in. We build custom websites that bring your brand to life—visually, technically, and strategically.",
  },
];

const WebDesign = [
  {
    title: "Consulting and Project Planning",
    description:
      "We begin by understanding your business goals, audience, and technical needs. This phase focuses on defining the project scope, timeline, and ensuring everyone is aligned before moving forward.",
  },
  {
    title: "Design and Prototyping",
    description:
      "Our team creates wireframes and interactive prototypes to visualize the structure and user experience. This helps you see how your site will function before we start coding.",
  },
  {
    title: "Code",
    description:
      "We develop your website using modern coding standards. Frontend and backend development ensures your site is responsive, fast, and fully functional across all devices.",
  },
  {
    title: "Content Management",
    description:
      "All content—text, images, and multimedia—is organized and integrated. We implement a user-friendly CMS so you can easily update your site whenever needed.",
  },
  {
    title: "Testing",
    description:
      "Before launch, we run comprehensive tests to ensure everything works smoothly. This includes checking for bugs, responsiveness, performance, and browser compatibility.",
  },
  {
    title: "Training on Website Update",
    description:
      "We provide hands-on training and tutorials so your team knows how to update and manage content. No technical skills required.",
  },
  {
    title: "Allocation to Server",
    description:
      "We deploy your site to a secure server, link your domain, and ensure everything is optimized for performance and reliability during launch.",
  },
  {
    title: "Support",
    description:
      "After launch, we continue to support your website with maintenance, updates, and troubleshooting to ensure long-term success.",
  },
];

const AppDesign = [
  {
    title: "Consulting and Project Planning",
    description:
      "We start by gathering insights about your app’s goals, features, and user needs. This phase includes defining a clear roadmap, user personas, and technical requirements for successful delivery.",
  },
  {
    title: "Design and Prototyping",
    description:
      "We design the app’s user interface (UI) and user experience (UX), focusing on intuitive navigation and visual appeal. Interactive prototypes allow you to test the flow before development starts.",
  },
  {
    title: "Code",
    description:
      "Our developers build the frontend and backend of your app using modern frameworks. We ensure high performance, secure architecture, and scalable code that works across devices.",
  },
  {
    title: "Content Management",
    description:
      "We organize and implement all necessary in-app content, from texts and visuals to data flows. If needed, we integrate a content management system (CMS) for dynamic updates.",
  },
  {
    title: "Testing",
    description:
      "Thorough testing is conducted to identify bugs and ensure a smooth user experience. This includes functional testing, usability checks, and performance optimization across platforms.",
  },
  {
    title: "Training on App Management",
    description:
      "We provide guidance and documentation so your team can manage, update, and monitor the app post-launch. You’ll know how to handle basic updates and user feedback efficiently.",
  },
  {
    title: "Deployment to Stores",
    description:
      "We handle submission to app stores (Google Play, App Store), ensuring all guidelines are met and your app is successfully published with the required metadata and assets.",
  },
  {
    title: "Support",
    description:
      "Ongoing support is available to maintain performance, fix bugs, and update features based on user feedback. We help you keep your app secure, relevant, and optimized.",
  },
];

const UiUxDesign = [
  {
    title: "User Research & Analysis",
    description:
      "Every design starts with understanding the user. By analyzing similar products, identifying their strengths and weaknesses, and collecting feedback from potential users, we gain insights into what people expect—and how they actually behave.",
  },
  {
    title: "Information Architecture & Wireframing",
    description:
      "Structure matters. We map out how the site or app will be organized—menus, pages, navigation—creating a clear flow. This begins with low-fidelity wireframes (simple sketches) and leads to high-fidelity versions that show more detail and layout.",
  },
  {
    title: "Prototyping & UI Design",
    description:
      "Now the look and feel come to life. We define color palettes, typography, icons, and visual styles. Wireframes are turned into full, interactive prototypes. Every element—buttons, cards, inputs—is part of a unified design system that ensures consistency across the product.",
  },
  {
    title: "User Testing & Refinement",
    description:
      "Real users test the prototype. We gather feedback, compare different design options (A/B testing), and use tools like heatmaps and analytics to see how users interact with the design—then we refine based on what works best.",
  },
  {
    title: "Development & Handoff",
    description:
      "Once designs are ready, they’re shared with developers via tools like Figma or Zeplin. The front-end team begins implementation, and a beta version is tested with real users to catch issues early and make final tweaks.",
  },
  {
    title: "Continuous Improvement",
    description:
      "A good product keeps evolving. We track user feedback, monitor behavior, and plan improvements. UI/UX is updated regularly, and new features are tested before being rolled out to ensure a smooth, user-friendly experience.",
  },
];

const Crm = [
  {
    title: "Needs Assessment & Goal Setting",
    description:
      "We begin by understanding your business needs—sales process, customer interactions, support flow, and reporting requirements. This step helps define the exact goals your CRM should achieve.",
  },
  {
    title: "Process Mapping & User Roles",
    description:
      "We map out how your team interacts with leads, clients, and internal data. Based on this, we define user roles, access levels, and workflow automation points for maximum efficiency.",
  },
  {
    title: "CRM UI/UX Design",
    description:
      "A clean, intuitive interface is essential. We design the CRM dashboard, lead management pages, activity timelines, and custom modules—ensuring a smooth experience for every team member.",
  },
  {
    title: "System Integration",
    description:
      "Your CRM needs to talk to other tools—email platforms, website forms, invoicing systems, and more. We set up integrations with tools like Gmail, Outlook, Zapier, Stripe, and your website.",
  },
  {
    title: "Custom Development",
    description:
      "We build the CRM based on your exact needs—custom pipelines, task automation, client segmentation, and analytics. Whether it's a standalone CRM or a module within a larger system, it's built to scale.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We run internal testing and give your team access to test environments. Real-life scenarios are used to refine the workflow, fix bugs, and ensure data accuracy and usability.",
  },
  {
    title: "Training & Onboarding",
    description:
      "We train your team on how to use the CRM efficiently. This includes how to add leads, track activity, generate reports, and automate daily tasks without tech expertise.",
  },
  {
    title: "Ongoing Support & Evolution",
    description:
      "As your business grows, your CRM should grow too. We offer continued support, performance monitoring, and feature upgrades to ensure your CRM always aligns with your operations.",
  },
];

const dataMap = {
  branding: Branding,
  "web-design": WebDesign,
  "app-design": AppDesign,
  "ui-ux": UiUxDesign,
  crm: Crm,
};

const ServiceDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { type } = useParams();
  const normalizedType = type?.toLowerCase();
  const content = dataMap[normalizedType] || [];

  return (
    <Wrapper id="service-detail">
      <Detail>
        <Head>
          <Icon>
            <img src={atomIcon} alt="atom" />
          </Icon>
          <h1>{type?.replace("-", " ")} Projects</h1>
        </Head>

        <Content>
          <h3>Brief information</h3>
          <Info>
            {content.map((item, index) => {
              const [ref, isInView] = useInView({ threshold: 0.1 });

              return (
                <Item
                  key={index}
                  ref={ref}
                  active={activeIndex === index}
                  visible={isInView}
                  onClick={() => toggleAccordion(index)}
                >
                  <WrapperLine>
                    <Number>{`0${index + 1}`}</Number>
                    <Name>{item.title}</Name>
                    <DropdownIcon active={activeIndex === index}>
                      <FaSortDown />
                    </DropdownIcon>
                  </WrapperLine>
                  <Description active={activeIndex === index}>
                    {item.description}
                  </Description>
                </Item>
              );
            })}
          </Info>
        </Content>
      </Detail>
    </Wrapper>
  );
};

export default ServiceDetail;
