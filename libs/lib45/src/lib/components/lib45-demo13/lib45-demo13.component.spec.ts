import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo13Component } from './lib45-demo13.component';

describe('Lib45Demo13Component', () => {
  let component: Lib45Demo13Component;
  let fixture: ComponentFixture<Lib45Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
