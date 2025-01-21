import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo13Component } from './lib94-demo13.component';

describe('Lib94Demo13Component', () => {
  let component: Lib94Demo13Component;
  let fixture: ComponentFixture<Lib94Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
