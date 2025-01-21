import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo43Component } from './lib49-demo43.component';

describe('Lib49Demo43Component', () => {
  let component: Lib49Demo43Component;
  let fixture: ComponentFixture<Lib49Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
