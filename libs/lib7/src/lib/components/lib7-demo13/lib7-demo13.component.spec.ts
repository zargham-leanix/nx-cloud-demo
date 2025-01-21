import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo13Component } from './lib7-demo13.component';

describe('Lib7Demo13Component', () => {
  let component: Lib7Demo13Component;
  let fixture: ComponentFixture<Lib7Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
