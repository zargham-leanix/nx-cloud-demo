import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo47Component } from './lib51-demo47.component';

describe('Lib51Demo47Component', () => {
  let component: Lib51Demo47Component;
  let fixture: ComponentFixture<Lib51Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
