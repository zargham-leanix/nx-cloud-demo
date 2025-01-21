import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo32Component } from './lib45-demo32.component';

describe('Lib45Demo32Component', () => {
  let component: Lib45Demo32Component;
  let fixture: ComponentFixture<Lib45Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
