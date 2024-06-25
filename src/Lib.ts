const getDefaultDocumentTypes = () => ([
    {
        type: 'ID',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'pdf', name: 'Document PDF417 Barcode', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'Passport',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'PassportCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'GreenCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        type: 'InternationalId',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'back', name: 'Document Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    }
])

export const getDefaultWebLibConfiguration = () => ({
    fixFrontOrientAfterUpload: true,
    useCDN: true,
    chunkPublicPath: 'https://localhost:5000/react/',
    networkUrl: 'https://localhost:5000/react/',
    el: "videoCapturingEl",
    isShowDocumentTypeSelect: false,
    isShowGuidelinesButton: false,
    resizeUploadedImage: 1500,
    autoContinue: true,
    realFaceMode: 'none',
    documentTypes: getDefaultDocumentTypes(),
    submit: (data: any) => {
        console.clear();
        alert('Check console for submitted data');
        console.log('submitted data', data);
    },
    onChange(data: any) {
        console.log('change')
        console.log(data)
    },
    licenseKey: process.env.NEXT_PUBLIC_LICENSE_KEY || ''
})
