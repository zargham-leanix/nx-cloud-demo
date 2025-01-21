import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo47Component } from './lib79-demo47.component';

describe('Lib79Demo47Component', () => {
  let component: Lib79Demo47Component;
  let fixture: ComponentFixture<Lib79Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
