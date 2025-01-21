import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo30Component } from './lib60-demo30.component';

describe('Lib60Demo30Component', () => {
  let component: Lib60Demo30Component;
  let fixture: ComponentFixture<Lib60Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
