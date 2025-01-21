import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo47Component } from './lib64-demo47.component';

describe('Lib64Demo47Component', () => {
  let component: Lib64Demo47Component;
  let fixture: ComponentFixture<Lib64Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
