import React, { useState } from "react";
import { Container } from "../../styles/common/container";
import styled from "styled-components";
import SelectDropdown from "../SelectDropdown";
import Card from "../Card";
import azfreshdagitimImg from "@assets/images/Rahat-blade.jpg";
import bakuMasuraImg from "@assets/images/bakuMasura.webp";
import sufleImg from "@assets/images/sufleImg.png";
import socarcapeImg from "@assets/images/socarcapeImg.svg";
import sulfiltiriImg from "@assets/images/suFiltiriImg.png";
import metalImg from "@assets/images/metalImg.png";
import play10Img from "@assets/images/play10.png";
import adgeoSolImg from "@assets/images/adgeosolImg.png";
import datumImg from "@assets/images/datumImg.avif";
import caspianGeomaticsImg from "@assets/images/caspianGeomaticsImg.png";
import geoTotalImg from "@assets/images/geoTotalImg.png";
import aralGroupBakuImg from "@assets/images/aralGroupBakuImg.svg";
import addaProjectImg from "@assets/images/addaProjectImg.jpg";
import bestingImg from "@assets/images/bestingImg.png";
import azProteinImg from "@assets/images/azProteinImg.jpg";
import richDistributionImg from "@assets/images/richDistributionImg.png";
import neqsolImg from "@assets/images/neqSolHoldingImg.png";
import nurCollectionImg from "@assets/images/nurCollectionImg.png";
import mediStepImg from "@assets/images/mediStepImg.svg";
import boncukImg from "@assets/images/boncukImg.svg";

const StyledPortfolioContainer = styled.div`
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPortfolioTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4.5rem;
    font-weight: 600;
    letter-spacing: -0.2rem;
    line-height: 1.1;
    margin-bottom: 32px;
    font-family: "Graphik-Regular400";
    width: 80%;

    @media only screen and (max-width: 900px) {
      font-size: 82px;
    }

    @media only screen and (max-width: 800px) {
      font-size: 76px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 64px;
      font-weight: 500;
    }
  }
`;

const StyledPortfolioSelectOption = styled.div`
  margin-bottom: 32px;
`;

const industries = [
  "Web Design",
  "E-commerce",
  "App Design",
  "Business Automation",
];

const allProjects = [
  {
    id: 2,
    title: "AzfreshDagitim",
    image: azfreshdagitimImg,
    description:
      "Mağaza şəbəkələri üçün effektiv CRM sistemidir. Müştəri əlaqələrini asanlıqla idarə edir, satışları izləyir və biznesin inkişafını dəstəkləyir.",
    category: "Business Automation",
    url: "https://azfreshdagitim.in/",
    objectFit: "cover",
  },
  {
    id: 3,
    title: "Play10",
    image: play10Img,
    description:
      "Play10 müxtəlif əyləncə məkanlarında təcrübənizi artırmaq üçün nəzərdə tutulmuş Caspian Entertainment-dən ən yüksək mükafatlar və sadiqlik proqramıdır. ",
    category: "App Design",
    url: "",
    objectFit: "contain",
  },
  {
    id: 4,
    title: "Sufle",
    image: sufleImg,
    description:
      "Şirniyyat sevərlərə özəl, keyfiyyətli və dadlı tortlar təqdim edən bir platformadır",
    category: "Web Design",
    url: "https://sufle.az/",
    objectFit: "contain",
  },
  {
    id: 5,
    title: "Baki Masura",
    image: bakuMasuraImg,
    description:
      "Tekstil məhsullarını tanıdan və istifadəçilərə ətraflı məlumat verən bir Web Design platformasıdır. Burada ən son yeniliklər və məhsul təhlillərini tapmaq mümkündür.",
    category: "Web Design",
    url: "https://bakimasura.az",
    objectFit: "contain",
  },
  {
    id: 6,
    title: "Socar Cape",
    image: socarcapeImg,
    description:
      "SocarCape, SOCAR və Altrad Group-un birgə layihəsi olaraq 2010-cu ildən tikinti və neft-qaz sənayesində regional liderdir. Keyfiyyət, təhlükəsizlik və dayanıqlı inkişaf prinsipləri ilə sektorda mükəmməllik təqdim edir.",
    category: "Web Design",
    url: "https://socarcape.az/",
    objectFit: "contain",
  },
  {
    id: 7,
    title: "Sufiltiri",
    image: sulfiltiriImg,
    description:
      "Azərbaycanda su filtri sistemlərinin satışı və servisi xidmətlərini göstərməyə başlayan ilk markadır.",
    category: "E-commerce",
    url: "https://sufiltri.az/",
    objectFit: "contain",
  },
  {
    id: 8,
    title: "Metal",
    image: metalImg,
    description:
      " Binaların və evlərin tikintisi və təmiri üzrə peşəkar xidmətlər təqdim edən etibarlı şirkətdir. Keyfiyyət və davamlılıq prinsipləri ilə hər layihədə mükəmməlliyi təmin edir!",
    category: "Web Design",
    url: "",
    objectFit: "contain",
  },
  {
    id: 9,
    title: "Adgeosol",
    image: adgeoSolImg,
    description:
      "Geoloji tədqiqatlar, mühəndislik məsləhətləri və yeraltı resursların analizi sahəsində geniş xidmətlər təqdim edən ixtisaslaşmış bir platformadır.",
    category: "Web Design",
    url: "https://www.adgeosol.com/",
    objectFit: "contain",
  },
  {
    id: 10,
    title: "Datum",
    image: datumImg,
    description:
      "Bizneslərə rəqəmsal transformasiya, proqram təminatının inkişafı və IT sahəsində effektiv həllər təqdim edən peşəkar texnologiya şirkətidir.",
    category: "Web Design",
    url: "https://www.datum.az/",
    objectFit: "cover",
  },
  {
    id: 11,
    title: "Caspian Geomatics",
    image: caspianGeomaticsImg,
    description:
      "Geoinformasiya texnologiyaları, topoqrafik və kartoqrafik xəritəçəkmə, eləcə də yerüstü və yeraltı tədqiqatlar sahəsində müasir avadanlıqlar və qabaqcıl metodlarla yüksək keyfiyyətli xidmətlər göstərən ixtisaslaşmış bir şirkətdir.",
    category: "Web Design",
    url: "https://caspiangeomatics.com/",
    objectFit: "contain",
  },
  {
    id: 12,
    title: "GeoTotal",
    image: geoTotalImg,
    description:
      "Geodeziya, kartoqrafiya, topoqrafiya və mühəndis-geoloji tədqiqatlar sahəsində müasir texnologiyalarla dəqiq və peşəkar xidmətlər təqdim edən ixtisaslaşmış şirkətdir.",
    category: "Web Design",
    url: "https://geototal.az",
    objectFit: "contain",
  },
  {
    id: 13,
    title: "Aral Group Baku",
    image: aralGroupBakuImg,
    description:
      "Sənaye avadanlıqları, boru sistemləri və tikinti materiallarının təchizatı sahəsində yüksək keyfiyyətli məhsullar və mühəndislik həlləri təqdim edən ixtisaslaşmış şirkətdir.",
    category: "Web Design",
    url: "https://aralgroupbaku.com/en/",
    objectFit: "contain",
  },
  {
    id: 14,
    title: "Adda Project",
    image: addaProjectImg,
    description:
      "Müxtəlif sahələr üzrə onlayn elanlar yerləşdirmək və alış-satış etmək imkanı yaradan, istifadəçi dostu interfeysə malik geniş miqyaslı elan platformasıdır.",
    category: "Web Design",
    url: "https://www.adda.az/",
    objectFit: "contain",
  },
  {
    id: 15,
    title: "Besting Az",
    image: bestingImg,
    description:
      "Çörək , şirniyyat və şokolad sənayesində hər cür innovativ məhsullar və təcrübələr təklif edir",
    category: "Web Design",
    url: "http://besting.az/",
    objectFit: "contain",
  },
  {
    id: 16,
    title: "AzProtein",
    image: azProteinImg,
    description:
      "Yüksək keyfiyyətli və təbii ət məhsulları ilə müştərilərimizə dad və etibar təqdim edirik. Təzə, halal və gigiyenik standartlara uyğun hazırlanmış məhsullarımızla süfrənizi zənginləşdirin!",
    category: "E-commerce",
    url: "https://azprotein.az/",
    objectFit: "contain",
  },
  {
    id: 17,
    title: "Rich Distribution",
    image: richDistributionImg,
    description:
      "Rich Distribution şirkəti qurulduğu 2019-ci ilindən etibarən qənnadı və HoReCa sektorunda qida xammaları satışı ilə məşğul olan qabaqcıl bir şirkətdir. Azərbaycanın şirniyyat-qənnadı və HoReCa müştərilərini yüksək keyfiyyətli qida xammal və məhsullarla təmin etmək əsas hədəfimizdir.",
    category: "Web Design",
    url: "https://rich-rd.az/",
    objectFit: "contain",
  },
  {
    id: 18,
    title: "NEQSOL Holding",
    image: neqsolImg,
    description:
      "Şirkətlər qrupu fəaliyyətinə 1990-cı illərin əvvəllərində neft-qaz sahəsində yaradılmış müxtəlif müəssisələrdən başlayıb. Bu fəaliyyət nəticəsində toplanmış kapital yenidən biznesə sərmayə edilib, bu isə neft-qaz sahəsində biznes fəaliyyətinin sürətli inkişafı və genişlənməsi ilə nəticələnib.",
    category: "Web Design",
    url: "https://www.neqsolholding.com/az",
    objectFit: "contain",
  },
  {
    id: 19,
    title: "Nur Collection - Marsol Group",
    image: nurCollectionImg,
    description:
      "Marsol Group 2017-ci ildən fəaliyyət göstərir. Şirkətimizin əsas fəaliyyət sahəsi Sahibkarlğın daha da inkişaf etməsi üçün B2B görüşlər; “Business Breakfast”-lər, “Ofis və istehsalat ziyarətləri”, sosial fəaliyyətlər, “Partners & Business Night”-lar, dövlət qurumları ilə görüşlər, təlimlər, rayon və xarici turlar, konfrans və sərgilər və s. bu tipli tədbirlərin təşkilidir.",
    category: "Web Design",
    url: "https://marsol.az/nur-collection/",
    objectFit: "contain",
  },
  {
    id: 20,
    title: "MediStep",
    image: mediStepImg,
    description:
      "Medistep ilə tibbi biliklərinizi sadədən mürəkkəbə qədər öyrənin və yeniləyin. Bilik və mütəxəssis dil testləri üçün intensiv və fərdi öyrənmə üçün müxtəlif mövzularda minlərlə imtahan sualı təklif edirik. Biliklərinizi sınamaqla siz biliklərinizi qavrayacaq və dərinləşdirəcəksiniz",
    category: "Web Design",
    url: "https://medistep.org/ ",
    objectFit: "contain",
  },
  {
    id: 21,
    title: "Boncuk",
    image: boncukImg,
    description:
      "Boncuk.az olaraq, heyvanlarınızın sağlamlığı və rifahı bizim əsas prioritetimizdir. Biz, heyvan sahiblərinin sevimli dostlarına ən yüksək keyfiyyətli və təhlükəsiz qeyri-qida məhsullarını təqdim etmək məqsədi ilə fəaliyyət göstəririk. Məhsullarımız arasında yataqlar, oyuncaqlar, geyimlər, təmizləmə vasitələri və daha çoxu yer alır.",
    category: "Web Design",
    url: "https://boncuk.az",
    objectFit: "contain",
  },
];

const PortfolioContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (value) => {
    setSelectedCategory(value);
  };

  const filteredProjects = selectedCategory
    ? allProjects.filter((project) => project.category === selectedCategory)
    : allProjects;

  return (
    <Container>
      <StyledPortfolioContainer>
        <StyledPortfolioTitle>
          <h1> We take products and brands to the next level</h1>
        </StyledPortfolioTitle>
        <StyledPortfolioSelectOption>
          <div style={{ padding: "50px" }}>
            <SelectDropdown
              label="Service"
              options={industries}
              onSelect={handleCategorySelect}
            />
          </div>
        </StyledPortfolioSelectOption>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </StyledPortfolioContainer>
    </Container>
  );
};

export default PortfolioContainer;
