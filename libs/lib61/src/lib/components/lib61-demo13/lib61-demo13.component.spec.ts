import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo13Component } from './lib61-demo13.component';

describe('Lib61Demo13Component', () => {
  let component: Lib61Demo13Component;
  let fixture: ComponentFixture<Lib61Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
