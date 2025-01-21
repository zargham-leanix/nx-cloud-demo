import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo13Component } from './lib49-demo13.component';

describe('Lib49Demo13Component', () => {
  let component: Lib49Demo13Component;
  let fixture: ComponentFixture<Lib49Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
