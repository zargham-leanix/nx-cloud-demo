import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo13Component } from './lib76-demo13.component';

describe('Lib76Demo13Component', () => {
  let component: Lib76Demo13Component;
  let fixture: ComponentFixture<Lib76Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
