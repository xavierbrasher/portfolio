export default function About_Me() {
  function ageCalculation() {
    const bdate = new Date(this.dob);
    const timeDiff = Math.abs(Date.now() - bdate.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }

  return (
    <div className="mb-4" id="about_me">
      <h1 className="text-4xl font-bold mb-3">About Me</h1>
      <p className="text-xl">
        I starting teaching myself to program when I was 7 and slowly got better
        and better over the years. I hate doing HTML and CSS, which is why I use
        Tailwind and React to write everything for me. I really enjoy coding and
        thats why I still continue to do it to this day. I am still currently a
        pre-pre-grad student.
      </p>
    </div>
  );
}
