import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo38Component } from './lib96-demo38.component';

describe('Lib96Demo38Component', () => {
  let component: Lib96Demo38Component;
  let fixture: ComponentFixture<Lib96Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
