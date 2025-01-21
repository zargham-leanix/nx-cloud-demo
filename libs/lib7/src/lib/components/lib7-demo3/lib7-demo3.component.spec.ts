import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo3Component } from './lib7-demo3.component';

describe('Lib7Demo3Component', () => {
  let component: Lib7Demo3Component;
  let fixture: ComponentFixture<Lib7Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
