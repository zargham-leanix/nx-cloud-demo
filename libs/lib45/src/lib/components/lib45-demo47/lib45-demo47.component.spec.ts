import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo47Component } from './lib45-demo47.component';

describe('Lib45Demo47Component', () => {
  let component: Lib45Demo47Component;
  let fixture: ComponentFixture<Lib45Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
