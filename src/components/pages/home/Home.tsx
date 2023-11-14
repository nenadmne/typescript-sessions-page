import studentsImg from "../../../assets/students.jpg";
import listImg from "../../../assets/list.jpg";
import certificateImg from "../../../assets/certificate.jpg";
import HomeSection from "./components/HomeSection";

export default function HomePage() {
  const sectionsData = [
    {
      imgSrc: studentsImg,
      altText: "A group of students",
      title: "What we do",
      description:
        "ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed.",
    },
    {
      imgSrc: listImg,
      altText: "A list of sessions",
      title: "What we offer",
      description:
        "We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions. Browse our available sessions to find the one that best fits your needs.",
    },
    {
      imgSrc: certificateImg,
      altText: "A certificate",
      title: "What you get",
      description:
        "No matter if you are a beginner or an experienced React developer, we are here to help you level up your React skills.",
    },
  ];

  return (
    <main id="home-page">
      <h2>Our Mission: Your Success</h2>
      {sectionsData.map((item) => (
        <HomeSection key={item.title} item={item} />
      ))}
    </main>
  );
}
