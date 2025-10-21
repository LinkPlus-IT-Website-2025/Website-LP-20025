import React, { useState } from "react";
import { Row, Col, Typography, Space, Modal } from "antd";
import {
  FacebookOutlined,
  // TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";
import footerBg from "../../assets/images/footer.jpg";


// ✅ adjust this path if your file is in a different folder
import lpLogo from "../../assets/images/lp-logo.png";

const { Title, Text, Link: AntLink } = Typography;

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "#", onClick }) => {
  const clickable = !!onClick;
  return (
    <div className={styles.footerLinkWrapper}>
      <AntLink
        href={clickable ? undefined : href}
        onClick={
          clickable
            ? (e) => {
                e.preventDefault();
                onClick();
              }
            : undefined
        }
        className={styles.footerLink}
      >
        <RightOutlined className={styles.footerLinkBullet} />
        <span>{children}</span>
      </AntLink>
    </div>
  );
};

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showConduct, setShowConduct] = useState(false);
  const [showDataProtection, setShowDataProtection] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
     <footer className={styles.footerContainer}>
<div
  className={styles.footerBackground}
  style={{
    backgroundImage: `linear-gradient(rgba(110, 19, 22, 0.49), rgba(104, 16, 19, 0.41)), url(${footerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

          <div className={styles.footerOverlay}>
            <div className={styles.footerContent}>
              <Row gutter={[32, 32]} justify="space-between">
                {/* Brand (now shows the logo image + wordmark) */}
                <Col xs={24} sm={24} md={6} lg={6}>
                  <div className={styles.footerBrand}>
                    <div className={styles.logoContainer}>
                      <img src={lpLogo} alt="" className={styles.brandLogo} />
                      {/* <Title level={3} className={styles.brandName}>
                        LINKPLUS IT
                      </Title> */}
                    </div>

                    <Text className={styles.brandDescription}>
                      LinkPlus IT is a trusted global partner, delivering top-tier software
                      solutions. For over 12 years, we’ve helped businesses build reliable,
                      future-ready systems.
                    </Text>

                    <Space size="large" className={styles.socialIcons}>
                      <a
                        href="https://www.facebook.com/LinkPlusIT/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className={styles.socialLink}
                        title="Facebook"
                      >
                        <FacebookOutlined />
                      </a>
                      <a
                        href="https://www.instagram.com/linkplus_it/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={styles.socialLink}
                        title="Instagram"
                      >
                        <InstagramOutlined />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/linkplus-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.socialLink}
                        title="LinkedIn"
                      >
                        <LinkedinOutlined />
                      </a>
                      {/* <a
                        href="#"
                        aria-label="X"
                        className={styles.socialLink}
                        title="Twitter / X"
                        onClick={(e) => e.preventDefault()}
                      >
                        <TwitterOutlined />
                      </a> */}
                    </Space>
                  </div>
                </Col>

              

                {/* Quick Links */}
                <Col xs={24} sm={12} md={6} lg={5}>
                  <div className={styles.footerSection}>
                    <Title level={4} className={styles.sectionTitle}>
                      Quick Links
                    </Title>
                    <div className={styles.footerLinks}>
                      <FooterLink href="/services">Services</FooterLink>
                      <FooterLink href="/team">Team</FooterLink>
                      <FooterLink href="/contactus">Contact</FooterLink>
                      <FooterLink href="/aboutus">About Company</FooterLink>
                      <FooterLink href="/career">Careers</FooterLink>
                    </div>
                  </div>
                </Col>
  {/* Awards (icon removed) */}
               {/* Awards */}
<Col xs={24} sm={12} md={6} lg={5}>
  <div className={styles.footerSection}>
    <Title level={4} className={styles.sectionTitle}>Awards</Title>

    {/* ➜ Choose ONE of these: styles.awardsSolid OR styles.awardsGlass */}
    <div className={`${styles.footerLinks} ${styles.awardsGlass}`}>
      <div className={styles.awardItem}>
        <span>
          Laureate of <br /><strong>Impact Stars</strong>, 
          <strong>Technology Fast 50 2022 Central Europe,Deloitte</strong>
        </span>
      </div>

      <div className={styles.certRow}>
        <span className={styles.badge}>ISO 9001:2015 & ISO 27001 CERTIFIED</span>
        {/* <span className={styles.badge}>ISO 27001 CERTIFIED</span> */}
      </div>
    </div>
  </div>
</Col>

                {/* Contact */}
                <Col xs={24} sm={24} md={6} lg={6}>
                  <div className={styles.footerSection}>
                    <Title level={4} className={styles.sectionTitle}>
                      Contact
                    </Title>
                    <div className={styles.contactInfo}>
                      <Text className={styles.contactAddress}>
                        Str.Tirana, Icon Tower – 12th Floor, no.46, Prishtine, 10000, Kosovo
                      </Text>
                      {/* <div className={styles.contactPhone}>
                        <Text className={styles.phoneLabel}>Need help? Call us</Text>
                        <AntLink href="tel:+1084456-0789" className={styles.phoneNumber}>
                          +(084) 456-0789
                        </AntLink>
                      </div> */}
                      <Text className={styles.contactEmail}>office@linkplus-it.com</Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Centered legal links row — now 4 items */}
            <div className={styles.footerLegal}>
              <button className={styles.legalBtn} onClick={() => setShowPrivacy(true)}>
                Privacy policy
              </button>
              <button className={styles.legalBtn} onClick={() => setShowConduct(true)}>
                Code of conduct
              </button>
              <button className={styles.legalBtn} onClick={() => setShowDataProtection(true)}>
                Data protection policy
              </button>
              {/* <button className={styles.legalBtn} onClick={() => setShowTerms(true)}>
                Terms of use
              </button> */}
            </div>

            {/* Copyright */}
            <div className={styles.footerBottom}>
              <Text className={styles.copyrightText}>
                © 2025 <span className={styles.brandHighlight}>LINKPLUS IT</span> | All rights reserved
              </Text>
            </div>
          </div>
        </div>
      </footer>

      {/* ======= MODALS (styled like your screenshot) ======= */}
     <Modal
  open={showPrivacy}
  onCancel={() => setShowPrivacy(false)}
  footer={null}
  width={980}
  title={null}
  className={styles.legalModal}
  centered
>
  <div className={styles.modalHeader}>
    <h2>Privacy Policy</h2>
  </div>

  <div className={styles.modalBody}>
    <h3>1. Security and performance</h3>
    <p>
      We respect each site visitor's right to personal privacy. To that end, we collect and use
      information throughout our website only as disclosed in this Privacy statement. This Privacy
      statement applies solely to information collected by this website. It discloses the privacy
      practices for <strong>www.linkplusit.com</strong>. Hereafter, the terms ‘LinkPlus IT’, ‘us’ or ‘we’
      refer to the owner of the website whose registered office is located at Icon Tower, 12th Floor,
      no.46, 10000 Prishtine, Kosovo. The term ‘you’ refers to the user or viewer of our website.
    </p>
    <p>
      We take the protection of our users’ personal data very seriously, and want each user to feel
      secure and at ease while visiting our internet pages and/or interacting with them. Any details
      that you enter in one of our online forms will be stored electronically by us. Should you wish
      for any modifications, corrections or deletion of these stored data, please contact us by e-mail
      at <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>.
    </p>
    <p>
      We have no authority over the design or development of the content of other companies' internet
      pages that are accessible via links from our website. Therefore we disclaim any responsibility for
      the content, design and/or policies of these internet pages. Furthermore, we expressly disassociate
      from any internet content that might be illegal or offensive. If you use links on our website to
      access other companies' internet pages, you do so on your own responsibility.
    </p>
    <p>
      The content of this website is intellectual property protected by law. The information and content
      provided may not be re-used without our explicit permission, except for private or other personal
      use within the meaning of the Data Protection Act. The press releases and articles from our press
      service presented on the site are available to the editors of newspapers or periodicals for
      publication. If they are published, we would request the publisher to send us a proof copy.
      We reserve the right to make changes to this Privacy statement at any time without notice.
      If you disagree with any part of this Privacy statement, please do not use our website.
    </p>

    <h4>1.1 How we use your information</h4>
    <p>
      This privacy policy is meant to inform you on what to expect when we, LinkPlus IT, collect
      personal information.
    </p>

    <h4>1.2 Data Protection Policy</h4>
    <p>
      Link Plus IT has established a Data Protection Policy which ensures its employees, clients,
      resellers, and stakeholders that their data is protected and handled accordingly with absolute
      caution and confidentiality. Please read our Data Protection Policy on our website.
    </p>

    <h4>1.3 Visitors of the LINK PLUS IT website and account creation</h4>
    <p>
      When you visit our website, you should be aware that we use third party services, such as
      Google Analytics, to collect standard internet log information and details of visitor behavior
      patterns. This operation is performed in order to provide us information regarding the number of
      visitors to the various parts of the site. The processing of this information does not provide any
      kind of identification of the visitors. Google Analytics does not make any attempt to reveal the
      identities of those visiting our website.
    </p>
    <p>
      The only case when Link Plus IT collects personally identifiable information through the website
      is when a visitor voluntarily creates a user account. We provide full transparency in these cases.
      We make sure to express it clearly and intelligibly when we collect personal information and
      provide an unambiguous explanation on what we intend to do with the information collected.
      We collect personally identifiable information only with the consent of the natural person (data
      subject) and assure that the data collected is used only for the stated purpose.
    </p>

    <h4>1.4 Consent to Your Information Being Collected</h4>
    <p>
      The submission of information to Link Plus IT by users is done on a voluntary basis. When a user
      clicks the "Submit" button on any of our web forms at our website <strong>www.linkplusit.com</strong>,
      the users are indicating that they are aware of the LinkPlus IT Terms, Conditions, Policy
      provisions and voluntarily consent to the conditions outlined therein.
    </p>

    <h4>1.5 Search engine</h4>
    <p>
      LINKPLUS IT reserves the right to build a search engine within the website to help its visitors
      find information easier. The search engine serves as a means to search publicly available
      information on our website, and not personally identifiable information of users.
    </p>

    <h3>2. Security and performance</h3>
    <p>
      We take precautions to protect your information and privacy. When you submit information via the
      form(s) available on our website, your information is protected both online and offline. Only
      employees who need the information to perform a specific task (for example, billing or customer
      service) are granted access to personally identifiable information. The computers/servers in which
      we store personally identifiable information are kept in a secure environment, monitored with a
      strictly controlled access. We use a third-party service to help maintain the security and
      performance of our website.
    </p>
    <p>
      However, no transmission of data on the Internet can be guaranteed to be completely confidential.
      Therefore, we cannot guarantee that any information you send us will not be lost, used unlawfully
      or modified in a fraudulent manner and we bear no liability for the use that may be made of the
      information provided by you or any third party.
    </p>

    <h4>2.1 Our Service Providers</h4>
    <p>
      To provide our services and publish our website <strong>www.bambusgropu.com</strong>, we use the
      G Suite. The G Suite Privacy Policy is available online at{" "}
      <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noreferrer">
        https://policies.google.com/privacy?hl=en-US
      </a>. We do not grant any permission to the OVH to share any personal information we collect from
      our account holders on our website.
    </p>

    <h3>3. People who email us</h3>
    <p>
      We use G Suite as our e-mailing system as a third-party service provider. We chose G Suite because
      it complies with the information security requirements, including but not limited to ISO 27001 and
      EU GDPR. Emails sent by LinkPlus IT will be encrypted in transport by G Suite by default. We do not
      guarantee that the recipients of our emails have enabled or available encryption, therefore it is
      your responsibility to ensure encryption in your end. We will also monitor any emails sent to us for
      viruses or malicious software, including file attachments. Please be aware that you have a
      responsibility to ensure that any email sent to us by you is legally compliant.
    </p>

    <h3>4. Human Resources</h3>

    <h4>4.1 Job applicants, current, and former Link Plus IT employees</h4>
    <p>
      LinkPlus IT is the data controller of the information you provide during the processes of job
      application, unless otherwise stated. If you have any questions about the process or the way your
      information is handled, please contact us at{" "}
      <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>.
    </p>

    <h4>4.2 What will we do with the information you provide us?</h4>
    <p>
      All of the information you provide during the process is only used for the purpose of proceeding
      your application or to fulfill legal and/or regulatory requirements if necessary. We do not share
      any of the information you provide during the recruitment process with any third-parties. The
      information you provide will be held securely by us and/or our Human Resources Office whether the
      information is in electronic or physical format. We use the contact details you provide to us in
      order to contact you for the purpose of progressing your application. We use other information you
      provide to assess your suitability for the role you have applied for.
    </p>

    <h4>4.3 What information do we ask for, and why?</h4>
    <p>
      We do not collect more information than we need to fulfill our stated purposes and do not retain any
      information for longer than is necessary. The information we ask for is used to assess your
      suitability for employment.
    </p>

    <h3>5. Children</h3>
    <p>
      This privacy statement is not intended for use by children. We understand the importance of
      protecting children’s information, especially in an online environment, and we do not knowingly
      collect or maintain information about children.
    </p>

    <h3>6. Complaints</h3>
    <p>
      Link Plus IT strives to meet the highest standards of data protection when collecting and using
      personal information. For this reason, we take any complaints we receive very seriously. We
      encourage our website users, visitors and any concerned party to bring to our attention any
      observation or opinion which is thought to indicate unfair, misleading or inappropriate information
      collection and/or usage. This privacy notice was drafted with brevity and clarity in mind. It does
      not provide exhaustive details of all aspects of Link Plus IT’s collection and usage of personal
      information. However, we are happy to provide any additional information or explanation needed. Any
      requests of this nature should be sent to the address below. If you want to make a complaint about
      the way we have processed your personal information, you can do it by following the steps described
      in our Complaint and Appeal Procedure.
    </p>

    <h4>6.1 Access to personal information</h4>
    <p>If we hold information about you we will:</p>
    <ul>
      <li>provide you a description of it;</li>
      <li>inform you on the reasons we are holding it;</li>
      <li>provide you with information on parties it could be disclosed to; and</li>
      <li>provide you with a copy of the information in an intelligible form.</li>
    </ul>
    <p>
      To make a request to LinkPlus IT for any personal information we may hold you need to put the
      request in writing and address it to our Information Security Manager at{" "}
      <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>.
    </p>
    <p>
      If we hold information about you that you deem to be incorrect, you can ask us to correct mistakes
      by contacting our Information Security Manager. If we hold information that you consider to be kept
      by us without reason, you can ask us to delete your information at any time. Please keep in mind
      that we do not delete all of your information when requested, due to legal obligations, such as the
      financial transactions evidence.
    </p>

    <h4>6.2 Disclosure of personal information</h4>
    <p>
      In general and in all circumstances, we will not disclose personal data without consent. However,
      when we are asked by the regulatory body, supervisory authority, or for other necessary legal
      operations, we may disclose your information.
    </p>
    <p>
      <strong>Links to other websites:</strong> This privacy notice does not cover the links within this
      site linking to other websites. We encourage you to read the privacy statements on the other
      websites you visit.
    </p>

    <h3>7. Changes to this privacy policy</h3>
    <p>
      We keep our privacy notice under regular review. This privacy notice was last updated on
      September 01, 2023. You will not be notified for changes in our privacy policy, and you are
      required to visit the privacy policy on our website.
    </p>

    <h4>How to contact us</h4>
    <p>
      If you want to request information about our privacy policy you can email us or write to:
      <br />
      <strong>LINKPLUS IT Headquarters</strong>{" "}
      <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>
      <br />
      Icon Tower, 12th Floor, no.46, 10000 Prishtine, Kosovo
      <br />
      +38348224445
    </p>
  </div>
</Modal>


    <Modal
  open={showConduct}
  onCancel={() => setShowConduct(false)}
  footer={null}
  width={980}
  title={null}
  className={styles.legalModal}
  centered
>
  <div className={styles.modalHeader}>
    <h2>Code of Conduct</h2>
  </div>

  <div className={styles.modalBody}>
    <h3>Foreword</h3>
    <p>
      LinkPlus IT is fully committed to adhere to the highest ethical conduct and values. The
      LinkPlus IT Management is dedicated to share the code of ethics principles within the
      organization by assuring that every employee understands the importance of behaving and
      exhibiting great responsibility, competence and fairness towards each colleague and client.
      We believe that organizational success is assured when an organization fully understands its
      customer needs and desires. We help consumers and businesses get the products and services
      they want and need. We keep our companies in business with our talented problem solvers that
      combine the skills and technology needed to improve business performance and services that
      improve the quality of life for everyone. LinkPlus IT Code of Ethics describes the values and
      procedures which are expected from our employees. We believe that strong ethical values are
      the prerequisite to a healthy work environment and foster great working relationships
      internally and externally. Every employee is responsible to understand these principles and
      make sure that they are implemented successfully in their aspects of operation or for
      procedures which are under their competence. Anyone who is unaware of any procedure mentioned
      in this document or who needs a more detailed clarification is encouraged to contact us. It
      will be our pleasure to explain any and all of these principles and its implementations in
      great detail.
    </p>

    <h3>Applicability</h3>
    <p>
      LinkPlus IT Code of Conduct is applicable to all LinkPlus IT Professionals. This includes all
      clients, partners, employees, and other relevant stakeholders. However, if an employee
      violates the premises of ethical behavior, LinkPlus IT contract may be terminated and contract
      revoked. Not only is it important for LinkPlus IT employees to adhere to the principles
      expressed in this Code, we believe that a basic Code of Conduct will inspire virtues of human
      decency and highest professionalism among all coworkers and stakeholders.
    </p>

    <h4>LinkPlus IT professionals will:</h4>
    <ol>
      <li>
        Conduct themselves professionally, with honesty, accuracy, fairness, responsibility and
        independence.
      </li>
      <li>
        Act at all times solely in the best interest of their employer, their clients, the public,
        and the profession by acting in accordance with the professional standards and applicable
        techniques while performing professional services.
      </li>
      <li>
        Maintain competency in their respective fields and strive to constantly improve their
        professional skills.
      </li>
      <li>
        Offer only professional services for which they are qualified to perform, and adequately
        inform clients and consumers about the nature of proposed services, including any relevant
        concerns or risks.
      </li>
      <li>
        Inform each employer or client of any business interests or affiliations which might
        influence their judgment or impair their fairness.
      </li>
      <li>
        Treat in confidential and private manner information acquired during professional and
        business dealings of any present or former employer or client without its proper consent.
      </li>
      <li>
        Comply with all laws and regulations of the jurisdictions where professional activities are
        conducted.
      </li>
      <li>Respect the intellectual property and contributions of others.</li>
      <li>
        Not act in any manner that could compromise the reputation of LinkPlus IT or its
        certification programs.
      </li>
      <li>Fully cooperate on the inquiry following a claimed infringement of this Code of Ethics.</li>
    </ol>

    <h3>Integrity</h3>
    <p>
      We wholly understand the importance of truthfulness and integrity when establishing
      procedures, policies and services. We ensure that every answer, conduct, recommendation,
      suggestion and assistance provided is true and of the highest norm. We attempt to provide
      services without prejudice against anyone’s background and preference of any kind. We believe
      that employees shall not be driven and dominated only by regulations or requirements but also
      by their self-initiative on promoting actions that are ethically right. We highly condemn
      sales practices, customer services or product developments that are governed by inaccurate
      information or misrepresentation facts.
    </p>

    <h4>A Culture of Integrity</h4>
    <p>When facing any doubt of potential conflict arising from a breach of our Code of Ethics, LinkPlus IT Professionals should ask the following questions:</p>
    <ul>
      <li>Do I suspect that the particular course of action may be illegal or unethical?</li>
      <li>In what way am I involved?</li>
      <li>What are the principles or rules infringed?</li>
      <li>Could this action undermine my professional and personal character?</li>
      <li>Does the proposed course of action involve being untruthful and/or unsafe?</li>
      <li>Could the proposed course of action damage LinkPlus IT (directly or indirectly) or its reputation?</li>
      <li>Does the proposed course of action have a legitimate business purpose, and is there any alternative?</li>
    </ul>
    <p>
      If the proposed course of action fails any of these questions, LinkPlus IT Professionals should
      seek advice and re-consider the decision. The existence of a problem should never be ignored.
    </p>

    <h3>Impartiality</h3>
    <p>
      We are fully aware of the importance of impartiality in carrying out our operational
      activities. We ensure to treat everybody involved in our business with respect, dignity and
      fairness. We have documented structures, policies and procedures to manage impartiality and to
      ensure that our activities are undertaken impartially and followed by top management
      commitment. We analyze, document and eliminate the potential conflict of interests arising
      from our service activities which are structured and managed so as to safeguard impartiality.
      Our aim is to inspire and prove confidence in the distribution of our services and products.
    </p>

    <h3>Conflict of Interest</h3>
    <p>
      Conflicts of interest may arise when a candidate requests a service at LinkPlus IT, and has a
      financial interest or close personal relationship with anyone from the LinkPlus IT staff
      involved in business decisions. This principle and procedure applies for all business
      processes. Conflicts may lead to, or be accompanied by, the inappropriate handling and
      decision making for the exclusive benefit of the employees. In order to identify, minimize,
      manage conflict of interests, our staff members are responsible to report circumstances where
      potential conflict of interests may arise. Then, procedures for documenting and controlling
      conflict of interests are initiated.
    </p>

    <h3>Confidentiality</h3>
    <p>
      Information should always be protected, regardless of how it is formed, shared, communicated
      or stored. Information can exist in many forms. It can be printed or written on paper, stored
      electronically, transmitted by post or by using electronic means, shown on films, or spoken in
      conversation. Information security is the protection of information from a wide range of
      threats in order to ensure business continuity, minimize business risk, and maximize return on
      investments and business opportunities.
    </p>
    <p>Our Information Security priorities are:</p>
    <ul>
      <li>
        Strategic and operational information security risks are understood and treated to be
        acceptable to the organization.
      </li>
      <li>
        The confidentiality, integrity and availability of customer information, product development
        and all confidential information are assured.
      </li>
    </ul>
    <p>
      Each employee is responsible to provide factually accurate information. Our team is aware and
      assures that every information circulated or publicly distributed complies with LinkPlus IT
      Information Security, Data Protection and Confidentiality policies. Sensitive information
      shall never be shared without prior permission of the person who grants the ownership of the
      information. All employees shall become aware and respect the sensitivity factor and impact of
      information, and therefore, are made accountable for information that belongs under their
      roles and responsibilities.
    </p>

    <h3>Responsibility</h3>
    <p>
      We understand and know how to assess customer needs. Sometimes failures are only perceived as
      negative outcomes of productivity within a company. However, many great organizations
      understand that there is no success without failure. Without identifying failures, it would be
      hard to improve an organization. We ensure that every issue is treated with responsibility and
      priority. We have implemented procedures for addressing issues, providing correct feedback,
      listening to customer’s concerns and translating every raised issue into an opportunity for
      continual improvement and perfection.
    </p>
    <p>
      Our Compliance Team knows how to empathize and communicate in response to our customer needs.
      Thus, we are trained to understand and investigate the root cause of raised issues and provide
      controls and actions for eliminating them. Working with International clients, means to follow
      professional ethical codes. Our team knows how to analyze, comply and embed international
      standards requirements into every procedure. We understand that any violation of our Code and
      Ethics will bring damaging consequences on our credibility.
    </p>
    <p>
      LinkPlus IT has put in place an adequate procedure to deal with all forms of complains. This
      applies in the event of a complaint or appeal received from customers and other parties
      concerned with the rules, policies, procedures, services, or overall LinkPlus IT operations.
      This procedure covers the assessed actions, response, recommendations and the role of the
      Appeal Board when reaching a conclusive settlement on account of the appeal.
    </p>

    <h3>Competence</h3>
    <p>
      A member of our Team is qualified and aware of the roles and responsibilities they shall
      follow in fulfilling the organizational objectives and meeting customer expectations. In this
      context, our strategy is primarily focused in detecting the nature of problems through
      root-cause analysis and providing solutions with a focus towards efficiency and satisfaction.
      Our Team understands how to address and when to prioritize issues. We have set a clear
      definition of the responsibilities that everyone in our organization has in communicating
      concepts for establishing a collaborative approach that is important for management
      development in a collective manner. Issues or concerns are seen as productive features for
      putting in place preventive measures and controls. One of our ways to ensure workplace
      competency is to initiate continual training and awareness sessions by using real-life
      examples and scenarios. It is our core objective to make sure that our Team understands the
      theoretical and practical aspects of management principles and standard requirements.
    </p>

    <h3>Respect and Dignity</h3>
    <p>
      Every person must be treated with respect and dignity. No action taken within our organization
      shall be discriminatory or offensive, but built upon the norms of fundamental and universal
      human rights values. Every person should be respected and treated equally regardless of race,
      gender, religion, sexual orientation or world view. We encourage freedom of speech,
      expression of opinions and thoughts by cultivating a work environment with a strong emphasis
      for multicultural awareness and tolerance.
    </p>
    <p>
      <strong>Anti-bribery and Anti-Corruption.</strong> We are committed in the fight against
      bribery worldwide, and as such reject any form of bribery or corruption, direct or indirect,
      including kickbacks, the use of funds or assets for any unethical purposes. This categorical
      rejection of bribery practice also includes the use of other routes or channels for provision
      of improper benefits from or to customers, partners, associates, and government authorities.
      In this effort we promote full compliance against anti bribery through local and international
      requirements such as ISO 37001.
    </p>

    <h3>Code of Ethics Evaluation</h3>
    <p>
      Being compliant with the LinkPlus IT Code of Ethics principles is essential for all LinkPlus IT
      professionals, including LinkPlus IT employees, partners, and other associates. Compliance is
      included in the performance evaluation of each stakeholder and continuous monitoring is performed
      regularly. Any LinkPlus IT Professional who fails to comply with the LinkPlus IT Code of Ethics
      shall be subject to disciplinary measures which may include the termination of their contract,
      and in cases when the impact is severe, legal measures will be followed. In all cases, the author
      of any violation shall have the right to be heard and to defend him or her–self before a
      disciplinary measure is imposed.
    </p>

    <h3>Environmental Awareness</h3>
    <p>
      Our organization is aware of the damages and externalities that unconscious human actions can
      cause to the natural world. Therefore, we seek to improve our business process to reach an
      ideal level of environmental protection and operate in the best way possible.
    </p>

    <h3>Contact us</h3>
    <p>
      Should any stakeholder witness any breach of LinkPlus IT Code of Ethics by LinkPlus IT
      Professionals, we highly encourage you to report it to our Compliance representative. We are
      committed to investigate each case to the full extent necessary to ensure highest ethical
      standards.
      <br />
      Icon Tower, 12th Floor, no.46, 10000 Prishtine, Kosovo
      <br />
      <a href="mailto:hr@linkplus-it.com">hr@linkplus-it.com</a>
      <br />
      +38348224445
    </p>
  </div>
</Modal>


     <Modal
  open={showDataProtection}
  onCancel={() => setShowDataProtection(false)}
  footer={null}
  width={980}
  title={null}
  className={styles.legalModal}
  centered
>
  <div className={styles.modalHeader}>
    <h2>Data Protection Policy</h2>
  </div>

  <div className={styles.modalBody}>
    <h3>Introduction</h3>
    <p>
      Our Data Protection policy indicates that we are dedicated to and responsible for processing
      the information of our customers, stakeholders, employees and other interested parties with
      absolute caution and confidentiality. This policy describes how we collect, store, handle and
      secure our data fairly, transparently, and with confidentiality. This policy ensures that
      Link Plus IT follows good practices to protect the data gathered from its customers,
      employees, and stakeholders. The rules outlined in this document apply regardless of whether
      the data is stored electronically, on paper or on any other storage device.
    </p>

    <h3>1. Policy Elements</h3>
    <p>
      As a key part of our operations, we gather and process any information or data that makes an
      individual identifiable such as full name, physical address, email address, photographs, etc.
      This information is collected only with the full cooperation and knowledge of interested
      parties. Once this information is available to us, the following rules apply to our company.
    </p>
    <p><strong>Our data will:</strong></p>
    <ul>
      <li>Be precise and consistently updated;</li>
      <li>Be collected legitimately and with a clearly stated purpose;</li>
      <li>Be processed by the company in line with its legal and ethical binds;</li>
      <li>
        Have a protection measure that protects it from any unauthorized or illegal access occurring
        by internal or external parties.
      </li>
    </ul>
    <p><strong>Our data will NOT:</strong></p>
    <ul>
      <li>Be communicated informally;</li>
      <li>Exceed the specified amount of time stored; therefore, personal data of employees, customers, and affiliates who no longer use Link Plus IT services will be archived for 3 years and deleted afterwards;</li>
      <li>Be transferred to organizations, states or countries that do not acquire proper data protection policies;</li>
      <li>Be spread to any party unless approved by the data’s owner (except for the legitimate requests demanded from law enforcement authorities).</li>
    </ul>

    <h3>2. Roles and Responsibilities</h3>
    <p>
      Everyone who works for or with Link Plus IT is responsible for ensuring that the collection,
      storage, handling, and protection of data is being done appropriately.
      Email: <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>
      &nbsp;Phone: +38348224445
    </p>
    <p><strong>Information Security Manager and Data Protection Officer (DPO)</strong> is responsible for:</p>
    <ul>
      <li>Informing and advising LinkPlus IT in regards to the data protection and privacy for the natural persons;</li>
      <li>Monitoring Data Protection and privacy compliance of Link Plus IT with the data protection requirements applicable in EU;</li>
      <li>Providing advice with regard to data protection impact assessments;</li>
      <li>Cooperating and liaising with the supervisory authority;</li>
      <li>Being a point of contact for data subjects at: <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>;</li>
      <li>Providing oversight and continuous enhancement of cyber security and risk management awareness programs and improvements;</li>
      <li>Leading the design and operation of related compliance monitoring and improvement activities to ensure compliance with both internal security policies, and applicable laws and regulations;</li>
      <li>Developing and managing controls to ensure compliance with the wide variety and ever-changing requirements resulting from standards and regulations.</li>
    </ul>
    <p><strong>IT Systems Manager:</strong></p>
    <ul>
      <li>Strictly complying with all Link Plus IT policies related to non-disclosure, non-competition and confidentiality of information;</li>
      <li>Constantly staying up to date on various web technologies and tools;</li>
      <li>Performing networking systems hardware and software upgrades, and installing security patches as needed;</li>
      <li>Checking and monitoring the general health of networks and networking devices;</li>
      <li>Performing daily system monitoring, verifying the integrity and availability of all hardware, server resources, systems and key processes, reviewing system and application logs, and verifying completion of scheduled tasks;</li>
      <li>The implementation, configuration and maintenance of computer networks, software, and digital security.</li>
    </ul>
    <p><strong>Systems Administrator:</strong></p>
    <ul>
      <li>Ensuring that access to personal data of users registered on the Link Plus IT Website is restricted only to authorized personnel;</li>
      <li>Ensuring that access to the personal data of users registered on the Link Plus IT website will not be shared with or provided to unauthorized personnel.</li>
    </ul>

    <h3>3. General Guidelines</h3>
    <ul>
      <li>Access to data covered by this policy is restricted only to those who need it for their work;</li>
      <li>Data is not to be shared informally. When access to confidential information is required, employees request it from their line managers;</li>
      <li>We provide comprehensive training to all employees to help them understand their responsibilities when handling data;</li>
      <li>Employees keep all data secure, by taking sensible precautions and following the Data Storage guidelines specified below;</li>
      <li>In particular, strong passwords are used and never shared;</li>
      <li>Personal data is not disclosed to unauthorized people, within the company or externally;</li>
      <li>Employees request help from their line manager or the data protection officer when they are unsure about any aspect of data protection.</li>
    </ul>

    <h3>4. Data Storage</h3>
    <p>These rules describe how and where data is safely stored. When data is stored on paper, it is kept in a secure place accessed only by authorized personnel.</p>
    <p>These guidelines also apply to data that is usually stored electronically but has been printed out for certain reasons:</p>
    <ul>
      <li>The paper or files are kept in a locked drawer or filing cabinet;</li>
      <li>Employees make sure paper and printouts are not left unattended;</li>
      <li>Data printouts are securely shredded and disposed when no longer needed.</li>
    </ul>
    <p>When data is stored electronically, it must be protected from unauthorized access, accidental deletion and malicious internal or external threats.</p>
    <ul>
      <li>Data should be protected by strong passwords that are updated regularly and never shared among employees;</li>
      <li>If data is stored on removable media (like a CD or DVD, External HDD, etc.), these should be kept locked away securely when not being used;</li>
      <li>Data should only be stored on designated servers at Link Plus IT premises, and should only be uploaded on to approved cloud computing services;</li>
      <li>Servers containing personal data are sited at secure locations, where access is restricted for authorized personnel only and monitored;</li>
      <li>Data is never saved directly in permanent computers or other portable devices like tablets or smartphones, etc;</li>
      <li>All servers and computers containing data are protected by the monitoring system and the firewall system;</li>
    </ul>

    <h3>5. Data Usage</h3>
    <ul>
      <li>
        All data collected by Link Plus IT is strictly for Link Plus IT-related services required to
        ensure a complete response/service is being provided by Link Plus IT. No other non-Link Plus
        IT related service will be offered from the data collected;
      </li>
      <li>When working with personal data, employees ensure their computer screens are always locked when left unattended;</li>
      <li>Data is encrypted before being transferred electronically;</li>
      <li>Employees do not save copies of personal data into their own computers. The access and update of a copy is always made at the central copy of the data.</li>
    </ul>

    <h3>6. Data Accuracy and Actions</h3>
    <p>To exercise data protection, Link Plus IT takes reasonable steps and is committed to:</p>
    <ul>
      <li>Restrict and monitor access to sensitive data, and keep it in as few places as possible;</li>
      <li>Establish effective data collection procedures;</li>
      <li>Provide employees with online privacy and security measures training;</li>
      <li>Build secure network to protect online data from cyber attacks;</li>
      <li>Establish clear procedures for reporting privacy breaches or data misuse;</li>
      <li>Include contract clauses or communicate statements on how we handle data;</li>
      <li>Update the data continuously and as mistakes are discovered;</li>
      <li>Ensure the marketing databases are checked against industry suppression files;</li>
      <li>Establish data protection practices (document shredding, secure locks, data encryption, frequent backups, access authorization etc.).</li>
    </ul>

    <h3>7. Subject Access Requests</h3>
    <p>All individuals and organizations who are the subject of personal and other data held by Link Plus IT are entitled to:</p>
    <ul>
      <li>Ask what information LINK PLUS IT holds about them and why.</li>
      <li>Ask how to gain access to it.</li>
      <li>Be informed how to keep it up to date.</li>
      <li>Be informed how the company is meeting its data protection obligations.</li>
    </ul>
    <p>
      If an individual contacts the company requesting this information, this is called a subject
      access request. Requests from individuals should be made by email, addressed to the data
      protection officer at <a href="mailto:informationsecurity@linkplus-it.com">informationsecurity@linkplus-it.com</a>.
      The data controller can supply a standard request form, although individuals do not have to use this.
    </p>
    <p>
      Our clients can contact us directly requesting this information through the subject access
      request. Such requests can be made via email addressed to our team at
      <a href="mailto:informationsecurity@linkplus-it.com"> informationsecurity@linkplus-it.com</a>.
      We will always verify the identity of anyone making a subject access request before handing
      over any information. Confirmation will be asked from the data subject using the email data
      subject used to register an account at LINK PLUS IT.
    </p>
    <p>We will aim to provide the relevant data within 14 days.</p>

    <h4>7.1. Data Modification</h4>
    <p>
      Our clients can contact us requesting data modification and/or correction by sending an email
      to <a href="mailto:information.security@linkpusit.com">information.security@linkpusit.com</a> or through the digital form available here. LINK PLUS IT will verify the identity of anyone making a data subject access request before modifying or correcting any information.
    </p>

    <h4>7.2. Data Erasure</h4>
    <p>
      Our clients can contact us requesting data erasure via email at
      <a href="mailto:informationsecurity@linkplus-it.com"> informationsecurity@linkplus-it.com</a>.
      In addition, the data subject will be provided with all necessary information before proceeding with erasure. Before proceeding with the erasure, the data subject will read the statement of our data protection officer, explaining the outcome of the data being deleted. Erasure of data can be requested at any time.
    </p>

    <h3>8. Children</h3>
    <p>
      Our website is not appealing to children, nor are they directed to children younger than 16.
      LINK PLUS IT does not knowingly collect personally identifiable data from persons under the age
      of 16, and strives to comply with the provisions of The European Union General Data Protection
      Regulation (EU GDPR). If you are a parent of a child under 16, and you believe that your child
      has provided us with information about him or herself, please contact us at
      <a href="mailto:informationsecurity@linkplus-it.com"> informationsecurity@linkplus-it.com</a>.
    </p>

    <h3>9. Disclosing Data</h3>
    <p>
      In certain circumstances, when required, LINK PLUS IT can disclose data to law enforcement
      agencies without the consent of the data subject. However, the data controller will ensure the
      request is legitimate, seeking assistance from the board and from the company’s legal advisers
      where necessary.
    </p>

    <h3>10. Privacy Policy</h3>
    <p>
      We have a privacy policy available on our website, stating out how data relating to customers,
      stakeholders, employees, and other parties involved is used in our company.
    </p>
  </div>
</Modal>


      <Modal
        open={showTerms}
        onCancel={() => setShowTerms(false)}
        footer={null}
        width={980}
        title={null}
        className={styles.legalModal}
        centered
      >
        <div className={styles.modalHeader}>
          <h2>Terms of Use</h2>
        </div>
        <div className={styles.modalBody}>
          {/* Add your Terms text here */}
          <h3>Acceptance of Terms</h3>
          <p>By accessing or using our website you agree to be bound by these terms…</p>
          {/* ...rest */}
        </div>
      </Modal>
    </>
  );
};

export default Footer;
