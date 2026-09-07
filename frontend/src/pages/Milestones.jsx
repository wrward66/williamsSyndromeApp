import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getMilestoneImage } from '../milestoneConfig';
import '../styles/Home.css';
export default function Milestones(){const [items,setItems]=useState([]);useEffect(()=>{fetch('http://127.0.0.1:8000/api/milestones/').then(r=>r.json()).then(setItems).catch(()=>{});},[]);return <Layout><main className="home-container"><h1 className="milestones-heading">The six major motor achievements</h1><p className="milestones-intro">Explore the developmental ranges and guidance for each achievement.</p><section className="milestone-cards milestone-page-cards">{items.map((m,i)=><Link className="milestone-card" to={`/milestone/${m.id}`} key={m.id}><img src={getMilestoneImage(m)} alt={m.milestone_display||m.name}/><b>{i+1}</b><h3>{m.milestone_display||m.name}</h3><span>View details →</span></Link>)}</section></main></Layout>}
