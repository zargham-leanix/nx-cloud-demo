import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo21Component } from './lib97-demo21.component';

describe('Lib97Demo21Component', () => {
  let component: Lib97Demo21Component;
  let fixture: ComponentFixture<Lib97Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
