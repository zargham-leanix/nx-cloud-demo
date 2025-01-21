import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo21Component } from './lib34-demo21.component';

describe('Lib34Demo21Component', () => {
  let component: Lib34Demo21Component;
  let fixture: ComponentFixture<Lib34Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
