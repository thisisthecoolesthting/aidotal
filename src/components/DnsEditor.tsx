'use client';

import { useState } from 'react';
import styles from './DnsEditor.module.css';

interface DnsRecord {
  id: string;
  type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT' | 'CAA' | 'SRV';
  name: string;
  value: string;
  ttl: number;
}

interface AuditEntry {
  id: string;
  action: string;
  record: string;
  user: string;
  at: string;
}

const RECORD_TYPES = ['A', 'AAAA', 'CNAME', 'MX', 'TXT', 'CAA', 'SRV'] as const;
const TTL_OPTIONS = [300, 600, 1800, 3600, 86400];

function makeId() { return Math.random().toString(36).slice(2, 9); }

interface Props { domain: string }

export default function DnsEditor({ domain }: Props) {
  const [tab, setTab] = useState<'records' | 'templates' | 'health' | 'audit'>('records');
  const [records, setRecords] = useState<DnsRecord[]>([
    { id: makeId(), type: 'A', name: '@', value: '185.199.108.153', ttl: 3600 },
    { id: makeId(), type: 'AAAA', name: '@', value: '2606:50c0:8000::153', ttl: 3600 },
    { id: makeId(), type: 'CNAME', name: 'www', value: domain, ttl: 3600 },
    { id: makeId(), type: 'MX', name: '@', value: 'mail.protonmail.ch', ttl: 3600 },
    { id: makeId(), type: 'TXT', name: '@', value: 'v=spf1 include:_spf.protonmail.ch ~all', ttl: 3600 },
  ]);
  const [adding, setAdding] = useState(false);
  const [newRec, setNewRec] = useState<Omit<DnsRecord, 'id'>>({ type: 'A', name: '', value: '', ttl: 3600 });
  const [newRecErr, setNewRecErr] = useState('');
  const [showPublish, setShowPublish] = useState(false);
  const [published, setPublished] = useState(false);
  const [audit, setAudit] = useState<AuditEntry[]>([
    { id: makeId(), action: 'Created zone', record: `${domain}`, user: 'you', at: new Date(Date.now() - 3600000).toISOString() },
    { id: makeId(), action: 'Added A record', record: `@ → 185.199.108.153`, user: 'you', at: new Date(Date.now() - 1800000).toISOString() },
  ]);

  function addRecord() {
    if (!newRec.name.trim()) { setNewRecErr('Name is required'); return; }
    if (!newRec.value.trim()) { setNewRecErr('Value is required'); return; }
    const entry: DnsRecord = { ...newRec, id: makeId() };
    setRecords(r => [...r, entry]);
    setAudit(a => [{ id: makeId(), action: `Added ${entry.type} record`, record: `${entry.name} → ${entry.value}`, user: 'you', at: new Date().toISOString() }, ...a]);
    setAdding(false);
    setNewRec({ type: 'A', name: '', value: '', ttl: 3600 });
    setNewRecErr('');
  }

  function deleteRecord(id: string) {
    const rec = records.find(r => r.id === id);
    setRecords(r => r.filter(x => x.id !== id));
    if (rec) setAudit(a => [{ id: makeId(), action: `Deleted ${rec.type} record`, record: `${rec.name} → ${rec.value}`, user: 'you', at: new Date().toISOString() }, ...a]);
  }

  function applyTemplate(name: string) {
    let additions: DnsRecord[] = [];
    if (name === 'website') {
      additions = [
        { id: makeId(), type: 'A', name: '@', value: '185.199.108.153', ttl: 3600 },
        { id: makeId(), type: 'CNAME', name: 'www', value: domain, ttl: 3600 },
      ];
    } else if (name === 'email') {
      additions = [
        { id: makeId(), type: 'MX', name: '@', value: 'mail.protonmail.ch', ttl: 3600 },
        { id: makeId(), type: 'TXT', name: '@', value: 'v=spf1 include:_spf.protonmail.ch ~all', ttl: 3600 },
        { id: makeId(), type: 'TXT', name: '_dmarc', value: 'v=DMARC1; p=quarantine; rua=mailto:dmarc@' + domain, ttl: 3600 },
      ];
    } else {
      additions = [
        { id: makeId(), type: 'A', name: '@', value: '0.0.0.0', ttl: 3600 },
        { id: makeId(), type: 'AAAA', name: '@', value: '::', ttl: 3600 },
        { id: makeId(), type: 'MX', name: '@', value: 'mail.example.com', ttl: 3600 },
        { id: makeId(), type: 'TXT', name: '@', value: 'v=spf1 -all', ttl: 3600 },
      ];
    }
    setRecords(r => [...r, ...additions]);
    setAudit(a => [{ id: makeId(), action: `Applied template: ${name}`, record: `${additions.length} records added`, user: 'you', at: new Date().toISOString() }, ...a]);
    setTab('records');
  }

  function publish() {
    setPublished(true);
    setShowPublish(false);
    setAudit(a => [{ id: makeId(), action: 'Published changes', record: `${records.length} records live`, user: 'you', at: new Date().toISOString() }, ...a]);
    setTimeout(() => setPublished(false), 3000);
  }

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        <h2 className={styles.title}>{domain}</h2>
        {published && <span className={styles.publishedBadge}>Published</span>}
        <button className={styles.btnPublish} onClick={() => setShowPublish(true)} type="button">
          Publish changes
        </button>
      </div>

      <div className={styles.tabs} role="tablist">
        {(['records', 'templates', 'health', 'audit'] as const).map(t => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
            onClick={() => setTab(t)}
            type="button"
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'records' && (
        <div className={styles.panel} role="tabpanel">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Type</th><th>Name</th><th>Value</th><th>TTL</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map(r => (
                <tr key={r.id}>
                  <td><span className={styles.typeChip}>{r.type}</span></td>
                  <td className={styles.mono}>{r.name}</td>
                  <td className={`${styles.mono} ${styles.val}`}>{r.value}</td>
                  <td className={styles.mono}>{r.ttl}s</td>
                  <td>
                    <button className={styles.btnDelete} onClick={() => deleteRecord(r.id)} type="button" aria-label={`Delete ${r.type} record for ${r.name}`}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {adding && (
                <tr className={styles.addRow}>
                  <td>
                    <select className={styles.select} value={newRec.type} onChange={e => setNewRec(r => ({ ...r, type: e.target.value as DnsRecord['type'] }))}>
                      {RECORD_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </td>
                  <td>
                    <input className={styles.input} value={newRec.name} onChange={e => setNewRec(r => ({ ...r, name: e.target.value }))} placeholder="@" />
                  </td>
                  <td>
                    <input className={styles.input} value={newRec.value} onChange={e => setNewRec(r => ({ ...r, value: e.target.value }))} placeholder="Value" />
                  </td>
                  <td>
                    <select className={styles.select} value={newRec.ttl} onChange={e => setNewRec(r => ({ ...r, ttl: Number(e.target.value) }))}>
                      {TTL_OPTIONS.map(t => <option key={t} value={t}>{t}s</option>)}
                    </select>
                  </td>
                  <td className={styles.addActions}>
                    <button className={styles.btnAdd} onClick={addRecord} type="button">Add</button>
                    <button className={styles.btnCancel} onClick={() => { setAdding(false); setNewRecErr(''); }} type="button">Cancel</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {newRecErr && <p className={styles.err} role="alert">{newRecErr}</p>}
          {!adding && (
            <button className={styles.btnNewRecord} onClick={() => setAdding(true)} type="button">
              + Add record
            </button>
          )}
        </div>
      )}

      {tab === 'templates' && (
        <div className={styles.panel} role="tabpanel">
          <div className={styles.templateGrid}>
            {[
              { id: 'website', name: 'Website only', desc: 'A record + www CNAME. Points your domain at a web server.', records: ['A @ 185.199.108.153', 'CNAME www ' + domain] },
              { id: 'email', name: 'Website + Email', desc: 'Adds MX, SPF, and DMARC records on top of the website template.', records: ['MX @ mail.protonmail.ch', 'TXT @ v=spf1…', 'TXT _dmarc v=DMARC1…'] },
              { id: 'custom', name: 'Custom VPS', desc: 'Placeholder records for a self-managed server. Fill in your IP after applying.', records: ['A @ 0.0.0.0', 'AAAA @ ::', 'MX @ mail.example.com', 'TXT @ v=spf1 -all'] },
            ].map(tmpl => (
              <div key={tmpl.id} className={styles.templateCard}>
                <h3 className={styles.templateName}>{tmpl.name}</h3>
                <p className={styles.templateDesc}>{tmpl.desc}</p>
                <ul className={styles.templateRecords}>
                  {tmpl.records.map(r => <li key={r} className={styles.mono}>{r}</li>)}
                </ul>
                <button className={styles.btnTemplate} onClick={() => applyTemplate(tmpl.id)} type="button">
                  Apply template
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'health' && (
        <div className={styles.panel} role="tabpanel">
          <p className={styles.healthMeta}>Last checked: just now</p>
          <div className={styles.healthList}>
            {records.map(r => (
              <div key={r.id} className={styles.healthRow}>
                <span className={styles.healthDot} aria-hidden="true" />
                <span className={styles.typeChip}>{r.type}</span>
                <span className={styles.mono}>{r.name}</span>
                <span className={styles.healthStatus}>Resolving correctly</span>
              </div>
            ))}
            {records.length === 0 && <p className={styles.empty}>No records to check.</p>}
          </div>
        </div>
      )}

      {tab === 'audit' && (
        <div className={styles.panel} role="tabpanel">
          <table className={styles.table}>
            <thead>
              <tr><th>Action</th><th>Record</th><th>User</th><th>Time</th></tr>
            </thead>
            <tbody>
              {audit.map(e => (
                <tr key={e.id}>
                  <td>{e.action}</td>
                  <td className={styles.mono}>{e.record}</td>
                  <td>{e.user}</td>
                  <td className={styles.mono}>{new Date(e.at).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showPublish && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label="Publish changes">
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Publish changes</h3>
            <p className={styles.modalDesc}>The following {records.length} records will go live. DNS changes propagate within 5 minutes.</p>
            <div className={styles.diff}>
              {records.map(r => (
                <div key={r.id} className={styles.diffLine}>
                  <span className={styles.diffPlus}>+</span>
                  <span className={styles.typeChip}>{r.type}</span>
                  <span className={styles.mono}>{r.name} → {r.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.modalActions}>
              <button className={styles.btnPublishConfirm} onClick={publish} type="button">Publish now</button>
              <button className={styles.btnCancel} onClick={() => setShowPublish(false)} type="button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
