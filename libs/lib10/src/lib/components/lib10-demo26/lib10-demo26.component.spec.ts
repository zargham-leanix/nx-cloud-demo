import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo26Component } from './lib10-demo26.component';

describe('Lib10Demo26Component', () => {
  let component: Lib10Demo26Component;
  let fixture: ComponentFixture<Lib10Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
