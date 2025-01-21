import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo21Component } from './lib98-demo21.component';

describe('Lib98Demo21Component', () => {
  let component: Lib98Demo21Component;
  let fixture: ComponentFixture<Lib98Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
