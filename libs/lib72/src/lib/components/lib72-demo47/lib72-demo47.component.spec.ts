import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo47Component } from './lib72-demo47.component';

describe('Lib72Demo47Component', () => {
  let component: Lib72Demo47Component;
  let fixture: ComponentFixture<Lib72Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
