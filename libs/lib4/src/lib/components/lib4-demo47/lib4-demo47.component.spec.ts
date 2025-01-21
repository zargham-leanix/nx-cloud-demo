import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo47Component } from './lib4-demo47.component';

describe('Lib4Demo47Component', () => {
  let component: Lib4Demo47Component;
  let fixture: ComponentFixture<Lib4Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
