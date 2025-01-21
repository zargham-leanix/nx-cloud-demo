import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo13Component } from './lib85-demo13.component';

describe('Lib85Demo13Component', () => {
  let component: Lib85Demo13Component;
  let fixture: ComponentFixture<Lib85Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
