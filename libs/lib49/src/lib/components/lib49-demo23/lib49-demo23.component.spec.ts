import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo23Component } from './lib49-demo23.component';

describe('Lib49Demo23Component', () => {
  let component: Lib49Demo23Component;
  let fixture: ComponentFixture<Lib49Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
