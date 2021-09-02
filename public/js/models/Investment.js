var EventEmitter = require('events').EventEmitter;

var id = 1;

module.exports = class Investment {
  /**
   * @param {models.Round} round Investment's round
   * @param {number} money Investment amount (in currency)
   * @param {Object} [opts] like:
   *   [name]: {string} Investment name
   *   [liquidationPreference]: {number} 1x, 2x, etc
   *   [liquidationSeniority]: {number} Higher seniority gets money out first
   */
  constructor(round, money, opts={}) {
    if (!round)
      throw new Error('Round required!');

    // TODO: Specify an investment in terms of post-money percentage (changes round pre-money)

    this.id = id++;

    this.round = round;

    round._registerInvestment(this);

    this.name = opts.name || (money + ' investment from ' + round.name + ' round');
    this.liquidationPreference = opts.liquidationPreference || null;
    this.liquidationSeniority = opts.liquidationSeniority || null;

    this.money = money;
    this.equityStake = null; // to be calculated
  }




};
