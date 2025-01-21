import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo21Component } from './lib36-demo21.component';

describe('Lib36Demo21Component', () => {
  let component: Lib36Demo21Component;
  let fixture: ComponentFixture<Lib36Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
