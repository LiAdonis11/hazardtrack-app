export const submittedReports: any[] = []

export const addReport = (report: any) => {
    submittedReports.push(report)
}

export const getReports = () => submittedReports