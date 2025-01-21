import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo47Component } from './lib42-demo47.component';

describe('Lib42Demo47Component', () => {
  let component: Lib42Demo47Component;
  let fixture: ComponentFixture<Lib42Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
