import Review from "@/components/common/Review";

function ReviewSection() {
  return (
      <div className="flex flex-col gap-8 overflow-x-hidden bg-[#111714] p-4">
        <Review
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDLh0mTSq3zrJagQPULamYQuZz0WJoa0mY4QzuA8NY2_S9cVkZBDv9N3_VIblQ5Co4pNCD02Q2LVgbtxLePec7HePXal2O7gNAfZGvuhS7xpxRL-1R4ibUy4QPn_KTISzzGa43A3jFnFdxvAu9WEjxmpl0uUA_yYJlpQJ4y6mw7WQa49c7P29tIQcJa1irs1uYrPcCmFRyPTBoOsr6QmiZ4uw23A-iuAKbTEp4pA-2Q0No_hHpaTkMOqfI2A39LrM4cTZUQU2lzxdlc"
          name="Mark Johnson"
          date="June 20, 2024"
          rating={5}
          comment="Amazing experience! Highly recommended."
        />
        <Review
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDLh0mTSq3zrJagQPULamYQuZz0WJoa0mY4QzuA8NY2_S9cVkZBDv9N3_VIblQ5Co4pNCD02Q2LVgbtxLePec7HePXal2O7gNAfZGvuhS7xpxRL-1R4ibUy4QPn_KTISzzGa43A3jFnFdxvAu9WEjxmpl0uUA_yYJlpQJ4y6mw7WQa49c7P29tIQcJa1irs1uYrPcCmFRyPTBoOsr6QmiZ4uw23A-iuAKbTEp4pA-2Q0No_hHpaTkMOqfI2A39LrM4cTZUQU2lzxdlc"
          name="Sophia Williams"
          date="June 18, 2024"
          rating={4}
          comment="Great photos, but a little late to the session."
        />
      </div>);
}

export default ReviewSection;

