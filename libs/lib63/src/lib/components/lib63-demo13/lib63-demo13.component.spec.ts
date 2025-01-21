import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo13Component } from './lib63-demo13.component';

describe('Lib63Demo13Component', () => {
  let component: Lib63Demo13Component;
  let fixture: ComponentFixture<Lib63Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
