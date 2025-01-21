import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo3Component } from './lib23-demo3.component';

describe('Lib23Demo3Component', () => {
  let component: Lib23Demo3Component;
  let fixture: ComponentFixture<Lib23Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
