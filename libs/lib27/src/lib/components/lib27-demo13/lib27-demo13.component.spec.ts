import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo13Component } from './lib27-demo13.component';

describe('Lib27Demo13Component', () => {
  let component: Lib27Demo13Component;
  let fixture: ComponentFixture<Lib27Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
