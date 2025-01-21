import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo45Component } from './lib96-demo45.component';

describe('Lib96Demo45Component', () => {
  let component: Lib96Demo45Component;
  let fixture: ComponentFixture<Lib96Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
