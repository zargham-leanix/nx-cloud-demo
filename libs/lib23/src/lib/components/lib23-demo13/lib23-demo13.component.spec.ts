import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo13Component } from './lib23-demo13.component';

describe('Lib23Demo13Component', () => {
  let component: Lib23Demo13Component;
  let fixture: ComponentFixture<Lib23Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
