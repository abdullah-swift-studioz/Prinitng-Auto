'use client';

import { useEffect, useState, useRef } from 'react';
import { Printer, ArrowsClockwise, CurrencyDollar, FileText, CheckCircle, Clock, Warning, FilmStrip, Trash, UploadSimple } from 'phosphor-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface AdVideo {
    id: string;
    filename: string;
    originalname: string;
    size: number;
    uploadedAt: string;
}

export default function AdminDashboard() {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [approvingId, setApprovingId] = useState<number | null>(null);
    const [confirmId, setConfirmId] = useState<number | null>(null);

    // Ad videos state
    const [videos, setVideos] = useState<AdVideo[]>([]);
    const [videoUploading, setVideoUploading] = useState(false);
    const [deletingVideoId, setDeletingVideoId] = useState<string | null>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const [topUps, setTopUps] = useState<any[]>([]);

    const fetchVideos = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/videos`);
            if (res.ok) setVideos(await res.json());
        } catch { /* ignore */ }
    };

    const fetchTopUps = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/wallet/admin/topups`);
            if (res.ok) setTopUps(await res.json());
        } catch { /* ignore */ }
    };

    const approveTopUp = async (id: number) => {
        if (!confirm('Are you sure you verified this transfer?')) return;
        try {
            const res = await fetch(`${API_BASE}/api/wallet/admin/approve/${id}`, { method: 'POST' });
            if (res.ok) await fetchTopUps();
            else alert('Failed to approve top up');
        } catch { alert('Network error'); }
    };

    const rejectTopUp = async (id: number) => {
        if (!confirm('Reject this transfer?')) return;
        try {
            const res = await fetch(`${API_BASE}/api/wallet/admin/reject/${id}`, { method: 'POST' });
            if (res.ok) await fetchTopUps();
        } catch { alert('Network error'); }
    };

    const uploadVideo = async (file: File) => {
        setVideoUploading(true);
        try {
            const form = new FormData();
            form.append('video', file);
            const res = await fetch(`${API_BASE}/api/videos`, { method: 'POST', body: form });
            if (res.ok) await fetchVideos();
            else alert('Upload failed. Make sure the file is a valid video.');
        } catch {
            alert('Network error. Please try again.');
        } finally {
            setVideoUploading(false);
            if (videoInputRef.current) videoInputRef.current.value = '';
        }
    };

    const deleteVideo = async (id: string) => {
        setDeletingVideoId(id);
        try {
            const res = await fetch(`${API_BASE}/api/videos/${id}`, { method: 'DELETE' });
            if (res.ok) await fetchVideos();
        } catch { /* ignore */ } finally {
            setDeletingVideoId(null);
        }
    };

    const formatBytes = (bytes: number) => {
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/jobs`);
            const data = await res.json();
            setJobs(data.reverse());
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const approveJob = async (jobId: number) => {
        setApprovingId(jobId);
        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/approve`, { method: 'POST' });
            if (res.ok) {
                await fetchJobs();
            } else {
                const err = await res.json();
                alert(`Failed to approve: ${err.error}`);
            }
        } catch (err) {
            alert('Network error. Please try again.');
        } finally {
            setApprovingId(null);
            setConfirmId(null);
        }
    };

    useEffect(() => {
        fetchJobs();
        fetchVideos();
        fetchTopUps();

        const interval = setInterval(() => {
            fetchJobs();
            fetchTopUps();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const pendingJobs = jobs.filter(j => j.status === 'PENDING');
    const revenue = jobs.reduce((acc, job) =>
        acc + (['PAID', 'PRINTING', 'COMPLETED'].includes(job.status) ? job.totalPrice : 0), 0);
    const totalPages = jobs.reduce((acc, job) =>
        acc + (['PAID', 'PRINTING', 'COMPLETED'].includes(job.status) ? job.pageCount * job.copies : 0), 0);

    const statusBadge = (status: string) => {
        const styles: Record<string, string> = {
            COMPLETED: 'bg-green-100 text-green-800',
            PAID:      'bg-blue-100 text-blue-800',
            PRINTING:  'bg-yellow-100 text-yellow-800',
            PENDING:   'bg-gray-100 text-gray-600',
        };
        return styles[status] || 'bg-gray-100 text-gray-600';
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500">Monitor kiosks and transactions</p>
                    </div>
                    <button
                        onClick={fetchJobs}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 text-gray-700 font-medium border border-gray-200"
                    >
                        <ArrowsClockwise size={20} className={loading ? 'animate-spin' : ''} />
                        Refresh
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                            <Printer size={32} weight="duotone" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Jobs</p>
                            <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                        <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                            <CurrencyDollar size={32} weight="duotone" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">PKR {revenue}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                            <FileText size={32} weight="duotone" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pages Printed</p>
                            <p className="text-2xl font-bold text-gray-900">{totalPages}</p>
                        </div>
                    </div>
                    <div className={`p-6 rounded-2xl shadow-sm border flex items-center gap-4 ${pendingJobs.length > 0 ? 'bg-orange-50 border-orange-200' : 'bg-white border-gray-200'}`}>
                        <div className={`p-3 rounded-xl ${pendingJobs.length > 0 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                            <Clock size={32} weight="duotone" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pending Approval</p>
                            <p className={`text-2xl font-bold ${pendingJobs.length > 0 ? 'text-orange-600' : 'text-gray-900'}`}>
                                {pendingJobs.length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pending Approvals — only shown when there are pending jobs */}
                {pendingJobs.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-orange-200 overflow-hidden">
                        <div className="p-6 border-b border-orange-100 flex items-center gap-3">
                            <Warning size={22} weight="fill" className="text-orange-500" />
                            <h2 className="text-xl font-bold text-gray-800">Pending Manual Approval</h2>
                            <span className="ml-auto text-sm text-gray-500">
                                These jobs failed auto-verification. Review and approve if payment was received.
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-orange-50 text-gray-500 text-sm uppercase tracking-wider">
                                        <th className="px-6 py-4 font-semibold">Job ID</th>
                                        <th className="px-6 py-4 font-semibold">Account Title Entered</th>
                                        <th className="px-6 py-4 font-semibold">Amount</th>
                                        <th className="px-6 py-4 font-semibold">Details</th>
                                        <th className="px-6 py-4 font-semibold">Submitted</th>
                                        <th className="px-6 py-4 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-50">
                                    {pendingJobs.map((job) => (
                                        <tr key={job.id} className="hover:bg-orange-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">#{job.id}</td>
                                            <td className="px-6 py-4">
                                                {job.accountTitle
                                                    ? <span className="font-medium text-gray-800">{job.accountTitle}</span>
                                                    : <span className="text-gray-400 italic">Not yet attempted</span>
                                                }
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900">PKR {job.totalPrice}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {job.pageCount} pgs × {job.copies} copies
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 text-sm">
                                                {job.lastVerificationAttempt
                                                    ? new Date(job.lastVerificationAttempt).toLocaleTimeString()
                                                    : new Date(job.createdAt).toLocaleTimeString()
                                                }
                                            </td>
                                            <td className="px-6 py-4">
                                                {confirmId === job.id ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">Confirm?</span>
                                                        <button
                                                            onClick={() => approveJob(job.id)}
                                                            disabled={approvingId === job.id}
                                                            className="px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50"
                                                        >
                                                            {approvingId === job.id ? 'Approving...' : 'Yes, Approve'}
                                                        </button>
                                                        <button
                                                            onClick={() => setConfirmId(null)}
                                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => setConfirmId(job.id)}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg hover:bg-green-100 border border-green-200"
                                                    >
                                                        <CheckCircle size={16} weight="fill" />
                                                        Approve Payment
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* All Transactions */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800">All Transactions</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Job ID</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Account Title</th>
                                    <th className="px-6 py-4 font-semibold">Details</th>
                                    <th className="px-6 py-4 font-semibold">Amount</th>
                                    <th className="px-6 py-4 font-semibold">Time</th>
                                    <th className="px-6 py-4 font-semibold">Kiosk</th>
                                    <th className="px-6 py-4 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {jobs.map((job) => (
                                    <tr key={job.id} className={`hover:bg-gray-50 transition-colors ${job.status === 'PENDING' ? 'bg-orange-50/40' : ''}`}>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            #{job.id}
                                            {job.approvedByAdmin && (
                                                <span className="ml-2 text-xs text-purple-600 font-medium">(manual)</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge(job.status)}`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {job.accountTitle || <span className="text-gray-400">—</span>}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {job.pageCount} pgs × {job.copies} copies
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">PKR {job.totalPrice}</td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">
                                            {new Date(job.createdAt).toLocaleTimeString()}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">{job.kioskId}</td>
                                        <td className="px-6 py-4">
                                            {job.status === 'PENDING' && (
                                                confirmId === job.id ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">Confirm?</span>
                                                        <button
                                                            onClick={() => approveJob(job.id)}
                                                            disabled={approvingId === job.id}
                                                            className="px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 disabled:opacity-50"
                                                        >
                                                            {approvingId === job.id ? 'Approving...' : 'Yes'}
                                                        </button>
                                                        <button
                                                            onClick={() => setConfirmId(null)}
                                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200"
                                                        >
                                                            No
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => setConfirmId(job.id)}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-lg hover:bg-green-100 border border-green-200"
                                                    >
                                                        <CheckCircle size={16} weight="fill" />
                                                        Approve
                                                    </button>
                                                )
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {jobs.length === 0 && (
                                    <tr>
                                        <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                                            No transactions found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Ad Videos */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FilmStrip size={22} weight="duotone" className="text-indigo-500" />
                            <h2 className="text-xl font-bold text-gray-800">Kiosk Ad Videos</h2>
                            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                                {videos.length} video{videos.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div>
                            <input
                                ref={videoInputRef}
                                type="file"
                                accept="video/*"
                                className="hidden"
                                onChange={e => { if (e.target.files?.[0]) uploadVideo(e.target.files[0]); }}
                            />
                            <button
                                onClick={() => videoInputRef.current?.click()}
                                disabled={videoUploading}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                            >
                                <UploadSimple size={18} />
                                {videoUploading ? 'Uploading...' : 'Upload Video'}
                            </button>
                        </div>
                    </div>

                    {videos.length === 0 ? (
                        <div className="px-6 py-12 text-center">
                            <FilmStrip size={40} weight="duotone" className="text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium">No ad videos uploaded yet.</p>
                            <p className="text-gray-400 text-sm mt-1">
                                Uploaded videos will play on the kiosk display in a loop.
                            </p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {videos.map((video, idx) => (
                                <div key={video.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                                    {/* Order badge */}
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                                        {idx + 1}
                                    </span>

                                    {/* Video thumbnail preview */}
                                    <div className="flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden bg-gray-900 border border-gray-200">
                                        <video
                                            src={`${API_BASE}/uploads/videos/${video.filename}`}
                                            className="w-full h-full object-cover"
                                            muted
                                            preload="metadata"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{video.originalname}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {formatBytes(video.size)} &middot; Added {new Date(video.uploadedAt).toLocaleString()}
                                        </p>
                                    </div>

                                    {/* Delete */}
                                    <button
                                        onClick={() => deleteVideo(video.id)}
                                        disabled={deletingVideoId === video.id}
                                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 border border-transparent hover:border-red-200 disabled:opacity-50 transition-colors"
                                    >
                                        <Trash size={16} />
                                        {deletingVideoId === video.id ? 'Deleting…' : 'Delete'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Wallet Top-Ups */}
                <div className="bg-white rounded-2xl shadow-sm border border-emerald-200 overflow-hidden mt-8">
                    <div className="p-6 border-b border-emerald-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <CurrencyDollar size={22} weight="fill" className="text-emerald-500" />
                            <h2 className="text-xl font-bold text-gray-800">Pending Wallet Top-Ups</h2>
                            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                {topUps.length} pending
                            </span>
                        </div>
                        <button
                            onClick={fetchTopUps}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-gray-600 text-sm border font-medium hover:bg-gray-100"
                        >
                            Refresh
                        </button>
                    </div>

                    {topUps.length === 0 ? (
                        <div className="px-6 py-12 text-center text-gray-400">
                            No pending top-up requests.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-emerald-50 text-emerald-800 text-sm uppercase tracking-wider">
                                        <th className="px-6 py-4 font-semibold">User</th>
                                        <th className="px-6 py-4 font-semibold">Account Title</th>
                                        <th className="px-6 py-4 font-semibold">Amount</th>
                                        <th className="px-6 py-4 font-semibold">Submitted</th>
                                        <th className="px-6 py-4 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-emerald-50">
                                    {topUps.map((t) => (
                                        <tr key={t.id} className="hover:bg-emerald-50/30 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{t.user?.email}</td>
                                            <td className="px-6 py-4 font-medium text-gray-800">{t.nayapayAccountTitle}</td>
                                            <td className="px-6 py-4 font-bold text-emerald-600">PKR {t.amount}</td>
                                            <td className="px-6 py-4 text-gray-500 text-sm">{new Date(t.createdAt).toLocaleString()}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <button onClick={() => approveTopUp(t.id)} className="px-3 py-1 bg-green-600 text-white rounded font-medium text-sm hover:bg-green-700">Approve</button>
                                                    <button onClick={() => rejectTopUp(t.id)} className="px-3 py-1 bg-red-100 text-red-600 rounded font-medium text-sm hover:bg-red-200">Reject</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
