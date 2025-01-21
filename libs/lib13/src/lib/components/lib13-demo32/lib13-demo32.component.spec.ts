import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo32Component } from './lib13-demo32.component';

describe('Lib13Demo32Component', () => {
  let component: Lib13Demo32Component;
  let fixture: ComponentFixture<Lib13Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
