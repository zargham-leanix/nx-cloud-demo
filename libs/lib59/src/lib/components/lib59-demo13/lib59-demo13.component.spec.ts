import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo13Component } from './lib59-demo13.component';

describe('Lib59Demo13Component', () => {
  let component: Lib59Demo13Component;
  let fixture: ComponentFixture<Lib59Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
