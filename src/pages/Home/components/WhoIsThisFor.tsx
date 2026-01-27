const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-green-35">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH 3D For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH 3D is ideal wherever apparel needs realistic 3D visualization to
          accelerate design, sampling, and selling while reducing dependence on
          physical samples.
        </p>

        {/* Apparel brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Apparel and fashion brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Casual, sportswear, formal, ethnic, and lingerie brands developing
              frequent collections across seasons and channels.
            </li>
            <li>
              Design and merchandising teams needing consistent 3D assets for
              internal range planning, buyer meetings, and lookbooks.
            </li>
          </ul>
        </div>

        {/* Export houses */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Export houses and large manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Apparel exporters and large integrated units that must shorten
              sample lead times and improve first-time-right approvals with
              buyers.
            </li>
            <li>
              Product development teams that link 2D patterns with 3D
              visualization to check fit, drape, and styling before making
              physical samples.
            </li>
          </ul>
        </div>

        {/* D2C */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            D2C and e-commerce apparel businesses
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Online-first brands using 3D garments on product pages to boost
              engagement, conversion, and customer confidence.
            </li>
            <li>
              Labels offering customization (prints, colours, trims) where
              customers can see their configured garment live in 3D.
            </li>
          </ul>
        </div>

        {/* Buying teams */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Buying, sourcing, and private-label teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Retailer and brand sourcing offices that need rapid digital samples
              from vendors to decide assortments and quantities.
            </li>
            <li>
              Private-label teams for large retailers using 3D to iterate
              quickly with vendors across countries.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design schools and training institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Fashion and apparel design programs teaching modern 3D garment
              simulation as a core skill for industry careers.
            </li>
            <li>
              Skill centres preparing students for roles in digital sampling,
              3D asset creation, and virtual showrooms.
            </li>
          </ul>
        </div>

        {/* Marketing */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Visual merchandising and marketing teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              In-house and agency teams creating campaign imagery, social
              content, and digital showrooms using 3D garments instead of full
              photo shoots.
            </li>
            <li>
              Brands piloting virtual try-on, AR, and 3D showrooms where accurate
              apparel visualization is critical.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
