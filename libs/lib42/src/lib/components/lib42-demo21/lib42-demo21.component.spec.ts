import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo21Component } from './lib42-demo21.component';

describe('Lib42Demo21Component', () => {
  let component: Lib42Demo21Component;
  let fixture: ComponentFixture<Lib42Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
