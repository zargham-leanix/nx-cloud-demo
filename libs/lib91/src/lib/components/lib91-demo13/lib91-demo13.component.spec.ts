import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo13Component } from './lib91-demo13.component';

describe('Lib91Demo13Component', () => {
  let component: Lib91Demo13Component;
  let fixture: ComponentFixture<Lib91Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
