import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo13Component } from './lib30-demo13.component';

describe('Lib30Demo13Component', () => {
  let component: Lib30Demo13Component;
  let fixture: ComponentFixture<Lib30Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
