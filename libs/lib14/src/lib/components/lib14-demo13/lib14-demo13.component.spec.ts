import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo13Component } from './lib14-demo13.component';

describe('Lib14Demo13Component', () => {
  let component: Lib14Demo13Component;
  let fixture: ComponentFixture<Lib14Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
