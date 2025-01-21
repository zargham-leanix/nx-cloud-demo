import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo13Component } from './lib21-demo13.component';

describe('Lib21Demo13Component', () => {
  let component: Lib21Demo13Component;
  let fixture: ComponentFixture<Lib21Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
