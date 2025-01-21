import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo13Component } from './lib54-demo13.component';

describe('Lib54Demo13Component', () => {
  let component: Lib54Demo13Component;
  let fixture: ComponentFixture<Lib54Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
