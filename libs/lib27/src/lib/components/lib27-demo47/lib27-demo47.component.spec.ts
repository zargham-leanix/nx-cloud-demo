import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo47Component } from './lib27-demo47.component';

describe('Lib27Demo47Component', () => {
  let component: Lib27Demo47Component;
  let fixture: ComponentFixture<Lib27Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
