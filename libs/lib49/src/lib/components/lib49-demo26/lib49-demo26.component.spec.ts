import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo26Component } from './lib49-demo26.component';

describe('Lib49Demo26Component', () => {
  let component: Lib49Demo26Component;
  let fixture: ComponentFixture<Lib49Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
