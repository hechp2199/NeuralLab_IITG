import React from 'react';
import './css/Publications.css';

// Journal Publications
const journalPubs = [
    {
        title: "Systematic review of experimental paradigms and deep neural networks for electroencephalography-based cognitive workload detection",
        authors: "KN Vishnu, CN Gupta",
        journal: "Prog. Biomed. Eng. 6 042004",
        year: 2024,
        link: "https://iopscience.iop.org/article/10.1088/2516-1091/ad8530"
    },
    {
        title: "Dynamical Embedding of Single-Channel Electroencephalogram for Artifact Subspace Reconstruction",
        authors: "D Hazarika, KN Vishnu, R Ransing, CN Gupta",
        journal: "Sensors 2024, 24, 6734",
        year: 2024,
        link: "https://doi.org/10.3390/s24206734"
    },
    {
        title: "Understanding effects of observing affordance-driven action during motor imagery through EEG analysis",
        authors: "S Bordoloi, CN Gupta, SM Hazarika",
        journal: "Exp Brain Res, 242, 2473–2485",
        year: 2024,
        link: "https://doi.org/10.1007/s00221-024-06912-w"
    },
    {
        title: "Introspection of UBNIN and Modified-UBNIN Algorithms for Structural MRI. Reply to Kelly et al. A Comparison of Brain-State Representations of Binary Neuroimaging Connectivity Data. Comment on “Samantaray et al. Unique Brain Network Identification Number for Parkinson’s and Healthy Individuals Using Structural MRI. Brain Sci. 2023, 13, 1297",
        authors: "T Samantaray, M Anand, J Saini, CN Gupta",
        journal: "Brain Sciences. 2024; 14(5):424",
        year: 2024,
        link: "https://doi.org/10.3390/brainsci14050424"
    },
    {
        title: "Real-time dynamic analysis of EEG Response for Live Indian Classical Vocal Stimulus with Therapeutic Indications",
        authors: "S Panda, D Shivakumar, Y Majumder, CN Gupta, B Hazra",
        journal: "Smart Health, 2024, 100461, ISSN 2352-6483",
        year: 2024,
        link: "https://doi.org/10.1016/j.smhl.2024.100461"
    },
    {
        title: "Brain Connectivity of Parkinson Subgroups using Structural MRI",
        authors: "T Samantaray, J Saini, CN Gupta",
        journal: "Biomed. Phys. Eng. Express 10 025012",
        year: 2024,
        link: "https://doi.org/10.1088/2057-1976/ad1e77"
    },
    {
        title: "Unique Brain Network Identification Number for Parkinson’s and Healthy Individuals Using Structural MRI",
        authors: "T Samantaray, U Gupta, J Saini, CN Gupta",
        journal: "Brain Sciences",
        year: 2023,
        link: "https://www.mdpi.com/2076-3425/13/9/1297"
    },
    {
        title: "Subgrouping and Structural Brain Connectivity of Parkinson's Disease–Past Studies and Future Directions",
        authors: "T Samantaray, J Saini, CN Gupta",
        journal: "Neuroscience Informatics",
        year: 2022,
        link: "https://doi.org/10.1016/j.neuri.2022.100100"
    },
    {
        title: "BCIAUT-P300: A multi-session and multi-subject benchmark dataset on autism for P300-based brain-computer-interfaces",
        authors: "M Simões, D Borra, ES Vázquez et al.",
        journal: "Frontiers in Neuroscience",
        year: 2020,
        link: "https://doi.org/10.3389/fnins.2020.568104"
    },
    {
        title: "Source-based morphometry: a decade of covarying structural brain patterns",
        authors: "CN Gupta, JA Turner, VD Calhoun",
        journal: "Brain Structure and Function",
        year: 2019,
        link: "https://doi.org/10.1007/s00429-019-01969-8"
    },
    {
        title: "N-BiC: A method for multi-component and symptom biclustering of structural MRI data: Application to schizophrenia",
        authors: "MA Rahaman, JA Turner, CN Gupta et al.",
        journal: "IEEE Transactions on Biomedical Engineering",
        year: 2019,
        link: "https://doi.org/10.1109/TBME.2019.2908815"
    },
    {
        title: "Source-based morphometry: Data-driven multivariate analysis of structural brain imaging data",
        authors: "CN Gupta, JA Turner, VD Calhoun",
        journal: "Brain Morphometry",
        year: 2018,
        link: "https://link.springer.com/protocol/10.1007/978-1-4939-7647-8_7"
    },
    {
        title: "Biclustered independent component analysis for complex biomarker and subtype identification from structural magnetic resonance images in schizophrenia",
        authors: "CN Gupta, E Castro, S Rachkonda et al.",
        journal: "Frontiers in psychiatry",
        year: 2017,
        link: "https://doi.org/10.3389/fpsyt.2017.00179"
    },
    {
        title: "Polymorphisms in MIR137HG and microRNA-137-regulated genes influence gray matter structure in schizophrenia",
        authors: "C Wright, CN Gupta, J Chen et al.",
        journal: "Translational psychiatry",
        year: 2016,
        link: "https://doi.org/10.1038/tp.2015.211"
    },
    {
        title: "Genome‐wide significant linkage of schizophrenia‐related neuroanatomical trait to 12q24",
        authors: "CN Gupta, J Chen, J Liu, E Damaraju, C Wright, NP Bizzozero, G Pearlson, L Luo, AM Michael, J Turner, VD Calhoun",
        journal: "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics",
        year: 2015,
        link: "https://doi.org/10.1002/ajmg.b.32360"
    },
    {
        title: "Patterns of gray matter loss in Schizophrenia based on an international mega-analysis",
        authors: "CN Gupta, VD Calhoun, S Rachkonda, J Segall, L Wang, et al",
        journal: "Schizophrenia Bulletin",
        year: 2015,
        link: "https://doi.org/10.1093/schbul/sbu177"
    },
    {
        title: "MIR137HG risk variant rs1625579 genotype is related to corpus callosum volume in schizophrenia",
        authors: "VS Patel, S Kelly, C Wright, CN Gupta, AA Vasquez, NP Bizzozero et al.",
        journal: "Neuroscience Letters",
        year: 2015,
        link: "https://doi.org/10.1016/j.neulet.2015.06.039"
    },
    {
        title: "Cortical response similarities predict which audiovisual clips individuals viewed, but are unrelated to clip preference",
        authors: "DA Bridwell, C Roth, CN Gupta, VD Calhoun",
        journal: "PloS one",
        year: 2015,
        link: "https://doi.org/10.1371/journal.pone.0128833"
    },
    {
        title: "Genetic markers of white matter integrity in schizophrenia revealed by parallel ICA",
        authors: "CN Gupta, J Chen, J Liu et al.",
        journal: "Frontiers in human neuroscience",
        year: 2015,
        link: "https://doi.org/10.3389/fnhum.2015.00100"
    },
    {
        title: "Exploration of scanning effects in multi-site structural MRI studies",
        authors: "J Chen, J Liu, VD Calhoun, Alejandro Arias-Vasquez, Marcel P Zwiers, C.N.Gupta, Barbara Franke, Jessica A Turner",
        journal: "Journal of neuroscience methods",
        year: 2014,
        link: "https://doi.org/10.1016/j.jneumeth.2014.04.023"
    },
    {
        title: "The influence of visuospatial attention on unattended auditory 40 Hz responses",
        authors: "C Roth, CN Gupta, SM Plis et al.",
        journal: "Frontiers in human neuroscience",
        year: 2013,
        link: "https://doi.org/10.3389/fnhum.2013.00370"
    },
];

// Conference Publications
const conferencePubs = [
    {
        title: "Identifying Subgroups and Novel Brain-Behavior Associations in Adolescents Who were Born Very Preterm Using Bi-clustering Approaches",
        authors: "CN Gupta, L Hadaya and C Nosarti",
        journal: "2023 IEEE 20th India Council International Conference (INDICON), Hyderabad, India, Dec 2023, pp. 225-227",
        year: 2023,
        link: "https://doi.org/10.1109/INDICON59947.2023.10440727"
    },
    {
        title: "Low-Latency EEG Processing for Mobile Interfaces",
        authors: "A. Roy, R. Narayan",
        journal: "IEEE EMBC",
        year: 2021,
        link: "https://embc.embs.org/2022/papers/5678.pdf"
    },
];

// Utility: group publications by year
const groupByYear = (publications) => {
    return publications.reduce((acc, pub) => {
        if (!acc[pub.year]) acc[pub.year] = [];
        acc[pub.year].push(pub);
        return acc;
    }, {});
};

function Publications() {
    const journalByYear = groupByYear(journalPubs);
    const conferenceByYear = groupByYear(conferencePubs);

    const sortedJournalYears = Object.keys(journalByYear).sort((a, b) => b - a);
    const sortedConferenceYears = Object.keys(conferenceByYear).sort((a, b) => b - a);

    return (
        <div className="page publications-page">
            <h1>Publications</h1>

            {/* Journals */}
            <section>
                <h2>Journal Articles</h2>
                {sortedJournalYears.map((year) => (
                    <div key={year}>
                        <h3>{year}</h3>
                        <ul className="pub-list">
                            {journalByYear[year].map((pub, index) => (
                                <li key={index} className="pub-item">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                        {pub.title}
                                    </a>
                                    <div className="pub-meta">
                                        {pub.authors} — <i>{pub.journal}</i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Conferences */}
            <section>
                <h2>Conference Proceedings</h2>
                {sortedConferenceYears.map((year) => (
                    <div key={year}>
                        <h3>{year}</h3>
                        <ul className="pub-list">
                            {conferenceByYear[year].map((pub, index) => (
                                <li key={index} className="pub-item">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                        {pub.title}
                                    </a>
                                    <div className="pub-meta">
                                        {pub.authors} — <i>{pub.journal}</i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Publications;