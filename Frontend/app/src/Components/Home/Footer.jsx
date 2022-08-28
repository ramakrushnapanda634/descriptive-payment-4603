import React, { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaApple,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };
  return (
    <div className={styles.mainfooter}>
      <div className={styles.top}>
        <a href="/" className={styles.bew}>
          Bewakoof
        </a>
        <div className={styles.link}>
          <div>
            <h5 className={styles.tophead}>CUSTERMER SERVICES</h5>
            <a href="/">Contact Us</a>
            <br />
            <a href="/"> Track Order</a>
            <br />
            <a href="/"> Return Order</a> <br />
            <a href="/"> Cancel Order</a> <br />
          </div>
          <div>
            <h5 className={styles.tophead}>COMPANY</h5>
            <a href="/">About Us</a>
            <br />
            <a href="/">We're Hiring</a> <br />
            <a href="/">Terms & Conditions</a> <br />
            <a href="/">Privacy Policy</a> <br />
            <a href="/">Blog</a> <br />
          </div>
          <div>
            <h5 className={styles.tophead}>CONNECT WITH US</h5>
            <div>
              <div className={styles.connect}>
                <a href="https://www.facebook.com/bewakoofcom">
                  <FaFacebook id={styles.ficon} />
                </a>
                <p className={styles.con}>4.7M People Like this</p>
              </div>
              <div className={styles.connect}>
                <a href="https://www.instagram.com/bewakoofofficial/">
                  <FaInstagram id={styles.ticon} />
                </a>
                <p className={styles.con}>1M Followers</p>
              </div>
              <div className={styles.contact}>
                <a href="https://www.twitter.com">
                  <FaTwitterSquare id={styles.ticon} />
                </a>
                <a href="https://in.pinterest.com/bewakoof/">
                  <FaPinterest id={styles.ticon} />
                </a>
                <a href="https://www.snapchat.com/add/bewakoof_tv">
                  <FaSnapchat id={styles.ticon} />
                </a>
                <a href="https://apps.apple.com/in/app/bewakoof/id1100190514">
                  <FaApple id={styles.ticon} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className={styles.tophead}>KEEP UP TO DATE</h5>
            <div>
              <input placeholder="Enter Email Id" onChange={handleChange} />
              <button onClick={handleSubmit}>Subscribe</button>
            </div>
            {flag ? <div>User subscribed</div> : <div></div>}
          </div>
        </div>
        <div className={styles.nextline}>
          <p>15 Days return policy*</p>
          <p style={{ color: "#fdd835", fontWeight: "700" }}>
            DOWNLOAD THE APP
          </p>
          <p style={{ color: "#fdd835", fontWeight: "700" }}>
            100% SECURE PAYMENT
          </p>
        </div>

        <div className={styles.nextline1}>
          <p> Cash on delivery*</p>
          <img
            src="https://images.bewakoof.com/web/app_android_v1.png"
            alt=""
          />
          <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
          <img
            src="https://images.bewakoof.com/web/secure-payments-image.png"
            alt=""
          />
        </div>
        <hr style={{ marginTop: "3rem", marginRight: "8rem" }} />

        <div className={styles.nextline2}>
          <div>
            <h5 className={styles.tophead1}>MEN'S CLOTHING</h5>

            <a href="/">Top Wear</a>
            <br />
            <a href="/"> Men's New Arrivals</a>
            <br />
            <a href="/"> Men's Half Sleeve T-Shirts</a>
            <br />
            <a href="/">Men's Hoodies & Sweatshirts</a>
            <br />
            <a href="/"> Men's Long Sleeve T-shirts</a>
            <br />
            <a href="/"> Men's Printed T-shirts</a>
            <br />
            <a href="/"> Men's Plain T-shirts</a>
            <br />
            <a href="/">Men's Vests</a>
            <br />
            <a href="/">Men's Polo T-Shirts</a>
            <br />
            <a href="/">Men's Polo T-Shirts</a>
            <br />
            <a href="/">Men's Kurtas</a>
            <br />
            <a href="/"> Men's Combo T-Shirts</a>
            <br />
            <a href="/"> Men's Shirts</a>
            <br />
            <a href="/"> Men's Nightwear</a>
            <br />
            <a href="/"> Men's Plus Size Store</a>
            <br />
            <br />
            <a href="/">Bottom Wear</a>
            <br />
            <a href="/"> Men's Pajamas</a>
            <br />
            <a href="/"> Men's Boxer Shorts</a>
            <br />
            <a href="/"> Men's Shorts</a>
            <br />
            <a href="/"> Men's Track Pants</a>
            <br />
            <a href="/"> Men's Pants</a>
            <br />
            <br />
            <a href="/"> Featured</a>
            <br />
            <a href="/"> Men's Flip Flops</a>
            <br />
            <a href="/"> Men's Sliders</a>
            <br />
            <a href="/"> Marvel T-Shirts</a>
            <br />
            <a href="/"> Disney T-Shirts</a>
            <br />
            <a href="/"> Avengers T-Shirts</a>
            <br />
            <a href="/">Star Wars T-Shirts</a>
            <br />
            <a href="/"> Batman T-Shirts</a>
            <br />
            <a href="/"> Superman T-Shirts</a>
            <br />
            <a href="/">Joker T-Shirts</a>
            <br />
          </div>
          <div>
            <h5 className={styles.tophead1}>WOMEN'S CLOTHING</h5>
            <a href="/">Women's Top Wear</a>
            <br />
            <a href="/"> Women's New Arrivals</a> <br />
            <a href="/">Women's T-Shirts</a> <br />
            <a href="/"> Women's Hoodies & Sweatshirts</a> <br />
            <a href="/"> Women's Dresses</a> <br />
            <a href="/">Women's 3/4 Sleeve T-Shirts</a> <br />
            <a href="/"> Women's Kurtis</a> <br />
            <a href="/"> Women's Combo T-Shirts</a> <br />
            <a href="/">Women's Nightwear</a> <br />
            <br />
            <a href="/"> Women's Plus Size Store</a> <br />
            <a href="/"> Women's Bottom Wear</a> <br />
            <a href="/"> Women's Pajamas</a> <br />
            <a href="/"> Women's Boxer Shorts</a> <br />
            <a href="/">Women's Jeans</a> <br />
            <a href="/"> Women's Joggers</a> <br />
            <a href="/"> Women's Shorts</a> <br />
            <br />
            <a href="/"> BAGS</a> <br />
            <a href="/">Laptop Bags</a> <br />
            <a href="/"> Small Backpacks</a> <br />
            <br />
            <a href="/">Featured</a> <br />
            <a href="/"> Women's Slides</a> <br />
            <a href="/"> Women's Flip Flops</a> <br />
          </div>
          <div>
            <h5 className={styles.tophead1}>MOBILE COVERS</h5>
            <a href="/">Brands</a>
            <br />
            <a href="/">Apple</a> <br />
            <a href="/">Realme</a> <br />
            <a href="/"> Samsung</a> <br />
            <a href="/"> Xiaomi</a> <br />
            <a href="/">Oneplus</a> <br />
            <a href="/"> Vivo</a> <br />
            <a href="/"> Oppo</a> <br />
          </div>
        </div>
        <div className={styles.content}>
          <h1>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h1>
          <br />
          <p>
            Founded in 2012, Bewakoof is a lifestyle fashion brand that makes
            creative, distinctive fashion for the trendy, contemporary Indian.
            Bewakoof was
            <br /> created on the principle of creating impact through
            innovation, honesty and thoughtfulness.
            <br />
            <br />
            With a team of 400 members, and 2mn products sold till date. We like
            to experiment freely, which allows us to balance creativity and
            relatability, and <br />
            our innovative designs. Our range of products is always fresh and
            up-to-date, and we clock sales of over 1 lakh products a month. Our
            innovation focus <br />
            extends to our operations as well. We are vertically integrated,
            manufacture our own products, and cut out the middleman wherever
            possible. This
            <br /> direct-to-consumer model allows us to create high-quality
            fashion at affordable prices. A thoughtful brand, we actively
            attempt to minimize our
            <br />
            environmental footprint and maximize our social impact. These
            efforts are integrated right into our day-to-day operations, from
            rainwater harvesting to <br />
            paper packaging to employee benefits. To create an accessible,
            affordable and thoughtful experience of online shopping in India.
          </p>
          <br />
          <br />
          <h1>
            ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND
            SUPER-EXCITING!
          </h1>
          <br />
          <p>
            Online Shopping has always been a fun and exciting task for most and
            more so when the shopping mall is none other than your own house. We
            have all
            <br /> had days when we have planned trips to the clothing store in
            advance, dreaming about what we would buy once we get there. Now we
            wouldnt think
            <br /> twice before indulging in some online shopping. Well, cut to
            todays time and age, you can do all this from the comfort of your
            home while enjoying <br />
            many online shopping offers, right from amazing deals and discounts
            to one of the most robust user interface amongst most online
            shopping sites in <br />
            India, with many shopping filters to make your shopping experience
            truly hassle free. This in our own words is what we call
            Bewakoof.com.
            <br />
            <br />
            Bewakoof, THE place to be when it comes to the coolest in online
            fashion, offers you fine, high-quality merchandise go ahead and
            indulge in a bit of
            <br /> online shopping for men and womens fashion. So browse through
            the exciting categories we have on offer from mens fashion to basic
            mens clothing
            <br /> as well as wide variety in womenswear and womens clothes to
            the amazing range of accessories, fill up your carts and get fast
            home delivery for all
            <br /> orders. All of this topped with our exclusive online shopping
            offers makes for an exciting, irresistible and uber cool combo! You
            can even gift some to
            <br /> your near and dear ones while being absolutely certain that
            it will put a smile on their faces.
          </p>
          <br />
          <br />
          <h1>BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!</h1>
          <br />
          <p>
            Online fashion is definitely more accessible with Bewakoof.com.
            Explore the latest collections in Marvel t-shirts including avengers
            t-shirts and captain America t-shirts in official merchandise. Apart
            from these, quirkiest of T-shirts that you wont find on any online
            shopping sites in India are showcased at Bewakoof.com. If your
            wardrobe has been longing for a cool overhaul then bewakoof.com will
            certainly be your best bet amongst all online shopping sites. Also,
            take a tour of our bewakoof blog to stay abreast with the latest
            runway trends and be a trendsetter among your immediate circles.
            What we wear speaks volumes of us they say. But what if what you
            wore actually spoke what your mood was! Havent we all wondered where
            we could get those quirky t-shirts and sport them with confidence?
            Sure otherwise getting them made or even buying them from otherwise
            expensive online shopping sites for clothes may cost you
            substantially but with Bewakoof.com, you will understand that you do
            not have to spend a fortune on online fashion to look great.
            Sliders, joggers, sweatshirts, bag and bag packs and so much more
            are just some of the other items you can grab hold of here.
          </p>
          <br />
          <br />
          <h1>
            AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP
            NOWHERE ELSE!
          </h1>
          <br />
          <p>
            Choose your product, get it ordered online, and we ensure that its
            delivery happens right at your doorstep anywhere in India. You just
            need to take care of the payment for the product from the comfort of
            your home, while we ensure free shipping all the time on almost
            everything with no strings attached. For any second thoughts after
            purchase, we have in place a return policy as well. One of the best
            you will find on any online shopping sites in India. For your online
            shopping experience to be safe and risk-free, we offer Cash On
            Delivery (COD) facility too. So you dont have to worry anymore about
            your hard earned money being stuck when you buy clothes online at
            bewakoof.com. Avail exciting online shopping offers like designs of
            the day and colour of the month when you shop with us. Make sure to
            use our easy 15-day returns policy, card or cash on delivery option
            and other customer-friendly features. A comprehensive sizing guide
            and detailed product descriptions coupled with high-resolution
            product shots will give you all the information to make the right
            buying decision. Give your wardrobe the much-needed upgrade with
            uber cool clothing head to Bewakoof.com for a great online shopping
            india experience now! Could you have asked for more?
          </p>
          <br />
          <br />
          <h1>
            DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE
            STORE!
          </h1>
          <br />
          <p>
            We dont just offer you exciting options in online fashion but also
            give you amazing accessories with really cool bags and bag packs to
            choose from. Our bags and backpacks are compact, hassle-free and
            easy to stuff things in. And all of this with the swag that you get
            to carry along with it. Cool designs are what form a major part of
            our online fashion and we also ensure our accessories section doesnt
            feel left out! As for our accessories collection, they are also
            manufactured with impeccable quality materials. Our mobile covers
            are made from hard and durable polycarbonate, with a matte finish
            that will make for a great protection for your phone with the rough
            use that we put them through nowadays.
          </p>

          <br />
          <br />
          <h1>DESIGN OF THE DAY- THE COOLEST FEATURE EVER!</h1>
          <br />
          <p>
            Who said good and cool t-shirts have to expensive? We bring newer,
            cooler and more youth oriented designs everyday. Yes! Everyday you
            get a new design to explore and buy. Although all our t-shirts are
            at an extremely affordable price, we decided to slash them down even
            further. But there is a catch. It is only for those designs and
            these exclusive prices are only valid for for a duration of 24
            hours! Designs refresh every day at 3pm and are valid only for 24
            hours. So you need to hurry and grab one fast before it ends.
            Because we believe everyone needs to have a fair chance at all of
            our fresh designs of the day.{" "}
          </p>

          <br />
          <br />
          <h1>COLOR OF THE MONTH- 30 DAYS, 1 SHADE!</h1>
          <br />
          <p>
            A fresh new concept for online fashion, for fresh new looks. Every
            month on the first, we choose a new colour and showcase all our
            products for that particular colour. Apparels, mostly solid colored
            plain t-shirts, are available at an exclusive discounted price every
            first of the month. There are options available in sleeve styles
            Boyfriend sleeves for women, full sleeve t-shirts for men and more.
            You can buy those throughout the month but the exclusive price will
            only be valid for that one day, the first of every month. Online
            shopping never seemed so fresh and exciting. So hurry up and stack
            your cart with your favourite colour before it goes out of stock!
          </p>

          <br />
          <br />
          <h1>
            BEWAKOOF.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH
          </h1>
          <br />
          <p>
            We, at Bewakoof.com, have all that you need to glam up your cool
            quotient. From an extensive range of plus size clothing, casual
            shirts for men and accessories for everyone, we purvey diversity of
            choices in online shopping india platform has to offer under one
            umbrella. The range of apparels like men t-shirts, joggers, sliders,
            Henley shirts, Polo t-shirts, Oxford pants and more provide an array
            of options for the online customer to create a ravishing ensemble
            from. We try to target all kinds of customers and cater to their
            needs and preferences. Communication is the key to our functioning.
            Your Bewakoof Online fashion Shop has arrived! Do not miss the
            attractive online shopping offers everyday. Work your fashion with
            the wide range of apparels available only one click away! Make a
            statement with our best t-shirts online! Get more, pay less!
          </p>
          <br />
          <br />
          <h1>OUR PHILOSOPHY</h1>
          <br />
          <p>
            We believe in creating the kind of fashion, that makes you stand out
            as they are in line with the latest local and global trends of the
            industry, but also at the same time offer value for money
            functionality, with quality materials and comfortable and flattering
            prints. We try to look into the psyche of our customers, and try to
            get inspired by the conversations and experiences around us while
            creating our graphics, to ensure that they are relatable. We believe
            in constant and consistent innovation to ensure that our fans get
            nothing short of the bets at affordable rates! While most people do
            not know, we do not outsource the manufacturing of our products,
            everything from the conception of the designs to the manufacture and
            the styling that you see on the photographs of the banners and
            product pages of our website all happen in house! We go from yarn to
            product and since we 're vertically integrated and bring fashion
            from us directly to your doorstep without any middlemen that also
            further ensures reliability because for us it is not just about the
            money but about building the trust and credibility in our fans about
            our brand. We also make sure to decrease the impact on environment
            and are building initiatives that will help us with the same, for
            now by optimizing our processes to use only as much as we need from
            nature, rain water harvesting and recycling the water from our RO
            water facility, because we believe that the spirit of Bewakoof is
            about creating an impact by breaking conventions and having a
            different perspective!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
