import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo47Component } from './lib33-demo47.component';

describe('Lib33Demo47Component', () => {
  let component: Lib33Demo47Component;
  let fixture: ComponentFixture<Lib33Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
