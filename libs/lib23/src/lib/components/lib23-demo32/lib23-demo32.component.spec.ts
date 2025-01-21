import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo32Component } from './lib23-demo32.component';

describe('Lib23Demo32Component', () => {
  let component: Lib23Demo32Component;
  let fixture: ComponentFixture<Lib23Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
