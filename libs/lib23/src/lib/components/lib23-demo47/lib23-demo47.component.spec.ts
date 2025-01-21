import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo47Component } from './lib23-demo47.component';

describe('Lib23Demo47Component', () => {
  let component: Lib23Demo47Component;
  let fixture: ComponentFixture<Lib23Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
