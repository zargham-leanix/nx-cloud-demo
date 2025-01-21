import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo21Component } from './lib65-demo21.component';

describe('Lib65Demo21Component', () => {
  let component: Lib65Demo21Component;
  let fixture: ComponentFixture<Lib65Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
