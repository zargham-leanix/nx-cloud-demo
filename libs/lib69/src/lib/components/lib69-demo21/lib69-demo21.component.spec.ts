import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo21Component } from './lib69-demo21.component';

describe('Lib69Demo21Component', () => {
  let component: Lib69Demo21Component;
  let fixture: ComponentFixture<Lib69Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
