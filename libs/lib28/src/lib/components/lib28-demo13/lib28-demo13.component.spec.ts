import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo13Component } from './lib28-demo13.component';

describe('Lib28Demo13Component', () => {
  let component: Lib28Demo13Component;
  let fixture: ComponentFixture<Lib28Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
