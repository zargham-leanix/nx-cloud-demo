import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo45Component } from './lib79-demo45.component';

describe('Lib79Demo45Component', () => {
  let component: Lib79Demo45Component;
  let fixture: ComponentFixture<Lib79Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
