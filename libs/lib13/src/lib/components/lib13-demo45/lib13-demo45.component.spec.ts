import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo45Component } from './lib13-demo45.component';

describe('Lib13Demo45Component', () => {
  let component: Lib13Demo45Component;
  let fixture: ComponentFixture<Lib13Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
