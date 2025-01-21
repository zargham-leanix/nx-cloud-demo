import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo21Component } from './lib51-demo21.component';

describe('Lib51Demo21Component', () => {
  let component: Lib51Demo21Component;
  let fixture: ComponentFixture<Lib51Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
