import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo47Component } from './lib14-demo47.component';

describe('Lib14Demo47Component', () => {
  let component: Lib14Demo47Component;
  let fixture: ComponentFixture<Lib14Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
