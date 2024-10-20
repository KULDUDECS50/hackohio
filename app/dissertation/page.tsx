"use client";
import Link from "next/link";

export default function Dissertation() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row items-center mb-6">
          <h1 className="text-6xl">dissertation</h1>
        </div>
        <h2 className="text-2xl">Abstract</h2>
        <p>
          This project presents an innovative approach to semiconductor
          manufacturing by developing an automated photo-patterning stage using
          DIY techniques. Leveraging resources from the Hackerfab initiative,
          the project focuses on integrating microcontroller feedback for
          precision positioning. The ultimate goal is to deliver a functional
          prototype that demonstrates alignment accuracy while engaging students
          in hands-on semiconductor device manufacturing, making this complex
          process more accessible and educational.
        </p>

        <h2 className="text-2xl">1. Introduction</h2>
        <p>
          The photolithography process is crucial for semiconductor
          manufacturing, where intricate patterns are printed onto silicon
          wafers to create devices such as transistors, resistors, and
          capacitors. Traditionally, this process requires costly equipment,
          limiting access to educational institutions lacking financial
          resources. The Hackerfab initiative addresses this gap by providing
          DIY methods and facilities, enabling students to learn about
          semiconductor manufacturing through practical experience. This project
          aims to harness these resources to develop an automated
          photo-patterning stage that exemplifies the effectiveness of DIY
          approaches in education.
        </p>

        <h2 className="text-2xl">2. Challenge Overview</h2>
        <p>
          The Hackerfab challenge encourages exploration of innovative hardware
          and software components for micro-making. By utilizing the resources
          available on the Hackerfab website, the project focuses on designing a
          photo-patterning stage equipped with microcontroller closed-loop
          feedback for enhanced precision. The primary objective is to deliver a
          fully operational automated system that showcases statistical data on
          alignment accuracy, facilitating a deeper understanding of
          semiconductor manufacturing techniques among students.
        </p>

        <h2 className="text-2xl">3. Photolithography Process</h2>
        <p>
          Photolithography is a pivotal technique in semiconductor fabrication,
          employing light to transfer geometric patterns onto a substrate. This
          section provides a detailed overview of how photolithography operates,
          emphasizing its role in creating high-precision semiconductor devices.
          The comparison between traditional photolithography equipment and DIY
          methods highlights the advantages of the latter, particularly for
          educational purposes, by offering a hands-on approach to complex
          manufacturing processes that can inspire innovation and creativity
          among students.
        </p>

        <h2 className="text-2xl">
          4. Design and Development of the Photo-Patterning Stage
        </h2>
        <p>
          This section delves into the design and development of the automated
          photo-patterning stage. It begins with a detailed overview of the
          system requirements, including technical specifications necessary for
          optimal performance. The design phase includes selecting appropriate
          hardware components, such as microcontrollers, motors, and sensors,
          while also considering their integration into a cohesive system.
          Software development is crucial for controlling the stage, utilizing
          algorithms for precise movement and feedback. The implementation of
          closed-loop feedback systems is essential to ensure accurate
          positioning, significantly enhancing the reliability of the
          photo-patterning process.
        </p>

        <h2 className="text-2xl">5. Implementation</h2>
        <p>
          The implementation phase details the construction of the prototype
          photo-patterning stage. This involves a comprehensive step-by-step
          guide to integrating hardware and software components, ensuring they
          work seamlessly together. The testing and calibration processes are
          crucial, involving methods for evaluating alignment accuracy and
          fine-tuning the system to achieve desired performance metrics. This
          rigorous approach ensures that the developed stage meets its
          operational goals and provides reliable results in practical
          applications.
        </p>

        <h2 className="text-2xl">6. Results and Discussion</h2>
        <p>
          This section presents the statistical data collected during testing,
          focusing on alignment accuracy across various samples. The results are
          evaluated against the project objectives, discussing the implications
          of the findings for both the prototype and the broader field of
          semiconductor education. Challenges encountered during the design and
          implementation phases are analyzed, providing insights into potential
          areas for improvement and future research opportunities.
          Recommendations for enhancing the photo-patterning stage are also
          outlined, emphasizing the importance of continuous innovation in this
          field.
        </p>

        <h2 className="text-2xl">7. Conclusion</h2>
        <p>
          In conclusion, this project significantly impacts semiconductor
          manufacturing education by demonstrating the feasibility of DIY
          approaches in creating an automated photo-patterning stage. The work
          highlights the importance of accessibility and innovation within the
          DIY semiconductor community, encouraging student engagement and
          exploration in advanced manufacturing techniques. The findings suggest
          that with appropriate resources and support, educational institutions
          can empower students to participate actively in the semiconductor
          manufacturing process.
        </p>

        <h2 className="text-2xl">Authors</h2>
        <p>
          Kuldeep Debnath, Rohan Reddy, Vikranth Vegesina, & Jason Kibler II
        </p>
      </main>
      <div>
        <h1>
          <a className="underline underline-offset-4" href="./">
            home
          </a>
        </h1>
      </div>
    </div>
  );
}
