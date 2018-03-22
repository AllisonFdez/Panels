'use strict';
const db = require('../models')

function getFrequencyPf (req,res) {
    console.log('GET /frequency')
    console.log('This:', req.query)
    db.sharkp_frequency_pfs.create({
        freq: req.query.freq,
        pf: req.query.pf,
    }).then((data) => {
        res.json(data);
    });
}

function getLineVoltagesPhases (req,res) {
    console.log('GET /line_voltages_phases')
    console.log('This:', req.query)
    db.sharkp_line_voltages_phases.create({
        vab: req.query.vab,
        pab: req.query.pab,
        vbc: req.query.vbc,
        pbc: req.query.pbc,
        vca: req.query.vca,
        pca: req.query.pca,
    }).then((data) => {
        res.json(data);
    });
}

function getCurrentsPhases (req,res) {
    console.log('GET /currents_phases')
    console.log('This:', req.query)
    db.sharkp_currents_phases.create({
        ca: req.query.ca,
        pa: req.query.pa,
        cb: req.query.cb,
        pb: req.query.pb,
        cc: req.query.cc,
        pc: req.query.pc,
    }).then((data) => {
        res.json(data);
    });
}

function getPhaseVoltages (req,res) {
    console.log('GET /phase_voltages')
    console.log('This:', req.query)
    db.sharkp_phase_voltages.create({
        va: req.query.va,
        vb: req.query.vb,
        vc: req.query.vc,
    }).then((data) => {
        res.json(data);
    });
}

function getPowers (req,res) {
    console.log('GET /powers')
    console.log('This:', req.query)
    db.sharkp_powers.create({
        watt: req.query.watt,
        var: req.query.var,
        vas: req.query.vas,
    }).then((data) => {
        res.json(data);
    });
}

function getEnergies (req,res) {
    console.log('GET /energies')
    console.log('This:', req.query)
    db.sharkp_energies.create({
        watth: req.query.watth,
        varh: req.query.varh,
        vash: req.query.vash,
    }).then((data) => {
        res.json(data);
    });
}

module.exports = {
    getFrequencyPf,
    getLineVoltagesPhases,
    getCurrentsPhases,
    getPhaseVoltages,
    getPowers,
    getEnergies
}