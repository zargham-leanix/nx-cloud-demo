import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo13Component } from './lib5-demo13.component';

describe('Lib5Demo13Component', () => {
  let component: Lib5Demo13Component;
  let fixture: ComponentFixture<Lib5Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
