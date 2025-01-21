import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo13Component } from './lib24-demo13.component';

describe('Lib24Demo13Component', () => {
  let component: Lib24Demo13Component;
  let fixture: ComponentFixture<Lib24Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
