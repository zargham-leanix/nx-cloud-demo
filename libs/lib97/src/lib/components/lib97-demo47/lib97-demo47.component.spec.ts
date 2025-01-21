import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo47Component } from './lib97-demo47.component';

describe('Lib97Demo47Component', () => {
  let component: Lib97Demo47Component;
  let fixture: ComponentFixture<Lib97Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
