import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo13Component } from './lib81-demo13.component';

describe('Lib81Demo13Component', () => {
  let component: Lib81Demo13Component;
  let fixture: ComponentFixture<Lib81Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
