/**
 * NB: This is a template Privacy Policy designed to cover your collection, use, and disclosure of personal information about visitors and customers of your site. Please review and customize the content so that it is tailored to your site and business practices regarding how you collect, use, and disclose personal data. For example, you may need to update the template content if: you are based in certain jurisdictions (particularly to reflect certain disclosures that are required under GDPR), you collect information from other sources like third parties or offline; you disclose information to additional service providers or business partners; or you add third-party cookies or other analytics tools.
 *
 * NB: This template is not legal advice, and you are solely responsible for ensuring that you meet your obligations under applicable laws. As privacy laws are constantly evolving, you should regularly review your privacy notice to ensure that it is compliant with updated laws and regulation and that it accurately reflects current data handling practices. We recommend that you consult a lawyer as needed.
 */
import { metadata } from '@/data/config/metadata';
import Header from '@/components/shared/Header';

const policyConfig = {
  lastUpdated: 'March 1st, 2024',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
              Privacy Policy
            </h1>
            <p>Last updated: {policyConfig.lastUpdated}</p>
          </div>

          <div className="mt-12 max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <p>
              This Privacy Policy describes how{' '}
              <span className="font-bold">{metadata.businessName}</span> (the
              "Site," "we," "us," or "our") collects, uses, and discloses your
              personal information when you visit, use our services, or make a
              purchase from <span className="font-bold">{metadata.domain}</span>{' '}
              (the "Site") or otherwise communicate with us (collectively, the
              "Services"). For purposes of this Privacy Policy, "you" and "your"
              means you as the user of the Services, whether you are a customer,
              website visitor, or another individual whose information we have
              collected pursuant to this Privacy Policy.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. By using and accessing
              any of the Services, you agree to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you do not agree to this Privacy Policy, please do not
              use or access any of the Services.
            </p>
            <h2 className="text-lg font-semibold mb-4">
              CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p>
              We may update this Privacy Policy from time to time, including to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will post the revised Privacy Policy on
              the Site, update the "Last updated" date and take any other steps
              required by applicable law.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">
              HOW WE COLLECT AND USE YOUR PERSONAL INFORMATION
            </h2>
            <p>
              To provide the Services, we collect and have collected over the
              past 12 months personal information about you from a variety of
              sources, as set out below. The information that we collect and use
              varies depending on how you interact with us.
            </p>
            <p>
              In addition to the specific uses set out below, we may use
              information we collect about you to communicate with you, provide
              the Services, comply with any applicable legal obligations,
              enforce any applicable terms of service, and to protect or defend
              the Services, our rights, and the rights of our users or others.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              What Personal Information We Collect
            </h3>
            <p>
              The types of personal information we obtain about you depend on
              how you interact with our Site and use our Services. When we use
              the term "personal information," we are referring to information
              that identifies, relates to, describes, or can be associated with
              you. The following sections describe the categories and specific
              types of personal information we collect.
            </p>
            <h4 className="mt-4 text-lg font-semibold mb-2">
              Information We Collect Directly from You
            </h4>
            <p>
              Information that you directly submit to us through our Services
              may include:
            </p>
            <ul className="list-inside list-disc">
              <li>
                Basic contact details including your name, address, phone
                number, email.
              </li>
              <li>
                Order information including your name, billing address, shipping
                address, payment confirmation, email address, phone number.
              </li>
              <li>
                Account information including your username, password, security
                questions.
              </li>
              <li>
                Shopping information including the items you view, put in your
                cart or add to your wishlist.
              </li>
              <li>
                Customer support information including the information you
                choose to include in communications with us, for example, when
                sending a message through the Services.
              </li>
            </ul>
            <p className="mt-4 mb-4">
              Some features of the Services may require you to directly provide
              us with certain information about yourself. You may elect not to
              provide this information, but doing so may prevent you from using
              or accessing these features.
            </p>
            <h4 className="text-lg font-semibold mb-2">
              Information We Collect through Cookies
            </h4>
            <p>
              We also automatically collect certain information about your
              interaction with the Services ("Usage Data"). To do this, we may
              use cookies, pixels, and similar technologies ("Cookies"). Usage
              Data may include information about how you access and use our Site
              and your account, including device information, browser
              information, information about your network connection, your IP
              address, and other information regarding your interaction with the
              Services.
            </p>
            <h4 className="mt-4 text-lg font-semibold mb-2">
              Information We Obtain from Third Parties
            </h4>
            <p>
              Finally, we may obtain information about you from third parties,
              including from vendors and service providers who may collect
              information on our behalf, such as:
            </p>
            <ul>
              <li>
                Companies who support our Site and Services, such as Vercel.
              </li>
              <li>
                Our payment processors, who collect payment information (e.g.,
                bank account, credit or debit card information, billing address)
                to process your payment in order to fulfill your orders and
                provide you with products or services you have requested, in
                order to perform our contract with you.
              </li>
              <li>
                When you visit our Site, open or click on emails we send you, or
                interact with our Services or advertisements, we, or third
                parties we work with, may automatically collect certain
                information using online tracking technologies such as pixels,
                web beacons, software developer kits, third-party libraries, and
                cookies.
              </li>
            </ul>
            <p>
              Any information we obtain from third parties will be treated in
              accordance with this Privacy Policy. We are not responsible or
              liable for the accuracy of the information provided to us by third
              parties and are not responsible for any third party's policies or
              practices. For more information, see the section below, "Third
              Party Websites and Links."
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              How We Use Your Personal Information
            </h3>
            <p>
              - Providing Products and Services. We use your personal
              information to provide you with the Services in order to perform
              our contract with you, including to process your payments, fulfill
              your orders, to send notifications to you related to your account,
              purchases, returns, exchanges, or other transactions, to create,
              maintain, and otherwise manage your account, to arrange for
              shipping, facilitate any returns and exchanges, and to enable you
              to post reviews.
            </p>
            <p>
              - Marketing and Advertising. We use your personal information for
              marketing and promotional purposes, such as to send marketing,
              advertising, and promotional communications by email, text
              message, or postal mail, and to show you advertisements for
              products or services. This may include using your personal
              information to better tailor the Services and advertising on our
              Site and other websites.
            </p>
            <p>
              - Security and Fraud Prevention. We use your personal information
              to detect, investigate, or take action regarding possible
              fraudulent, illegal, or malicious activity. If you choose to use
              the Services and register an account, you are responsible for
              keeping your account credentials safe. We highly recommend that
              you do not share your username, password, or other access details
              with anyone else. If you believe your account has been
              compromised, please contact us immediately.
            </p>
            <p>
              - Communicating with you. We use your personal information to
              provide you with customer support and improve our Services. This
              is in our legitimate interests in order to be responsive to you,
              to provide effective services to you, and to maintain our business
              relationship with you.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">Cookies</h3>
            <p>
              Like many websites, we use Cookies on our Site. We use Cookies to
              power and improve our Site and our Services (including to remember
              your actions and preferences), to run analytics and better
              understand user interaction with the Services (in our legitimate
              interests to administer, improve and optimize the Services). We
              may also permit third parties and service providers to use Cookies
              on our Site to better tailor the services, products, and
              advertising on our Site and other websites.
            </p>
            <p className="mb-4">
              Most browsers automatically accept Cookies by default, but you can
              choose to set your browser to remove or reject Cookies through
              your browser controls. Please keep in mind that removing or
              blocking Cookies can negatively impact your user experience and
              may cause some of the Services, including certain features and
              general functionality, to work incorrectly or no longer be
              available. Additionally, blocking Cookies may not completely
              prevent how we share information with third parties such as our
              advertising partners.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              How We Disclose Personal Information
            </h3>
            <p>
              In certain circumstances, we may disclose your personal
              information to third parties for legitimate purposes subject to
              this Privacy Policy. Such circumstances may include:
            </p>
            <ul>
              <li>
                With vendors or other third parties who perform services on our
                behalf (e.g., IT management, payment processing, data analytics,
                customer support, cloud storage, fulfillment, and shipping).
              </li>
              <li>
                With business and marketing partners to provide services and
                advertise to you. Our business and marketing partners will use
                your information in accordance with their own privacy notices.
              </li>
              <li>
                When you direct, request us, or otherwise consent to our
                disclosure of certain information to third parties, such as to
                ship you products or through your use of social media widgets or
                login integrations, with your consent.
              </li>
              <li>
                With our affiliates or otherwise within our corporate group, in
                our legitimate interests to run a successful business.
              </li>
              <li>
                In connection with a business transaction such as a merger or
                bankruptcy, to comply with any applicable legal obligations
                (including to respond to subpoenas, search warrants, and similar
                requests), to enforce any applicable terms of service, and to
                protect or defend the Services, our rights, and the rights of
                our users or others.
              </li>
            </ul>

            <p className="mb-4">
              We do not use or disclose sensitive personal information for the
              purposes of inferring characteristics about you.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">
              User Generated Content
            </h3>
            <p>
              The Services may enable you to post product reviews and other
              user-generated content. If you choose to submit user-generated
              content to any public area of the Services, this content will be
              public and accessible by anyone.
            </p>
            <p className="mb-4">
              We do not control who will have access to the information that you
              choose to make available to others, and cannot ensure that parties
              who have access to such information will respect your privacy or
              keep it secure. We are not responsible for the privacy or security
              of any information that you make publicly available or for the
              accuracy, use, or misuse of any information that you disclose or
              receive from third parties.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Third Party Websites and Links
            </h3>
            <p>
              Our Site may provide links to websites or other online platforms
              operated by third parties. If you follow links to sites not
              affiliated or controlled by us, you should review their privacy
              and security policies and other terms and conditions. We do not
              guarantee and are not responsible for the privacy or security of
              such sites, including the accuracy, completeness, or reliability
              of information found on these sites. Information you provide on
              public or semi-public venues, including information you share on
              third-party social networking platforms may also be viewable by
              other users of the Services and/or users of those third-party
              platforms without limitation as to its use by us or by a third
              party. Our inclusion of such links does not, by itself, imply any
              endorsement of the content on such platforms or of their owners or
              operators, except as disclosed on the Services.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">Children's Data</h3>
            <p>
              The Services are not intended to be used by children, and we do
              not knowingly collect any personal information about children. If
              you are the parent or guardian of a child who has provided us with
              their personal information, you may contact us using the contact
              details set out below to request that it be deleted.
            </p>
            <p className="mb-4">
              As of the Effective Date of this Privacy Policy, we do not have
              actual knowledge that we "share" or "sell" (as those terms are
              defined in applicable law) personal information of individuals
              under 16 years of age.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Security and Retention of Your Information
            </h3>
            <p>
              Please be aware that no security measures are perfect or
              impenetrable, and we cannot guarantee "perfect security." In
              addition, any information you send to us may not be secure while
              in transit. We recommend that you do not use unsecure channels to
              communicate sensitive or confidential information to us.
            </p>
            <p className="mb-4">
              How long we retain your personal information depends on different
              factors, such as whether we need the information to maintain your
              account, to provide the Services, comply with legal obligations,
              resolve disputes, or enforce other applicable contracts and
              policies.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Your Rights and Choices
            </h3>
            <p>
              Depending on where you live, you may have some or all of the
              rights listed below in relation to your personal information.
              However, these rights are not absolute, may apply only in certain
              circumstances, and, in certain cases, we may decline your request
              as permitted by law.
            </p>
            {/*
              NB: If you collect information that may be deemed to be sensitive personal information under applicable privacy laws there may be additional consents/disclosures required. insert the list item below if you collect sensitive personal information and consult with external legal counsel to confirm your responsibilities.
            */}
            <p className="mb-4">
              - Right to Access / Know. You may have a right to request access
              to personal information that we hold about you, including details
              relating to the ways in which we use and share your information.
            </p>
            <p className="mb-4">
              - Right to Delete. You may have a right to request that we delete
              personal information we maintain about you.
            </p>
            <p className="mb-4">
              - Right to Correct. You may have a right to request that we
              correct inaccurate personal information we maintain about you.
            </p>
            <p className="mb-4">
              - Right of Portability. You may have a right to receive a copy of
              the personal information we hold about you and to request that we
              transfer it to a third party, in certain circumstances and with
              certain exceptions.
            </p>
            <p className="mb-4">
              - Right to Limit and/or Opt out of Use and Disclosure of Sensitive
              Personal Information. You may have a right to direct us to limit
              our use and/or disclosure of sensitive personal information to
              only what is necessary to perform the Services or provide the
              goods reasonably expected by an average individual.
            </p>
            <p className="mb-4">
              - Restriction of Processing: You may have the right to ask us to
              stop or restrict our processing of personal information.
            </p>
            <p className="mb-4">
              - Withdrawal of Consent: Where we rely on consent to process your
              personal information, you may have the right to withdraw this
              consent.
            </p>
            <p className="mb-4">
              - Appeal: You may have a right to appeal our decision if we
              decline to process your request. You can do so by replying
              directly to our denial.
            </p>
            <p className="mb-4">
              - Managing Communication Preferences: We may send you promotional
              emails, and you may opt out of receiving these at any time by
              using the unsubscribe option displayed in our emails to you. If
              you opt out, we may still send you non-promotional emails, such as
              those about your account or orders that you have made.
            </p>
            <p>
              You may exercise any of these rights where indicated on our Site
              or by contacting us using the contact details provided below.
            </p>
            <p className="mb-4">
              We will not discriminate against you for exercising any of these
              rights. We may need to collect information from you to verify your
              identity, such as your email address or account information,
              before providing a substantive response to the request. In
              accordance with applicable laws, You may designate an authorized
              agent to make requests on your behalf to exercise your rights.
              Before accepting such a request from an agent, we will require
              that the agent provide proof you have authorized them to act on
              your behalf, and we may need you to verify your identity directly
              with us. We will respond to your request in a timely manner as
              required under applicable law.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">Complaints</h3>
            <p>
              If you have complaints about how we process your personal
              information, please contact us using the contact details provided
              below. If you are not satisfied with our response to your
              complaint, depending on where you live, you may have the right to
              appeal our decision by contacting us using the contact details set
              out below or lodge your complaint with your local data protection
              authority.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">
              International Users
            </h3>
            <p>
              Please note that we may transfer, store, and process your personal
              information outside the country you live in, including the United
              States. Your personal information is also processed by staff and
              third party service providers and partners in these countries. If
              we transfer your personal information out of Europe, we will rely
              on recognized transfer mechanisms like the European Commission's
              Standard Contractual Clauses, or any equivalent contracts issued
              by the relevant competent authority of the UK, as relevant, unless
              the data transfer is to a country that has been determined to
              provide an adequate level of protection.
            </p>
          </div>
          <div className="max-w-screen-md mx-auto bg-white dark:bg-black rounded shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mt-4 mb-2">Contact</h3>
            <p>
              Should you have any questions about our privacy practices or this
              Privacy Policy, or if you would like to exercise any of the rights
              available to you, please contact us at{' '}
              <a
                href={`mailto:${metadata.supportEmail}`}
                className="text-blue-500"
              >
                {metadata.supportEmail}
              </a>
            </p>

            {/* Alternatively, provide more contact information */}
            {/* <p className="mb-4">
            Our contact information is posted below:
            <br />
            [INSERT TRADING NAME]
            <br />
            [INSERT EMAIL ADDRESS]
            <br />
            [INSERT BUSINESS ADDRESS]
            <br />
            [INSERT BUSINESS PHONE NUMBER]
            <br />
            [INSERT BUSINESS REGISTRATION NUMBER]
            <br />
            [INSERT VAT NUMBER]
            <br />
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
