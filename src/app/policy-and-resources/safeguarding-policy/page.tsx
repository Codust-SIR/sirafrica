"use client";

import "react-multi-carousel/lib/styles.css";
import HideAppBar from "../../../../components/AppDawer";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  styled,
  Paper,
  Divider,
  Link,
} from "@mui/material";
import { useMemo } from "react";
import { teal } from "@mui/material/colors";

export default function Donate() {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideAppBar>
        <Box>
          <Box
            p={2}
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 1 : 12,
            }}
          >
            <CenteredBox alignItems={"center"} flex={0.6}>
              <Typography
                variant={isMobileView ? "h4" : "h2"}
              >
                Safeguarding Policy
              </Typography>
            </CenteredBox>
            <CenteredBox flex={0.7}>
              <br />
            </CenteredBox>
          </Box>
          {/* Policy details */}
          <Box
            p={isMobileView ? 1 : 10}
            sx={{
              display: isMobileView ? "block" : "flex",
              p: isMobileView ? 1 : 12,
            }}
            bgcolor={teal[800]}
          >
            <Typography
              flex={0.25}
              variant={isMobileView ? "h5" : "h4"}
              color={"white"}
              fontWeight={"bold"}
            >
              Policy details
            </Typography>

            <Box
              flex={0.75}
              sx={{
                p: isMobileView ? 1 : 10,
                bgcolor: (theme) => theme.palette.background.paper,
                // color: "white",
              }}
            >
              {" "}
              <Typography fontWeight={"bold"} variant="h5">
                A. Purpose & Scope of This Policy
              </Typography>
              <br />
              <Typography>
                Solidarity Initiative for Refugees (SIR) is a community-based
                organization established in 2016 in response to the pressing
                challenges faced by refugees in Kakuma, Turkana County in Kenya.
                Refugees in this region confront numerous obstacles, including
                limited access to quality education, economic opportunities, and
                resources. The harsh climatic conditions further exacerbate
                their vulnerability. SIR was born out of the necessity to
                address these challenges and create a brighter future for both
                refugees and their host communities.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h6">
                Purpose:
              </Typography>{" "}
              <br />
              <Typography>
                SIR believes that we all have a collective responsibility for
                creating a culture in which the people we work with and for not
                only feel safe, but also able to speak up if they have any
                concerns. This safeguarding policy is created to ensure that:
              </Typography>{" "}
              <br />
              <ul>
                <li>The Organization’s work does no harm.</li>
                <li>
                  Our employees, beneficiaries, and associates are protected,
                  especially when they are vulnerable or at risk of harm.
                </li>
                <li>
                  Concerns received about the safety and welfare of everyone
                  reached through SIR’s work are dealt with promptly and
                  adequately.
                </li>
              </ul>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h6">
                Scope:
              </Typography>{" "}
              <br />
              <Typography>
                This policy applies to all SIR employees, board members,
                partners, consultants, and associates who work for or on behalf
                of SIR. Adherence to this policy is mandatory for all these
                individuals, as it covers every aspect of our safeguarding
                approach.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                B. Key Terms & Definitions
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Abuse:</strong> An act or pattern of behavior that
                causes harm or injury to another person, often by someone in a
                position of power. It can take various forms, including
                physical, sexual, emotional, bullying, neglect, and financial
                abuse.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Associate:</strong> Any person formally related to SIR
                in a paid or unpaid capacity, such as staff, volunteer,
                contractor, consultant, donor, visitor, or board member.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Beneficiary:</strong> Any person or group directly
                receiving goods or services through participation in SIR&apos;s
                programs or activities.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Child:</strong> A child is any person under the age of
                18.
                <sup>
                  <Link underline="none" color="success" href="#1">
                    1
                  </Link>
                </sup>
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Child Protection:</strong>Measures and structures to
                prevent and respond to abuse, neglect, exploitation, and
                violence affecting children.
                <sup>
                  {" "}
                  <Link underline="none" color="success" href="#2">
                    2
                  </Link>
                </sup>
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Contractor:</strong>Any person or company in an
                agreement with SIR to provide goods or services for a specified
                period.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Do no harm:</strong>Responsibility to prevent or
                minimize harm that could result from SIR’s organizational
                activities.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Grantee / Partner:</strong>Organization or person
                receiving a financial grant from SIR for general support or
                project implementation.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Neglect:</strong>The persistent failure to meet a
                vulnerable person’s basic needs, likely to result in serious
                impairment of their health and development.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Safeguarding:</strong>The responsibility an organization
                has to ensure its employees, operations, and programs do not
                harm children, young people, and adults at risk.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Survivor:</strong>A person who has been abused or
                exploited, emphasizing their strength and resilience.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Youth / Young Person:</strong>Individuals aged 15-25
                years, with distinct safeguarding needs.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Vulnerable Adult:</strong>Person aged 18 years or over
                who may be unable to take care of themselves or protect
                themselves from harm or exploitation.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                C. Key Principles
              </Typography>{" "}
              <br />
              <Typography>
                We are committed to upholding the following principles in all
                aspects of our safeguarding work:
              </Typography>{" "}
              <br />
              <ul>
                <li>
                  Acting in the best interest and welfare of the child,
                  vulnerable adult, and survivor.
                </li>
                <li>
                  Accountability and transparency in addressing safeguarding
                  concerns.
                </li>
                <li>Proportional and appropriate response to risks.</li>
                <li>Emphasis on prevention.</li>
                <li>
                  Empowering our beneficiaries, employees, and our community.
                </li>
                <li>
                  Continuous learning and improvement of safeguarding practices.
                </li>
              </ul>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                D. Prevention
              </Typography>{" "}
              <br />
              <Typography>
                SIR implements the following preventative measures:
              </Typography>{" "}
              <br />
              <ol>
                <li>
                  Internal Safeguarding Risk Assessments: Assess program and
                  operational aspects every one year to identify
                  safeguarding-related risks.
                </li>
                <li>
                  Safe Recruitment: Ensure suitability of staff and associates
                  to work with children and vulnerable people.
                </li>
                <li>
                  Code of Conduct: Require compliance with SIR&apos;s Code of
                  Conduct.
                </li>
                <li>
                  Training and Support: Provide training and resources to equip
                  staff to address safeguarding issues.
                </li>
                <li>
                  Designated Safeguarding focal point: Appoint senior personnel
                  responsible for safeguarding.
                </li>
                <li>
                  Raise Awareness: Promote and share the safeguarding policy
                  with SIR staff, board, partners, and beneficiaries and
                  associates.
                </li>
                <li>
                  Embed Safeguarding: Integrate safeguarding into programming.
                </li>
              </ol>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                E. Implementation
              </Typography>{" "}
              <br />
              <Typography>
                SIR will strive to allocate resources for policy implementation,
                and a safeguarding summary report prepared to assess and improve
                safeguarding practices. The annual safeguarding summary report
                will include a breakdown of all safeguarding cases and concerns
                reported each year, actions taken, outcomes, and lessons
                learned, especially those requiring policy changes or gaps
                requiring management action.
              </Typography>{" "}
              <br />
              <Typography>
                SIR will appoint a designated safeguarding focal point who will
                report directly to the Chief Executive Officer on all issues
                regarding safeguarding. The responsibilities of the designated
                safeguarding focal point will include but not limited to:
              </Typography>{" "}
              <br />
              <ul>
                <li>
                  Act as the reporting focal person for any safeguarding
                  concerns or incidents arising from our program beneficiaries.
                </li>
                <li>
                  Liaise and support SIR staff on all safeguarding issues.
                </li>
                <li>
                  Update SIR’s safeguarding policy regularly with lessons
                  learned from specific safeguarding incidents and concerns
                  reported every year in collaboration with the Chief Executive
                  Officer.
                </li>
                <li>
                  Lead training efforts to build knowledge and understanding of
                  safeguarding among staff and to build their confidence to
                  implement the policy effectively in their work.
                </li>
                <li>
                  Present an annual report to the SIR Board of Directors
                  highlighting safeguarding issues and activities during the
                  year.
                </li>
                <li>
                  Develop and implement a work plan to roll out this policy to
                  staff, partners, and associates, and ensure the information
                  provided internally and in our public platforms with regard to
                  safeguarding is up to date.
                </li>
                <li>
                  Develop and implement safeguarding messages for our
                  programming highlighting internal and external reporting
                  structures.
                </li>
              </ul>{" "}
              <br />
              <Typography variant="h5">
                F. Raising & Responding to Safeguarding Concerns
              </Typography>{" "}
              <br />
              <Typography>
                SIR ensures accessible means of reporting safeguarding concerns.
                Reporting parties are protected under the Whistleblower Policy
                (annexed).
              </Typography>{" "}
              <br />
              <Typography>
                SIR has an open-door policy. Any person may report safeguarding
                concerns or incidents. Reports can be made verbally or in
                writing, in person, or anonymously.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h6">
                Available Internal Reporting Channels:
              </Typography>{" "}
              <br />
              <ul>
                <li>
                  Suggestion box – this will be made available and accessible
                  within all our centers and offices.
                </li>
                <li>
                  Directly report to the safeguarding focal point and report the
                  incidents/concerns (Ghak Atem,{" "}
                  <Link underline="none" href="mailto:ghak@sirafrica.org">
                    ghak@sirafrica.org
                  </Link>
                  ).
                </li>
                <li>
                  If you do not feel comfortable reporting to the designated
                  safeguarding focal point, you may report directly to the Chief
                  Executive Officer (Bahana Mirindi Hydrogene,{" "}
                  <Link underline="none" href="mailto:bahana@sirafrica.org">
                    bahana@sirafrica.org
                  </Link>
                  ) or a member of the Board of Directors or directly email
                  Solidarity Initiative for Refugees proxy mail accessible to
                  the Board of Directors:{" "}
                  <Link underline="none" href="mailto:soliref12@gmail.com.">
                    soliref12@gmail.com.
                  </Link>{" "}
                </li>
              </ul>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h6">
                External Reporting Channels:
              </Typography>{" "}
              <br />
              <ul>
                <li>
                  Any external interagency reporting structure available to our
                  beneficiaries and communities.
                </li>
              </ul>{" "}
              <br />
              <Typography>
                <strong>SIR Partners</strong>
                Solidarity Initiative for Refugees requires all its partners or
                contractors to report safeguarding incidents within 72 hours.
                This aligns with our principle of being accountable and
                transparent to one another in addressing safeguarding concerns
                and incidents.
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Handling of Reported Concerns and incidents</strong>
                The Safeguarding focal point will be responsible for ensuring
                that all concerns and incidents reported are investigated.
                Depending on the severity of the incidents, a committee may be
                formed and where necessary extended to project partners to
                investigate these reports and take corrective action as it deems
                necessary.
              </Typography>{" "}
              <br />
              <Typography>
                If confidentiality is requested, the organization will protect
                the identity of the person reporting a concern to the greatest
                extent possible, consistent with the need to conduct an adequate
                investigation. The Safeguarding focal point will advise the
                Board of Directors of all concerns, incidents, and their
                resolution.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h6">
                Safeguarding Report Handling Guidelines:
              </Typography>{" "}
              <br />
              <ul>
                <li>
                  Listen to the reporting party and hear their recommendations.
                </li>
                <li>If necessary, call in a third party to investigate.</li>
                <li>
                  Keep all sensitive data confidential, except when necessary to
                  protect the survivor or others at risk.
                </li>
                <li>Make referrals to law enforcement as needed.</li>
                <li>
                  If a SIR employee is accused of wrongdoing, the CEO will
                  handle the investigation.
                </li>
                <li>
                  SIR may offer support to survivors of harm caused by SIR
                  staff, board, or associates.
                </li>
              </ul>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                G. Breaches of SIR’s Safeguarding Policy
              </Typography>{" "}
              <br />
              <Typography>
                Any breach of this policy will be treated as a disciplinary
                matter, with consequences ranging from grace periods for
                corrective actions to immediate termination or reporting to
                authorities, depending on the severity of the violation.
              </Typography>{" "}
              <br />
              <Typography fontWeight={"bold"} variant="h5">
                H. Annexes
              </Typography>{" "}
              <br />
              <Typography>
                <strong>Annexes:</strong>
              </Typography>
              <ul>
                <li>Code of Conduct</li>
                <li>Whistleblower Policy</li>
                <li>Consent Form</li>
              </ul>
              <br />
              <Divider />
              <br />
              <Link underline="none" id="1">
                <sup>1</sup>
                https://www.unicef.org/child-rights-convention/convention-text-childrens-version
              </Link>
              <br />
              <Link sx={{ wordBreak: "break-word" }} underline="none" id="2">
                <sup>2</sup>
                https://resourcecentre.savethechildren.net/document/save-childrens-definition-child-protection/
              </Link>
            </Box>
          </Box>
        </Box>
      </HideAppBar>
    </ThemeProvider>
  );
}

const CenteredBox = styled(Box)`
  display: grid;
  height: auto;
  justify-content: center;
`;

// const PolicyComponent = ({ isMobileView }: { isMobileView: boolean }) => {
//   return (

//   );
// };
