import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo21Component } from './lib70-demo21.component';

describe('Lib70Demo21Component', () => {
  let component: Lib70Demo21Component;
  let fixture: ComponentFixture<Lib70Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
