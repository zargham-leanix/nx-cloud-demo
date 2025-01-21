import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo13Component } from './lib29-demo13.component';

describe('Lib29Demo13Component', () => {
  let component: Lib29Demo13Component;
  let fixture: ComponentFixture<Lib29Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
