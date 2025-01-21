import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo47Component } from './lib21-demo47.component';

describe('Lib21Demo47Component', () => {
  let component: Lib21Demo47Component;
  let fixture: ComponentFixture<Lib21Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
