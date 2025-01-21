import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo13Component } from './lib55-demo13.component';

describe('Lib55Demo13Component', () => {
  let component: Lib55Demo13Component;
  let fixture: ComponentFixture<Lib55Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
