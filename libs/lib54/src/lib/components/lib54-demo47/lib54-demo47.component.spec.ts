import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo47Component } from './lib54-demo47.component';

describe('Lib54Demo47Component', () => {
  let component: Lib54Demo47Component;
  let fixture: ComponentFixture<Lib54Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
