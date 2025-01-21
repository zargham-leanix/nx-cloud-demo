import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo42Component } from './lib49-demo42.component';

describe('Lib49Demo42Component', () => {
  let component: Lib49Demo42Component;
  let fixture: ComponentFixture<Lib49Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
