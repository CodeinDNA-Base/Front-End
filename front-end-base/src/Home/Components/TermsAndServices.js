import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import colors from "../../Theme/colors";
import { TextFonts, HeadingFonts } from "../../Theme/fonts";
import { makeStyles } from "@material-ui/core";
import { SmallHeading } from "../../CustomComponents/UI/Text/SmallHeading";
import { HomePageComponentsHeading } from "../../CustomComponents/UI/Text/HomePageHeadings";
const TermsAndServicesStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.highlighter,
    paddingBottom: "3%",
    paddingTop: "3%",
   // border: `1px solid ${colors.lightGray}`,
    borderRadius: 10,
    
  },
  Conatiner: {
    border: `1px solid ${colors.lightGray}`,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingLeft: (isDesktopOrLaptopOrTabletScreen) =>
    isDesktopOrLaptopOrTabletScreen ? "2%" :'4%',
    paddingRight: (isDesktopOrLaptopOrTabletScreen) =>
    isDesktopOrLaptopOrTabletScreen ? "2%" :'4%',
    paddingBottom: "5%",
  },
  paragraph: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "3%" : "5%",
    lineHeight: "1.6",
  },
  bulletPoints: {
    marginBottom: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "1%" : "2%",
    lineHeight: "1.6",
  },
}));
const TermsAndServices = () => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = TermsAndServicesStyles(isDesktopOrLaptopOrTabletScreen);
  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item md={2}></Grid>
      <Grid conatiner item xs={12} md={8} sm={12} className={classes.Conatiner}>
        <HomePageComponentsHeading
          title={"Terms & Services"}
          description={"Welcome to CodeInDNA.com"}
          titleColor={colors.lightBlack}
          descriptionColor={colors.highlighter}
          margin={"0%"}
        />
        <div
          className={classes.paragraph}
        >{`The following terms of service (these "Terms of Service"), govern your access to and use of the Fiverr website and mobile application, including any content, functionality and services offered on or through www.fiverr.com or the Fiverr mobile application (the "Site") by Fiverr International Ltd. (8 Kaplan St. Tel Aviv 6473409, Israel) and its subsidiaries: Fiverr Inc. (38 Greene St. NY 10013, NY, USA) and Fiverr Limited (Lemesou 11, 2112 Nicosia, Cyprus), as applicable. Fiverr International Ltd. and its subsidiaries are collectively referred hereto as "Fiverr" "we" or "us" and “you” or “user” means you as an user of the Site.`}</div>
        <div
          className={classes.paragraph}
        >{`Please read the Terms of Service carefully before you start to use the Site. By using the Site, opening an account or by clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree, on behalf of yourself or on behalf of your employer or any other entity (if applicable), to be bound and abide by these Terms of Service, Fiverr Payment Terms, found here (“Payment Terms”), and our Privacy Policy, found here, each of which is incorporated herein by reference. If you do not want to agree to these Terms of Service or the Privacy Policy, you must not access or use the Site. For more detailed policies surrounding the activity and usage on the Site, please access the designated articles herein.`}</div>
        <div
          className={classes.paragraph}
        >{`This Site is offered and available to users who are 13 years of age or older. If you are under 13 you may not use this Site or the Fiverr services. By using this Site, you represent and warrant that you are of legal age to form a binding contract and meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Site.`}</div>
        <div
          className={classes.paragraph}
        >{`Our Customer Support team is available 24/7 if you have any questions regarding the Site or Terms of Service. Contacting our Customer Support team can be performed by submitting a request here.`}</div>
        <div
          className={classes.paragraph}
        >{`The original language of these Terms of Service, as well as all other texts throughout the Site, is English. Fiverr makes available this translation for convenience only. In case of conflicts between the original English version and any translation, the English version shall prevail.`}</div>
        <SmallHeading title={`Custom Offer`} />
        <ul>
          <li className={classes.bulletPoints}>
            Sellers can also send Custom Offers addressing specific requirements
            of a Buyer.
          </li>
          <li className={classes.bulletPoints}>
            Custom Offers are defined by the Seller with the exact description
            of the service, the price and the time expected to deliver the
            service.
          </li>
          <li className={classes.bulletPoints}>
            Custom Offers are sent from the conversation page.
          </li>
          <li className={classes.bulletPoints}>
            Services provided through Custom Offers may not violate Fiverr’s
            Terms of Service and/or our Community Standards
          </li>
          <li className={classes.bulletPoints}>
            Services provided through Custom Offers may not violate Fiverr’s
            Terms of Service and/or our Community Standards
            <ul style={{ marginTop: "1%" }}>
              <li className={classes.bulletPoints}>
                Custom Offers above $100 may include up to six project
                milestones, the minimum amount for each milestone is $50 and the
                project should include at least two milestones. Each milestone
                is paid and delivered separately in accordance with each Custom
                Offer’s description and timelines.
              </li>
              <li className={classes.bulletPoints}>
                Once a milestone is delivered and marked as completed, Buyers
                may choose to either continue with the Order and pay for the
                next milestone, or to stop the Order. If Buyer does not pay for
                the next milestone within 10 days of acceptance of previous
                milestones, the Order under the next milestones will not start.
                A milestone will be automatically marked as complete if no
                acceptance or request for modification were submitted within 8
                days after marked as Delivered, however, in such case the Order
                will be stopped and all further milestones will not start.
              </li>
            </ul>
          </li>
        </ul>
        <SmallHeading title={`Orders`} />
        <ul>
          <li className={classes.bulletPoints}>
            s Users with the intention to defame competing Sellers by ordering
            from competing services will have their reviews removed or further
            account status related actions determined by review by our Trust &
            Safety team.
          </li>
          <li className={classes.bulletPoints}>
            Users are to refrain from spamming or soliciting previous Buyers or
            Sellers to pursue removing/modifying reviews or cancelling orders
            that do not align on Order Cancellation or Feedback policies.
          </li>
        </ul>
        <SmallHeading title={`Violation`} />
        <div className={classes.paragraph}>
          Users may receive a warning to their account for violations of our
          Terms of Service and/or our Community Standards or any user misconduct
          reported to our Trust and Safety team. A warning will be sent to the
          user's email address and will be displayed for such user on the Site.
          Warnings do not limit account activity, but can lead to your account
          losing Seller statuses or becoming permanently disabled based on the
          severity of the violation.
        </div>
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};

export default TermsAndServices;
