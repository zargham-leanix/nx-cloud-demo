import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo13Component } from './lib25-demo13.component';

describe('Lib25Demo13Component', () => {
  let component: Lib25Demo13Component;
  let fixture: ComponentFixture<Lib25Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
