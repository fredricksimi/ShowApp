function getYear(thedate: string) {
    const d = new Date(thedate);
    return d.getFullYear();
  }

export default getYear;