import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo13Component } from './lib40-demo13.component';

describe('Lib40Demo13Component', () => {
  let component: Lib40Demo13Component;
  let fixture: ComponentFixture<Lib40Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
